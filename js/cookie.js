// create default for expiration of cookies we create
Cookies.defaults = {
  expires: Infinity
};

var sCount = 0;
$("#eat-sugar").click(function() {
  sCount += 1;
  Cookies.set("sugarCount", sCount);
  updateSugarCount();
});

var lCount = 0;
$("#eat-lemon").click(function() {
  lCount += 1;
  Cookies.set("lemonCount", lCount);
  updateLemonCount();
});

var cCount = parseInt(Cookies.get("chocolateCount"));
$("#eat-chocolate").click(function() {
  cCount += 1;
  Cookies.set("chocolateCount", cCount);
  updateChocolateCount();
});

function updateSugarCount() {
  var chocolate = Cookies.get("sugarCount");
  if (chocolate) {
    document.getElementById("sugar-count").innerText = chocolate;
  }
}

function updateLemonCount() {
  var lemon = Cookies.get("lemonCount");
  if (lemon) {
    document.getElementById("lemon-count").innerText = lemon;
  }
}

function updateChocolateCount() {
  var chocolate = Cookies.get("chocolateCount");
  if (chocolate) {
    document.getElementById("chocolate-count").innerText = chocolate;
  }
}

updateLemonCount();
updateSugarCount();
updateChocolateCount();

$("#clearSugar").click(function() {
  Cookies.set("sugarCount", 0);
  updateSugarCount();
});

$("#clearLemon").click(function() {
  Cookies.set("lemonCount", 0);
  updateLemonCount();
});

$("#clearChocolate").click(function() {
  Cookies.set("chocolateCount", 0);
  updateChocolateCount();
});
