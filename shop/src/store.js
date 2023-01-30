import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state){
            return 'john ' + state
        }
    }
})

export let { changeName } = user.actions

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let cart = createSlice({
    name : 'cart',
    initialState :
        [
            {id : 0, name : 'White and Black', count : 2},
            {id : 1, name : 'Red Knit', count : 1}
        ] ,
    reducers : {
        changeCount(state, i){
            let number =  state.findIndex((a)=>{ return a.id === i.payload})
            state[number].count++ 
        },
        subCount(state, i){
            let number =  state.findIndex((a)=>{ return a.id === i.payload})
            state[number].count-- 
        },

        addProduct(state, i){
            let number =  state.findIndex((a)=>{ return a.id === i.payload.id})
            if(number === i.payload.id){
                state[number].count++ 
            }
            else{
                state.push(i.payload)
            }
        },
        deleteProduct(state,i){
            let number =  state.findIndex((a)=>{ return a.id === i.payload})
            state.splice(number,1)
        }
    }
})

export let {changeCount, addProduct, deleteProduct, subCount} = cart.actions


export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
   }
}) 