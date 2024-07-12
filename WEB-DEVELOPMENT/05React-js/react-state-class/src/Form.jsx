import {useState} from "react"
export default function Form() {
   let [formData,setFormData]=useState({userName:"",fullName:"",password:""})

    // function handleNameChange(event){
    //     setFullName(event.target.value)
    // }
    // function handleUsername(event){
    //     setUserName(event.target.value)
    // }
    let handleInputChange=(event)=>{
        let fieldName =event.target.name;
        let newValue =event.target.value;
        // console.log(fieldName);
        setFormData((currData)=>{
          currData[fieldName]=newValue;
          return {...currData}
        //   return {...currData,[event.target.name]:event.target.value }
        })
    }

    let handleSubmit =(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            userName:"",fullName:"",password:""
        })
    }

  return(
    <form action="#" onSubmit={handleSubmit}>
    <label htmlFor="fullName">Full Name</label>    
    <input type="text" id="fullName" name="fullName"placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} />
    <br />
    <label htmlFor="userName">User Name</label>    
    <input type="text" id="userName" name="userName" placeholder="Enter your full name" value={formData.userName} onChange={handleInputChange} />
    <br /><label htmlFor="password">Password</label>    
    <input type="password" id="password" name="password" placeholder="Enter your full name" value={formData.password} onChange={handleInputChange} />
    <br />
    <button>Submit</button>
    </form>
  )

}