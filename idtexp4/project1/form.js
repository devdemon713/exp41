// Form validation
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    input.classList.add('error');
}

function clearError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = '';
    input.classList.remove('error');
}

function validateEmail(email) {
    return email.includes('@') && email.includes('.');
}

function validateForm(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (nameInput.value.length < 3) {
        showError(nameInput, 'Name must be at least 3 characters long');
        isValid = false;
    } else {
        clearError(nameInput);
    }

    // Email validation
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters long');
        isValid = false;
    } else {
        clearError(passwordInput);
    }

    // Confirm password validation
    if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPasswordInput);
    }

    if (isValid) {
        alert('Registration successful!');
        form.reset();
    }
}

form.addEventListener('submit', validateForm);