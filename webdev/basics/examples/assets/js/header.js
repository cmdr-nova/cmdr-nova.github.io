fetch('/webdev/basics/examples/header.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#header");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})