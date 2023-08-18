import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        cartQuantity:0,
        total:0,
    },
    reducers:{
        addProduct: (state,action) => {
            state.cartQuantity+=1;
            state.products.push(action.payload);
            state.total+=action.payload.price*action.payload.quantity;
        },
        changeQuantityofProduct: (state, action) => {
            const { _id, type } = action.payload;
            const product = state.products.find((product) => product._id === _id);
      
            if (product) {
              if (type === "Add") {
                product.quantity += 1;
                state.total += product.price;
              } else if (type === "Reduce") {
                product.quantity -= 1;
                state.total -= product.price;
                if (product.quantity === 0) {
                  state.products = state.products.filter(
                    (product) => product._id !== _id
                  );
                  state.cartQuantity -= 1;
                }
              }
            }
          },
          emptyCart: (state) => {
            state.products = [];
            state.cartQuantity = 0;
            state.total = 0;
          },
        
    }
})

export const {addProduct ,changeQuantityofProduct , emptyCart} = cartSlice.actions;
export default cartSlice.reducer;