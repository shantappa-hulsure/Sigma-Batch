import AmazonCard from "./AmazonCard"
function Amazon(){
    
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return(
        <div style={styles}>
          <AmazonCard/>
          <AmazonCard/>
          <AmazonCard/>
          <AmazonCard/>
        </div>
    )
}

export default Amazon;