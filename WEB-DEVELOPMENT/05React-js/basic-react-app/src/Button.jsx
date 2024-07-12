

function clickFunction(){
    console.log("button was clicked");
}
function Button(){
    return(

    <>
    <h1>hello</h1>
    <button onMouseOver={clickFunction}> Click me </button>
    </>
    )
}


export default Button;