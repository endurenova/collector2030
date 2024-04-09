document.addEventListener('DOMContentLoaded', () => {
  const checkArtistRead = document.querySelector('.path li strong');
  try {
    if (checkArtistRead.textContent == '작가 소개') {
      document.querySelector('.ec-base-table .detail > img').style.display = 'none';
      // css/module/board/readPackage.css
      // const artistThumbnail = document.querySelector('.xans-board-read .ec-base-table .detail');
      // const contentsBox = document.querySelector('.fr-view-article');
      // const artistTitle = contentsBox.querySelector('p:nth-of-type(1)');
      // artistThumbnail.classList.add('read-artist');
      // artistTitle.classList.add('read-artist__title');

      // contentsBox.querySelector('.fr-fic').closest('p').classList.add('hidden');
      // contentsBox.insertAdjacentHTML(
      //   'beforeend',
      //   `
      //   <div class='read-artist__slide__section'>
      //     <div class="read-artist__slide-box swiper-container">
      //       <ul class="read-artist__slide-list swiper-wrapper">
      //       </ul>
      //     </div>
      //   </div>
      //   `,
      // );

      // const imgBox = contentsBox.querySelector('.read-artist__slide-box');
      // const imgSlide = contentsBox.querySelector('.read-artist__slide-list');
      // const imgList = contentsBox.querySelectorAll('.fr-fic');
      // imgList.forEach((e, i) => {
      //   imgSlide.insertAdjacentHTML(
      //     'beforeend',
      //     `
      //       <li class='swiper-slide'style="list-style: none !important;">
      //         <img src="${e.getAttribute('src')}" alt="artist-works-img-${i}" />
      //       </li>
      //     `,
      //   );
      // });

      // const artistName = artistTitle.querySelector('span').textContent;

      // fetch('/_siru/json/artistRead.json')
      //   .then(res => res.json())
      //   .then(data =>
      //     data.forEach(e1 => {
      //       if (e1['name'] === artistName) {
      //         contentsBox.insertAdjacentHTML(
      //           'beforeend',
      //           `
      //             <div class="relative-artwork__box">
      //               <div class="relation_title">
      //                 <span class="artist_relation_artworks">작가의 작품</span>
      //               </div>
      //               <ul class="relative-artwork__list" >
      //               </ul>
      //             </div>
      //           `,
      //         );
      //         const detailPrdList = document.querySelector('.relative-artwork__list');
      //         e1['prdUrl'].forEach((e2, i) => {
      //           detailPrdList.insertAdjacentHTML(
      //             'beforeend',
      //             `
      //               <li class="relative-artwork__item">
      //                 <a href="${e2}" class="prdList__item">
      //                   <div class="thumbnail">
      //                     <img src="${e1['prdImg'][i]}" alt="${e1['prdAlt'][i]}" loading="lazy" ez-prevent="img"/>
      //                   </div>
      //                   <div class="description">
      //                     <span class="name">${e1['prdName'][i]}</span>
      //                     <span class="price">${e1['prdPrice'][i]}</span>
      //                   </div>
      //                 </a>
      //               </li>
      //             `,
      //           );
      //         });
      //       }
      //     }),
      //   );
      // jQuery(document).ready(function () {
      //   var swiper01 = new Swiper('.read-artist__slide-box', {
      //     slidesPerView: 3,
      //     breakpoints: {
      //       1280: {
      //         slidesPerView: 2,
      //         spaceBetween: 10,
      //       },
      //       767: {
      //         slidesPerView: 1,
      //         spaceBetween: 10,
      //       },
      //     },
      //   });
      // });
    }

    // fetch('/_siru/json/artistRead.json')
    //   .then(res => res.json()) // .json() 메서드는 JSON 응답을 JavaScript 객체 리터럴로 구문분석합니다.
    //   .then(data => console.log(data[0]['name']));
    // console.log(data[0]);

    // json 저장용
    // setTimeout(() => {
    //   const artworkList = document.querySelector('.prdList').children;
    //   const artistThumbnailImg = document.querySelector('.detail.read-artist > img');
    //   const artistThumbnailName = document.querySelector('.read-artist__title');
    //   let makeJson = {
    //     name: artistThumbnailName.querySelector('span').textContent,
    //     thumbnailImg: artistThumbnailImg.getAttribute('src'),
    //     nameStrong: artistThumbnailName.querySelector('strong').textContent,
    //     nameSpan: artistThumbnailName.querySelector('span').textContent,
    //     jobs: artworkList.length,
    //     url: window.location.pathname,
    //   };
    //   let json = JSON.stringify(makeJson);
    //   alert(json);
    // }, 1000);
  } catch (e) {}
});
