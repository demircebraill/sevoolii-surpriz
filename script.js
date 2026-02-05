let step = 0;

const messages = [
  "Merhaba Şevoolii 😊",
  "Baba uzaktan okuyorsun ama ben bunu seni düşünerek yaptım 💭",
  "Bazen küçük şeyler büyük gülümsemeler yaratır",
  "Sen de öyle birisin 🌼",
  "Hazırsan son bir şey var..."
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

/* EVET / HAYIR MANTIĞI */
let noCount = 0;

function no() {
  const question = document.getElementById("question");

  const noMessages = [
    "Emin misin? 🤔",
    "Bir daha düşün bence 😌",
    "Bak kalbim kırılıyor 💔",
    "Hadi babbaaa biraz bile özlemedin mi?",
    "Son kararın mı la harbiden?"
  ];

  question.innerText = noMessages[noCount % noMessages.length];
  noCount++;
}

function yes() {
  const question = document.getElementById("question");
  question.innerText = "Ben de özledim 💙";

  document.querySelector(".buttons").style.display = "none";
}
