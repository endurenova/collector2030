document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.prdList.grid4 .prdList__item .icon img.icon_img');
  const prices = document.querySelectorAll('.xans-product-listitem li:nth-of-type(2) > span:nth-of-type(1)');
  Array.from(prices).forEach(e => {
    e.closest('.description')
      .querySelector('.icon')
      .insertAdjacentHTML('beforeend', `<strong class='product-item__price'>${e.textContent}</strong>`);
  });
  Array.from(icons).forEach(e => {
    // 품절 아이콘 표시 SOLD OUT 텍스트로 바꾸는 코드
    console.log(typeof e);
    if (e.getAttribute('alt') === 'Out-of-stock') {
      const itemLayout = e.closest('.prdList__item');
      const icon = e.closest('.icon');
      icon.insertAdjacentHTML('beforeend', `<span class='sold-out'>SOLD OUT</span>`);
      icon.querySelector('strong').classList.add('sold-out__price');
      itemLayout.querySelector('.cart').classList.add('status-sold-out');
    }
  });
});
