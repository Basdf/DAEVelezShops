const DefaultProductStore = {
    data: false,
    listProduct: "",
    product:""

}
const ProductStore = (state = DefaultProductStore, action) => {
    switch (action.type) {
        case "SEARCH": {
            return {
                ...state,
                data: true,
                listProduct: action.payload.listProduct,
            }
        }
        case "HOME": {
            return {
                data: false,
                listProduct: "",
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