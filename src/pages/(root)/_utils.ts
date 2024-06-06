import api from "../../config/axios"


export async function getCars(){
    const {data} = await api.get('cars.json')
      return data
}