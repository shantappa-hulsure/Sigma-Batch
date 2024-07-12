function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted ");
}

export default function Form(){
    return(
        <form action="">
            <input type="text" placeholder="hello" />
            <button onClick={handleFormSubmit}>Submit</button>
            
        </form>
    )
}