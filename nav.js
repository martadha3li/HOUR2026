// أضف هذا الكود في أي صفحة تريد ظهور القائمة فيها
const navHTML = `
    <nav style="background:#333; padding:10px; margin-bottom:20px;">
        <a href="admin.html" style="color:white; margin:0 10px;">الإدارة</a>
        <a href="finance.html" style="color:white; margin:0 10px;">المالية</a>
        <a href="bookings.html" style="color:white; margin:0 10px;">السجل الكامل</a>
        <a href="daily.html" style="color:white; margin:0 10px;">اليوم والغد</a>
    </nav>
`;
document.getElementById('nav-placeholder').innerHTML = navHTML;
