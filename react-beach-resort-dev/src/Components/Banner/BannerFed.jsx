import React from "react";

function BannerFed({ children, title, subtitle }) {
  return (
    <div className="bannerFed">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

export default BannerFed;
