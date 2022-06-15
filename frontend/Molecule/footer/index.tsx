import React from "react";
import MenuFooter from "./menuFooter";

export default function sidebar() {
  return (
    <div>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <div className="user text-center pb-50 pe-30">
            <img
              src="../assets/img/avatar-1.png"
              width="90"
              height="90"
              className="img-fluid mb-20"
            />
            <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
            <p className="color-palette-2 m-0">shayna@anne.com</p>
          </div>
          <div className="menus">
            <div className="item active mb-30">
              <svg
                className="icon me-3"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9033 14.7502H14.9033V21.7502H21.9033V14.7502Z"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9033 14.7502H3.90332V21.7502H10.9033V14.7502Z"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.9033 3.75024H14.9033V10.7502H21.9033V3.75024Z"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9033 3.75024H3.90332V10.7502H10.9033V3.75024Z"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <MenuFooter title={"Overview"} href={"/overview"} />
            </div>
            <div className="item mb-30">
              <svg
                className="icon me-3"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.90332 2.41406L3.90332 6.41406V20.4141C3.90332 20.9445 4.11403 21.4532 4.48911 21.8283C4.86418 22.2033 5.37289 22.4141 5.90332 22.4141H19.9033C20.4338 22.4141 20.9425 22.2033 21.3175 21.8283C21.6926 21.4532 21.9033 20.9445 21.9033 20.4141V6.41406L18.9033 2.41406H6.90332Z"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.9033 10.4141C16.9033 11.4749 16.4819 12.4923 15.7317 13.2425C14.9816 13.9926 13.9642 14.4141 12.9033 14.4141C11.8425 14.4141 10.825 13.9926 10.0749 13.2425C9.32475 12.4923 8.90332 11.4749 8.90332 10.4141"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.90332 6.41406H21.9033"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <MenuFooter title={"Transaction"} href={"/transaction-detail"} />
            </div>
            <div className="item mb-30">
              <svg
                className="icon me-3"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9033 11.9141C21.9068 13.234 21.5984 14.536 21.0033 15.7141C20.2978 17.1258 19.2131 18.3133 17.8708 19.1434C16.5285 19.9735 14.9816 20.4135 13.4033 20.4141C12.0835 20.4175 10.7814 20.1092 9.60332 19.5141L3.90332 21.4141L5.80332 15.7141C5.20825 14.536 4.89988 13.234 4.90332 11.9141C4.90393 10.3358 5.34393 8.78894 6.17404 7.44664C7.00415 6.10434 8.19157 5.01966 9.60332 4.31409C10.7814 3.71902 12.0835 3.41065 13.4033 3.41409H13.9033C15.9877 3.52908 17.9564 4.40885 19.4325 5.88495C20.9086 7.36105 21.7883 9.32974 21.9033 11.4141V11.9141Z"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
