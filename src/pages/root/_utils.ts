import api from "../../config/axios"


export async function getProducts(){
    const {data} = await api.get('products')
      return data
}