function calculateAge() {
  const birth = document.getElementById('birth').value.trim();
  const result = document.getElementById('result');
  const parts = birth.split('/');
  if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
    result.textContent = 'لطفاً تاریخ را درست وارد کن (مثلاً 1385/04)';
    return;
  }
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);

  // تبدیل تقریبی شمسی به میلادی
  const jalaliMonthNames = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
  const gregorianMonthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const monthMap = [3,4,5,6,7,8,9,10,11,0,1,2]; // فروردین=April(3)، تیر=July(6)، ...

  const gYear = year + 621;
  const gMonth = monthMap[month-1];
  const now = new Date();
  const currentYearG = now.getFullYear();
  const currentMonthG = now.getMonth();

  let age = currentYearG - gYear;
  if (currentMonthG < gMonth) age--;

  result.innerHTML = `
    <div>تولد: ${jalaliMonthNames[month-1]} ${year}</div>
    <div>الان: ${gregorianMonthNames[currentMonthG]} ${currentYearG} میلادی</div>
    <div>سن: ${age} سال</div>
  `;
  }
