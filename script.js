"use strict";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    let body = document.querySelector("body");
    let newElem;
    let firstSymbol;
    let classOrId;

    const DomElement = function (selector, height, width, bg, fontsize) {
      selector = this.selector;
      height = this.height;
      width = this.width;
      bg = this.bg;
      fontsize = this.fontsize;
      text = this.text;
    };

    DomElement.prototype.createNewElement = function () {
      if (firstSymbol === ".") {
        newElem = document.createElement("div");
        newElem.classList.add(classOrId);
        newElem.style.cssText =
          "height: " +
          this.height +
          "; width: " +
          this.width +
          "; background-color: " +
          this.bg +
          "; font-size: " +
          this.fontsize +
          ";" +
          "position: absolute;";
        body.appendChild(newElem);
      } else if (firstSymbol === "#") {
        newElem = document.createElement("p");
        newElem.id = classOrId;
        newElem.style.cssText =
          "height: " +
          this.height +
          "; width: " +
          this.width +
          "; background-color: " +
          this.bg +
          "; font-size: " +
          this.fontsize +
          ";" +
          "position: absolute;";
        body.appendChild(newElem);
      }
    };

    DomElement.prototype.addText = function () {
      newElem.innerHTML = this.text;
    };

    DomElement.prototype.getClassOrId = function () {
      classOrId = this.selector.substring(1);
      console.log(classOrId);
    };

    DomElement.prototype.asking = function () {
      this.selector = prompt("Какой элемент вы хотите создать?");
      this.height = prompt("Какая высота?");
      this.width = prompt("Какая ширина?");
      this.bg = prompt("Какой цвет?");
      this.fontsize = prompt("Какой размер шрифта?");
      this.text = prompt(
        "введите текст, который появится внутри этого элемента"
      );
    };

    DomElement.prototype.firstSymbol = function () {
      firstSymbol = this.selector.split("")[0];
    };

    DomElement.prototype.start = function () {
      DomElement.prototype.asking();
      DomElement.prototype.firstSymbol();
      DomElement.prototype.getClassOrId();
      DomElement.prototype.createNewElement();
      DomElement.prototype.addText();
    };

    DomElement.prototype.start();
  },
  false
);
