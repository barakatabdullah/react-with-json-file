import api from "../../../config/axios"
import { Product } from "../../../typs"



export async function getProduct(id:Product['id']) {
    const {data} = await api.get('products/'+id)
      return data
}