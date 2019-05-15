let elt = document.createElement("script");
elt.innerHTML = `var urlithing = document.querySelector('meta[property=\"og:url\"]')['content'];
console.log(urlithing);
let d = document.createElement('div');
let p = document.createElement('p');
let a = document.createElement('a');
a.innerHTML = "↺"; 
a.href = urlithing;
p.appendChild(a);
d.appendChild(p);
document.getElementsByClassName(\"clips-edit-top-nav\")[0].appendChild(d);`;
document.head.appendChild(elt);


