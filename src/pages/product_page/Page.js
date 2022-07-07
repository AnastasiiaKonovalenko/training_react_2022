import React from "react";
import { Outlet } from 'react-router-dom';
import ProductPurchaseStepper from "./components/ProductPurchaseStepper";
import Layout from "../../components/Layout";

const ProductPage = () => {
  return (
      <div className="wrap-page d-flex flex-column">
          <Layout>
              <ProductPurchaseStepper />
              <div className="d-flex flex-grow-1">
                  <Outlet />
              </div>
          </Layout>
      </div>
  )
}

export default ProductPage;