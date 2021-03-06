export interface menuPricing {
  _id: string;
  category: string;
  price: number;
  list: [];
  id: string;
}

export interface detailList {
  list: string;
}

export interface menuCheckout {
  title: string;
  data: {
    category: string;
    price: string;
  };
}

export interface menuOverview {
  leader: string;
  shortName: string;
  price: number;
  namaPaper: string;
  category: string;
  status: string;
}
