export interface Product {
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  tags: string[]
  thumbnail: string
  title: string
  brand: string
};

export interface CartItem {
  id: number
  price: number
  quantity: number
}
