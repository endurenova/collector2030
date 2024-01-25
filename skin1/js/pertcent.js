// skillLoading = () => {
//   const counter = ($counter, max) => {
//     var i = 0;
//     setTimeout(() => {
//       const handle = setInterval(() => {
//         if (i <= max) {
//           $counter.innerHTML = `<span style="width: 150px; text-align: right;">${Math.ceil(i).toLocaleString(
//             'ko-KR',
//           )}</span><span>원</span>`;
//           i += 1000000;
//         } else {
//           clearInterval(handle); // 목표수치에 도달하면 정지
//         }
//       }, 1);
//     }, 100);
//   };
//   const $counter = document.querySelector('.test'); // 카운트를 적용시킬 요소
//   const max = 300000000; // 목표 수치
//   setTimeout(() => counter($counter, max), 1);
// };
