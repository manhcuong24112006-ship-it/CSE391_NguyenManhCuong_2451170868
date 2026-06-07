const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

const submitBtn = document.getElementById("submitBtn");

let isNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;
let isPhoneValid = false;

function checkForm() {
    submitBtn.disabled = !(
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmValid &&
        isPhoneValid
    );
}

/* Name */

nameInput.addEventListener("input", () => {
    const value = nameInput.value.trim();

    if (value.length >= 2 && value.length <= 50) {
        isNameValid = true;

        document.getElementById("nameStatus").textContent = "✅";
        document.getElementById("nameError").textContent = "";
    } else {
        isNameValid = false;

        document.getElementById("nameStatus").textContent = "❌";
        document.getElementById("nameError").textContent =
            "Tên phải từ 2-50 ký tự";
    }

    checkForm();
});

/* Email */

emailInput.addEventListener("input", () => {
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {
        isEmailValid = true;

        document.getElementById("emailError").textContent = "";
    } else {
        isEmailValid = false;

        document.getElementById("emailError").textContent =
            "Email không hợp lệ";
    }

    checkForm();
});

/* Password */

passwordInput.addEventListener("input", () => {

    const value = passwordInput.value;

    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /\d/.test(value);

    const strong =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const fill = document.getElementById("strengthFill");
    const text = document.getElementById("strengthText");

    if (value.length < 8) {

        fill.style.width = "33%";
        fill.style.background = "red";

        text.textContent = "Yếu";

        isPasswordValid = false;

    } else if (strong.test(value)) {

        fill.style.width = "100%";
        fill.style.background = "green";

        text.textContent = "Mạnh";

        isPasswordValid = true;

    } else if (hasLetter && hasNumber) {

        fill.style.width = "66%";
        fill.style.background = "orange";

        text.textContent = "Trung bình";

        isPasswordValid = true;
    }

    validateConfirm();

    checkForm();
});

/* Confirm Password */

function validateConfirm() {

    if (
        confirmInput.value === passwordInput.value &&
        confirmInput.value !== ""
    ) {

        isConfirmValid = true;

        document.getElementById("confirmError")
            .textContent = "";

    } else {

        isConfirmValid = false;

        document.getElementById("confirmError")
            .textContent = "Password không khớp";
    }
}

confirmInput.addEventListener("input", () => {

    validateConfirm();

    checkForm();
});

/* Phone */

phoneInput.addEventListener("input", () => {

    let value =
        phoneInput.value.replace(/\D/g, "");

    value = value.substring(0, 10);

    if (value.length > 4) {
        value =
            value.slice(0, 4) +
            "-" +
            value.slice(4);
    }

    if (value.length > 8) {
        value =
            value.slice(0, 8) +
            "-" +
            value.slice(8);
    }

    phoneInput.value = value;

    if (
        phoneInput.value.match(/^\d{4}-\d{3}-\d{3}$/)
    ) {

        isPhoneValid = true;

        document.getElementById("phoneError")
            .textContent = "";

    } else {

        isPhoneValid = false;

        document.getElementById("phoneError")
            .textContent =
            "Số điện thoại không hợp lệ";
    }

    checkForm();
});

/* Submit */

form.addEventListener("submit", e => {

    e.preventDefault();

    document.getElementById("userInfo")
        .innerHTML = `
        <p><strong>Tên:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>SĐT:</strong> ${phoneInput.value}</p>
    `;

    document.getElementById("modal")
        .classList.remove("hidden");
});

/* Modal */

document.getElementById("closeModal")
    .addEventListener("click", () => {

        document.getElementById("modal")
            .classList.add("hidden");
    });