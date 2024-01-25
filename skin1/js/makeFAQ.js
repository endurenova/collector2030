document.addEventListener('DOMContentLoaded', () => {
  const checkFAQ = document.querySelector('.path li strong');
  try {
    if (checkFAQ.textContent == 'FAQ') {
      const FAQTable = document.querySelector('.ec-base-table.typeList');
      const searchArea = document.querySelector('#boardSearchForm');
      const writeBtn = document.querySelector('.ec-base-button.gBottom');
      searchArea.classList.add('hidden');
      writeBtn.classList.add('hidden');

      FAQTable.innerHTML = `
        <table class="faq-table" border="1">
          <caption>
              게시판 목록
          </caption>
          <colgroup>
            <col style="width: 80px">
            <col style="width: 10%">
            <col style="width: 90%">
          </colgroup>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">구분</th>
              <th scope="col">제목</th>
            </tr>
          </thead>
        </table>
        <ul class="faq-list"></ul>
      `;

      const FAQText = [
        {
          type: '배송',
          question: '배송 안내',
          answer: `
          <span>
            컬렉터 2030의 작품은 <span class="accent">모두 원작 및 100% 수작업 상품으로, 배송기간은 대락 7일(영업일 기준)</span> 예상 해주셔야 합니다. 
            하지만, 빠른 배송을 원하실 경우 미리 상담을 통해 최대한 조율하여 빠른 시일내에 보내드리고 있습니다. 
          </span>
          <span>
            <span class="accent">&#42; 예상 배송기간보다 길어질 경우 별도의 유선안내 드리고 있습니다.</span>
          </span>
          `,
        },
        {
          type: '주문',
          question: '주문 결제 후, 취소 가능 여부',
          answer: `
          <span>
            컬렉터 2030의 모든 작품은 결제 후, <span class="accent">당일까지만 주문 취소가 가능</span>하며 예술품 특성상 모든 작품이 <span class="accent">1:1 수작업 제작 작품이기 때문에 당일이 지난 후 주문 취소는 불가</span>합니다.
          </span>
          `,
        },
        {
          type: '교환/환불',
          question: '단순 변심으로 인한 환불 규정',
          answer: `
          <span>
            <span class="accent">단순 변심으로 인한 교환이나 환불은 불가</span>하며, 해당 내용은 상세페이지 내에도 명시되어 있습니다. 말씀하신 소비자보호원 교환 환불 규정에도, 주문제작 작품은 예외로 규정되고 있으니 참고 바랍니다. 발송전 철저한 검수 후 발송이 되어 단순 변심으로 교환이나 환불이 어려운 점 양해 부탁드립니다.
          </span>
          `,
        },
        {
          type: '교환/환불',
          question: '작품 불량인 경우의 교환 및 환불 규정',
          answer: `
          <span>
            주문제작 상품 특성상 상세페이지 내에도 명시되어 있듯이 수작업 작품이기 때문에 조명 또는 해상도에 따른 색상 차이가 있을 수 있으며, 100% 사진과 일치는 불가능합니다. 
            구매하신 제품이 불량인 경우, 받으신 즉시 저희 컬렉터 2030 카카오톡으로 사진과 함께 보내주시면, 불량여부 확인 후 교환 또는 수정으로 진행 도와드리고 있습니다. 
            <span class="accent">수작업 작품 특성상 반품이 불가능하오니</span> 이점 참고해주시기 바랍니다. 
            불량이 확인 될 경우, 고객 배송비 부담 없이 택배사 수거접수를 도와드립니다. 
          </span>
          <span>
            &#42; 단, 액자의 특성상, 투명 비닐 포장 개봉은 사용으로 간주됩니다. 다시 포장해서 보내주실때 내장되어있던 비닐포장 및 뽁뽁이 자사의 박스가 없으실 경우 교환, 환불이 어려우실 수 있는 점 참고 부탁드립니다.
            입고 확인될 경우, 즉시 교환 또는 수정하여 재발송을 도와드립니다.
          </span>
          `,
        },
      ];
      const FAQList = document.querySelector('.faq-list');
      FAQText.forEach((e, i) => {
        FAQList.insertAdjacentHTML(
          'beforeend',
          `
        <li class="faq-item">
          <div class="faq-item__title">
            <span class="faq-title__type">${e.type}</span>
            <span class="faq-title__question">${e.question}</span>
          </div>
          <div class="faq-item__answer">
            <span class="answer-space">
              ${e.answer}
            </span>
          </div>
        </li>
        `,
        );
      });
    }
    // const FAQItems = document.querySelectorAll('.faq-item__title');
    // Array.from(FAQItems).forEach(e => {
    //   e.addEventListener('click', event => {
    //     event.preventDefault();
    //     e.classList.toggle('active');
    //     e.nextElementSibling.classList.toggle('active');
    //   });
    // });

    $(function () {
      // accodian
      $('.name-item__title, .faq-item__title').click(function () {
        // 타이틀 영역 active 클래스 제거
        $('.faq-item__title').not($(this)).removeClass('active');
        // 클릭한 요소의 타이틀영역 active 토글
        $(this).toggleClass('active');

        // 클릭한 요소 제외는 slideUp
        $('.name-item__answer, .faq-item__answer').not($(this).siblings()).slideUp();
        // 클릭한 요소는 slideToggle
        $(this).siblings().slideToggle();
      });
    });
  } catch (e) {}
});
