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
//*conditionname
function conditionname(names) {


    let fullname = prompt("enter your full name");
    let nospacesname = fullname.trim();
    let splitname = nospacesname.split(" ");
    let upercase = splitname
        .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
        .join(" ");
    let lengthname = splitname.join("").length;
    if (lengthname < 5) {
        alert("try again ur is short than 5 charactere");
        return false;
    }
    if (/[Z-a-zA ]/.test(upercase)) {
        alert("the special charactere is not allowed");
        return false;
    };
};
