// animation scroll left to right & right to let
const observer =new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.add('show-1');
      
    } else {
      entry.target.classList.remove('show');
      entry.target.classList.remove('show-1');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden')
const anuElements = document.querySelectorAll('.anu')
hiddenElements.forEach((el) => observer.observe(el));
anuElements.forEach((el) => observer.observe(el));

// animation scroll up
window.addEventListener("scroll", muncul);

function muncul(){
  let elements = document.querySelectorAll(".about");
  for (let i = 0; i < elements.length; i++){

    let tinggiLayar = window.innerHeight;
    let jarakAtasElement = elements[i].getBoundingClientRect().top;
    let ukuranScroll = 150;

    if(jarakAtasElement < tinggiLayar - ukuranScroll) {
      elements[i].classList.add("tampil");
    }
    else {
      elements[i].classList.remove("tampil");
    }
  }
}

// video
  const video = document.getElementById('video');
  const thumbnail = document.getElementById('thumbnail');


  // Mengatur posisi ulang video ke awal
  function resetVideo() {
    video.currentTime = 0;
    thumbnail.style.display = 'block';
    video.style.display = 'none';
  }

  // Menampilkan video dan menyembunyikan thumbnail
  function playVideo() {
    thumbnail.style.display = 'none';
    video.style.display = 'block';
    video.play();
  }

  // Menambahkan event listener untuk saat video berakhir
  video.addEventListener('ended', resetVideo);

  // Menambahkan event listener untuk saat thumbnail diklik
  thumbnail.addEventListener('click', playVideo);


