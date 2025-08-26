function collapsibles() {
   const heads = document.getElementsByTagName("h1");
   let placeholder = '';
   
   for (let i=0; i < heads.length; i++) 
   {
      placeholder = "H" + String(i);
      const collapsible = heads[i].nextElementSibling;
      collapsible.id = placeholder;
      collapsible.className += " collapse";
      
      heads[i].outerHTML = '<a onclick="toggleHeadingArrow(event)" data-bs-toggle="collapse" data-bs-target="#' + placeholder + '">' + heads[i].outerHTML + '</a>';
      heads[i].innerHTML = '<i class="fa fa-angle-down"></i>' + heads[i].innerHTML;
   }
}

function scrollie() {
   window.scrollTo(0, 0);
}

function scrollBot() {
   window.scrollTo(0, document.body.scrollHeight);
}

function setDarkMode() {
   let theeme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
   document.documentElement.setAttribute('data-bs-theme', theeme);
}

function showText(event) {
   var toggler = event.currentTarget;
   toggler.innerText = (toggler.innerText == "[ show ]") ? "[ hide ]": "[ show ]";
}

function themeToggler(theme) {
   var styleShit = document.getElementsByTagName("style")[0];
   if (styleShit) {
      var styleText = styleShit.innerText;
      var splitShit = styleText.split(";");
      splitShit = splitShit[0].split("/");
      var oldTheme = splitShit[5].slice(0, -6);
      styleShit.innerText = styleShit.innerText.replace(oldTheme, theme);
   }
   else {
      const newStyleShit = document.createElement("style");
      newStyleShit.innerText = '@import url("https://orchidevt.github.io/devt/themes/' + theme + '.css");';
      document.head.appendChild(newStyleShit);
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
