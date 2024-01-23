document.addEventListener('DOMContentLoaded', () => {
  const checkReview = document.querySelector('.path li strong');
  try {
    if (checkReview.textContent == '리뷰') {
      makeLayout = () => {
        const reviewList = document.querySelector('.gBorderClear table > tbody').children,
          reviewContents = document.querySelector('.gBorderClear'),
          reviewSeach = document.getElementById('boardSearchForm');
        reviewContents.style.display = 'none';
        reviewSeach.style.display = 'none';
        if (reviewList.length <= 15) {
          document.querySelector('.ec-base-paginate.typeList').style.display = 'none';
        }
        reviewContents.insertAdjacentHTML(
          'afterend',
          `
            <div class="review-box">
              <ul class="review-list"></ul>
            </div>
          `,
        );

        const reviewCustomList = document.querySelector('.review-list');
        Array.from(reviewList).forEach((e, i) => {
          let listItemId = e.querySelector('.subject > a').getAttribute('href').split('/').at(-2);
          BOARD.load_attached_image(`afile_${listItemId}`, '0', '4');
        });
        setTimeout(() => {
          Array.from(reviewList).forEach((e, i) => {
            let listItemId = e.querySelector('.subject > a').getAttribute('href').split('/').at(-2);
            BOARD.load_attached_image(`afile_${listItemId}`, '0', '4');

            const reviewAuthor = e.querySelector('td:nth-of-type(5)').textContent;
            const reviewDate = e.querySelector('td:nth-of-type(6)').textContent;
            const reviewTitle = e.querySelector('.subject p.product').textContent;
            const reviewDescription = e.querySelector('.subject a').textContent;
            const reviewHref = 'https://' + window.location.host + e.querySelector('.subject a').getAttribute('href');
            try {
              let reviewThumbnail = e.querySelector(`#afile_${listItemId} > img`).getAttribute('src');
              reviewCustomList.insertAdjacentHTML(
                'beforeend',
                `
                  <li>
                    <a href="${reviewHref}">
                      <div class="review-img">
                        <img src="${reviewThumbnail}" alt="후기 썸네일-${i}">
                      </div>
                      <div class="review-txt">
                        <div class="review-txt__head">
                          <h4>${reviewTitle}</h4>
                          <p>${reviewDescription}</p>
                          </div>
                        <div class="review-txt__body">
                          <span>${reviewAuthor}</span>
                          <span>${reviewDate}</span>
                        </div>
                      </div>
                    </a>
                  </li>
                `,
              );
            } catch (e) {
              reviewCustomList.insertAdjacentHTML(
                'beforeend',
                `
                  <li class="swiper-slide">
                    <a href="${reviewHref}">
                      <div class="review-img" >
                        <img src="" alt="후기 썸네일-${i}">
                      </div>
                      <div class="review-txt">
                        <h4>${reviewTitle}</h4>
                        <p>${reviewDescription}</p>
                      </div>
                    </a>
                  </li>
                `,
              );
            }
          });
        }, 1000);
      };
      makeLayout();
      // jQuery(document).ready(function () {
      //   var swiperReview = new Swiper('.review-box', {
      //     slidesPerView: 3,
      //     spaceBetween: 20,
      //   });
      // });
    }
  } catch (e) {}
});
