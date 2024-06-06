import api from "../../../../config/axios"





export async function getCategories() {
    const {data} = await api.get('products/category-list')
      return data
}