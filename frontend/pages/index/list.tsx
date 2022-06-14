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
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {list}
          </li>
        </div>
      </ul>
    </div>
  );
}
