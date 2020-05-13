// Manipulate DOM HTML


window.onscroll = function() {scrollFunction(), numberFunction(), halamanBlog()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("navbar").style.backgroundColor = "#130947";
      document.getElementById("navbar").style.transition = "0.3s";
    } else {
      document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
      document.getElementById("navbar").style.transition = "0.3s";
    }
}

function halamanBlog(){
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("nav").style.backgroundColor = "#130947";
    document.getElementById("nav").style.transition = "0.3s";
  } else {
    document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("nav").style.transition = "0.3s";
  }
}

function dropdown_burger(){

  if(document.getElementById("burger-dropdown").getAttribute("class") == "dropdown-burger"){
    document.getElementById("burger-dropdown").setAttribute("class","dropdown-burgeractive");
  }
  else{
    document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  }
}
  
function tampilVideo(){
  document.getElementById("thisModal").style.display = "block";
}

function closeVideo(){
  var modalIni = document.getElementById("thisModal");
  modalIni.style.display = "none";
  stopVideo(modalIni)
}

function stopVideo(modal){
  var videoIframe = modal.querySelector("iframe");
  videoIframe.src = videoIframe.src  
}


// Scroll into view
function berandascroll(){
  var br = document.getElementById("halamanberanda");
  document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  br.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "start"
  });
}


function statistikascroll(){
  var elemen = document.getElementById("halamanstatistik");
  document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  elemen.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "start"
  });
}

function covidscroll(){
  var cv = document.getElementById("halamancovid");
  document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  cv.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "start"
  });
}

function pencegahanscroll(){
  var pc = document.getElementById("halamanpencegahan");
  document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  pc.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "start"
  });
}

function dokterscroll(){
  var dk = document.getElementById("halamandokter");
  document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  dk.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "start"
  });
}

function ciriciriscroll(){
  var cr = document.getElementById("halamanciri-ciri");
  document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  cr.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "start"
  });
}

function blogscroll(){
  var bl = document.getElementById("halamanblog");
  document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  bl.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "start"
  });
}

function tentangscroll(){
  var tt = document.getElementById("halamantentang");
  document.getElementById("burger-dropdown").setAttribute("class","dropdown-burger");
  tt.scrollIntoView({
    behavior: "smooth",
    inline : "center",
    block : "start"
  });
}


//Ambil data dari API
// request data ke URL
const url = 'https://api.kawalcorona.com/indonesia/';
fetch(url)
  // Ubah data ke json
  .then(function(res) { res.json()})
   // dapet data ysng siap digunakan
   .then(function(data) { console.log(data) })

   .catch(function(error) {
    console.log(error);
  });  





function numberFunction(){
  if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
    animateValue("yellow", 0, 2000, 2000);
    animateValue("green",0,200,2000);
    animateValue("red",0,20,2000);

    numberFunction = function (){};
  }
}



//
function animateValue(id, waktumulai, waktuakhir, duration) {
  
  var obj = document.getElementById(id);
  var range = waktuakhir - waktumulai;
  var minTimer = 50;
  var stepTime = Math.abs(Math.floor(duration / range));
  stepTime = Math.max(stepTime, minTimer);
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
      var sekarang = new Date().getTime();
      var sisa = Math.max((endTime - sekarang) / duration, 0);
      var value = Math.round(waktuakhir - (sisa * range));
      obj.innerHTML = value;
      if (value == waktuakhir) {
          clearInterval(timer);
      }
  }
  
  timer = setInterval(run, stepTime);
  run();
}


function besarGambar(gambar){
  gambar.style.height = "54px";
  gambar.style.width = "54px";
  gambar.transform =  "scale(1.5)"; 
}

function kecilGambar(gambar){
  gambar.style.height = "32px";
  gambar.style.width = "32px";
  gambar.transform =  "scale(1)"; 
}