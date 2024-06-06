import api from "../../../config/axios";

// @ts-expect-error: fix later
export async function getProduct(id) {
  const { data } = await api.get("products/" + id);
  return data;
}
