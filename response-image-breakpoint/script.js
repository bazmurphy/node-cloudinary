const windowWidth = document.getElementById("window-width");
const imageCurrentSource = document.getElementById("image-current-source");
const image = document.getElementById("image");

const formatCurrentSrc = (string) => {
  return string.split("/").splice(-1);
}

windowWidth.innerText = `Window Width: ${window.innerWidth}px`
imageCurrentSource.innerText = `Current Image Source: ${formatCurrentSrc(image.currentSrc)}`

window.addEventListener("resize", () => {
  windowWidth.innerText = `Window Width: ${window.innerWidth}px`
  imageCurrentSource.innerText = `Current Image Source: ${formatCurrentSrc(image.currentSrc)}`
});

