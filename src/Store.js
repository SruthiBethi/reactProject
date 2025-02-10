import { configureStore, createSlice } from "@reduxjs/toolkit";
import 'bootstrap/dist/css/bootstrap.min.css';

// create the slice
const productSlice=createSlice({
    name:'products',
    initialState:{ veg:[
        {name:"Potato", price:100.0,image:'/potato.png'},
        {name:"Tomato", price:200, image:'/tomato.png'},
        {name:"Carrot", price:156, image:'/carrot.png'},
        {name:"Cabbage", price:"25", image:'/cabbage.png'},
        {name:"Califlower", price:"89", image:'/califlower.png'},
        {name:"Brinjal", price:56.0,image:'/brinjal.png'},
        {name:"Bottle Gaurd", price:89.23, image:'/bottle.png'},
        {name:"BitterGaurd", price:48.96, image:'/bitter.png'},
        {name:"Spinach", price:"25", image:'/spinach.png'},
        {name:"Broccoli", price:"89", image:'/broccoli.png'}
    ],
    nonVeg:[
        {name:"Fish", price:450, image:'/fish.png'},
        {name:"Chicken", price:270,image:'/chicken.png'},
        {name:"Mutton", price:820,image:'/mutton.png'},
        {name:"Prawns", price:650,image:'/prawns.png'},
        {name:"Eggs", price:150,image:'/eggs.png'},
        {name:"Beef", price:450, image:'/beef.png'},
        {name:"Crab", price:270,image:'/crab.png'},
        {name:"Pork", price:820,image:'/pork.png'},
        {name:"Lamb", price:650,image:'/lamb.png'},
        {name:"Duck", price:150,image:'/duck.png'}
    ],
    milkItems:[
        {name:"Jersey", price:32,image:'/jersey.png'},
        {name:"Heritage", price:28,image:'/heritage.png'},
        {name:"Doodla", price:35,image:'/doodla.png'},
        {name:"CountryDelight", price:40,image:'/country.png'},
        {name:"Amul", price:30,image:'/amul.png'}
    ]
},
reducers:{}
})

//creating the cart slice
const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const item=state.find(item=>item.name === action.payload.name);
            if(item){
                item.quantity+=1;
            }
            else{
                state.push({...action.payload, quantity:1});
            }

        },
        increment:(state,action)=>{
            const item=state.find(item=>item.name === action.payload.name);
            if(item){
                item.quantity +=1;
            }
        },
        decrement:(state,action)=>{
            const item=state.find(item=>item.name === action.payload.name);
            if(item && item.quantity>1){
                item.quantity -=1;
            }
            else{
                return state.filter(item=>item.name !== action.payload.name);
            }
        },
        remove:(state,action)=>{
            return state.filter(item=>item.name !== action.payload.name);
        },
        clearCart:()=>[]
}
})
let purchasDetailsSlice=createSlice({
    name:"purchasDetails",
    initialState:[],
    reducers:{
        addPurchaseDetails:(state,action)=>{
            state.push(action.payload)
        }
    }
})

const authSlice = createSlice({
    name:'auth',
    initialState:{
        isAuthenticated:localStorage.getItem("username")?true:false,
        user:localStorage.getItem("username")
    },
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username", action.payload);
        },
        logout:(state)=>{
            state.isAuthenticated=false;
            state.user="";
            localStorage.removeItem("username")
        },
    },

})



//configure the store
const store=configureStore({
    reducer:{products:productSlice.reducer,
             cart:cartSlice.reducer,
             purchasDetails:purchasDetailsSlice.reducer,
             auth:authSlice.reducer
    }
})

//export the store
export default store;

//export the reducer addtocart
export const{addToCart, increment, decrement, remove,clearCart}=cartSlice.actions;

export const{addPurchaseDetails}=purchasDetailsSlice.actions;

export const{login,logout}=authSlice.actions;
