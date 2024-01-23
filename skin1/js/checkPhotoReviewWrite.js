document.addEventListener('DOMContentLoaded', () => {
  const checkReview = document.querySelector('.path li strong');
  try {
    if (checkReview.textContent == '리뷰') {
      let fileBasket = document.querySelectorAll('.file input[type=file]');
      const btnArea = document.querySelector('.gRight');
      const submitBtn = btnArea.querySelector('.btnSubmitFix:not(.disable)');

      submitBtn.style.display = 'none';

      btnArea.insertAdjacentHTML(
        'beforeend',
        `
          <a href="#none" onclick="alert('이미지를 최소 1개 이상 첨부해주세요.')" class="btnSubmitFix sizeM disable" >등록</a>
        `,
      );
      const tempBtn = btnArea.querySelector('.btnSubmitFix.disable');

      checkPhoto = () => {
        let checkFile = 0;
        Array.from(fileBasket).forEach(el => {
          if (el.files && el.files.length > 0) {
            checkFile += 1;
          }
        });
        if (checkFile != 0) {
          submitBtn.style.display = 'inline-block';
          tempBtn.style.display = 'none';
        } else {
          tempBtn.style.display = 'inline-block';
          submitBtn.style.display = 'none';
        }
      };
      checkPhoto();
      Array.from(fileBasket).forEach(e => {
        e.addEventListener('change', function () {
          if (this.files && this.files.length > 0) {
            submitBtn.style.display = 'inline-block';
            tempBtn.style.display = 'none';
          } else {
            checkPhoto();
          }
        });
      });
    }
  } catch (e) {}
});
