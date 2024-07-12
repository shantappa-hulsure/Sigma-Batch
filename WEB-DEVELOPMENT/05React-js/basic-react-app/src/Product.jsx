import "./Product.css"
function Product({title="default title",description="default description",price=450,features}){
  const list =features.map((feature)=> {return <li>{feature}</li> })
  let styles={backgroundColor:price>3000?"grey":""}
 return( <div className="Product" style={styles}>
        <h3>{title}</h3>
        <h5>{ description}</h5>
        <h5>{price}</h5>
         {price>3000 ? <p> " discount of 5%"</p>:null}

        <ul>{list}</ul>
    </div>)
}

export default Product

