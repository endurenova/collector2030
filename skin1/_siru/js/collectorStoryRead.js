document.addEventListener('DOMContentLoaded', () => {
  const checkCollectorStoryRead = document.querySelector('.path li strong');
  try {
    if (checkCollectorStoryRead.textContent == '컬렉터 스토리') {
      const contentsBox = document.querySelector('.fr-view-article');

      const imgList = contentsBox.querySelectorAll('.story-slide-item');
      let itemList = '';
      imgList.forEach((e, i) => {
        itemList += `
            <li class='swiper-slide'style="list-style: none !important;">
              <img src="${e.getAttribute('src')}" alt="story-slide-${i}" />
            </li>
          `;
      });
      document.querySelector('.story-slide__area').innerHTML = `
        <div class='story-slide__section'>
        <div class='story-slide__info'>
          <span class="material-symbols-outlined">swipe</span>
        </div>
          <div class="story-slide__box swiper-container">
            <ul class="story-slide__list swiper-wrapper">
              ${itemList}
            </ul>
          </div>
        </div>
        `;
      document.querySelector('.story-slide__info').addEventListener('click', event => {
        event.preventDefault();
        event.target.classList.add('hidden');
      });
      jQuery(document).ready(function () {
        var swiper01 = new Swiper('.story-slide__box', {
          slidesPerView: 1,
          spaceBetween: 10,
        });
      });
    }
  } catch (e) {}
});
