export interface menuPricing {
  _id: string;
  category: string;
  price: number;
  list: string;
  id: string;
}


export interface menuCheckout {
  title: string;
  data: {
    category: string;
  };
}
