const users = [];
function myFunction() {
    while (true) {
        let userChoice = prompt("Do you want to Sign Up, Log In, Change Password, or type exit to quit:").toLowerCase();
        if (userChoice === "exit") break;

        if (userChoice === "sign up") {
            signUp();
        } else if (userChoice === "log in") {
            logIn() 
        } else if (userChoice === "change password") {
            changePassword()
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
//*conditionemail
function conditionemail(email) {
    let nospacesemail = email.trim();
    
    let lowercaseemail = nospacesemail.slice(0).toLowerCase();
    let removespace = lowercaseemail.replace(/\s/g, "");
    if (email.length < 10) ;
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(email)) ;
    if (users.some(user => user.email === email)) ;
    return true;
    };
    //*condition age
function conditionage(age) {
    let nospacesage = age.trim();
    if (!/^[0-9]+$/.test(nospacesage)) {
    alert("use only number try again");
    }
    if (!/^\d{1,2}$/.test(nospacesage) || nospacesage == 0) {
    alert("use just two number more than that is not allowed");
    };};
    //*condpassword
function conditionpassword(password) {
    let nospacepass = password.trim();
    let removespace = nospacepass.replace(/\s/g, "");
    const regex = /[!@#\-+*\/]/;
    if (!regex.test(removespace)) {
      alert("password most have one or more special char");
      return false;
    }
    if (removespace.length < 7) {
      alert("password is less than 7");
      return false;
    }
}
;
function signUp() {
    let names = prompt("Enter your full name:");
    if (conditionname(names)) {
        alert("Invalid name. Please try again.");
        return;
    };
    let email = prompt("Enter your email:");
    if (conditionemail(email)) {
        alert("email not correct. Please try again.");
        return;
    };
    let age = prompt("Enter your age:");
    if (conditionage(age));
    
    let password = prompt("Enter your password:");
    if (conditionepassword(password)) {
        alert("password not correct 3awed");
        return;
    };
    alert("you are sign Up");
}
users.push({names,email,age,password});
//signUp();
 function logIn() {
    let validiemail = prompt("enter your email to logIn");
    if (users.find((el) => el.email == validiemail)) {
      let validipass = prompt("enter your password to logIn");
      if (users.find((el) => el.password == validipass)) {
        alert("now you log in");
      } else {
        alert("password not correct");
      }
    } else {
      alert("the email not correct");
    }
  };
 //changePassword();
const choices = () => {
    let choise = prompt(
      " u want : SignUp or LogIn or Change Password or exict to quit"
    );
    if (choise == "SignUp") {
    } else if (choise == "LogIn") {
    } else if (choise == "ChangePassword") {
      changePassword();
    }
  };
  choices();
  console.table(users);