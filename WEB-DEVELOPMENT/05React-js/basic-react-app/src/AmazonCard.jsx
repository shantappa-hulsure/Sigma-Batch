import "./AmazonCard.css"
function AmazonCard({title="title",description1="desc1",description2="desc2",oldPrice=500,newPrice=499,}){
  
    return(
        <>
        <div className="cards">
         <h3>{title}</h3>
         <p>{description1}</p>
         <p>{description2}</p>
         <div className="price">
            <p className="oldprice" >₹{oldPrice}</p>
            <b><p>₹{newPrice}</p></b>
             
         </div>
        </div>
        </>
    )
}

export default AmazonCard;