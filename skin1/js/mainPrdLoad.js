document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.main_product_list').insertAdjacentHTML(
    'afterend',
    `
      <section class="main_prd__section">
        <div class="main_title ez-align-center">
          <div class="main_title_txt01">
            컬렉터 2030에서만 만나볼 수 있는 작품
          </div>
        </div>
        <div class="main_prd__box">
          <ul class="main_prd__list">
          </ul>
        </div>
      </section>
    `,
  );
  const mainPrdList = document.querySelector('.main_prd__list');
  fetch('/js/mainPrdList.json')
    .then(res => res.json())
    .then(data =>
      data.forEach(e => {
        mainPrdList.insertAdjacentHTML(
          'beforeend',
          `
          <li>
            <div class="prdList__item">
              <div class="thumbnail">
                <a href="${e['prdUrl']}">
                  <img src="${e['prdImg']}"  alt="${e['prdAlt']}" />
                </a>
              </div>
              <div class="description">
                <div class="name">
                  <a href="${e['prdUrl']}">
                    <span>${e['prdName']}</span>
                  </a>
                </div>
                <ul class="spec">
                  <li>
                    <span class="artist-name">
                      <span class="korean-pronun">${e['prdKor']}</span>
                      <span>${e['prdArtist']}</span>
                    </span>
                  </li>
                </ul>
                <div class="icon">
                  <strong class="product-item__price">${e['prdPrice']}</strong>
                </div>
              </div>
            </div>
          </li>
          `,
        );
      }),
    );
});
