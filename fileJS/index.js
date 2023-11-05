const Nome = document.getElementById('nome');
const Cognome = document.getElementById('cognome');
const Birth = document.getElementById('date');
const Email = document.getElementById('email');
const textArea = document.getElementById('areaText');
const log = console.log;
let regVocali = /(a|e|i|o|u)/ig;

let CFsurname, CFname, CFbirth;

const findText = (a, b, c, d) => {
    let result;
    if ((a, b) === '') {
        alert('campi vuoti');
        Nome.focus();
    } else {
        let theEnd = makePass(a, b, c, d, result);
        textArea.innerHTML = theEnd;
    }
};

const makePass = (a, b, c, d, result) => {
    let reg = new RegExp("[-.,-]", "g");
    let result1;
    let string = (a + b + c + d).replaceAll(reg, '1');
    let lunghezza = 15;
    log(string);
    for (let i = 0; i < lunghezza; i++) {
        let index = Math.floor((Math.random() * string.length - 1) + 1);
        result += string[index];
        result1 = result.replaceAll(/undefined/ig, '');
    }
    log(result1);
    return result1;
}

const createCF = () => {
    let Name = Nome.value;
    let Surname = Cognome.value;
    let Birthday = Birth.value;
    let mesi = ['A, B, C, D, E, H, L, M, P, R, S, T'];
    let surnameLetter = splitWord(Surname);// ci siamo
    let nameLetter = replaceName(Name);
}

const splitWord = (word) => {
    let word1 = replaceWord(word);
    word1.forEach((el) => {
        el;
    })
    CFname = word1;
    return word1;
}

const replaceWord = (string) => {
    let change = string.replace(regVocali, '');
    let result = change.split('');
    log(result);
    return result;
}

const replaceName = (nome) => {
    let a, b, c, i;
    a = nome.replace(regVocali, '').split('');
    log(a) // funziona
    b += a.filter((x, y) => a.indexOf(x) === y);
    for (i = 0; i < 3; i++) {
        log(b[i]);
        return CFsurname += b[i];
    }


}

window.addEventListener('DOMContentLoaded', () => {
    Nome.focus();
    Email.addEventListener('focusout', () => {
        findText(Nome.value, Cognome.value, Birth.value, Email.value);
        createCF();
        log(CFname, CFsurname);

    });


});