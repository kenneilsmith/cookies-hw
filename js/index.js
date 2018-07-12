// create default for expiration of cookies we create
Cookies.defaults = {
  expires: Infinity
};
// set a cookie
// Cookies.set("myName", "Damian");

// onclick of a link get the value of a text input and get the value in a cookie

document.getElementById("user-submit").addEventListener("click", function() {
  var name = document.getElementById("username-input").value;
  // console.log(name);
  Cookies.set("name", name);
  updateName();
  document.getElementById("username-input").value = "";
});

function updateName() {
  // update DOM with value of cookie
  var usersName = Cookies.get("name");
  if (usersName) {
    document.getElementById("set-user").innerText = usersName;
  } else {
    console.log("You have not set a name");
  }
}

updateName();

// function updateCount() {
//   // update DOM with value of cookie
//   var usersName = Cookies.get("name");
//   if (usersName) {
//     document.getElementById("set-user").innerText = usersName;
//   } else {
//     console.log("You have not set a name");
//   }
// }

// document.getElementById("sugar-cookie").addEventListener("click", function() {
//   document.getElementById("sugar-count");
// });
