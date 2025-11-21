// validator.js - Form Validation Functions
// Thay thế thư viện Validator.js với các hàm validate phổ biến

/**
 * MỤC LỤC - DANH SÁCH HÀM VALIDATION
 *
 * 1. VALIDATION CƠ BẢN
 *    - isEmpty, isLength, equals, contains, startsWith, endsWith
 *
 * 2. KIỂM TRA CHUỖI
 *    - isAlpha, isAlphanumeric, isNumeric, isDigitsOnly
 *    - hasSpecialChar, hasNoWhitespace, normalizeWhitespace
 *    - isPalindrome, sanitizeHTML
 *
 * 3. KIỂM TRA SỐ
 *    - isInt, isFloat, isEven, isOdd
 *    - isPositive, isNegative, isInRange
 *
 * 4. KIỂM TRA EMAIL & URL
 *    - isEmail, isURL, isJSON
 *
 * 5. KIỂM TRA ĐIỆN THOẠI
 *    - isMobilePhone (VN), isPhoneInternational
 *
 * 6. KIỂM TRA NGÀY THÁNG & TUỔI
 *    - isDate, isValidAge
 *
 * 7. KIỂM TRA MẬT KHẨU & USERNAME
 *    - isStrongPassword, isUsername
 *
 * 8. KIỂM TRA DỮ LIỆU VIỆT NAM
 *    - isIDCardVN (CMND/CCCD), isTaxCodeVN, isPostalCodeVN
 *
 * 9. KIỂM TRA THẺ & TÀI CHÍNH
 *    - isCreditCard (Luhn algorithm)
 *
 * 10. KIỂM TRA MẢNG & OBJECT
 *     - isEmptyArray, isEmptyObject
 *
 * 11. KIỂM TRA ĐỊNH DẠNG KHÁC
 *     - isIP, isHexColor
 */

const validator = {
  // ============================================
  // 1. VALIDATION CƠ BẢN
  // ============================================

  // Kiểm tra chuỗi rỗng hoặc chỉ có khoảng trắng
  // isEmpty("  ") → true
  isEmpty(str) {
    return String(str || "").trim().length === 0;
  },

  // Kiểm tra độ dài chuỗi
  // isLength("hello", {min: 3, max: 10}) → true
  isLength(str, options = {}) {
    const len = String(str || "").length;
    const { min = 0, max = Infinity } = options;
    return len >= min && len <= max;
  },

  // Kiểm tra khớp với giá trị khác (confirm password)
  // equals("abc", "abc") → true
  equals(str, comparison) {
    return String(str || "") === String(comparison || "");
  },

  // Kiểm tra chứa chuỗi con
  // contains("hello world", "world") → true
  contains(str, seed) {
    return String(str || "").includes(String(seed || ""));
  },

  // Kiểm tra bắt đầu bằng
  // startsWith("hello", "hel") → true
  startsWith(str, prefix) {
    return String(str || "").startsWith(String(prefix || ""));
  },

  // Kiểm tra kết thúc bằng
  // endsWith("hello", "lo") → true
  endsWith(str, suffix) {
    return String(str || "").endsWith(String(suffix || ""));
  },

  // ============================================
  // 2. KIỂM TRA CHUỖI
  // ============================================

  // Kiểm tra chỉ chứa chữ cái
  // isAlpha("Hello") → true, isAlpha("Hello123") → false
  isAlpha(str) {
    return /^[a-zA-ZÀ-ỹ]+$/.test(String(str || ""));
  },

  // Kiểm tra chỉ chứa chữ và số
  // isAlphanumeric("Hello123") → true
  isAlphanumeric(str) {
    return /^[a-zA-Z0-9À-ỹ]+$/.test(String(str || ""));
  },

  // Kiểm tra chỉ chứa số
  // isNumeric("12345") → true
  isNumeric(str) {
    return /^\d+$/.test(String(str || ""));
  },

  // Kiểm tra chuỗi chỉ chứa chữ số
  // isDigitsOnly("123456") → true
  isDigitsOnly(str) {
    return /^\d+$/.test(String(str || ""));
  },

  // Kiểm tra chuỗi có chứa ký tự đặc biệt
  // hasSpecialChar("abc@123") → true
  hasSpecialChar(str) {
    return /[^a-zA-Z0-9\s]/.test(String(str || ""));
  },

  // Kiểm tra mật khẩu không chứa khoảng trắng
  // hasNoWhitespace("abc123") → true
  hasNoWhitespace(str) {
    return !/\s/.test(String(str || ""));
  },

  // Trim tất cả khoảng trắng thừa
  // normalizeWhitespace("  hello   world  ") → "hello world"
  normalizeWhitespace(str) {
    return String(str || "")
      .trim()
      .replace(/\s+/g, " ");
  },

  // Kiểm tra chuỗi palindrome (đọc xuôi ngược giống nhau)
  // isPalindrome("racecar") → true
  isPalindrome(str) {
    const cleaned = String(str || "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
  },

  // Sanitize HTML (loại bỏ thẻ HTML)
  // sanitizeHTML("<script>alert('xss')</script>") → "alert('xss')"
  sanitizeHTML(str) {
    return String(str || "").replace(/<[^>]*>/g, "");
  },

  // ============================================
  // 3. KIỂM TRA SỐ
  // ============================================

  // Kiểm tra số nguyên
  // isInt("123") → true, isInt("12.5") → false
  isInt(str) {
    return /^-?\d+$/.test(String(str || ""));
  },

  // Kiểm tra số thực
  // isFloat("12.5") → true
  isFloat(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  },

  // Kiểm tra số chẵn
  // isEven(4) → true, isEven(5) → false
  isEven(num) {
    return Number(num) % 2 === 0;
  },

  // Kiểm tra số lẻ
  // isOdd(5) → true, isOdd(4) → false
  isOdd(num) {
    return Number(num) % 2 !== 0;
  },

  // Kiểm tra số dương
  // isPositive(5) → true, isPositive(-5) → false
  isPositive(num) {
    return Number(num) > 0;
  },

  // Kiểm tra số âm
  // isNegative(-5) → true, isNegative(5) → false
  isNegative(num) {
    return Number(num) < 0;
  },

  // Kiểm tra trong khoảng min-max
  // isInRange(5, {min: 1, max: 10}) → true
  isInRange(value, options = {}) {
    const num = Number(value);
    const { min = -Infinity, max = Infinity } = options;
    return !isNaN(num) && num >= min && num <= max;
  },

  // ============================================
  // 4. KIỂM TRA EMAIL & URL
  // ============================================

  // Kiểm tra email hợp lệ
  // isEmail("test@gmail.com") → true
  isEmail(str) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(String(str || ""));
  },

  // Kiểm tra URL hợp lệ
  // isURL("https://google.com") → true
  isURL(str) {
    try {
      const url = new URL(String(str || ""));
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  },

  // Kiểm tra JSON hợp lệ
  // isJSON('{"name":"John"}') → true
  isJSON(str) {
    try {
      JSON.parse(str);
      return true;
    } catch {
      return false;
    }
  },

  // ============================================
  // 5. KIỂM TRA ĐIỆN THOẠI
  // ============================================

  // Kiểm tra số điện thoại Việt Nam
  // isMobilePhone("0912345678") → true
  isMobilePhone(str) {
    const pattern = /^(\+84|84|0)(3|5|7|8|9)\d{8}$/;
    return pattern.test(String(str || "").replace(/\s/g, ""));
  },

  // Kiểm tra số điện thoại quốc tế (E.164)
  // isPhoneInternational("+84912345678") → true
  isPhoneInternational(str) {
    return /^\+[1-9]\d{1,14}$/.test(String(str || "").replace(/\s/g, ""));
  },

  // ============================================
  // 6. KIỂM TRA NGÀY THÁNG & TUỔI
  // ============================================

  // Kiểm tra ngày hợp lệ (ISO 8601: YYYY-MM-DD)
  // isDate("2025-11-21") → true
  isDate(str) {
    const date = new Date(str);
    return date instanceof Date && !isNaN(date.getTime());
  },

  // Kiểm tra tuổi hợp lệ (từ ngày sinh)
  // isValidAge("2000-01-01", {min: 18, max: 65}) → true
  isValidAge(dateStr, options = {}) {
    const { min = 0, max = 150 } = options;
    const birthDate = new Date(dateStr);
    if (isNaN(birthDate.getTime())) return false;

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age >= min && age <= max;
  },
  isValidDate(date, options = {}) {
    return new Date(date) > new Date();
  },
  isValidTime(startTime, endTime, options = {}) {
    const startHour = parseInt(startTime.split(":")[0]);
    const endHour = parseInt(endTime.split(":")[0]);
    return startHour >= 8 && startHour <= 10 && endHour >= 13 && endHour <= 15;
  },

  // ============================================
  // 7. KIỂM TRA MẬT KHẨU & USERNAME
  // ============================================

  // Kiểm tra mật khẩu mạnh
  // isStrongPassword("Abc@1234") → true
  // Yêu cầu: ít nhất 8 ký tự, có chữ hoa, chữ thường, số, ký tự đặc biệt
  isStrongPassword(str, options = {}) {
    const {
      minLength = 8,
      minLowercase = 1,
      minUppercase = 1,
      minNumbers = 1,
      minSymbols = 1,
    } = options;

    const s = String(str || "");

    if (s.length < minLength) return false;
    if ((s.match(/[a-z]/g) || []).length < minLowercase) return false;
    if ((s.match(/[A-Z]/g) || []).length < minUppercase) return false;
    if ((s.match(/\d/g) || []).length < minNumbers) return false;
    if ((s.match(/[^a-zA-Z0-9]/g) || []).length < minSymbols) return false;

    return true;
  },

  // Kiểm tra username hợp lệ (chữ, số, gạch dưới, 3-20 ký tự)
  // isUsername("john_doe123") → true
  isUsername(str) {
    return /^[a-zA-Z0-9_]{3,20}$/.test(String(str || ""));
  },

  // ============================================
  // 8. KIỂM TRA DỮ LIỆU VIỆT NAM
  // ============================================

  // Kiểm tra CMND/CCCD VN (9 hoặc 12 số)
  // isIDCardVN("079087001234") → true
  isIDCardVN(str) {
    return /^(\d{9}|\d{12})$/.test(String(str || "").replace(/\s/g, ""));
  },

  // Kiểm tra mã số thuế VN (10 hoặc 13 số)
  // isTaxCodeVN("0123456789") → true
  isTaxCodeVN(str) {
    return /^(\d{10}|\d{13})$/.test(String(str || "").replace(/\s/g, ""));
  },

  // Kiểm tra mã bưu điện VN (6 số)
  // isPostalCodeVN("700000") → true
  isPostalCodeVN(str) {
    return /^\d{6}$/.test(String(str || ""));
  },

  // ============================================
  // 9. KIỂM TRA THẺ & TÀI CHÍNH
  // ============================================

  // Kiểm tra thẻ tín dụng (Luhn algorithm)
  // isCreditCard("4532015112830366") → true
  isCreditCard(str) {
    const sanitized = String(str || "").replace(/\s/g, "");
    if (!/^\d{13,19}$/.test(sanitized)) return false;

    let sum = 0;
    let isEven = false;

    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitized[i]);

      if (isEven) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  },

  // ============================================
  // 10. KIỂM TRA MẢNG & OBJECT
  // ============================================

  // Kiểm tra mảng rỗng
  // isEmptyArray([]) → true, isEmptyArray([1]) → false
  isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
  },

  // Kiểm tra object rỗng
  // isEmptyObject({}) → true
  isEmptyObject(obj) {
    return (
      typeof obj === "object" && obj !== null && Object.keys(obj).length === 0
    );
  },

  // ============================================
  // 11. KIỂM TRA ĐỊNH DẠNG KHÁC
  // ============================================

  // Kiểm tra địa chỉ IP
  // isIP("192.168.1.1") → true
  isIP(str) {
    const ipv4 = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipv4.test(str)) return false;

    return str.split(".").every((part) => {
      const num = parseInt(part);
      return num >= 0 && num <= 255;
    });
  },

  // Kiểm tra mã màu hex
  // isHexColor("#ff5733") → true
  isHexColor(str) {
    return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(String(str || ""));
  },

  // Kiểm tra tên hợp lệ (chữ cái, khoảng trắng, 2-50 ký tự)
  // isName("Nguyễn Văn A") → true
  isName(str) {
    const s = String(str || "").trim();
    return /^[a-zA-ZÀ-ỹ\s]{2,50}$/.test(s) && s.length >= 2;
  },

  // Kiểm tra message/comment hợp lệ (không rỗng, 10-500 ký tự)
  // isMessage("Hello world") → true
  isMessage(str) {
    const s = String(str || "").trim();
    return s.length >= 10 && s.length <= 500;
  },
};
