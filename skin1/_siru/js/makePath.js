function detectMobileDevice(agent) {
  const mobileRegex = [/Android/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return mobileRegex.some(mobile => agent.match(mobile));
}
const checkMobile = detectMobileDevice(window.navigator.userAgent);
try {
  if (!checkMobile) {
    document.documentElement.style.setProperty(
      '--item-row-6-width-pc-max1480',
      'calc((1480px - var(--item-margin-right-pc) * 5) / 6 - 8px)',
    );
    document.documentElement.style.setProperty(
      '--item-row-6-width-pc',
      ' calc((90vw - var(--item-margin-right-pc) * 5) / 6 - 8px)',
    );
    document.documentElement.style.setProperty(
      '--item-row-5-width-pc-max1480',
      'calc((1480px - var(--item-margin-right-pc) * 4) / 5 - 8px)',
    );
    document.documentElement.style.setProperty(
      '--item-row-5-width-pc',
      ' calc((90vw - var(--item-margin-right-pc) * 4) / 5 - 8px)',
    );
    document.documentElement.style.setProperty(
      '--item-row-4-width-pc-max1480',
      'calc((1480px - var(--item-margin-right-pc) * 3) / 4 - 8px)',
    );
    document.documentElement.style.setProperty(
      '--item-row-4-width-pc',
      'calc((90vw - var(--item-margin-right-pc) * 3) / 4 - 8px)',
    );
    document.documentElement.style.setProperty(
      '--item-row-3-width-pc-max1480',
      'calc((1480px - var(--item-margin-right-pc) * 2) / 3 - 8px)',
    );
    document.documentElement.style.setProperty(
      '--item-row-3-width-pc',
      'calc((90vw - var(--item-margin-right-pc) * 2) / 3 - 8px)',
    );
    document.documentElement.style.setProperty(
      '--item-row-3-width-portable',
      'calc((90vw - var(--item-margin-right-portable) * 2) / 3 - 8px)',
    );
    document.documentElement.style.setProperty(
      '--item-row-2-width-portable',
      ' calc((90vw - var(--item-margin-right-portable)) / 2 - 8px)',
    );
  } else {
  }
} catch (e) {}
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
      document.querySelector('#header').classList.add('portable');
    } else {
      document.querySelector('#header').classList.remove('portable');
    }
  });
  if (checkMobile || window.innerWidth <= 1024) {
    document.querySelector('#header').classList.add('portable');
  }
  try {
    const pathInfo = document.querySelector('.path ol li:nth-of-type(2)');
    const currentPath = document.querySelector('.path li strong');
    const headerMenuList = document.querySelectorAll('.top_nav_box .sub_cate01 li a');
    Array.from(headerMenuList).forEach(e => {
      if (e.textContent === currentPath.textContent) {
        const mainCategory = e.closest('.header-menu').querySelector('.main-cate').textContent;
        pathInfo.innerHTML = `<a class="current-path" href='javascript:void(0);'>${mainCategory}</a>`;
        if (currentPath.textContent === '작가 소개' || currentPath.textContent === '전시 소식') {
          const postAuthorName = document.querySelector('.xans-board-read .description');
          postAuthorName.style.display = 'none';
        }
      }
    });
  } catch (e) {}
  try {
    $(function () {
      // accodian
      $('.info_middle-toggle').click(function () {
        $(this).toggleClass('active');
        $('.bt_info').slideToggle();
        $('.bt_escrow').slideToggle();
      });
    });
  } catch (e) {}
});
