let interval = null;

$("#btnrandom").click(function () {
  // random();
  if (interval == null) {
    interval = setInterval(() => {
      random();
    }, 100);
  }

  setTimeout(() => {
    clearInterval(interval);
    interval = null;
  }, 1500);
});

let kiper = null;
let pinggir = null;
let tengah = null;

function random() {
  if (kiper != null) {
    $("#k" + kiper).toggleClass("bg-black text-white");
  }
  if (pinggir != null) {
    $("#" + pinggir).toggleClass("bg-black text-white");
  }
  if (tengah != null) {
    $("#" + tengah).toggleClass("bg-black text-white");
  }
  kiper = Math.floor(Math.random() * 3 + 1);
  pinggir = Math.floor(Math.random() * 6 + 1);
  tengah = Math.floor(Math.random() * 2 + 7);

  console.log(kiper, pinggir, tengah);

  $("#kiper").text(kiper);
  $("#pinggir").text(pinggir);
  $("#tengah").text(tengah);

  $("#k" + kiper).toggleClass("bg-black text-white");
  $("#" + pinggir).toggleClass("bg-black text-white");
  $("#" + tengah).toggleClass("bg-black text-white");
}
