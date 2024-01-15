document.addEventListener('DOMContentLoaded', () => {
  try {
    const artistName = document.querySelector('.infoArea table tbody tr:nth-of-type(2) td'),
      relatedProducts = document.querySelector('.relation_title');
    relatedProducts.innerHTML = `<span class="artist_relation_artworks">${artistName.textContent}의 다른 작품</span>`;
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
        },
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-1.jpg',
          space: '침실',
          top: '30%',
          left: '30%',
        },
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-2.jpg',
          space: '다이닝룸',
          top: '30%',
          left: '30%',
        },
        {
          url: '/SkinImg/img/simulate/0-simulate_bg-thumbnail-3.jpg',
          space: '방',
          top: '25%',
          left: '35%',
        },
      ],
      simulateBackground_1 = [
        {
          url: '/SkinImg/img/simulate/1-simulate_bg-thumbnail-0.jpg',
          space: '방 1',
          top: '25%',
          left: '55%',
        },
        {
          url: '/SkinImg/img/simulate/1-simulate_bg-thumbnail-1.jpg',
          space: '방 2',
          top: '25%',
          left: '50%',
        },
        {
          url: '/SkinImg/img/simulate/1-simulate_bg-thumbnail-2.jpg',
          space: '거실',
          top: '25%',
          left: '50%',
        },
      ],
      simulateBackground_2 = [
        {
          url: '/SkinImg/img/simulate/simulate_bg-thumbnail-0.jpg',
          space: '거실 1',
          top: '30%',
          left: '50%',
        },
        {
          url: '/SkinImg/img/simulate/simulate_bg-thumbnail-1.jpg',
          space: '침실',
          top: '30%',
          left: '30%',
        },
        {
          url: '/SkinImg/img/simulate/simulate_bg-thumbnail-2.jpg',
          space: '다이닝룸',
          top: '30%',
          left: '30%',
        },
        {
          url: '/SkinImg/img/simulate/simulate_bg-thumbnail-3.jpg',
          space: '방',
          top: '25%',
          left: '35%',
        },
      ],
      simulateBackground_3 = [
        {
          url: '/SkinImg/img/simulate/simulate_bg-thumbnail-0.jpg',
          space: '거실 1',
          top: '30%',
          left: '50%',
        },
        {
          url: '/SkinImg/img/simulate/simulate_bg-thumbnail-1.jpg',
          space: '침실',
          top: '30%',
          left: '30%',
        },
        {
          url: '/SkinImg/img/simulate/simulate_bg-thumbnail-2.jpg',
          space: '다이닝룸',
          top: '30%',
          left: '30%',
        },
        {
          url: '/SkinImg/img/simulate/simulate_bg-thumbnail-3.jpg',
          space: '방',
          top: '25%',
          left: '35%',
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
          const arttistName = document.querySelector('tr .td-artist').textContent,
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
                          <span class="tone-name">Achromatic</span>
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
                <p>${arttistName}&#32;&#47;&#32;${releaseDate}</p>
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
          const selectList = document.querySelector('.background-selector__list'),
            statusVirtualBackground = document.querySelector('.status-idx'),
            totalVirtualBackground = document.querySelector('.total-idx');
          let virtualBackgroundList;
          setStatusIdx = () => {
            statusVirtualBackground.textContent = 1;
            totalVirtualBackground.textContent = virtualBackgroundList.length;
          };
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
              virtualBackground.style.backgroundImage = `url(${simulateBackgroundList[i][0].url})`;
              setStatusIdx();
            });
          });
          const virtualBackground = document.querySelector('.virtual-background'),
            virtualFrame = document.getElementById('virtualFrame'),
            vitualBackgroundWidth = virtualBackground.clientWidth;

          // 작품 걸어보기 작품 크기
          // virtualFrame.style.width = (Number(artworkWidth.split('cm')[0]) * 37.8) / 30 + 'px';
          // console.log((Number(artworkWidth.split('cm')[0]) * 37.8) / 30 + 'px');
          virtualFrame.style.width =
            (Number(artworkWidth.split('cm')[0]) * 37.8) / (vitualBackgroundWidth * 0.06) + 'px';

          if (window.innerWidth > 767) {
            let movingX = 0;
            const oneMoving = 152;
            const maximumRight = (virtualBackgroundList.length - 3) * -oneMoving; // 3 = showing item, 152 = item width(140) + marginRight(10 * 2) + border(2)
            const leftBtn = document.querySelector('.bgs-left');
            const rightBtn = document.querySelector('.bgs-right');

            rightBtn.addEventListener('click', event => {
              event.preventDefault();
              if (movingX > maximumRight) {
                movingX -= oneMoving;
                selectList.style.transform = `translateX(${movingX}px)`;
                if (movingX === maximumRight) {
                  rightBtn.classList.remove('active');
                }
              }
              if (movingX !== 0) {
                if (!leftBtn.classList.contains('active')) {
                  leftBtn.classList.add('active');
                }
              }
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
    // const detailInfo_1 = purchaseImgList.querySelector('li:nth-of-type(2)');
    // detailInfo_1.insertAdjacentHTML(
    //   'beforeend',
    //   `
    //   <div class="artwork-simple-info">
    //     <h1>${artworkTitle}</h1>
    //     <p>${arttistName}&#32;&#47;&#32;${releaseDate}</p>
    //   </div>
    // `,
    // );
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
    detailArea.insertAdjacentHTML(
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
});

// <div class="artwork-detail-left-section">
//   <h3 class="artwork-detail-left-section-title">작품 걸어보기</h3>
//   <div class="artwork-detail-viewinroom">
//     <div class="artwork-detail-viewinroom-left">
//       <div
//         class="artwork-detail-viewinroom-view"
//         style="
//           background-image: url('https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/view_in_room_n_10.png');
//           background-color: rgb(245, 245, 245);
//         "
//       >
//         <img
//           src="https://og-data.s3.amazonaws.com/media/artworks/half/A1400/A1400-0538.jpg"
//           class="artwork-detail-viewinroom-view-img show"
//           style="
//             width: 15.9159%;
//             transform: translate3d(-38px, -32.5px, 0px);
//             cursor: move;
//             touch-action: none;
//             user-select: none;
//           "
//         />
//         <div class="artwork-detail-viewinroom-view-foreground"></div>
//       </div>
//     </div>
//     <div class="artwork-detail-viewinroom-right mode-color">
//       <div class="artwork-detail-viewinroom-tab-menu">
//         <button type="button" class="artwork-detail-viewinroom-tab-menu-button-space">공간</button>
//         <button type="button" class="artwork-detail-viewinroom-tab-menu-button-color">배경색</button>
//       </div>
//       <h4 class="artwork-detail-viewinroom-h4">공간</h4>
//       <div class="artwork-detail-viewinroom-spaces">
//         <div class="artwork-detail-viewinroom-spaces-carousel owl-carousel owl-loaded owl-drag">
//           <div class="owl-stage-outer">
//             <div
//               class="owl-stage"
//               style="transform: translate3d(-611px, 0px, 0px); transition: all 0s ease 0s; width: 1748px"
//             >
//               <div class="owl-item" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item"
//                   data-index="0"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_1.jpg);
//                   "
//                 >
//                   거실 1
//                 </div>
//               </div>
//               <div class="owl-item" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item"
//                   data-index="1"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_2.jpg);
//                   "
//                 >
//                   거실 2
//                 </div>
//               </div>
//               <div class="owl-item" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item"
//                   data-index="2"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_3.jpg);
//                   "
//                 >
//                   침실
//                 </div>
//               </div>
//               <div class="owl-item" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item"
//                   data-index="3"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_4.jpg);
//                   "
//                 >
//                   다이닝룸
//                 </div>
//               </div>
//               <div class="owl-item" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item"
//                   data-index="4"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_5.jpg);
//                   "
//                 >
//                   아이방
//                 </div>
//               </div>
//               <div class="owl-item" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item"
//                   data-index="5"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_6.jpg);
//                   "
//                 >
//                   복도 1
//                 </div>
//               </div>
//               <div class="owl-item" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item"
//                   data-index="6"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_7.jpg);
//                   "
//                 >
//                   복도 2
//                 </div>
//               </div>
//               <div class="owl-item active" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item"
//                   data-index="7"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_8.jpg);
//                   "
//                 >
//                   라운지
//                 </div>
//               </div>
//               <div class="owl-item active" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item"
//                   data-index="8"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_9.jpg);
//                   "
//                 >
//                   오피스 1
//                 </div>
//               </div>
//               <div class="owl-item active" style="width: 79.333px; margin-right: 8px">
//                 <div
//                   class="artwork-detail-viewinroom-spaces-item selected"
//                   data-index="9"
//                   style="
//                     background-image: url(https://og-data.s3.amazonaws.com/static/pages/img/service/viewinroom/thumb/view_in_room_n_10.jpg);
//                   "
//                 >
//                   오피스 2
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="owl-nav">
//             <button type="button" role="presentation" class="owl-prev"></button
//             ><button type="button" role="presentation" class="owl-next disabled"></button>
//           </div>
//           <div class="owl-dots disabled"></div>
//         </div>
//         <div class="artwork-detail-viewinroom-spaces-counter">
//           <span class="artwork-detail-viewinroom-spaces-counter-selected">10</span> / 10
//         </div>
//       </div>

//       <h4 class="artwork-detail-viewinroom-h4">배경색</h4>
//       <div class="artwork-detail-viewinroom-colors">
//         <div
//           class="artwork-detail-viewinroom-colors-item selected"
//           style="background-color: #f5f5f5"
//           data-name="white"
//         ></div>
//         <div
//           class="artwork-detail-viewinroom-colors-item"
//           style="background-color: #e6e6e6"
//           data-name="light-grey"
//         ></div>
//         <div class="artwork-detail-viewinroom-colors-item" style="background-color: #ebe8d3" data-name="ivory"></div>
//         <div
//           class="artwork-detail-viewinroom-colors-item"
//           style="background-color: #c6d2d9"
//           data-name="light-blue"
//         ></div>
//         <div
//           class="artwork-detail-viewinroom-colors-item dark"
//           style="background-color: #acacab"
//           data-name="grey"
//         ></div>
//         <div class="artwork-detail-viewinroom-colors-item dark" style="background-color: #8c110d" data-name="red"></div>
//         <div
//           class="artwork-detail-viewinroom-colors-item dark"
//           style="background-color: #202020"
//           data-name="dark-grey"
//         ></div>
//       </div>
//     </div>
//   </div>
// </div>
