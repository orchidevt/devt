function scrollie() {
   window.scrollTo(0, 0);
}

function setDarkMode() {
   let theeme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
   document.documentElement.setAttribute('data-bs-theme', theeme);
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
