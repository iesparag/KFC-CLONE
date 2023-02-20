// export const initialState = {
//     basket: []
// };

export const getBasketTotal = (basket) => basket.reduce((amount,item) => item.price + amount, 0)


const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":

        return { 
            ...state,
            basket: [...state.basket, action.item]
        }
        break;
        case "REMOVE_FROM_BASKET":

        let newBasket = [...state.basket];
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

        if(index >= 0) {
            newBasket.splice(index,1)

        }else{
            console.warn("cant remove the product of this Id")

        }

        return { ...state, basket: newBasket }
        break;
        case "resetCart":
            return{...state,basket:[]}
            break;
        default:
            return state;
    }
}
export default reducer;