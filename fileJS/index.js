import { findText } from "../fileJS/reusableFunc.js";

const Nome = document.getElementById('nome');
const Cognome = document.getElementById('cognome');
const Birth = document.getElementById('date');
const Email = document.getElementById('email');
const textArea = document.getElementById('areaText');

window.addEventListener('DOMContentLoaded', () => {
    Nome.focus();
    Email.addEventListener('focusout', () => {
        findText(Nome.value, Cognome.value, Birth.value, Email.value, textArea);
    });
});
