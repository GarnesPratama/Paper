import React from "react";
import Link from "next/link";

interface cardItem {
  pricing: number;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

export default function card(props: cardItem) {
  const { pricing, title, subtitle, description, href = "/" } = props;
  return (
    <div>
      <div className="card-grow h-100">
        <span className="badge-pricing">${pricing}</span>
        <img src="/images/card-1.png" alt="semina" />
        <div className="card-content">
          <div className="card-title">{title}</div>
          <div className="card-subtitle">{subtitle}</div>
          <div className="description">{description}</div>
          <Link href={href}>
            <a className="stretched-link"></a>
          </Link>
        </div>
      </div>
    </div>
  );
}
