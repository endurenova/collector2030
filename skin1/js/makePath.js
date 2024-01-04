document.addEventListener('DOMContentLoaded', () => {
  try {
    const pathInfo = document.querySelector('.path ol li:nth-of-type(2)');
    const currentPath = document.querySelector('.path li strong');
    const headerMenuList = document.querySelectorAll('.top_nav_box .sub_cate01 li a');
    Array.from(headerMenuList).forEach(e => {
      if (e.textContent === currentPath.textContent) {
        const mainCategory = e.closest('.header-menu').querySelector('.main-cate').textContent;
        pathInfo.innerHTML = `<a href='javascript:void(0);'>${mainCategory}</a>`;
      }
    });
  } catch (e) {}
});
