import React from "react";
import Link from "next/link";

interface checkout {
  href: string;
}

export default function checkout(props: checkout) {
  const { href = "/" } = props;
  return (
    <div>
      <Link href={href}>
        <div className="d-md-block d-flex flex-column w-100 pt-50">
          <a
            className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg "
            href="./complete-checkout.html"
            role="button"
          >
            Konfirmasi Pembayaran
          </a>
        </div>
      </Link>
    </div>
  );
}
