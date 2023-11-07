// const log = console.log;

const makePass = (a, b, c, d, result) => {
    let reg = new RegExp("[-.,-]", "g");
    let result1;
    let string = (a + b + c + d).replaceAll(reg, '1');
    let lunghezza = 15;
    for (let i = 0; i < lunghezza; i++) {
        let index = Math.floor((Math.random() * string.length - 1) + 1);
        if (i === 0) {
            result += string[index].toUpperCase();
        }
        result += string[index];
        result1 = result.replaceAll(/undefined/ig, '');
    }
    
    return result1;
}

const findText = (a, b, c, d, textArea) => {
    let result;
    if ((a, b) === '') {
        alert('campi vuoti');
        Nome.focus();
    } else {
        let theEnd = makePass(a, b, c, d, result);
        textArea.innerHTML = theEnd;
    }
};

export {findText};