//assignments

//#1

/*sum(12, 13);
function sum(a, b) {
  let result = a + b;
  console.log(result);
}
*/

//#2

/* age(18);
function age(age){
  if(age<18){
    console.log('Can\'t Vote');
  }
  else{
    console.log('can Vote')
  }
}*/


//#3

/*Even_odd(26);
function Even_odd(num){
  if(num%2==0){
    console.log('It is a even number');
  }
  else{
    console.log('it\'s an odd number');
  }
}*/


//#4

/*sum_0_to_n(5);
function sum_0_to_n(num){
  let result=0 ;
  for(let i = 0;i<=num;i++)
  {
    result = result + i;
    
  }
  console.log(result);
}*/


// #5

/*let user = {
  name : "harsh",
  age  : 17,
  gender : 'male'
}
let user2 = {
  name : "Ankita",
  age  : 22,
  gender : 'female'
}
let user3 = {
  name : "Rey",
  age  : 18,
  gender : 'Transgender'
}

greet(user);
greet(user2);
greet(user3);
function greet(user){
  let a = "Hey Mr." + user.name + " Good morning, your age is " + user.age;
  let b = "Hey Mrs." + user.name + " Good morning, your age is  " + user.age;
  let c = "Hey they." + user.name + " Good morning, your age is  " + user.age;
if(user.gender == 'male'){
  if(user.age<18){
   console.log(a + " that's why you can't vote");
  }
  else{
    console.log(a + " that's why you can vote");
  }
}
else if(user.gender == 'female')
{
  if(user.age<18){
    console.log(b + " that's why you can't vote");
   }
   else{
     console.log(b + " that's why you can vote");
   }
}
else {
  if(user.age<18){
    console.log(c + " that's why you can't vote");
   }
   else{
     console.log(c + " that's why you can vote");
   }
}
}*/

//#6

/* let arr = [23,234,45,667,335,667,334];
let arr2= [];
for(let i = 0 ; i<arr.length ;i++){
if(arr[i]%2 == 0){
  arr2.push(arr[i]);
}
} */

//#7

/* let user = [{
  name : "harsh",
  age  : 17,
  gender : 'male'
},
 { name : "Ankita",
  age  : 22,
  gender : 'female'
},
 {
  name : "Rey",
  age  : 18,
  gender : 'Transgender'
}]
for(let i = 0; i<user.length ; i++){
  if(user[i].age >= 18){
    console.log(user[i].name + " is an adult");
  }
} */

  //#7

/*let user = [{
  name : "harsh",
  age  : 20,
  gender : 'male'
},
 { name : "Ankita",
  age  : 22,
  gender : 'female'
},
 {
  name : "Rey",
  age  : 18,
  gender : 'Transgender'
}]
for(let i = 0; i<user.length ; i++){
  if(user[i].age >= 18 && user[i].gender == 'male'){
    console.log(user[i].name + " is an adult male");
  }
} 
*/