export interface Car{
  id: number;
  title: string;
  price: number;
  company: string;
  model: string;
  description: string;
  thumbnail: string;
  images: string[];
  rating: number;
  stock: number;
  category: string;
  tags: string[];
}

 export interface Company{
  id: number;
  name: string;
  founder?: string;
  foundationYear?: number;
  headquarters?: string;
  }

  type Boxes = {
    confirm: (confirmContent: ConfirmContent) => Promise<boolean>;
    toast: (toastData: ToastMessage | ToastMessage[]) => void;
  };