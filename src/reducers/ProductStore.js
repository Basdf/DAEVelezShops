const DefaultProductStore = {
    data: false,
    query: "",
    product:""

}
const ProductStore = (state = DefaultProductStore, action) => {
    switch (action.type) {
        case "SEARCH": {
            return {
                ...state,
                data: true,
                query: action.payload.query,
            }
        }
        case "HOME": {
            return {
                data: false,
                query: "",
                product:"",
            }
        }
        case "SENTPRODUCT":{
            return{
                ...state,
                product: action.payload.product
            }
        }
        default: return state;
    }
}

export default ProductStore