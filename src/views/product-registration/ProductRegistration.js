/**
 * Dashboard Form
 * @author Aung Khant Kyaw
 * @create 14/4/2022
 */

 import React, { useState, useEffect } from "react";
 import Loading from "../common-component/loading/Loading";
 
 function ProductRegistration() {
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     setTimeout(() => {
        setLoading(false);
     }, 3000);
   }, []);
 
   return (
     <>
       <Loading show={loading} />
       <div className="card px-5 py-4 mx-3">
        <header className="card-header">
          <h5>
            <label className="m-0">Product Registration</label>
          </h5>
        </header>
      </div>
     </>
   );
 }
 
 export default ProductRegistration;
 