


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Breadcrumbs.css";

// const Breadcrumb = ({ currentPage, isSubProduct = false }) => {
//   return (
//     <div className="breadcrumb">
//       <Link to="/" className="breadcrumb-link">Home</Link>
//       {isSubProduct && (
//         <>
//           <span className="breadcrumb-separator"> &gt;&gt; </span>
//           <Link to="/Product" className="breadcrumb-link">Products</Link>
//         </>
//       )}
//       <span className="breadcrumb-separator"> &gt;&gt; </span>
//       <span className="breadcrumb-current">{currentPage}</span>
//     </div>
//   );
// };

// export default Breadcrumb;
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

// Product List (Reference)
const products = [
  { id: 9, name: "Silicon Polyester", link: "/siliconpolyester" },
  { id: 10, name: "Turbocharger", link: "/turbochargerhose" },
  { id: 11, name: "Marine Wet Hose", link: "/marinewethose" },
  { id: 12, name: "EPDM", link: "/epdm" },
  { id: 13, name: "Organic", link: "/organic" },
  { id: 14, name: "Assembly", link: "/Assembly" },
  { id: 15, name: "Wired Reinforced", link: "/wired" },
  { id: 16, name: "Fuel Tube", link: "/Fueltube" },
  { id: 17, name: "Moulded", link: "/moulded" },
];

const Breadcrumb = ({ currentPage, isSubProduct = false }) => {
  const location = useLocation();
  const [prevPage, setPrevPage] = useState(null);

  // Store Previous Page in sessionStorage
  useEffect(() => {
    const lastPage = sessionStorage.getItem("previousPage");
    if (lastPage !== location.pathname) {
      setPrevPage(lastPage);
      sessionStorage.setItem("previousPage", location.pathname);
    }
  }, [location.pathname]);

  // Find Current Product Index
  const currentProductIndex = products.findIndex((p) => p.link === location.pathname);

  // Determine Previous and Next Product
  const prevProduct = currentProductIndex > 0 ? products[currentProductIndex - 1] : null;
  const nextProduct = currentProductIndex < products.length - 1 ? products[currentProductIndex + 1] : null;

  return (
    <div className="breadcrumb">
      {/* Show "Home" only if it's NOT a subproduct */}
      {!isSubProduct && <Link to="/" className="breadcrumb-link">Home</Link>}

      {isSubProduct && (
        <>
          <Link to="/Product" className="breadcrumb-link">Products</Link>
        </>
      )}

      {/* Show Previous Product if it's a subproduct */}
      {prevProduct && isSubProduct && (
        <>
          <span className="breadcrumb-separator"> &gt;&gt; </span>
          <Link to={prevProduct.link} className="breadcrumb-link">Prev: {prevProduct.name}</Link>
        </>
      )}

      <span className="breadcrumb-separator"> &gt;&gt; </span>
      <span className="breadcrumb-current">{currentPage}</span>

      {/* Show Next Product only for subproducts */}
      {nextProduct && isSubProduct && (
        <>
          <span className="breadcrumb-separator"> &gt;&gt; </span>
          <Link to={nextProduct.link} className="breadcrumb-link">Next: {nextProduct.name}</Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
