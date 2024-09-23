document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });
});
function updateContent(lang) {
  if (lang === "ar") {
    document.body.style.display = "block";
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");
    document.body.style.textAlign = "right"; // محاذاة النص لليمين
  } else {
    document.body.style.display = "block";
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    document.body.style.textAlign = "left"; // محاذاة النص لليسار
  }
}

// الحدث لزر اللغة الإنجليزية
document
  .getElementById("lang-en")
  .addEventListener("click", () => updateContent("en"));
// الحدث لزر اللغة العربية
document
  .getElementById("lang-ar")
  .addEventListener("click", () => updateContent("ar"));

// تعيين اللغة الافتراضية
updateContent("ar"); // أو "en" حسب اللغة الافتراضية التي تريدها

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove 'active' class from all links
      navLinks.forEach((nav) => nav.classList.remove("active"));
      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  });
});
// اختيار جميع الروابط في الفوتر
const footerLinks = document.querySelectorAll(".footer-link");

// إضافة حدث للنقر على كل رابط
footerLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // إزالة الـ active class من جميع الروابط
    footerLinks.forEach((link) => link.classList.remove("active"));

    // إضافة الـ active class للرابط الذي تم النقر عليه
    this.classList.add("active");
  });
});
