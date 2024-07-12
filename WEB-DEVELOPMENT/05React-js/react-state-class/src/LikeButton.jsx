import {useState} from "react"
export default function LikeButton(){
    let [isLiked,setIsliked]=useState(false)
    let liked={color:"red"}
    function toggle(){
       setIsliked(!isLiked);
    }

    return(
        <div  onClick={toggle}>
            <p> {isLiked.toString()}</p>
            {
                isLiked? <i className="fa-solid fa-heart" style={liked}></i>:<i className="fa-regular fa-heart"></i>
            }
                   </div>
    )
}