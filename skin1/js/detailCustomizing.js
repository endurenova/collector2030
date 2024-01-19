document.addEventListener('DOMContentLoaded', () => {
  try {
    const artistName = document.querySelector('.infoArea table tbody tr:nth-of-type(2) td'),
      relatedProducts = document.querySelector('.relation_title');
    relatedProducts.innerHTML = `<span class="artist_relation_artworks">작가의 다른 작품</span>`;
  } catch (e) {}
  const detailArea = document.querySelector('#prdDetail > div');
  simulatorBackground = () => {};
  purchaseInfoImg = () => {
    const purchaseImgAlt = [
        {
          path: 'top',
          alt: 'Slogan',
        },
        {
          path: 'info_1',
          alt: 'Title & Artist',
        },
        {
          path: 'bottom',
          alt: 'Notice & Guide',
        },
      ],
      simulateBackground_0 = [
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-0.jpg',
          space: '거실 1',
          top: '30%',
          left: '50%',
          sizeRate: 0.09,
        },
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-1.jpg',
          space: '거실 2',
          top: '30%',
          left: '50%',
          sizeRate: 0.09,
        },
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-2.jpg',
          space: '거실 3',
          top: '33%',
          left: '40%',
          sizeRate: 0.09,
        },
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-3.jpg',
          space: '침실',
          top: '30%',
          left: '50%',
          sizeRate: 0.095,
        },
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-4.jpg',
          space: '다이닝룸',
          top: '37%',
          left: '30%',
          sizeRate: 0.09,
        },
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-5.jpg',
          space: '방',
          top: '25%',
          left: '35%',
          sizeRate: 0.09,
        },
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-6.jpg',
          space: '복도',
          top: '35%',
          left: '60%',
          sizeRate: 0.09,
        },
      ],
      simulateBackground_1 = [
        {
          url: '/SkinImg/img/simulate/1-simulate_bg-thumbnail-0.jpg',
          space: '방 1',
          top: '25%',
          left: '60%',
          sizeRate: 0.09,
        },
        {
          url: '/SkinImg/img/simulate/1-simulate_bg-thumbnail-1.jpg',
          space: '방 2',
          top: '25%',
          left: '51%',
          sizeRate: 0.095,
        },
        {
          url: '/SkinImg/img/simulate/1-simulate_bg-thumbnail-2.jpg',
          space: '거실 1',
          top: '30%',
          left: '35%',
          sizeRate: 0.09,
        },
        {
          url: '/SkinImg/img/simulate/1-simulate_bg-thumbnail-3.jpg',
          space: '거실 2',
          top: '30%',
          left: '50%',
          sizeRate: 0.1,
        },
        {
          url: '/SkinImg/img/simulate/1-simulate_bg-thumbnail-4.jpg',
          space: '다이닝룸',
          top: '28%',
          left: '49%',
          sizeRate: 0.09,
        },
      ],
      simulateBackground_2 = [
        {
          url: '/SkinImg/img/simulate/2-simulate_bg-thumbnail-0.jpg',
          space: '거실',
          top: '25%',
          left: '50%',
          sizeRate: 0.095,
        },
        {
          url: '/SkinImg/img/simulate/2-simulate_bg-thumbnail-1.jpg',
          space: '방',
          top: '28%',
          left: '40%',
          sizeRate: 0.09,
        },
        {
          url: '/SkinImg/img/simulate/2-simulate_bg-thumbnail-2.jpg',
          space: '다이닝룸',
          top: '25%',
          left: '50%',
          sizeRate: 0.095,
        },
      ],
      simulateBackground_3 = [
        {
          url: '/SkinImg/img/simulate/3-simulate_bg-thumbnail-0.jpg',
          space: '거실 1',
          top: '30%',
          left: '50%',
          sizeRate: 0.09,
        },
        {
          url: '/SkinImg/img/simulate/3-simulate_bg-thumbnail-1.jpg',
          space: '거실 2',
          top: '38%',
          left: '24%',
          sizeRate: 0.1,
        },
        {
          url: '/SkinImg/img/simulate/3-simulate_bg-thumbnail-2.jpg',
          space: '거실 3',
          top: '30%',
          left: '35%',
          sizeRate: 0.1,
        },
      ];
    const simulateBackgroundList = [
      simulateBackground_0,
      simulateBackground_1,
      simulateBackground_2,
      simulateBackground_3,
    ];
    detailArea.insertAdjacentHTML(
      'beforeend',
      `
        <div class='purchase-img-box'>
          <ul class="purchase-img-list">
          </ul>
        </div>
      `,
    );
    const purchaseImgList = document.querySelector('.purchase-img-list');
    purchaseImgAlt.forEach((e, i) => {
      if (i === 1) {
        try {
          // 작품명, 아티스트, 날짜
          const artistName = document.querySelector('tr .td-artist').textContent,
            artworkTitle = document.querySelector('tr .td-title').textContent,
            releaseDate = document.querySelector('tr .td-release').textContent;

          // 작품 사이즈 디스플레이
          const artworkImgSrc = document.querySelector('.prdImg .thumbnail img').src,
            artworkSize = document.querySelector('tr .td-dimensions').textContent,
            artworkWidth = artworkSize.split(' ')[0],
            artworkHeight = artworkSize.split(' ')[2];

          // 작품 걸어보기
          const simulatorDisplay = `
            <div class="artwork-simulation">
              <h2>작품 걸어보기</h2>
              <div class="artwork-simulation__box">
                <div class="virtual-background">
                  <img id="virtualFrame"src="${artworkImgSrc}" alt="artwork-image">
                </div>
                <div class="simulation-select__wrap">
                  <div class="background-select__box">
                    <h3>배경 선택</h3>
                    <div class="background-selector__area">
                      <div class="background-selector__wrap">
                        <ul class="background-selector__list">
                        </ul>
                      </div>
                      <div class="background-selector__btn">
                        <span class="bg-select-btn bgs-left material-symbols-outlined"> arrow_circle_left </span>
                        <span>
                          <span class="status-idx"></span>&#32;&#47;&#32;<span class="total-idx"></span>
                        </span>
                        <span class="bg-select-btn bgs-right material-symbols-outlined active"> arrow_circle_right </span>
                      </div>
                    </div>
                  </div>
                  <div class="tone-select__box">
                    <h3>톤 선택</h3>
                    <div class="tone-selector__area">
                      <ul class="tone-selector__list">
                        <li class="active">
                          <span class="tone-name">Bright</span>
                        </li>
                        <li>
                          <span class="tone-name">Pastel</span>
                        </li>
                        <li>
                          <span class="tone-name">Warm</span>
                        </li>
                        <li>
                          <span class="tone-name">Cool</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          purchaseImgList.insertAdjacentHTML(
            'beforeend',
            `
            <li>
              <img src="/SkinImg/img/detail/product_detail_${e.path}.png" alt="${e.alt}" />
              <div class="artwork-simple-info">
                <h1>${artworkTitle}</h1>
                <p>${artistName}&#32;&#47;&#32;${releaseDate}</p>
              </div>
            </li>
            <li>
              <div class="artwork-size-info">
                <img class="show-size"src="${artworkImgSrc}" alt="artwork-image">
                <span class="width-line">
                  <span class="measure">${artworkWidth}</span>
                </span>
                <span class="height-line">
                  <span class="measure">${artworkHeight}</span>
                </span>
              </div>
            </li>
            <li>
              ${simulatorDisplay}
            </li>
          `,
          );

          fetch('/js/artistThumbnail.json')
            .then(res => res.json())
            .then(data =>
              data.forEach(e1 => {
                if (e1['name'] === artistName) {
                  document.querySelector('.guideArea').insertAdjacentHTML(
                    'afterend',
                    `
                      <div class="artist-info-box">
                        <a class="artist-info" href="https://collector2030.com${e1['url']}">
                          <div class="artist-info__thumbnail">
                            <img src="${e1['thumbnailImg']}" alt="${e1['nameStrong']}">
                          </div>
                          <div class="artist-info__description">
                            <strong>${e1['nameSpan']}</strong>
                            <span>${e1['jobs']} Collections</span>
                          </div>
                        </a>
                      </div>
                    `,
                  );
                }
              }),
            );
          const selectList = document.querySelector('.background-selector__list'),
            statusVirtualBackground = document.querySelector('.status-idx'),
            totalVirtualBackground = document.querySelector('.total-idx'),
            leftBtn = document.querySelector('.bgs-left'),
            rightBtn = document.querySelector('.bgs-right'),
            oneMoving = 152;
          let virtualBackgroundList,
            maximumRight = 0,
            movingX = 0;
          setStatusIdx = () => {
            movingX = 0;
            selectList.style.transform = `translateX(0px)`;
            virtualBackgroundList = document.querySelector('.background-selector__list').children;
            maximumRight = (virtualBackgroundList.length - 3) * -oneMoving; // 3 = showing item, 152 = item width(140) + marginRight(10 * 2) + border(2)
            statusVirtualBackground.textContent = 1;
            totalVirtualBackground.textContent = virtualBackgroundList.length;
            if (movingX === 0) {
              leftBtn.classList.remove('active');
            } else {
              if (!leftBtn.classList.contains('active')) {
                leftBtn.classList.add('active');
              }
            }
            if (movingX === maximumRight) {
              rightBtn.classList.remove('active');
            }
            if (movingX > maximumRight) {
              if (!rightBtn.classList.contains('active')) {
                rightBtn.classList.add('active');
              }
            }
          };
          if (window.innerWidth > 767) {
            movingX = 0;
            rightBtn.addEventListener('click', event => {
              event.preventDefault();
              if (movingX > maximumRight) {
                movingX -= oneMoving;
                if (movingX === maximumRight) {
                  rightBtn.classList.remove('active');
                }
              }
              if (movingX !== 0) {
                if (!leftBtn.classList.contains('active')) {
                  leftBtn.classList.add('active');
                }
              }
              selectList.style.transform = `translateX(${movingX}px)`;
            });
            leftBtn.addEventListener('click', event => {
              event.preventDefault();
              if (movingX !== 0) {
                movingX += oneMoving;
                selectList.style.transform = `translateX(${movingX}px)`;
                if (movingX === 0) {
                  leftBtn.classList.remove('active');
                }
              }
              if (movingX > maximumRight) {
                if (!rightBtn.classList.contains('active')) {
                  rightBtn.classList.add('active');
                }
              }
            });
          }
          setBackgroundTone = simulateBackground => {
            simulateBackground.forEach((e, i) => {
              if (i === 0) {
                selectList.insertAdjacentHTML(
                  'beforeend',
                  `            
                    <li class="active">
                      <img class="select-bg" src="${e.url}" alt="background-image-${i}">
                      <span>${e.space}</span>
                    </li>
                  `,
                );
              } else {
                selectList.insertAdjacentHTML(
                  'beforeend',
                  `            
                    <li>
                      <img class="select-bg" src="${e.url}" alt="background-image-${i}">
                      <span>${e.space}</span>
                    </li>
                  `,
                );
              }
            });
            virtualBackgroundList = document.querySelector('.background-selector__list').children;
            Array.from(virtualBackgroundList).forEach((e, i) => {
              e.addEventListener('click', event => {
                event.preventDefault();
                Array.from(virtualBackgroundList).forEach(e => {
                  e.classList.remove('active');
                });
                e.classList.add('active');
                virtualFrame.style.top = simulateBackground[i].top;
                virtualFrame.style.left = simulateBackground[i].left;
                virtualBackground.style.backgroundImage = `url(${simulateBackground[i].url})`;
                virtualFrame.style.width =
                  ((Number(artworkWidth.split('cm')[0]) * 37.8 * vitualBackgroundWidth) / 1000) *
                    simulateBackground[i].sizeRate +
                  'px';
                statusVirtualBackground.textContent = i + 1;
              });
            });
          };
          setBackgroundTone(simulateBackground_0);
          setStatusIdx();
          const toneList = document.querySelector('.tone-selector__list').children;
          Array.from(toneList).forEach((e, i) => {
            e.addEventListener('click', event => {
              event.preventDefault();
              Array.from(toneList).forEach(e => {
                e.classList.remove('active');
              });
              e.classList.add('active');
              selectList.innerHTML = '';
              setBackgroundTone(simulateBackgroundList[i]);
              virtualFrame.style.top = simulateBackgroundList[i][0].top;
              virtualFrame.style.left = simulateBackgroundList[i][0].left;
              virtualBackground.style.backgroundImage = `url(${simulateBackgroundList[i][0].url})`;
              virtualFrame.style.width =
                ((Number(artworkWidth.split('cm')[0]) * 37.8 * vitualBackgroundWidth) / 1000) *
                  simulateBackgroundList[i][0].sizeRate +
                'px';
              setStatusIdx();
            });
          });
          const virtualBackground = document.querySelector('.virtual-background'),
            virtualFrame = document.getElementById('virtualFrame'),
            vitualBackgroundWidth = virtualBackground.clientWidth;

          // 작품 걸어보기 작품 크기
          virtualFrame.style.width =
            ((Number(artworkWidth.split('cm')[0]) * 37.8 * vitualBackgroundWidth) / 1000) *
              simulateBackgroundList[0][0].sizeRate +
            'px';
        } catch (e) {}
      } else {
        purchaseImgList.insertAdjacentHTML(
          'beforeend',
          `
            <li>
              <img src="/SkinImg/img/detail/product_detail_${e.path}.png" alt="${e.alt}" />
            </li>
          `,
        );
      }
    });
  };
  purchaseInfoAccordion = () => {
    const purchaseInfoText = [
      {
        title: '상품결제정보',
        description: `
          <ul>
            <li>
              <span></span>            
              <span>
                고액 결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인 과정에서 도난 카드의 사용이나 타인 명의의 주문 등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
              </span>
            </li>          
          </ul>
        `,
      },
      {
        title: '배송정보',
        description: `
          <ul>
            <li>
              <span>배송 방법 &#58;</span>
              <span>택배</span>
            </li>
            <li>
              <span>배송 지역 &#58;</span>
              <span>전국지역</span>
            </li>
            <li>
              <span>배송 비용 &#58;</span>
              <span>무료</span>
            </li>
            <li>
              <span>배송 기간 &#58;</span>
              <span>7일(영업일 기준)</span>
            </li>
            <li>
              <span>배송 안내 &#58;</span>
              <span>컬렉터 2030의 작품은 <strong>모두 원작 및 100% 수작업 상품</strong>으로, 배송 기간은 대략 7일(영업일 기준) 예상 해주셔야 합니다. 하지만, 빠른 배송을 원하실 경우 미리 상담을 통해 최대한 조율하여 빠른 시일 내에 보내드리고 있습니다.</span>
            </li>
            <li>
              <strong class="delivery-refer">&#42; 예상 배송기간보다 길어질 경우 별도의 유선 안내 드리고 있습니다.</strong>
            </li>
          </ul>
        `,
      },
      {
        title: '교환 및 반품정보',
        description: `
          <ul>
            <li>
              <span></span>
              <span>
                &#45;&#32;컬렉터 2030의 모든 작품은 예술품 특성상 주문자의 동의 후 제작 및 발송되는 수공예 작품으로 <strong>단순 변심으로 인한 교환이나 환불은 불가</strong>합니다.
              </span>
            </li>
            <li>
              <span></span>
              <span>
                &#45;&#32;작품 불량으로 인한 교환/반품 신청의 경우 배송비는 무료입니다. (반품 시 고객 임의 발송으로 작품 분실 및 훼손의 경우 반품 및 교환이 불가 합니다.)
              </span>
            </li>
            <li>
              <span></span>
              <span>
                &#45;&#32;수령하신 작품이 불량인 경우, 확인이 가능하도록 사진을 포함하여 고객센터로 연락 주시면 확인 후 신속한 답변 도와드리겠습니다.
              </span>
            </li>
            <li>
              <span></span>
              <span>
                &#45;&#32;고객 부주의로 인한 작품의 손상 및 훼손, 포장 상태, 동봉품에 하자나 누락이 있거나 작품을 사용한 경우에는 반품 및 교환이 불가합니다.
              </span>
            </li>
            <li>
              <span></span>
              <span>
                &#45;&#32;배송정보(연락처/주소)가 올바르게 기재되지 않을 경우 배송이 지연되거나 반송될 수 있으므로 정확한 정보를 기재해 주시기 바라며, 이로 발생한 반송의 경우 배송비가 부과될 수 있습니다.
              </span>
            </li>
          </ul>
        `,
      },
    ];
    document.querySelector('.productDetail').insertAdjacentHTML(
      'beforeend',
      `
      <div class='purchase-info-box'>
        <ul class="purchase-info-list">
        </ul>
      </div>
    `,
    );
    const purchaseInfoList = document.querySelector('.purchase-info-list');
    purchaseInfoText.forEach((e, i) => {
      purchaseInfoList.insertAdjacentHTML(
        'beforeend',
        `
          <li class="purchase-info-item__box">
            <div class="purchase-info-item">
              <span class="purchase-info-title">
                ${e.title}
              </span>
            </div>
            <div class="purchase-info-item__description">
              <span class="description-space">
                ${e.description}
              </span>
            </div>
          </li>
      `,
      );
    });
    $(function () {
      // accodian
      $('.purchase-info-item').click(function () {
        // 타이틀 영역 active 클래스 제거
        $('.purchase-info-item').not($(this)).removeClass('active');
        // 클릭한 요소의 타이틀영역 active 토글
        $(this).toggleClass('active');

        // 클릭한 요소 제외는 slideUp
        $('.purchase-info-item__description').not($(this).siblings()).slideUp();
        // 클릭한 요소는 slideToggle
        $(this).siblings().slideToggle();
      });
    });
  };
  purchaseInfoImg();
  purchaseInfoAccordion();

  // json 저장용
  // const artistName = document.querySelector('.infoArea table tbody tr:nth-of-type(2) td');
  // let makeJson = {
  //   name: artistName.textContent,
  //   prdName: [],
  //   prdUrl: [],
  //   prdImg: [],
  //   prdAlt: [],
  //   prdPrice: [],
  // };
  // const ids = document.querySelectorAll('.prdList__item');
  // console.log(ids.length);
  // ids.forEach((e, i) => {
  //   makeJson['prdName'].push(e.querySelector('.description .name > a').textContent);
  //   makeJson['prdUrl'].push(e.querySelector('.thumbnail > a').getAttribute('href'));
  //   makeJson['prdImg'].push(e.querySelector('.thumbnail > a >img').getAttribute('src'));
  //   makeJson['prdAlt'].push(e.querySelector('.thumbnail > a >img').getAttribute('alt'));
  //   makeJson['prdPrice'].push(e.querySelector('.description .prdPrice').textContent);
  //   if (i + 1 === ids.length) {
  //     let json = JSON.stringify(makeJson);
  //     alert(json);
  //   }
  // });
});
