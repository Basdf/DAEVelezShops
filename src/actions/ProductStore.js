const search = "SEARCH"
const home = "HOME"
const sendProduct="SENTPRODUCT"
const homeAction = () => {
    return {
        type: home,
    }
}
const searchAction = (listProduct) => {
    return {
        type: search,
        payload: {
            listProduct,
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

