import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItem";

const initialState = {
  carItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {

    case ADD_TO_CART:
      let product = state.carItems.find((c) => c.product.id==payload.id);
      if (product) {
        //varsa kontrol et arttır
        product.quantity++;
        return {
          ...state,
        };
      } else {
        //yoksa sepette ekle
        return {
          ...state,
          cartItems: [...state.carItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.carItems.filter((c) => c.product.id == payload.id),
      };

    default:
      return state;
  }
}
