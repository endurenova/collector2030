window.addEventListener('beforeunload', function () {
  window.scrollTo(0, 0);
});
window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.intro-section')) {
    document.body.style.overflowY = 'hidden';
  }
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let logoTopSize = 0;
  let logoBottomSize = 0;
  let viewBoxH = 0;

  const intro = document.querySelector('.parallax-element.title');
  const subTitle = document.querySelector('.sub-title');
  checkDevice = () => {
    if (windowWidth >= windowHeight) {
      logoTopSize = windowWidth / 25;
      logoBottomSize = windowWidth / 39.5;
      if (windowWidth >= windowHeight * 2) {
        viewBoxH = windowHeight * 0.4;
      } else {
        viewBoxH = windowHeight * 0.3;
      }

      if (document.body.classList.contains('column')) {
        document.body.classList.remove('column');
      }
    } else if (windowWidth < windowHeight) {
      logoTopSize = windowWidth / 3;
      logoBottomSize = windowWidth / 4.74;
      if (windowHeight > windowWidth * 2) {
        viewBoxH = windowHeight;
      } else {
        viewBoxH = windowHeight * 1.2;
      }
      if (!document.body.classList.contains('column')) {
        document.body.classList.add('column');
      }
    }
    setTimeout(() => {
      intro.innerHTML = `
          <svg class="logo" viewBox="0 0 1320 ${viewBoxH}">
            <text style='font-size: ${logoTopSize}px;' class='collector-t'x="50%" y="27%" dy="${logoTopSize * 0.96}px" text-anchor="middle">Collector</text>
            <text style='font-size: ${logoBottomSize}px;' class='collector-b'x="50%" y="52%" dy="${logoBottomSize * 0.96}px" text-anchor="middle">2 0 3 0</text>
          </svg>
        `;
    }, 1000);
    setTimeout(() => {
      subTitle.classList.add('active');
      document.body.style.overflowY = 'auto';
    }, 3000);
  };

  checkDevice();

  window.addEventListener('resize', function () {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    checkDevice();
  });
  window.addEventListener('scroll', function () {
    // 스크롤 이벤트 리스너 등록
    const sections = document.querySelector('.intro-section'); // 모든 섹션을 가져옴

    const background = sections.querySelector('.background'); // 배경 요소
    const title = sections.querySelector('.title'); // 제목 요소
    const gisterUFO = sections.querySelector('.gister-UFO');
    const gistarUFO = sections.querySelector('.gistar-UFO');

    const scrolled = window.scrollY; // 윈도우의 스크롤값

    console.log('scrollY : ' + scrolled);
    if (scrolled != 0) {
      if (!subTitle.classList.contains('unactive')) {
        subTitle.classList.add('unactive');
        subTitle.classList.remove('active');
      }
    } else {
      if (!subTitle.classList.contains('active')) {
        subTitle.classList.remove('unactive');
        subTitle.classList.add('active');
      }
    }
    background.style.transform = `translateY(${scrolled * 0.8}px)`;
    // 제목을 스크롤 속도의 80%(빠르게)로 이동
    title.style.transform = `scale(${1 + scrolled * 0.01}) translateY(-50%)`;
    // 배경을 스크롤 속도의 30%(느리게)로 이동
    gisterUFO.style.transform = `translate(${scrolled * 0.5}px, ${scrolled * 0.5}px)`;
    // circle 왼쪽에서 오른쪽으로 이동
    gistarUFO.style.transform = `translate(${scrolled * -0.5}px, ${scrolled * 0.5}px)`;
    // square 오른쪽에서 왼쪽으로 이동z
  });

  setTimeout(() => {
    document.body.style.overflowY = 'auto';
  }, 3000);
});
