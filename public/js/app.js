const users = [];
function myFunction() {
    while (true) {
        let userChoice = prompt("Do you want to Sign Up, Log In, Change Password, or type exit to quit:").toLowerCase();
        if (userChoice === "exit") break;

        if (userChoice === "sign up") {
            signUp();
        } else if (userChoice === "log in") {
            
        } else if (userChoice === "change password") {
            
        } else {
            alert("Invalid choice. Please try again.");
        }
    }
};
myFunction();






