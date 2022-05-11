//REFERENCE
const ref1 = document.querySelector("#ref1");
const ref2 = document.querySelector("#ref2");

//CANVAS
const canvas = document.querySelector("#canvas");
const canvas2 = document.querySelector("#canvas2");
const context = canvas.getContext("2d");
const context2 = canvas2.getContext("2d");
const imagObj = new Image();
const imaObj2 = new Image();


function img(imagePath) {
  imagObj.src = imagePath.imageFront;
  imaObj2.src = imagePath.imageRear;
  ref1.innerText = imagePath.ref1;
  ref2.innerText = imagePath.ref2;

  imagObj.onload = () => {
    context.drawImage(imagObj, 0, 0, 600, 400);
  }
  imaObj2.onload = () => {
    context2.drawImage(imaObj2, 0, 0, 600, 400);
  }

}
