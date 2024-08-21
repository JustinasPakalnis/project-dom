import { capitalize } from "./capitalize.js";
// susirandi DOMinanti elementa
// Perskaitai jame esancia INFO

// susirandi DOMinanti elementa
// Susikonstruoji nauja HTML (string)
// HTML istatai i norima vieta ir taip gauni nauja naujus elementus

// susirandi DOMinanti elementa
//Ir ji arba jame esanti turini pasalini arba modofikuoji
//CRUD Create, Read, Update, Delete

const homeDOM = document.getElementById("home");
console.log(homeDOM);
const footerDOM = document.getElementById("main_footer");
console.log(footerDOM);
const linkDOM = document.getElementsByTagName("a");
console.log(linkDOM);
const h1DOM = document.getElementsByTagName("H1");
console.log(h1DOM);
console.log(h1DOM[0]);
console.log(h1DOM[1]);
console.log(document.getElementsByClassName("red"));
console.clear();

const sectionTitleDOM = document.getElementsByClassName("section-title");
console.log(sectionTitleDOM);
console.log(sectionTitleDOM.length);

console.log(sectionTitleDOM[0].textContent);
console.log(sectionTitleDOM[0].innerText);
const text1 = sectionTitleDOM[0].textContent;
const text2 = sectionTitleDOM[0].innerText;
console.log(text1);
console.log(text2);
console.log(text1.trim() === text2);
// for (let i = 0; i < sectionTitleDOM.length; i++) {
//   console.log(i, sectionTitleDOM[i]);
// }
for (const titleDOM of sectionTitleDOM) {
  titleDOM.textContent = capitalize(titleDOM.textContent);
}

/**
 * Dvieju skaiciu suma
 * @param {number} a Pirmasis demuo
 * @param {number} b Antrasis demuo
 * @returns {number} Suma
 */
function sum(a, b) {
  return a + b;
}
