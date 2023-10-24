"use strict";
let body = document.querySelector("body");
let newElem;
let firstSymbol;

const DomElement = function (selector, height, width, bg, fontsize) {
  selector = this.selector;
  height = this.height;
  width = this.width;
  bg = this.bg;
  fontsize = this.fontsize;
};

DomElement.prototype.createNewElement = function () {
  if (firstSymbol === ".") {
    newElem = document.createElement("div");
    body.appendChild(newElem);
    console.log(newElem);
  } else if (firstSymbol === "#") {
    newElem = document.createElement("p");
    body.appendChild(newElem);
    console.log(newElem);
  }
};

DomElement.prototype.asking = function () {
  DomElement.selector = prompt("Какой элемент вы хотите создать?");
  // DomElement.height = prompt("Какая высота?");
  // DomElement.width = prompt("Какая ширина?");
  // DomElement.bg = prompt("Какой цвет?");
  // DomElement.fontsize = prompt("Какой размер шрифта?");
};

DomElement.prototype.firstSymbol = function () {
  firstSymbol = DomElement.selector.split("")[0];
};

DomElement.prototype.asking();
DomElement.prototype.firstSymbol();
DomElement.prototype.createNewElement();
