const student ={
    name:"ssh",
    marks:78,
    prop:this,
    getname:function(){
        console.log(this);
        return  this.name;
    },
    getmarks :()=>{     //arrow meh this ka matlab hota hai lexical scope
console.log(this);
return this.marks;
    },

   getinfo1: function(){
    setTimeout(()=>{
        console.log(this);
    },2000)
   },
   getinfo2:function(){          // isme iska parent document hota hai so this arrow meh use karna i sahi rahega not in nrml
    setTimeout(function(){
        console.log(this);
    },2000)
   }


};
// console.log(student.getname());
// console.log(student.getmarks());

student.getinfo1();
student.getinfo2();



