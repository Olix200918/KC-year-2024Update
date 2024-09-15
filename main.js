const moreButton = document.getElementById('more');
const moreInfo = document.getElementById('moreInfo');

// نضيف حدث عند الضغط على الزر
moreButton.addEventListener('click', () => {
  // نقلب قيمة خاصية display للعنصر
  moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
});