import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main_page/MainPage";
import ProductPage from "./pages/product_page/Page";
import ProductCard from "./pages/product_page/ProductCard";
import ShippingPage from "./pages/product_page/shipping_page/Page";
import PaymentPage from "./pages/product_page/payment_page/Page";
import ThanksPage from "./pages/thanks_page/Page";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        console.log('App was loaded...')
    }, [])
    return (
        //TODO: Router here
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/my-training-app" element={ <MainPage /> }/>
                    <Route path="/product" element={ <ProductPage /> }>
                        <Route index element={<ProductCard />} />
                        <Route path="shipping" element={ <ShippingPage /> }/>
                        <Route path="payment" element={ <PaymentPage /> }/>
                    </Route>
                    <Route path="/thanks" element={ <ThanksPage/> }/>22
                </Routes>
            </Router>
        </div>
    );
}

export default App;
