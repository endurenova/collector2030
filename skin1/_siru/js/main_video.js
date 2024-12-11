const deviceWidth = window.innerWidth;
setTimeout(() => {
  console.log(document.getElementById("content_IFRAME").nextElementSibling);
  document.getElementById("content_IFRAME").insertAdjacentHTML(
    "afterend",
    `
      <textarea class="fr-code" tabindex="-1" dir="ltr" rows="1" style="min-height: 400px; height: 400px;"></textarea>
    `
  );
}, 1000);
console.log(deviceWidth);
