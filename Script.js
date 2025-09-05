let currentLang = "ar";
let isDark = false;

// بيانات تسجيل الدخول (تجريبية)
const validUser = { username: "admin", password: "1234" };

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("loginError");

  if (user === validUser.username && pass === validUser.password) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("homePage").classList.remove("hidden");
    error.textContent = "";
  } else {
    error.textContent = currentLang === "ar" ? "خطأ في تسجيل الدخول" : "Login failed";
  }
}

function openPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

// تبديل اللغة
function toggleLanguage() {
  if (currentLang === "ar") {
    currentLang = "en";
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";

    document.getElementById("title").textContent = "Ministry of Agriculture App";
    document.getElementById("loginTitle").textContent = "Login";
    document.getElementById("username").placeholder = "Username";
    document.getElementById("password").placeholder = "Password";
    document.getElementById("loginBtn").textContent = "Login";
    document.getElementById("welcome").textContent = "Welcome!";
    document.getElementById("ordersBtn").textContent = "Orders";
    document.getElementById("cartBtn").textContent = "Cart";
    document.getElementById("uploadBtn").textContent = "Upload Documents";
    document.getElementById("assistantBtn").textContent = "Smart Assistant";
    document.getElementById("langBtn").textContent = "عربي";
  } else {
    currentLang = "ar";
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";

    document.getElementById("title").textContent = "تطبيق وزارة الزراعة";
    document.getElementById("loginTitle").textContent = "تسجيل الدخول";
    document.getElementById("username").placeholder = "اسم المستخدم";
    document.getElementById("password").placeholder = "كلمة المرور";
    document.getElementById("loginBtn").textContent = "دخول";
    document.getElementById("welcome").textContent = "أهلاً بك!";
    document.getElementById("ordersBtn").textContent = "الطلبات";
    document.getElementById("cartBtn").textContent = "سلة المشتريات";
    document.getElementById("uploadBtn").textContent = "رفع المستندات";
    document.getElementById("assistantBtn").textContent = "المساعد الذكي";
    document.getElementById("langBtn").textContent = "English";
  }
}

// تبديل الوضع المظلم والضوئي
function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle("dark", isDark);
  document.getElementById("themeBtn").textContent = isDark ? "☀️" : "🌙";
                            }
