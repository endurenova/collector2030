document.addEventListener('DOMContentLoaded', () => {
  const checkReview = document.querySelector('.path li strong');
  try {
    if (checkReview.textContent == '리뷰') {
      const reviewList = document.querySelector('.gBorderClear table > tbody').children;
      let reviewIdList = [];
      Array.from(reviewList).forEach(e => {
        let ele = {};
        let listItemId = e.querySelector('.subject > a').getAttribute('href').split('/').at(-2);
        BOARD.load_attached_image(`afile_${listItemId}`, '1', '4');
        console.log(e.querySelector(`.subject > span:first-of-type > img`));
        ele['id'] = listItemId;
        ele['title'] = e.querySelector('.subject p.product').textContent;
        ele['description'] = e.querySelector('.subject a').textContent;
        ele['url'] = e.querySelector('.subject a').getAttribute('href');
        try {
          ele['img-src'] = e.querySelector(`#afile_${listItemId} > img`).getAttribute('src');
        } catch (e) {
          ele['img-src'] = '';
        }
        reviewIdList.push(ele);
      });
      const reviewContents = document.querySelector('.gBorderClear');
      reviewContents.insertAdjacentHTML(
        'afterend',
        `
          <div class="review-box">
            <ul class="review-list"></ul>
          </div>
        `,
      );
      const reviewCustomList = document.querySelector('.review-list');
      reviewIdList.forEach(e => {
        reviewCustomList.insertAdjacentHTML(
          'beforeend',
          `
            <li>
              <a href="${e['url']}">
                <div class="review-img">
                  <img src="${e['img-src']}">
                </div>
                <div class="review-txt">
                  <h4>${e['title']}</h4>
                  <p>${e['description']}</p>
                </div>
              </a>
            </li>
          `,
        );
      });
      console.log(reviewIdList);
    }
  } catch (e) {}
});
