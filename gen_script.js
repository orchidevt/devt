function generateScrollie {
   const scrollie = document.createElement("a");
   scrollie.className = "btn btn-primary";
   scrollie.setAttribute("onclick", "scrollie()");
   scrollie.innerHTML = '<i class="fa fa-arrow-up"></i>';
   document.body.appendChild(scrollie);
}

function generateHeader() {
   const placeholder = document.getElementsByClassName("breadcrumb")[0];
   const menue = placeholder.children;
   for (let i=0; i < menue.length; i++) {
      menue[i].className = "breadcrumb-item";
   }
}
   
function generateFooter() {
   const foot = document.createElement("footer");
   foot.innerHTML = '<i class="fas fa-copyright"></i>all rights reserved · <a href="mailto:simplelogin-newsletter.grandson898@simplelogin.com">contact</a>';
   document.body.appendChild(foot);
}

function generateSpoilers() {
   const spoilers= document.getElementsByClassName("spoiler");
   for (let i=0; i < spoilers.length; i++) {
      spoilers[i].className += " small";
      spoilers[i].setAttribute("data-bs-toggle", "collapse");
      const ref = spoilers[i].getAttribute("href");
      spoilers[i].removeAttribute("href");
      spoilers[i].setAttribute("data-bs-target", ref);
   }
}

function generateContentWarning() {
   const cwar = document.getElementsByClassName("cwar")[0];
   cwar.className = "alert text-bg-danger clearfix";
   cwar.setAttribute("data-bs-theme", "dark");
   cwar.innerHTML = '<i class="fa fa-exclamation-triangle"></i>' + cwar.innerHTML;
   const closebtn = cwar.getElementsByClassName("btn-close")[0];
   closebtn.setAttribute("data-bs-dismiss", "alert");
}

function generateSpoilerWarning() {
   const spwar = document.getElementsByClassName("spwar")[0];
   spwar.className = "alert alert-danger";
   spwar.setAttribute("data-bs-theme", "dark");
   spwar.innerHTML = '<i class="fa fa-exclamation-triangle"></i>' + spwar.innerHTML;
   const closebtn = spwar.getElementsByClassName("btn")[0];
   closebtn.setAttribute("data-bs-dismiss", "alert");
   spwar.outerHTML += '<div>';
}

function generateToasts() {
   const toasties = document.getElementsByClassName("toast");
   for (let i=0; i < toasties.length; i++) {
      toasties[i].className += " show";
      toasties[i].children[0].innerHTML = '<strong>' + toasties[i].children[0].innerHTML + '</strong><button type="button" class="btn-close" data-bs-dismiss="toast"</button>';
   }
}

function generateStatBar() {
   const statbar = document.getElementsByTagName("table")[0];
   const placeholder = statbar.children[0];
   const hdng = placeholder.children[0];
   hdng.id = "statBarHeading";
   const headings = statbar.getElementsByTagName("th");
   for (let i=0; i < headings.length; i++) {
      headings[i].setAttribute("colspan", "2");
   }
   headings[1].className = "p-0";
}

function generateLeisureBars() {
   const bars = document.getElementsByTagName("table")[1];
   const hdngs = bars.getElementsByTagName("th");
   for (let i=1; i < hdngs.length; i++) {
      hdngs[i].setAttribute("colspan", "2");
   }
}

function generateTableSpanClassSmalls() {
   const tables = document.getElementsByTagName("tables");
   for (let i=0; i < tables.length; i++) {
      const spansies = tables[i].getElementsByTagName("span");
      for (let k=0; k < spansies.length; k++) {
         spansies[k].className = "small";
      }
   }
}


