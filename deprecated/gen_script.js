function generateMe() {
   var lable = document.getElementById("lable");
   const contenties = lable.innerHTML;
   const headsies = '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport", content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Neucha"><link rel="stylesheet" href="https://orchidevt.github.io/devt/stylesheet.css"><script src="https://orchidevt.github.io/devt/custom_scripts.js"></script></head><body onload="setDarkMode()">';
   const butt = '</body></html>';
   const resultsies = headsies.concat(contenties, butt);
   lable.innerText = resultsies;
}
