import React from "react";

export default function card() {
  return (
    <div>
      <div className="card-grow h-100">
        <span className="badge-pricing">$229</span>
        <img src="/images/card-1.png" alt="semina" />
        <div className="card-content">
          <div className="card-title">Learn Jira for Sprint Design Venture</div>
          <div className="card-subtitle">Product Design</div>
          <div className="description">Bandung, 22 Jan 2022</div>
          <a href="details.html" className="stretched-link"></a>
        </div>
      </div>
    </div>
  );
}
