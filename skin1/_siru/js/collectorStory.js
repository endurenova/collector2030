document.addEventListener('DOMContentLoaded', () => {
  const checkCollectorStory = document.querySelector('.path li strong');
  try {
    if (checkCollectorStory.textContent == '컬렉터 스토리') {
      const collectorStoryList = document.querySelector('.boardList > .xans-board-8 > ul');
      collectorStoryList.classList.add('collector-story__list');

      const getItemWidth = document.querySelector('.collector-story__list > li > a').clientWidth;
      Array.from(collectorStoryList.querySelectorAll('.thumbnail')).forEach(e => {
        e.style.height = getItemWidth + 'px';
      });
    }
  } catch (e) {}
});
