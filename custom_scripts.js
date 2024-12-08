function breadcrumbs() {
   const placeholder = document.getElementsByClassName("breadcrumb")[0];
   const menue = placeholder.children;
   for (let i=0; i < menue.length; i++) {
      menue[i].className = "breadcrumb-item";
   }
}

function collapsibles() {
   const heads = document.getElementsByTagName("h1");
   let placeholder = '';
   
   for (let i=1; i < heads.length; i++) 
   {
      placeholder = "H" + String(i);
      const collapsible = heads[i].nextElementSibling;
      collapsible.id = placeholder;
      collapsible.className += " collapse";
      
      heads[i].outerHTML = '<a onclick="toggleHeadingArrow(event)" data-bs-toggle="collapse" data-bs-target="#' + placeholder + '">' + heads[i].outerHTML + '</a>';
      heads[i].innerHTML = '<i class="fa fa-angle-down"></i>' + heads[i].innerHTML;
   }
}

function contentWarning() {
   const cwar = document.getElementsByClassName("alert")[0];
   cwar.className = "alert text-bg-danger clearfix";
   cwar.setAttribute("data-bs-theme", "dark");
   cwar.innerHTML = '<i class="fa fa-exclamation-triangle"></i>' + cwar.innerHTML;
   const closebtn = cwar.getElementsByClassName("btn-close")[0];
   closebtn.setAttribute("data-bs-dismiss", "alert");
}

function icons() {
   const titularHeading = document.getElementById("hd");
   titularHeading.innerHTML += '<a href="#" class="disabled"><i class="fa fa-language"></i></a>';
}

function motesmodals() {
   const motes = document.getElementsByClassName("modal");
   const sups = document.querySelectorAll('a[data-bs-toggle="modal"]');
   let placeholder = "";
   for (let i=0; i < motes.length; i++) {
      motes[i].className += ' fade';
      motes[i].innerHTML = '<p><i class="fa fa-sticky-note-o me-1"></i>' + motes[i].innerHTML + '</p>';
      motes[i].innerHTML = '<div class="modal-dialog"><div class="modal-content"><div class="modal-body">' + motes[i].innerHTML + '</div></div></div>';
      placeholder = "motesmodal" + String(i+1);
      motes[i].id = placeholder;
      placeholder = "#" + placeholder;
      sups[i].setAttribute("href", "#");
      sups[i].setAttribute("data-bs-target", placeholder);
      sups[i].innerHTML = '<sup>' + String(i+1) + '</sup>';
   }
}

function scrollie() {
   window.scrollTo(0, 0);
}

function setDarkMode() {
   let theeme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
   document.documentElement.setAttribute('data-bs-theme', theeme);
}

function spoilerWarning() {
   const spar = document.getElementsByClassName("alert")[1];
   spar.className = "alert alert-warning clearfix";
   spar.innerHTML = '<i class="fa fa-exclamation-triangle"></i>' + spar.innerHTML;
   const closebtn = spar.getElementsByClassName("btn")[0];
   closebtn.setAttribute("data-bs-dismiss", "alert");
}

function tableHeadings() {
   const hdngs = document.getElementsByTagName("th");
   hdngs[0].id = "statBarHeading";
   for (let i=0; i < hdngs.length; i++) {
      hdngs[i].setAttribute("colspan", "2");
   }
}

function tableSpanClassSmalls() {
   const tables = document.getElementsByTagName("table");
   for (let i=0; i < tables.length; i++) {
      const spansies = tables[i].getElementsByTagName("span");
      for (let k=0; k < spansies.length; k++) {
         spansies[k].className += " small";
      }
   }
}

function toggleHeadingArrow(event) {
   var triggerHeading = event.currentTarget;
   var mid = triggerHeading.children[0];
   var icn = mid.children[0];
   const listy = icn.classList;
   var fst, snd;
   fst = snd = 'fa-angle-'
   if (listy.contains('fa-angle-down')) {
      fst += 'down';
      snd += 'up';
   }
   else {
      fst += 'up';
      snd += 'down';
   }
   listy.remove(fst);
   listy.add(snd);
}
