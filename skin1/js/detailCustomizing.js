document.addEventListener('DOMContentLoaded', () => {
  try {
    const artistName = document.querySelector('.infoArea table tbody tr:nth-of-type(2) td');
    const relatedProducts = document.querySelector('.relation_title');
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
          const arttistName = document.querySelector('tr:nth-of-type(1) .xl63').textContent;
          const artworkTitle = document.querySelector('tr:nth-of-type(2) .xl64').textContent;
          const releaseDate = document.querySelector('tr:last-of-type .xl64').textContent;
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
          `,
          );
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
