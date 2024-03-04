const enter = 'enter'
const imes = 'imes'
const ai = 'ai'
const ober = 'ober'
const ufat = 'ufat'
const copyText = document.getElementById('output')

function vowelReplacement (vowelText) {
 let vowel = vowelText
    .replace(/e/g, enter)
    .replace(/i/g, imes)
    .replace(/a/g, ai)
    .replace(/o/g, ober) 
    .replace(/u/g, ufat);
 return vowel;
}

function wordReplacement (wordText) {
  let word = wordText
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  return word;

}

function encriptar() {
  const text = document.getElementById('input').value;
  const encryptedText = vowelReplacement(text);
  document.getElementById('output').innerText = encryptedText;
  eraseText();
  return;

}

function desencriptar(textoEncriptado) { 
 const text = document.getElementById('input').value;
 const decryptedText = wordReplacement(text);
 document.getElementById('output').innerText = decryptedText;
 eraseText();
 return;
}

function copiar(text) {
  copyText.value = text;
  eraseTextOutput();
  return;
}

function eraseText() {
  document.getElementById('input').value = '';
  return;

}

function eraseTextOutput() {
 copyText.value = '';
 return;
}


encriptar();
desencriptar();