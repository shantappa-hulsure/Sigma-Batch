
function Users({name="default",colour="white"}){
  let st={backgroundColor: colour }
    return(
        <div style={st} >
          <h1>{name}</h1>
        </div>
    )
}

export default Users