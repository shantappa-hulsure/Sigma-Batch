import Product from "./Product.jsx"

function ProductGroup(){
    let options=[   "hi-tech","durable","fast"]
    return(
        <>
        <Product title="hello"description="its cassual" price={50000} features={options}/>
        {/* <Product/>
        <Product/>
        <Product/> */}
        </>
    )
}
export default ProductGroup