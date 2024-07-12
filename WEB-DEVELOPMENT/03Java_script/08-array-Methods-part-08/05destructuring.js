let names =["tony","bruce","peter","steve"];  //destructuring
// let winner=names[0];
// let runnerup=names[1];
// let secondrunnerup=names[2];   agar isko chota way meh yah yak line meh likh sakte hai as
// let [winner,runnerup,...others]=names;
// console.log(winner );
// console.log(runnerup );


               //destructuring in objects

const student={
    name:"karan",
    age:19,
    class:13,
    sub:["kanna","english","maths","science"],
    username:"ssh@5223",
    password:"abcd"
};

// let {username,password,xyz}=student;
// console.log(username);
// console.log(password);
// console.log(xyz); // agar student obj meh nahi mila toh undefined print hoga console peh


let{username:user ,password:pass ,city="bangalore"}=student;
console.log(user);
console.log(city);