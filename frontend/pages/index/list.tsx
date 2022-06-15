import React from "react";

interface detailList {
  list: string;
}
export default function list(props: detailList) {
  const { list } = props;
  return (
    <div>
      <ul className="fa-ul">
        <div>
          <span className="fa-li icon">
            <i className="bi bi-check2-all"></i>
          </span>
          {list}
        </div>
      </ul>
    </div>
  );
}
