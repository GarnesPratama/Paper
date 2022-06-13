import React from "react";
interface menuPrice {
  title: string;
  data: {
    price: string;
  };
}
export default function menuPrice(props: menuPrice) {
  const { title, data } = props;
  console.log(title, data.price);
  return (
    <div>
      <p className="text-lg color-palette-1 mb-20">
        {title} <span className="purchase-details">{data.price}.000</span>
      </p>
    </div>
  );
}
