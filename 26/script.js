function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var userID = document.getElementById("userID").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var address = document.getElementById("address").value.trim();
    var email = document.getElementById("email").value.trim();
    var contactNumber = document.getElementById("contactNumber").value.trim();

    // Simple validation for required fields
    if (firstName === "") {
        alert("Please enter your first name.");
        return false;
    }

    if (userID === "") {
        alert("Please enter your User ID (Banasthali ID).");
        return false;
    }

    if (password === "") {
        alert("Please enter a password.");
        return false;
    }

    if (confirmPassword === "") {
        alert("Please confirm your password.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    // Validation for email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (contactNumber === "") {
        alert("Please enter your contact number.");
        return false;
    }

    // Validation for contact number format
    var contactNumberRegex = /^\d{10}$/;
    if (!contactNumberRegex.test(contactNumber)) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    return true;
}
