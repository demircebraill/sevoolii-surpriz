let step = 0;

const messages = [
  "Merhaba Şevvooliii babbba",
  "Bunu uzaktan okuyorsun ama ben bunu düşünerek yaptım 💭",
  "Bazen küçük şeyler büyük gülümsemeler yaratır",
  "Sen de öyle birisin 🌼",
  "Hazırsan bir şey var daha var..."
];

function nextMessage() {
  if (step < messages.length) {
    document.getElementById("text").innerText = messages[step];
    step++;
  } else {
    document.querySelector(".container").style.display = "none";
    document.getElementById("finalScreen").style.display = "flex";
  }
}

/* EVET / HAYIR OYUNU */
let noCount = 0;

function no() {
  const question = document.getElementById("question");
  const noBtn = document.getElementById("noBtn");

  noCount++;

  // İlk 3 tık normal
  if (noCount <= 3) {
    const texts = [
      "Emin misin? 🤔",
      "Bi daha düşün la😌",
      "Bak kalbim kırılıyor hee 💔"
    ];
    question.innerText = texts[noCount - 1];
  }
  // Sonraki tıklarda buton kaçar
  else if (noCount <= 7) {
    question.innerText = "Hadi ama… yakalayabilirsen 😄";

    const x = Math.floor(Math.random() * 120) - 60;
    const y = Math.floor(Math.random() * 120) - 60;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
  // En sonunda tamamen kilitlenir
  else {
    question.innerText = "Tamam tamam… başka şansın yok 😌";
    noBtn.style.display = "none";
  }
}

function yes() {
  const question = document.getElementById("question");
  question.innerText = "Ben de özledim aq yalan mı söyleyelim💙";

  document.querySelector(".buttons").style.display = "none";
}
