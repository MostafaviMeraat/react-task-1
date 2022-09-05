const Detail = ({data}) => {
    try{
    const name = (data[0].name)
    const age = (data[1].age)
    console.log(name,age)
    
    function del () {
        data[0].name=""
        data[1].age=""
        console.log(data)
        Detail({data}) 
        return
    }   

    return <>

        <div>
            <input  style={{width: "70px", textAlign:"center", marginInline:'.5rem'}} type={"text"} value={name} />
                is 
             <input  style={{width:"35px" , textAlign:"center" ,marginInline:'.5rem'}} type={"text"} value={age} />
                years old
            <button style={{marginLeft:"1rem"}} onClick={del}>Delete</button>
            </div>
            
    </>
    }
     catch{
        console.error("its empty")
    }
}
export default Detail