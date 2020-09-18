const search = "SEARCH"
const home = "HOME"
const sendProduct="SENTPRODUCT"
const homeAction = () => {
    return {
        type: home,
    }
}
const searchAction = (query) => {
    return {
        type: search,
        payload: {
            query,
        }
    }
}
const sendProductAction=(product)=>{
    return {
        type: sendProduct,
        payload: {
            product,
        }
    }
}

export {searchAction}
export {homeAction}
export {sendProductAction}

