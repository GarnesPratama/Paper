import React from "react";
interface menuCheckout {
  title: string;
  data: {
    category: string;
  };
}
export default function menuCheckout(props: menuCheckout) {
  const { title, data } = props;
  console.log(title, data.category);
  return (
    <div>
      <p className="text-lg color-palette-1 mb-20">
        {title} <span className="purchase-details">{data.category}</span>
      </p>
    </div>
  );
}
