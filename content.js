let injection = '(' + function() {
	let urlithing = document.querySelector('meta[property="og:url"]')['content'];
	console.log(urlithing);
	let div = document.createElement('div');
	let p = document.createElement('p');
	let a = document.createElement('a');
	a.innerHTML = '↺'; 
	a.href = urlithing;
	p.appendChild(a);
	div.appendChild(p);
	document.getElementsByClassName("clips-edit-top-nav")[0].appendChild(div);
	} + ')();';
let script = document.createElement("script");
script.innerHTML = injection;
document.head.appendChild(script);
script.remove();
