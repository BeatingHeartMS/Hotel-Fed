import React from "react";

function BannerComodidades({ children, title, subtitle }) {
  return (
    <div className="BannerComodidades">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

export default BannerComodidades;
