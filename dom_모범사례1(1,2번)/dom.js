// DOM 플로우 1번
window.onload = function () {
  const textOnload = document.getElementById("text_onload");
  textOnload.innerText = "글씨가 변경되었습니다.";
};

// DOM 플로우 2번
const $tab = document.getElementsByClassName("tab");
const fontcolor = ["red", "orange", "yellow", "green", "blue"];
let hover = true;

function color() {
  for (let i = 0; i < $tab.length; i++) {
    $tab[i].addEventListener("mouseenter", function () {
      if (hover === true) {
        $tab[i].style.color = fontcolor[i];
        $tab[i].style.backgroundColor = "black";
        hover = false;
        return hover;
      } else {
        $tab[i].style.color = "black";
        $tab[i].style.backgroundColor = "white";
        hover = true;
        return hover;
      }
    });
  }
}

color();

// DOM 플로우 3번
const $block = document.getElementsByClassName("block");

function display() {
  for (let i = 0; i < $tab.length; i++) {
    // 첫 번째 for문 >> i번째 tab를 클릭하면
    $tab[i].addEventListener("click", function () {
      for (let j = 0; j < $block.length; j++) {
        if (!$block[j].textContent.includes($tab[i].textContent)) {
          // 만약 $block[j]번째 요소의 텍스트에 $tab[i]의 텍스트가 포함되어 있지 않다면
          $block[j].style.display = "none";
          // 해당 $block[j]번째 요소의 display 속성을 "none"으로 변경
        }
      }
    });
  }
}

display();
