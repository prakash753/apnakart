const form = document.querySelector(".form");
const usernameInput = document.querySelector("#username");
const mobileInput = document.querySelector("#mobile");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// Get the values from the inputs
	const usernameValue = usernameInput.value.trim();
	const mobileValue = mobileInput.value.trim();
	const emailValue = emailInput.value.trim();
	const passwordValue = passwordInput.value.trim();
	const confirmPasswordValue = confirmPasswordInput.value.trim();

	// Check if the username field is not empty
	if (usernameValue === "") {
		setErrorFor(usernameInput, "Username cannot be blank");
	} else {
		setSuccessFor(usernameInput);
	}

	// Check if the mobile number field is not empty and is a valid number
	const mobileRegex = /^\d{10}$/;
	if (mobileValue === "") {
		setErrorFor(mobileInput, "Mobile number cannot be blank");
	} else if (!mobileRegex.test(mobileValue)) {
		setErrorFor(mobileInput, "Mobile number is not valid");
	} else {
		setSuccessFor(mobileInput);
	}

	// Check if the email field is not empty and is a valid email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (emailValue === "") {
		setErrorFor(emailInput, "Email cannot be blank");
	} else if (!emailRegex.test(emailValue)) {
		setErrorFor(emailInput, "Email is not valid");
	} else {
		setSuccessFor(emailInput);
	}

	// Check if the password field is not empty and satisfies the password policy
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
	if (passwordValue === "") {
		setErrorFor(passwordInput, "Password cannot be blank");
	} else if (!passwordRegex.test(passwordValue)) {
		setErrorFor(passwordInput, "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number");
	}
}
