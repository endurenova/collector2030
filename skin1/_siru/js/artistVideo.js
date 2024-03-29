document.addEventListener('DOMContentLoaded', () => {
  try {
    if (!document.querySelector('.path')) {
      const artistVideoInfo = [
        {
          idx: 0,
          url: 'https://player.vimeo.com/video/879491362',
          thumbnail: 'barry_mcgee_thumbnail.png',
          artistKorean: '배리 맥기',
          artist: 'Barry McGee',
          artistImg: 'barry_mcgee_description.jpg',
        },
        {
          idx: 1,
          url: 'https://player.vimeo.com/video/873231146',
          thumbnail: 'james_jean_thumbnail.png',
          artistKorean: '제임스 진',
          artist: 'James Jean',
          artistImg: 'james_jean_description.jpg',
        },
        {
          idx: 2,
          url: 'https://player.vimeo.com/video/862469222',
          thumbnail: 'jr_thumbnail.png',
          artistKorean: '제이알',
          artist: 'JR',
          artistImg: 'jr_description.png',
        },
        {
          idx: 3,
          url: 'https://player.vimeo.com/video/859331318',
          thumbnail: 'dmitri_cherniak_thumbnail.png',
          artistKorean: '드미트리 체르니아크',
          artist: 'Dmitri Cherniak',
          artistImg: 'dmitri_cherniak_description.jpg',
        },
        {
          idx: 4,
          url: 'https://player.vimeo.com/video/825026618',
          thumbnail: 'jose_parla_thumbnail.png',
          artistKorean: '호세 팔라',
          artist: 'José Parlá',
          artistImg: 'jose_parla_description.png',
        },
        {
          idx: 5,
          url: 'https://player.vimeo.com/video/820578708',
          thumbnail: 'ai_weiwei_thumbnail.png',
          artistKorean: '아이 웨이웨이',
          artist: 'Ai Weiwei',
          artistImg: 'ai_weiwei_description.jpg',
        },
      ];

      const artistVideoList = document.querySelector('.artist-video-list');

      artistVideoInfo.forEach(e => {
        artistVideoList.insertAdjacentHTML(
          'beforeend',
          `
      <li class="swiper-slide">
        <div class="artist-video-thumbnail" data-video-idx="${e.idx}">
          <img src="/SkinImg/img/${e.thumbnail}" alt="${e.artist} thumbnail" />
          <span class="play_btn material-symbols-outlined"> play_circle </span>
        </div>
        <div class="artist-video-description">
          <img src="/SkinImg/img/${e.artistImg}" alt="${e.artist} image" />
          <a href="javascript:void(0);" class="artist_name">
            <span>${e.artistKorean}</span>
            <span>${e.artist}</span>
          </a>
        </div>
      </li>
    `,
        );
      });

      const videoItem = artistVideoList.querySelector('li');
      const videoThumbnailList = document.querySelectorAll('.artist-video-thumbnail');
      const artistVideoModal = document.querySelector('.modal-artist-video');
      modalVideoClear = () => {
        artistVideoModal.querySelector('iframe').setAttribute('src', '');
      };
      Array.from(videoThumbnailList).forEach((e, i) => {
        e.addEventListener('click', event => {
          event.preventDefault();
          artistVideoModal.innerHTML = `
        <span class="close-modal">&times;</span>
        <iframe src="${artistVideoInfo[i].url}?embedparameter=value&autoplay=1&loop=1&autopause=0"  frameborder="0" allowfullscreen></iframe>
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
      const videoSlideList = artistVideoList.children;
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
        artistVideoList.style.transform = `translateX(${movingX}px)`;
      });
      videoLeftArrow.addEventListener('click', event => {
        event.preventDefault();
        if (movingX !== 0) {
          movingX += oneMoving;
          artistVideoList.style.transform = `translateX(${movingX}px)`;
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
