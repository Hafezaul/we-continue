const message = `Aku menyadari masih banyak kekurangan dalam diriku kepadamu, untuk itu aku memohon maaf dengan sungguh-sungguh. Segala rasa kasih dan cintaku untukmu, aku berharap di tahun yang baru ini kita dapat terus belajar bersama, saling menjaga, dan melangkah berdampingan hingga nanti, dalam keadaan apa pun. 
Dari hatiku, seluruh hatiku untuk Enggi Auliya
`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 200);
      }
    }

    typeWriter();
  }, 600);
}

// music player 

const btn = document.getElementById("playBtn");
const audio = document.getElementById("bgm");

btn.addEventListener("click", () => {
    audio.play();
    btn.remove();
});
