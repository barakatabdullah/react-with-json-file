import api from "../../config/axios";

export async function getCars() {
  const { data } = await api.get("cars.json");
  return data;
}


export async function getCompanies() {
  const { data } = await api.get("companies.json");
  return data;
}