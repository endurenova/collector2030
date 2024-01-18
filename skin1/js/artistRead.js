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
          <div class="read-artist__slide-box">
            <div class="read-artist__slide-wrap">
              <ul class="read-artist__slide-list">
              </ul>
            </div>
          </div>
        `,
      );
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
      const artistName = artistTitle.querySelector('span').textContent;
      const artistList = {
        'Katrin Fridriks': {
          artworkList: `
            <li class="swiper-slide xans-record-" style="width: 235px; margin-right: 20px">
              <div class="prdList__item">
                <div class="thumbnail">
                  <a href="/product/stargate-messenger/397/category/33/display/1/">
                    <img src="//ecimg.cafe24img.com/pg715b26588354090/col2030/web/product/medium/20231220/c292b58aeb03d3a05aa98df1be9fc240.jpg" alt="StarGate Messenger,Katrin Fridriks" loading="lazy" ez-prevent="img"/>
                  </a>
                </div>
                <div class="description">
                  <div class="name">
                    <a href="/product/stargate-messenger/397/category/33/display/1/">StarGate Messenger</a>
                  </div>
                  <div class="price">
                    <span class="prdPrice">1,450,000원</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="swiper-slide xans-record-" style="width: 235px; margin-right: 20px">
              <div class="prdList__item">
                <div class="thumbnail">
                  <a href="/product/king-of-awareness-awakening/428/category/33/display/1/">
                    <img src="//ecimg.cafe24img.com/pg715b26588354090/col2030/web/product/medium/20240118/853024f98310ae8de26503754b39122e.jpg" alt="King of Awareness &amp;amp; Awakening, Katrin Fridriks" loading="lazy" ez-prevent="img"/>
                  </a>
                </div>
                <div class="description">
                  <div class="name">
                    <a href="/product/king-of-awareness-awakening/428/category/33/display/1/">King of Awareness &amp; Awakening</a>
                  </div>
                  <div class="price">
                    <span class="prdPrice">2,200,000원</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="swiper-slide xans-record-" style="width: 235px; margin-right: 20px">
              <div class="prdList__item">
                <div class="thumbnail">
                  <a href="/product/noble-and-awakening-force/429/category/33/display/1/">
                    <img src="//ecimg.cafe24img.com/pg715b26588354090/col2030/web/product/medium/20240118/9dacd5d4f2ef0d099a5d80c3033df057.jpg" alt="Noble and Awakening Force, Katrin Fridriks" loading="lazy" ez-prevent="img"/>
                  </a>
                </div>
                <div class="description">
                  <div class="name">
                    <a href="/product/noble-and-awakening-force/429/category/33/display/1/">Noble and Awakening Force</a>
                  </div>
                  <div class="price">
                    <span class="prdPrice">3,900,000원</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="swiper-slide xans-record-" style="width: 235px; margin-right: 20px">
              <div class="prdList__item">
                <div class="thumbnail">
                  <a href="/product/personal-speed-of-light/430/category/33/display/1/">
                    <img src="//ecimg.cafe24img.com/pg715b26588354090/col2030/web/product/medium/20240118/5d4d526eb9592778bde459e2690f50ce.jpg" alt="Personal Speed of Light, Katrin Fridriks" loading="lazy" ez-prevent="img"/>
                  </a>
                </div>
                <div class="description">
                  <div class="name">
                    <a href="/product/personal-speed-of-light/430/category/33/display/1/">Personal Speed of Light</a>
                  </div>
                  <div class="price">
                    <span class="prdPrice">2,100,000원</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="swiper-slide xans-record-" style="width: 235px; margin-right: 20px">
              <div class="prdList__item">
                <div class="thumbnail">
                  <a href="/product/spiritual-awakening/431/category/33/display/1/">
                    <img src="//ecimg.cafe24img.com/pg715b26588354090/col2030/web/product/medium/20240118/dd19e109372358ce8c898125d65597e5.jpg" alt="Spiritual Awakening , Katrin Fridriks" loading="lazy" ez-prevent="img"/>
                  </a>
                </div>
                <div class="description">
                  <div class="name">
                    <a href="/product/spiritual-awakening/431/category/33/display/1/">Spiritual Awakening</a>
                  </div>
                  <div class="price">
                    <span class="prdPrice">2,800,000원</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="swiper-slide xans-record-" style="width: 235px; margin-right: 20px">
              <div class="prdList__item">
                <div class="thumbnail">
                  <a href="/product/waving-force-of-nature-awakening/432/category/33/display/1/">
                    <img src="//ecimg.cafe24img.com/pg715b26588354090/col2030/web/product/medium/20240118/bab32a60d822b699811507069675dfc9.jpg" alt="Waving Force of Nature - Awakening, Katrin Fridriks" loading="lazy" ez-prevent="img"/>
                  </a>
                </div>
                <div class="description">
                  <div class="name">
                    <a href="/product/waving-force-of-nature-awakening/432/category/33/display/1/">Waving Force of Nature - Awakening</a>
                  </div>
                  <div class="price">
                    <span class="prdPrice">2,111,200원</span>
                  </div>
                </div>
              </div>
            </li>
          `,
        },
      };
      if (artistList[artistName]) {
        contentsBox.insertAdjacentHTML(
          'beforeend',
          `
            <div class="xans-element- xans-product xans-product-relation xans-record-">
              <div class="relation">
                <div class="relation_title">
                  <span class="artist_relation_artworks">작가의 작품</span>
                </div>
                <div class="xans-element- xans-product xans-product-relationlist ec-base-product swiper-container relation_slide swiper-container-initialized swiper-container-horizontal">
                  <ul class="swiper-wrapper prdList" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                  ${artistList[artistName].artworkList}
                  </ul>
                </div>
              </div>
            </div>
        `,
        );
      }
    }
    jQuery(document).ready(function () {
      /* 상세 관련상품 */
      if (jQuery('.xans-product-relation').val() != undefined) {
        //관련상품 모듈 있을떄만 실행(없으면 주문서페이지에서 오류) -정환
        var relation_slide = new Swiper('.relation_slide', {
          slidesPerView: 4,
          spaceBetween: 20,
          observer: true,
          observeParents: true,
          watchOverflow: 'true', // 스와이프가 한개일때 버튼 라인 비활성
          speed: 700,
          navigation: {
            nextEl: '.swiper-next-relation',
            prevEl: '.swiper-prev-relation',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          },
        });
      }
    });
    function relatiionMore() {
      var relation = document.querySelector('.xans-product-relationlist');
      if (!relation) {
        return;
      }
      var list = relation.querySelectorAll('.prdList__item');
      var btnMore = relation.querySelector('.btnMore');
      for (var i = 0; i < list.length; i++) {
        var target = list[i];
        target.setAttribute('data-index', i);
        if (target.getAttribute('data-index') >= 5) {
          target.classList.add('hidden');
          btnMore.addEventListener('click', function () {
            target.classList.remove('hidden');
            btnMore.style.display = 'none';
          });
        }
        if (list.length <= 5) {
          btnMore.style.display = 'none';
        }
      }
    }
    relatiionMore();
  } catch (e) {}
});
