// Array of account objects
const accounts = [
    {
        username: "user1",
        password: "password1",
        email: "user1@example.com"
    },
    {
        username: "user2",
        password: "password2",
        email: "user2@example.com"
    },
    {
        username: "user3",
        password: "password3",
        email: "user3@example.com"
    }
];

// Function to handle login
function login() {
    // Get username and password from the input fields
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Find the account that matches the input username and password
    const matchedAccount = accounts.find(account => {
        return account.username === usernameInput && account.password === passwordInput;
    });

    // Check if a matching account was found
    if (matchedAccount) {
        // Redirect to dashboard if a matching account was found
        window.location.href = "dashboard.html";
    } else {
        // Display an error message if no matching account was found
        alert("Invalid username or password");
    }
}
