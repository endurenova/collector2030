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
          <div class="read-artist__slide-box swiper-container">
            <ul class="read-artist__slide-list swiper-wrapper">
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
            <li class='swiper-slide'style="list-style: none !important;">
              <img src="${e.getAttribute('src')}" alt="artist-works-img-${i}" />
            </li>
          `,
        );
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
                        </div>
                        <div class="xans-element- xans-product  ec-base-product swiper-container relation_slide ">
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
                    <li class="swiper-slide xans-record-">
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
            }
          }),
        );

      jQuery(document).ready(function () {
        var swiper01 = new Swiper('.read-artist__slide-box', {
          slidesPerView: 3,
          breakpoints: {
            1280: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          },
        });
      });
    }

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
