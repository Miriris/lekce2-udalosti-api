// tady je místo pro náš program

console.log('Ahoj, jsem nalinkovan.');

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');
nadpis.classList.remove('zluty');


let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

let pocitadlo = 0;
function priNajetiNaCtverec() {
    console.log('test' + pocitadlo);
    pocitadlo++;
}

function zmenStyl() {
    nadpis.classList.toggle('zeleny');
}

function ztucni() {
    let pismo = document.querySelector('p.lev');
    pismo.classList.toggle('tucne');
}

function zmenBarvuPisma() {
    let barva = document.querySelector('p.lev');
    barva.classList.add('cervenePismo');

}

