document.addEventListener('DOMContentLoaded', () => {
  let iframeBody = document.getElementById('content_IFRAME').contentWindow.document.getElementById('content_BODY');
  setTimeout(() => {
    console.log(document.getElementById('content_IFRAME').nextElementSibling);
    document.getElementById('content_IFRAME').insertAdjacentHTML(
      'afterend',
      `
        <textarea class="fr-code" tabindex="-1" dir="ltr" rows="1" style="min-height: 400px; height: 400px;"></textarea>
      `,
    );
    document.getElementById('moreMisc-1').click();
    setTimeout(() => {
      document.getElementById('html-1').click();
    }, 1000);
  }, 1000);

  var inquiryForm = document.querySelector('.partnership-inquiry');
  let inquirySelectCategory = document.getElementById('inquiryCategory');
  let inquiryNameInput = document.getElementById('clientName');
  let inquiryPhoneInput = document.getElementById('clientPhone');
  let inquiryEmailInput = document.getElementById('emailId');
  let inquiryDominInput = document.getElementById('domainAddress');
  let inquiryEmail = inquiryEmailInput.value + '@' + inquiryDominInput.value;
  let inquiryTextInput = document.getElementById('inquiryText');
  let selectDomain = document.getElementById('domainSelect');
  let privacyAgree = document.getElementById('privacyAgree');
  let privacyDisgree = document.getElementById('privacyDisagree');
  let privacyStatus = document.querySelector('.privacyCheck input[type="radio"]:checked').value;
  selectDomain.addEventListener('change', event => {
    event.preventDefault();
    inquiryDominInput.value = selectDomain.options[selectDomain.selectedIndex].value;
  });

  privacyAgree.addEventListener('change', event => {
    event.preventDefault();
    if (event.target.checked === true) {
      privacyDisgree.checked = false;
    }
  });
  privacyDisgree.addEventListener('change', event => {
    event.preventDefault();
    if (event.target.checked === true) {
      privacyAgree.checked = false;
    }
  });

  const domainRegexp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  document.getElementById('inquirySubmit').addEventListener('click', event => {
    event.preventDefault();
    mustInputToggle = selectEle => {
      let mustInput = selectEle.closest('li').nextElementSibling;
      selectEle.focus();
      mustInput.classList.add('active');
      selectEle.addEventListener('change', event => {
        event.preventDefault();
        if (selectEle.value !== '') {
          mustInput.classList.remove('active');
        }
      });
    };
    mustInputToggleCol = selectEle => {
      let mustInput = selectEle.closest('li').querySelector('.input-notice');
      selectEle.focus();
      mustInput.classList.add('active');
      selectEle.addEventListener('change', event => {
        event.preventDefault();
        if (selectEle.value !== '') {
          mustInput.classList.remove('active');
        }
      });
    };

    if (inquirySelectCategory.value == '') {
      mustInputToggle(inquirySelectCategory);
      return false;
    }
    if (inquiryNameInput.value == '') {
      mustInputToggle(inquiryNameInput);
      return false;
    }
    if (inquiryEmailInput.value == '') {
      mustInputToggle(inquiryEmailInput);
      return false;
    }
    if (inquiryDominInput.value == '' || !domainRegexp.test(inquiryDominInput.value)) {
      mustInputToggle(inquiryDominInput);
      return false;
    }
    if (inquiryTextInput.value == '') {
      mustInputToggleCol(inquiryTextInput);
      return false;
    }
    if (privacyAgree.checked == false) {
      mustInputToggleCol(privacyAgree);
      return false;
    }

    inquiryEmail = inquiryEmailInput.value + '@' + inquiryDominInput.value;
    const inquiryPostcode = document.getElementById('postcode');
    const inquiryAdressMain = document.getElementById('addressMain');
    const inquiryAdressSub = document.getElementById('addressSub');
    let inquiryAdress = '';
    if (inquiryPostcode.value !== '') {
      inquiryAdress += `${inquiryPostcode.value}&#32;`;
      inquiryAdress += inquiryAdressMain.value;
      if (inquiryAdressSub.value !== '') {
        inquiryAdress += `&#32;${inquiryAdressSub.value}`;
      }
    }
    const clientType = inquirySelectCategory.value;
    const clientName = inquiryNameInput.value;
    const clientPhoneNumber = inquiryPhoneInput.value;
    const clientEmailAddress = inquiryEmail;
    const clientAddress = inquiryAdress;
    const clientText = inquiryTextInput.value;
    const inquiryDataValue = `
        <div class='inquiry-read__wrap'>
          <ul>
            <li>
              <span>카테고리</span>
              <span>${clientType}</span>
            </li>
            <li>
              <span>성 함</span>
              <span>${clientName}</span>
            </li>
            <li>
              <span>연락처</span>
              <span>${clientPhoneNumber}</span>
            </li>
            <li>
              <span>이메일</span>
              <span>${clientEmailAddress}</span>
            </li>
            <li>
              <span>주 소</span>
              <span>${clientAddress}</span>
            </li>
            <li>
              <span>문의내용</span>
              <span>${clientText}</span>
            </li>
          </ul>
        
      `;
    if (confirm('제출하시겠습니까?')) {
      document.getElementById('subject').value = `[${clientName}]님이 ${clientType} 분야에 지원하였습니다.`;
      iframeBody.innerHTML = inquiryDataValue;
      applyContentToFroala(inquiryDataValue);
      BOARD_WRITE.form_submit('boardWriteForm');
      alert('정상적으로 접수되었습니다.\n최대한 빠른 시일 내에 연락 드리겠습니다.');
      location.href = '/index.html';
    } else {
    }
  });
});
