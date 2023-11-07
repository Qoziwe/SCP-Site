(function () {
  document.getElementById("password").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      var a = document.getElementById("password").value;
      var b = document.getElementById("login").value;
      if (a == "1539pcs85" || b == "001546875") {
        window.location.href = "../errorpage/loading.html";
      } else {
        location.reload();
        alert("Неправильный логин или пароль");
      }
    }
  });
})();
(function () {
  document.getElementById("login").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      var a = document.getElementById("password").value;
      var b = document.getElementById("login").value;
      if (a == "1539pcs85" || b == "001546875") {
        window.location.href = "../errorpage/loading.html";
      } else {
        location.reload();
        alert("Неправильный логин или пароль");
      }
    }
  });
})();

document.getElementById("butt").onclick = function () {
  var a = document.getElementById("password").value;
  var b = document.getElementById("login").value;
  if (a == "1539pcs85" || b == "001546875") {
    window.location.href = "../errorpage/loading.html";
  } else {
    location.reload();
    alert("Неправильный логин или пароль");
  }
};
document.oncontextmenu = cmenu;
function cmenu() {
  return false;
}
