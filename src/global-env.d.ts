export{} 

interface Car{
  id: number;
  title: string;
  price: number;
  company: string;
  model: string;
  description: string;
  image: string;
  images: string[];
  rating: number;
  stock: number;
  category: string;
  tags: string[];
}

 interface Company{
  id: number;
  name: string;
  founder?: string;
  foundationYear?: number;
  headquarters?: string;
  }