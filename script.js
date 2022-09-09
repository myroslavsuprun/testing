const imgLoad = document.querySelectorAll("img[data-srcg]");

imgLoad.forEach((img) => {
  img.addEventListener("load", onLoadChange, { once: true });
});

function onLoadChange(e) {
  e.target.classList.add("appear");
}
