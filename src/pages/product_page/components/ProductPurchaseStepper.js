import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as UncheckedPoint} from "../../../icons/unchecked.svg";
import {ReactComponent as ActiveCheckedPoint} from "../../../icons/checked.svg";
import {ReactComponent as InactiveCheckedPoint} from "../../../icons/checked_active.svg";
import StepperPoint from "./StepperPoint";
import { stepperMarkersTypesEnum } from "../../../constants";

const ProductPurchaseStepper = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isProduct = location.pathname.includes('product')
        && !location.pathname.includes('payment')
        && !location.pathname.includes('shipping');

    const isShipping = location.pathname.includes('shipping');
    const isPayment = location.pathname.includes('payment');

    const cardMarker = isProduct
        ? stepperMarkersTypesEnum.CHECKED_ACTIVE
        : stepperMarkersTypesEnum.CHECKED;

    const shippingMarker = isProduct
        ? stepperMarkersTypesEnum.UNCHECKED
        : isShipping
            ? stepperMarkersTypesEnum.CHECKED_ACTIVE
            : stepperMarkersTypesEnum.CHECKED;

    const paymentMarker = isPayment
        ? stepperMarkersTypesEnum.CHECKED_ACTIVE
        : stepperMarkersTypesEnum.UNCHECKED;

    const setPoint = (markerType) => {
        switch (markerType) {
            case stepperMarkersTypesEnum.CHECKED_ACTIVE:
                return <ActiveCheckedPoint />
            case stepperMarkersTypesEnum.CHECKED:
                return <InactiveCheckedPoint />
            default:
                return <UncheckedPoint />
        }
    }

    const classNameTrackLine = `${isShipping 
        ? 'stepper-50' 
        : isPayment 
            ? 'stepper-100' 
            : ''} stepper d-flex align-items-center justify-content-between`

    return (
        <div className="stepper-wrap d-flex justify-content-center">
            <div className={classNameTrackLine}>
                <StepperPoint onClick={() => navigate('/product')}>
                    <div className="marker-icon d-flex justify-content-center align-items-center">
                        {setPoint(cardMarker)}
                    </div>

                    <div className="stepper-item__title">CARD</div>
                </StepperPoint>

                <StepperPoint onClick={() => navigate('/product/shipping')}>
                    <div className="marker-icon d-flex justify-content-center align-items-center">
                        {setPoint(shippingMarker)}
                    </div>

                    <div className={!isProduct ? 'stepper-item__title' : 'stepper-item__title stepper-item__title--inactive'}>
                        SHIPPING
                    </div>
                </StepperPoint>

                <StepperPoint onClick={() => navigate('/product/payment')}>
                    <div className="marker-icon d-flex justify-content-center align-items-center">
                        {setPoint(paymentMarker)}
                    </div>

                    <div className={isPayment ? 'stepper-item__title' : 'stepper-item__title stepper-item__title--inactive'}>
                        PAYMENT
                    </div>
                </StepperPoint>
            </div>
        </div>
    )
}

export default ProductPurchaseStepper;