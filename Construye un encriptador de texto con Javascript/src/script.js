const enter = "enter";
const imes = "imes";
const ai = "ai";
const ober = "ober";
const ufat = "ufat";
const resultado = document.getElementById("output");

function vowelReplacement(vowelText) {
 let vowel = vowelText
  .replace(/e/g, enter)
  .replace(/i/g, imes)
  .replace(/a/g, ai)
  .replace(/o/g, ober)
  .replace(/u/g, ufat);
 return vowel;
}

function wordReplacement(wordText) {
 let word = wordText
  .replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u");
 return word;
}

function encriptar() {
 const text = document.getElementById("input").value;
 if (text.trim() === "") {
  alert("Por favor, ingrese un texto para encriptar.");
  return;
 }
 const encryptedText = vowelReplacement(text);
 resultado.innerText = encryptedText;

 document.getElementById("copy").removeAttribute("hidden");
 document.querySelector(".button-container").style.display = "none";

 eraseTextInput();

 return;
}

function desencriptar() {
 const text = document.getElementById("input").value;
 if (text.trim() === "") {
  alert("Por favor, ingrese un texto para encriptar.");
  return;
 }
 const decryptedText = wordReplacement(text);
 resultado.innerText = decryptedText;

 document.getElementById("copy").removeAttribute("hidden");
 document.querySelector(".button-container").style.display = "none";

 eraseTextInput();

 return;
}

function copiar() {
 const copyText = resultado.value;
 resultado.select();
 navigator.clipboard.writeText(copyText);
 window.getSelection().removeAllRanges();
 document.querySelector(".button-container").style.display = "block";

 eraseTextOutput();
}

function eraseTextInput() {
 document.getElementById("input").value = "";
 return;
}

function eraseTextOutput() {
 resultado.innerText = "";
 return;
}
