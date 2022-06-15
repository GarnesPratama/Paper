import React from "react";
import NumberFormat from "react-number-format";
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
        {title}{" "}
        <span className="purchase-details">
          <NumberFormat
            value={data.price}
            displayType={"text"}
            thousandSeparator="."
            prefix={"Rp."}
            decimalSeparator=","
          />
        </span>
      </p>
    </div>
  );
}
