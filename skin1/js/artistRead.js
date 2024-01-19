document.addEventListener('DOMContentLoaded', () => {
  const checkArtistRead = document.querySelector('.path li strong');
  try {
    if (checkArtistRead.textContent == '작가 소개') {
      // css/module/board/readPackage.css
      const artistThumbnail = document.querySelector('.xans-board-read .ec-base-table .detail');
      const contentsBox = document.querySelector('.fr-view-article');
      const artistTitle = contentsBox.querySelector('p:nth-of-type(1)');
      artistThumbnail.classList.add('read-artist');
      artistTitle.classList.add('read-artist__title');

      contentsBox.querySelector('.fr-fic').closest('p').classList.add('hidden');
      contentsBox.insertAdjacentHTML(
        'beforeend',
        `
        <div class='read-artist__slide__section'>
          <div class="artist-video-direction">
            <span class="artist-work video-direction-left material-symbols-outlined"> arrow_circle_left </span>
            <span class="artist-work video-direction-right material-symbols-outlined active"> arrow_circle_right </span>
          </div>
          <div class="read-artist__slide-box">
            <ul class="read-artist__slide-list">
            </ul>
          </div>
        </div>
        `,
      );

      const imgBox = contentsBox.querySelector('.read-artist__slide-box');
      const imgSlide = contentsBox.querySelector('.read-artist__slide-list');
      const imgList = contentsBox.querySelectorAll('.fr-fic');
      imgList.forEach((e, i) => {
        imgSlide.insertAdjacentHTML(
          'beforeend',
          `
            <li style="list-style: none !important;">
              <img src="${e.getAttribute('src')}" alt="artist-works-img-${i}" />
            </li>
          `,
        );
      });

      let imgListLocation = 0;
      const imgItem = imgSlide.querySelector('li');
      const videoLeftArrow = document.querySelector('.video-direction-left');
      const videoRightArrow = document.querySelector('.video-direction-right');
      checkArrowAbled = (listWidth, marginRight) => {
        if (imgListLocation == 0) {
          if (videoLeftArrow.classList.contains('active')) {
            videoLeftArrow.classList.remove('active');
          }
        } else {
          if (!videoLeftArrow.classList.contains('active')) {
            videoLeftArrow.classList.add('active');
          }
        }
        if (imgListLocation == listWidth + marginRight) {
          if (videoRightArrow.classList.contains('active')) {
            videoRightArrow.classList.remove('active');
          }
        } else {
          if (!videoRightArrow.classList.contains('active')) {
            videoRightArrow.classList.add('active');
          }
        }
      };
      const artistWorkLeftBtn = document.querySelector('.artist-work.video-direction-left');
      const artistWorkrightBtn = document.querySelector('.artist-work.video-direction-right');

      const imgItemWidth = Number(getComputedStyle(imgItem).getPropertyValue('width').split('px')[0]);
      const imgItemMarginRight = Number(getComputedStyle(imgItem).getPropertyValue('margin-right').split('px')[0]);
      const imgSlideList = imgSlide.children;
      const oneMoving = imgItemWidth + imgItemMarginRight;
      const maximumRight = (imgSlideList.length - 3) * -oneMoving;
      let movingX = 0;
      if (maximumRight === 0) {
        artistWorkLeftBtn.classList.remove('active');
        artistWorkrightBtn.classList.remove('active');
      }
      artistWorkrightBtn.addEventListener('click', event => {
        event.preventDefault();
        if (movingX > maximumRight) {
          movingX -= oneMoving;
          if (movingX === maximumRight) {
            artistWorkrightBtn.classList.remove('active');
          }
        }
        if (movingX !== 0) {
          if (!artistWorkLeftBtn.classList.contains('active')) {
            artistWorkLeftBtn.classList.add('active');
          }
        }
        imgSlide.style.transform = `translateX(${movingX}px)`;
      });
      artistWorkLeftBtn.addEventListener('click', event => {
        event.preventDefault();
        if (movingX !== 0) {
          movingX += oneMoving;
          imgSlide.style.transform = `translateX(${movingX}px)`;
          if (movingX === 0) {
            artistWorkLeftBtn.classList.remove('active');
          }
        }
        if (movingX > maximumRight) {
          if (!artistWorkrightBtn.classList.contains('active')) {
            artistWorkrightBtn.classList.add('active');
          }
        }
      });

      const artistName = artistTitle.querySelector('span').textContent;

      fetch('/js/artistRead.json')
        .then(res => res.json())
        .then(data =>
          data.forEach(e1 => {
            if (e1['name'] === artistName) {
              contentsBox.insertAdjacentHTML(
                'beforeend',
                `
                    <div class="xans-element- xans-product xans-product-relation xans-record-">
                      <div class="relation">
                        <div class="relation_title">
                          <span class="artist_relation_artworks">작가의 작품</span>
                          <div class="relation-direction artist-video-direction">
                            <span class="relation-prd video-direction-left material-symbols-outlined"> arrow_circle_left </span>
                            <span class="relation-prd video-direction-right material-symbols-outlined active"> arrow_circle_right </span>
                          </div>
                        </div>
                        <div class="xans-element- xans-product  ec-base-product swiper-container relation_slide swiper-container-initialized swiper-container-horizontal">
                          <ul class="swiper-wrapper prdList" >
                          </ul>
                        </div>
                      </div>
                    </div>
                `,
              );
              const detailPrdList = document.querySelector('.relation .prdList');
              e1['prdUrl'].forEach((e2, i) => {
                detailPrdList.insertAdjacentHTML(
                  'beforeend',
                  `
                    <li class="swiper-slide xans-record-" style="margin-right: 20px">
                      <div class="prdList__item">
                        <div class="thumbnail">
                          <a href="${e2}">
                            <img src="${e1['prdImg'][i]}" alt="${e1['prdAlt'][i]}" loading="lazy" ez-prevent="img"/>
                          </a>
                        </div>
                        <div class="description">
                          <div class="name">
                            <a href="${e2}">${e1['prdName'][i]}</a>
                          </div>
                          <div class="price">
                            <span class="prdPrice">${e1['prdPrice'][i]}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  `,
                );
              });

              const relationPrdLeftBtn = document.querySelector('.relation-prd.video-direction-left');
              const relationPrdRightBtn = document.querySelector('.relation-prd.video-direction-right');

              const relationItemList = document.querySelector('.relation_slide .prdList');
              const relationItem = document.querySelector('.relation_slide .prdList > li');
              const relationItemWidth = Number(getComputedStyle(relationItem).getPropertyValue('width').split('px')[0]);
              const relationItemMarginRight = Number(
                getComputedStyle(relationItem).getPropertyValue('margin-right').split('px')[0],
              );
              const oneMoving2 = relationItemWidth + relationItemMarginRight;
              const maximumRight2 = (relationItemList.children.length - 6) * -oneMoving2;
              if (maximumRight2 === 0) {
                relationPrdRightBtn.classList.remove('active');
                relationPrdLeftBtn.classList.remove('active');
              }
              let movingX2 = 0;
              relationPrdRightBtn.addEventListener('click', event => {
                event.preventDefault();
                if (movingX2 > maximumRight2) {
                  movingX2 -= oneMoving2;
                  if (movingX2 === maximumRight2) {
                    relationPrdRightBtn.classList.remove('active');
                  }
                }
                if (movingX2 !== 0) {
                  if (!relationPrdLeftBtn.classList.contains('active')) {
                    relationPrdLeftBtn.classList.add('active');
                  }
                }
                relationItemList.style.transform = `translateX(${movingX2}px)`;
              });
              relationPrdLeftBtn.addEventListener('click', event => {
                event.preventDefault();
                if (movingX2 !== 0) {
                  movingX2 += oneMoving2;
                  relationItemList.style.transform = `translateX(${movingX2}px)`;
                  if (movingX2 === 0) {
                    relationPrdLeftBtn.classList.remove('active');
                  }
                }
                if (movingX2 > maximumRight2) {
                  if (!relationPrdRightBtn.classList.contains('active')) {
                    relationPrdRightBtn.classList.add('active');
                  }
                }
              });
            }
          }),
        );
    }
    jQuery(document).ready(function () {
      /* 상세 관련상품 */
      if (jQuery('.xans-product-relation').val() != undefined) {
        //관련상품 모듈 있을떄만 실행(없으면 주문서페이지에서 오류) -정환
        var relation_slide = new Swiper('.relation_slide', {
          slidesPerView: 6,
          spaceBetween: 20,
          observer: true,
          observeParents: true,
          speed: 700,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
          },
        });
      }
    });

    // fetch('/js/artist.json')
    // .then(res => res.json()) // .json() 메서드는 JSON 응답을 JavaScript 객체 리터럴로 구문분석합니다.
    // .then(data => console.log(data[0]['name']));
    // console.log(data[0]);

    // json 저장용

    // const artworkList = document.querySelector('.prdList').children;
    // const artistThumbnailImg = document.querySelector('.detail.read-artist > img');
    // const artistThumbnailName = document.querySelector('.read-artist__title');
    // let makeJson = {
    //   name: artistThumbnailName.querySelector('span').textContent,
    //   thumbnailImg: artistThumbnailImg.getAttribute('src'),
    //   nameStrong: artistThumbnailName.querySelector('strong').textContent,
    //   nameSpan: artistThumbnailName.querySelector('span').textContent,
    //   jobs: artworkList.length,
    //   url: window.location.pathname,
    // };
    // let json = JSON.stringify(makeJson);
    // alert(json);
  } catch (e) {}
});
