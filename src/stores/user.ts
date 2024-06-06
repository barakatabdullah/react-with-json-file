import { create } from 'zustand'
import { CartItem } from '../typs'

interface UserStore{
    username:string| null
    token:string| null
    cart:CartItem[] 
    actions:{
        setUserName(name:string):void
        setUserToken(token:string):void
        getUserToken():string| null
        addToCart(cartItem:CartItem):void
        removeFromCart(cartItem:CartItem):void
        modifyCartItem(cartItem:CartItem):void
    }
}

export const useUserStore= create<UserStore>((set,get) => ({
    username: localStorage.getItem('user'),
    token: localStorage.getItem('token'),
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),

    actions:{

        getUserToken:()=>get().token,
        setUserName(username:string){
            set({username})
        },
        setUserToken(token:string|null){
            set({token})
        },

        addToCart(cartItem:CartItem){
            const cart = get().cart || []
            set({cart:[...cart,cartItem]})
            localStorage.setItem('cart', JSON.stringify([...cart,cartItem]))
        },
        removeFromCart(cartItem:CartItem){
            const cart = get().cart || []
            set({cart:cart.filter(item => item.id !== cartItem.id)})
            localStorage.setItem('cart', JSON.stringify(cart.filter(item => item.id !== cartItem.id)))
        },
        modifyCartItem(cartItem:CartItem){
            const cart = get().cart || []
            set({cart:cart.map(item => item.id === cartItem.id ? cartItem : item)})
            localStorage.setItem('cart', JSON.stringify(cart.map(item => item.id === cartItem.id ? cartItem : item)))
        } 




  }}))

  export const { setUserName,setUserToken,getUserToken,addToCart,removeFromCart,modifyCartItem } = useUserStore.getState().actions