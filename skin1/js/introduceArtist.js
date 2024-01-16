document.addEventListener('DOMContentLoaded', () => {
  const checkIntroduceArtist = document.querySelector('.path li strong');
  try {
    if (checkIntroduceArtist.textContent == '작가 소개') {
      const artistPostList = document.querySelector('.boardList > .xans-board-8 > ul');
      artistPostList.classList.add('artist-post__list');

      const getItemWidth = document.querySelector('.artist-post__list > li > a').clientWidth;
      console.log(getItemWidth);
      Array.from(artistPostList.querySelectorAll('.thumbnail')).forEach(e => {
        e.style.height = getItemWidth * 0.75 + 'px';
      });
    }
  } catch (e) {}
});
