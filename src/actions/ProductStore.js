const search = "SEARCH"
const searchAction= (json)=>{
    return{
        type: search,
        payload: {
            json,
        }
    }
}

export default searchAction