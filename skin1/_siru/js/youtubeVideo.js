document.addEventListener('DOMContentLoaded', () => {
  try {
    if (!document.querySelector('.path')) {
      const youtubeVideoInfo = [
        {
          idx: 0,
          urlID: 'g7Del6ZW4u0?si=9pokrRhErS7ZoBOe',
          artistTitle: '카르마 달항아리',
          artist: '최영욱',
        },
        {
          idx: 1,
          urlID: 'L8DIwL4-BvI?si=AF8_tsvv4DF2n_Tk',
          artistTitle: '단색화의 거장',
          artist: '박서보',
        },
        {
          idx: 2,
          urlID: 'FGLtEV8lV5A?si=uy38qyq-Ma6Y7Xw0',
          artistTitle: '영국 힙한 할아버지',
          artist: '데이비드 호크니',
        },
        {
          idx: 3,
          urlID: 'SLxLMqJp190?si=_UHfgvGiHY2rmkeU',
          artistTitle: '가장 비싼 생존 작가',
          artist: '제프 쿤스',
        },
        {
          idx: 4,
          urlID: 'VmKpL1itDdU?si=HGzT21U7J0CtQyT3',
          artistTitle: '현대 미술의 천재',
          artist: '피카소',
        },
        {
          idx: 5,
          urlID: 'x4lyukR2D7U?si=SnIgmve1e4_24fsK',
          artistTitle: '위기 기회 그리고 수련',
          artist: '클로드 모네',
        },
        {
          idx: 6,
          urlID: 'w2Ks6b3zhCY?si=79rwB8MEjSHpeEKy',
          artistTitle: '31살에 요절한 과학적인',
          artist: '조르주 쇠라',
        },
        {
          idx: 7,
          urlID: 'SDQcQk0rcpY?si=18YvOb6EvGfeOaFX',
          artistTitle: '사과 받아주세요!!!',
          artist: '폴 세잔',
        },
        {
          idx: 8,
          urlID: 'QYkLAi29cMw?si=bpBydoS08dbGMcka',
          artistTitle: '점 하나만 찍어주세요',
          artist: '이우환',
        },
        {
          idx: 9,
          urlID: '8b8QgU9WsfM?si=ialLW7Oc6k0MgliN',
          artistTitle: '발레리나...좋아?',
          artist: '에드가 드가',
        },
      ];
      const youtubeVideoList = document.querySelector('.youtube-video-list');

      youtubeVideoInfo.forEach(e => {
        youtubeVideoList.insertAdjacentHTML(
          'beforeend',
          `
          
      <li class="swiper-slide">
        <div class="youtube-video-thumbnail" data-video-idx="${e.idx}">
          <img src="/SkinImg/img/youtube/${e.idx}.png" alt="${e.artist} thumbnail" />
        </div>
      </li>
    `,
        );
      });

      const videoItem = youtubeVideoList.querySelector('li');
      const videoThumbnailList = document.querySelectorAll('.youtube-video-thumbnail');
      const artistVideoModal = document.querySelector('.modal-artist-video');
      modalVideoClear = () => {
        artistVideoModal.querySelector('iframe').setAttribute('src', '');
      };
      Array.from(videoThumbnailList).forEach((e, i) => {
        e.addEventListener('click', event => {
          event.preventDefault();
          artistVideoModal.innerHTML = `
        <span class="close-modal">&times;</span>
        <iframe 
          id="ytplayer"
          type="text/html"
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/${youtubeVideoInfo[i].urlID}&amp;controls=0"
          title="YouTube video player" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      `;
          artistVideoModal.style.transform = `translate(-50%, ${window.scrollY}px)`;
          artistVideoModal.classList.add('on');
          document.body.style.overflow = 'hidden';

          const modalClose = document.querySelector('.close-modal');
          modalClose.addEventListener('click', event => {
            event.preventDefault();
            artistVideoModal.classList.remove('on');
            document.body.style.overflow = 'visible';
            modalVideoClear();
          });
          window.addEventListener('click', event => {
            // 모달 팝업 외부 클릭 시 이벤트 처리
            if (event.target == artistVideoModal) {
              artistVideoModal.classList.remove('on');
              document.body.style.overflow = 'visible';
              modalVideoClear();
            }
          });

          window.addEventListener('keydown', pressEsc, false);
          function pressEsc(e) {
            if (e.keyCode === 27) {
              if (artistVideoModal.classList.contains('on')) {
                artistVideoModal.classList.remove('on');
                if (document.body.style.overflow == 'hidden') {
                  document.body.style.overflow == 'visible';
                  modalVideoClear();
                }
              }
            }
          }
        });
      });

      const videoLeftArrow = document.querySelector('.video-direction-left');
      const videoRightArrow = document.querySelector('.video-direction-right');

      const videoItemWidth = Number(getComputedStyle(videoItem).getPropertyValue('width').split('px')[0]);
      const videoItemMarginRight = Number(getComputedStyle(videoItem).getPropertyValue('margin-right').split('px')[0]);
      const videoSlideList = youtubeVideoList.children;
      const oneMoving = videoItemWidth + videoItemMarginRight;
      const maximumRight = (videoSlideList.length - 3) * -oneMoving;
      let movingX = 0;
      videoRightArrow.addEventListener('click', event => {
        event.preventDefault();
        if (movingX > maximumRight) {
          movingX -= oneMoving;
          if (movingX === maximumRight) {
            videoRightArrow.classList.remove('active');
          }
        }
        if (movingX !== 0) {
          if (!videoLeftArrow.classList.contains('active')) {
            videoLeftArrow.classList.add('active');
          }
        }
        youtubeVideoList.style.transform = `translateX(${movingX}px)`;
      });
      videoLeftArrow.addEventListener('click', event => {
        event.preventDefault();
        if (movingX !== 0) {
          movingX += oneMoving;
          youtubeVideoList.style.transform = `translateX(${movingX}px)`;
          if (movingX === 0) {
            videoLeftArrow.classList.remove('active');
          }
        }
        if (movingX > maximumRight) {
          if (!videoRightArrow.classList.contains('active')) {
            videoRightArrow.classList.add('active');
          }
        }
      });
    }
  } catch (e) {}
});
