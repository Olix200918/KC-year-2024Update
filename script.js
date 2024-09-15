
// تعريف الأزرار
const addBtn = document.getElementById('addBtn');
const formContainer = document.getElementById('formContainer');
const result = document.getElementById('result');
const containerDiv = document.getElementById("divsContainer");
const hidebtn = document.getElementById('hide');



// اكثر كود مريح للعين
const coderData = [{
name: 'عبدالمحسن',
speciality: 'مبرمج مواقع',
prgrf: 'سنه في هذا المجال وأخذت المركز الأول في أكادميه كوديد',
number: '56582003',
},{
name:'ادم',
speciality:'مبرمج العاب',
prgrf:'سنين في هذا المجال وله خبره بأكثر من لغه',
number:'65916331',
},{
name:'محمد خاجه',
speciality:'مبرمج تطبيقات',
prgrf:'برمج اهم برنامج في الكويت (سهل)',
number:'12345678',
},]; 


// شسمه عشان يشتغل الزائد
addBtn.addEventListener('click', () => {
  formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
});
// شسمه عشان الأكس يشتغل
hidebtn.addEventListener('click', () => {
  formContainer.style.display = 'none';
});
// اخس كود
// زر تنفيذ المعلومات المتسجله
function submitData() {
    // تعريف الأنبوتس
  const name = document.getElementById('name').value;
  const speciality = document.getElementById('codersType').value;
  const prgrf = document.getElementById('prgrf').value;
  const number = document.getElementById('number').value;


// اضافه للأراي
  coderData.push({
    name,
    speciality,
    prgrf,
    number,
  });

//   عشان بعد ما ارسل يروح مربع المعلومات
  renderCoders(); 

  formContainer.style.display = 'none';
}


// مربع الاضافه
function renderCoders(filterType = 'all') {
  containerDiv.innerHTML = ''; 

  coderData.forEach(coder => {
    // لأضافه فلتر
    if (filterType === 'all' || coder.speciality === filterType) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-item');
// عشان يطلع الشكل نفس الcss
    newDiv.innerHTML = `
    <div class="new">
      <img style="width: 50px;" src="./WWUdFg2HnuAfKbqDgtsv--1--cv6ci.jpg">
      <h1><strong></strong> ${coder.name}</h1>
      <h1><strong></strong> ${coder.speciality}</h1>
      <p><strong></strong> ${coder.prgrf}</p>
      <h2><strong>+965</strong> ${coder.number}</h2>
    </div>
    `;

    containerDiv.appendChild(newDiv);
    }
  });
}
// فلتر الصفحه الرئيسيه
document.getElementById('allDivs').addEventListener('click', () => {
  renderCoders('all');
});
// فلتر المواقع
document.getElementById('wepDevalpor').addEventListener('click', () => {
  renderCoders('مبرمج مواقع');
});
// فلتر التطبيقات
document.getElementById('programDevalpor').addEventListener('click', () => {
  renderCoders('مبرمج تطبيقات');
});
// فلتر الألعاب
document.getElementById('gameDevalpr').addEventListener('click', () => {
  renderCoders('مبرمج العاب');
});

renderCoders();

