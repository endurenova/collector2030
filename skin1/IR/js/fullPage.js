new fullpage("#fullpage", {
  // options here
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  loopTop: false, // 첫번째 구역에서 스크롤을 위로 올릴 때 마지막 구역으로 이동할지 여부를 정의합니다.
  loopBottom: false, //마지막 구역에서 스크롤을 아래로 내릴 때 첫번째 구역으로 이동할지 여부를 정의합니다.
  navigation: true,
  navigationPosition: "right",
});
const headerBar = document.querySelector("#header");
let prevScrollpos = 0;
window.addEventListener("scroll", (event) => {
  event.preventDefault();
  const currentScrollPos = window.scrollY;
  if (prevScrollpos < currentScrollPos) {
    headerBar.classList.add("hidden");
  } else {
    headerBar.classList.remove("hidden");
  }

  prevScrollpos = currentScrollPos;
  console.log(window.scrollY);
});
checkDevice = () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  if (windowWidth >= windowHeight) {
    if (document.body.classList.contains("column")) {
      document.body.classList.remove("column");
    }
  } else if (windowWidth < windowHeight) {
    if (!document.body.classList.contains("column")) {
      document.body.classList.add("column");
    }
  }
};
checkDevice();

window.addEventListener("resize", function () {
  checkDevice();
});
