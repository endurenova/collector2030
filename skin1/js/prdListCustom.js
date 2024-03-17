document.addEventListener('DOMContentLoaded', () => {
  const prdList = document.querySelectorAll(
    '.prdList > li > .prdList__item > .description > ul.spec > li:first-of-type > .artist-name span:last-of-type',
  );

  Array.from(prdList).forEach(e => {
    fetch('/js/nameSetting.json')
      .then(res => res.json())
      .then(data =>
        data.forEach(e1 => {
          e.closest('.artist-name').querySelector('.korean-pronun').textContent = e1[e.textContent];
          e.textContent = `(${e.textContent})`;
        }),
      );
  });
  setTimeout(() => {
    let prdInfoList = [];
    const ids = document.querySelectorAll('.prdList > li');
    ids.forEach((e, i) => {
      if (i < 12) {
        let makeJson = {
          prdImg: '',
          prdAlt: '',
          prdName: '',
          prdKor: '',
          prdArtist: '',
          prdPrice: '',
          prdUrl: '',
        };
        makeJson['prdImg'] = e.querySelector('.thumbnail > a > img').getAttribute('src');
        makeJson['prdAlt'] = e.querySelector('.thumbnail > a > img').getAttribute('alt');
        makeJson['prdName'] = e.querySelector('.description .name a span:nth-of-type(2)').textContent;
        makeJson['prdKor'] = e.querySelector('.artist-name .korean-pronun').textContent;
        makeJson['prdArtist'] = e.querySelector('.artist-name span:nth-of-type(2)').textContent;
        makeJson['prdUrl'] = e.querySelector('.thumbnail > a').getAttribute('href');
        makeJson['prdPrice'] = e.querySelector('.product-item__price').textContent;
        prdInfoList.push(makeJson);
      }
    });
    let json = JSON.stringify(prdInfoList);
    console.log(json);
  }, 300);
});
