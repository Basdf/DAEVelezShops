const DefaultProductStore = {
        data:false,
        json: ""
}
const ProductStore = (state = DefaultProductStore, action) => {
    switch (action.type) {
        case "SEARCH": {
            return {
                ...state,
                data:true,
                json: action.payload.json,
            }
        }
        default: return state;
    }
}

export default ProductStore