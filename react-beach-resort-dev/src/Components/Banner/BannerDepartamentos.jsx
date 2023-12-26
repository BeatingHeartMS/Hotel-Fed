import React from "react";

function BannerDepartamentos({ children, title, subtitle }) {
  return (
    <div className="bannerDepartamentos">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

export default BannerDepartamentos;
