// tady je místo pro náš program

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

let zvetsPismo = 16;

function zvetsOPixel() {
  document.querySelector('p.lev').style.fontSize = zvetsPismo + 1 + 'px';
  zvetsPismo = zvetsPismo + 1;
}

let audioFile = document.getElementById('zvukovaStopa');
//console.log(audioFile.duration); - chtěla jsem nastavit délku, ale nefunguje na náš soubor

function startAudio() {
  audioFile.play();
  console.log('Zapínám píseň...');
}

function pauzniAudio() {
  audioFile.pause();
  console.log('Zastavuji píseň...');
}

function ztisAudio() {
  audioFile.volume = 0.1;
  console.log('Ztišuji píseň...');
}

function normalAudio() {
  audioFile.volume = 0.5;
  console.log('Nastavuji normální hlasitost písně...');
}

function maxAudio() {
  audioFile.volume = 1.0;
  console.log('Nastavuji maximální hlasitost písně...');
}

function nastavAudioNaZacatek() {
  audioFile.currentTime = 0;
  audioFile.play();
  console.log('Nastavuji píseň na začátek...');
}

function nastavAudioDoprostred() {
  audioFile.currentTime = 36;
  audioFile.play();
  console.log('Nastavuji píseň doprostřed...');
}

function nastavAudioNaKonec() {
  audioFile.currentTime = 72;
  console.log('Nastavuji píseň na konec...');
}
