let eleBtnStart = document.querySelector("#start");
let eleBtnReset = document.querySelector("#reset");
let eleTimer = document.querySelector(".timer-utama");


let timeTicker = (() => {
  var hours = minutes = seconds = 0;
  var timerTick;
  return {
    start: () => {
      if (!timerTick) {
        timerTick = setInterval(() => {
          seconds++;
          if (seconds == 60) {
            minutes += 1;
            seconds = 0;
            if (minutes == 60) {
              hours += 1;
              minutes = 0;
            }
          }
          eleTimer.innerHTML = `
            ${hours.toString().length == 1 ? "0" + hours : hours}
            : ${minutes.toString().length == 1 ? "0" + minutes : minutes}
            : ${seconds.toString().length == 1 ? "0" + seconds : seconds}`;

        }, 25);
      }
    },



    stop: () => {
      if (timerTick) {
        clearInterval(timerTick);
        timerTick = false;
      }
    },

    selesai1: () => {
      timer1.innerHTML = `${hours} : ${minutes} : ${seconds}`;
      document.getElementById("selesai1").disabled = true;
    },

    selesai2: () => {
      timer2.innerHTML = `${hours} : ${minutes} : ${seconds}`;
      document.getElementById("selesai2").disabled = true;
    },
    
    selesai3: () => {
      timer3.innerHTML = `${hours} : ${minutes} : ${seconds}`;
      document.getElementById("selesai3").disabled = true;
    },

    selesai4: () => {
      timer4.innerHTML = `${hours} : ${minutes} : ${seconds}`;
      document.getElementById("selesai4").disabled = true;
    },

    selesai5: () => {
      timer5.innerHTML = `${hours} : ${minutes} : ${seconds}`;
      document.getElementById("selesai5").disabled = true;
    },

    selesai6: () => {
      timer6.innerHTML = `${hours} : ${minutes} : ${seconds}`;
      document.getElementById("selesai6").disabled = true;
    },

    selesai7: () => {
      timer7.innerHTML = `${hours} : ${minutes} : ${seconds}`;
      document.getElementById("selesai7").disabled = true;
    },

    selesai8: () => {
      timer8.innerHTML = `${hours} : ${minutes} : ${seconds}`;
      document.getElementById("selesai8").disabled = true;
    },

    reset: () => {
      seconds = minutes = hours = 0;
      clearInterval(timerTick);
      timerTick = false;
      eleTimer.innerHTML = `<br />0${hours} : 0${minutes} : 0${seconds}`;
      document.location.reload(true);
    }
  }
})();


eleBtnStart.addEventListener('click', () => {
  timeTicker.start();
});

selesai1.addEventListener('click', () => {
  timeTicker.selesai1();
});

selesai2.addEventListener('click', () => {
  timeTicker.selesai2();
});

selesai3.addEventListener('click', () => {
  timeTicker.selesai3();
});

selesai4.addEventListener('click', () => {
  timeTicker.selesai4();
});

selesai5.addEventListener('click', () => {
  timeTicker.selesai5();
});

selesai6.addEventListener('click', () => {
  timeTicker.selesai6();
});

selesai7.addEventListener('click', () => {
  timeTicker.selesai7();
});

selesai8.addEventListener('click', () => {
  timeTicker.selesai8();
});

eleBtnReset.addEventListener('click', () => {
  timeTicker.reset();
})


//jam
window.setTimeout("waktu()", 1000);
function waktu() {
  var tanggal = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById("jam").innerHTML = tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds();
}

// Bella Namira Syaidatulnissa
// 4D TIF
// 3201916007

