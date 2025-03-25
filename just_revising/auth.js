// // const express = require("express");

// const jwt =  require("jsonwebtoken");
// const JWT_SECRET = "Heyy_cutie";
// const app = express();

// app.use(express.json());

// let users = [];

// // function generatetoken() {
// //   let options = [
// //     "a",
// //     "b",
// //     "c",
// //     "d",
// //     "e",
// //     "f",
// //     "g",
// //     "h",
// //     "i",
// //     "j",
// //     "k",
// //     "l",
// //     "m",
// //     "n",
// //     "o",
// //     "p",
// //     "q",
// //     "r",
// //     "s",
// //     "t",
// //     "u",
// //     "v",
// //     "w",
// //     "x",
// //     "y",
// //     "z",
// //     "A",
// //     "B",
// //     "C",
// //     "D",
// //     "E",
// //     "F",
// //     "G",
// //     "H",
// //     "I",
// //     "J",
// //     "K",
// //     "L",
// //     "M",
// //     "N",
// //     "O",
// //     "P",
// //     "Q",
// //     "R",
// //     "S",
// //     "T",
// //     "U",
// //     "V",
// //     "W",
// //     "X",
// //     "Y",
// //     "Z",
// //     "0",
// //     "1",
// //     "2",
// //     "3",
// //     "4",
// //     "5",
// //     "6",
// //     "7",
// //     "8",
// //     "9",
// //   ];

// //   let token = "";
// //   for (let i = 0; i <= 32; i++) {
// //     token += options[Math.floor(Math.random() * options.length)];
// //   }
// //   return token;
// // }

// app.post("/signup", (req, res) => {
//   let username = req.body.username;
//   let password = req.body.password;
//   users.push({ username, password });
//   res.send({ message: "You have signed up Successfully" });
//   console.log(users);
// });

// app.post("/signin", (req, res) => {
//   let username = req.body.username;
//   let password = req.body.password;
//   let user = null;
//   user = users.find((u) => u.username === username && u.password === password);
 
//   if (user) {
//     const token = jwt.sign({username:user.username},
//       JWT_SECRET
//     )
//     res.send({
//       message:
//         "You have sign in  " + token  } )
//     }
//     else 
//     {
//     res.send({ message: "You don't belong here" });
//   }

//   console.log(users);
// });

// app.get("/me", (req, res) => {
//   const token = req.headers.token;
//   const userDetails =  jwt.verify(token, JWT_SECRET);
//   const notuserdetails = jwt.decode(token);
//   console.log(notuserdetails);
//   const username = userDetails.username;
//   const user = users.find(user => user.username === username);
//   if (user) {
//     res.send({
//         username: user.username
//     })
// } else {
//     res.status(401).send({
//         message: "Unauthorized"
//     })
// }
// });
// app.listen(3000);


function largestPrimeFactor(n) {
  let largestPrime = 0;

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) { 
      largestPrime = i;
      n /= i;
    }
  }

  console.log(largestPrime);
}

largestPrimeFactor(12);
