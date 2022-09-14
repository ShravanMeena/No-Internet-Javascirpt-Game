var hero = document.getElementById("hero");
var villain = document.getElementById("villain");

var counter = 0;
function jump() {
  if (hero.classList == "animate") {
    return;
  }
  hero.classList.add("animate");
  setTimeout(function () {
    hero.classList.remove("animate");
  }, 500);
}
var checkDead = setInterval(function () {
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
  let villainLeft = parseInt(
    window.getComputedStyle(villain).getPropertyValue("left")
  );
  if (villainLeft < 25 && villainLeft > -25 && heroTop >= 130) {
    villain.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    counter = 0;
    villain.style.animation = "villain 2s infinite linear";
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
