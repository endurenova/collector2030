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
        console.log(e.querySelector(`.subject > span:first-of-type`));
        BOARD.load_attached_image(`afile_${listItemId}`, '0', '4');

        ele['id'] = listItemId;
        ele['title'] = e.querySelector('.subject p.product').textContent;
        ele['description'] = e.querySelector('.subject a').textContent;
        ele['url'] = e.querySelector('.subject a').getAttribute('href');
        try {
          ele['img-src'] = e.querySelector(`#afile_${listItemId} > img`).getAttribute('src');
        } catch (e) {
          //큐에서 해당 게시물의 이미지가 로드중 또는 로드되었는지 체크
          
  aAttachImageLoadQueue: [],
          var iPosition = EC$.inArray(iBulletinNo, this.aAttachImageLoadQueue);

          var oTarget = EC$('#' + sId);
          EC$.get(
            `/exec/front/Board/Get?no=${listItemId}&board_no=4`,
            function (oResponse) {
              //로드 성공
              if (oResponse.failed === false) {
                oTarget.append(oResponse.data.thumbnail_image);
                BOARD.afile_display(sId, sFlag);
              }
              //로드 실패
              else {
                //큐에서 제거처리하여, 다시 로드 가능하도록 변경
                BOARD.aAttachImageLoadQueue.splice(iPosition, 1);
              }
            },
            'json',
          );
          ele['img-src'] = `/exec/front/Board/Get?no=${listItemId}&board_no=4`;
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
