import React from "react";
interface menuCheckout {
  title: string;
  detail: string;
}
export default function menuCheckout(props: menuCheckout) {
  const { title, detail } = props;
  return (
    <div>
      <p className="text-lg color-palette-1 mb-20">
        {title} <span className="purchase-details">{detail}</span>
      </p>
    </div>
  );
}
