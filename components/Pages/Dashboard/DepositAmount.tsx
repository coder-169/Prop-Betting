import React, { useState } from 'react'
import { amountData } from '@/public/data/dashBoard';

export default function DepositAmount() {
    const [activeItem, setActiveItem] = useState(amountData[0]);

    const handleClick = (itemName: any) => {
        setActiveItem(itemName);
    };
    const getItemStyle = (itemName: any) => {
        return {
            border: `1px solid ${activeItem === itemName ? '#cfa80e' : '#2C3655'}`,
        };
    };
    return (
        <>
            <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                <div className="pay_method__paymethod-title mb-5 mb-md-6">
                    <h5 className="n10-color">Choose deposit amount</h5>
                </div>
                <div className="pay_method__paymethod-alitem mb-5 mb-md-6">
                    <div
                        className="pay_method__paymethod-items d-flex align-items-center gap-4 gap-sm-5 gap-md-6">
                        {amountData.map((singleData) => (
                            <div onClick={() => handleClick(singleData)}
                                style={getItemStyle(singleData)}
                                className="pay_method__paymethod-item amount-active p-2 rounded-3 cpoint" key={singleData.id}>
                                <div className="py-3 px-5 px-md-6 n11-bg rounded-3">
                                    <span className="fs-ten fw-bold mb-2">{singleData.amount}</span>
                                    <span className="fs-seven d-block">{singleData.bonus}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-end mb-6 mb-md-8">
                    <span>Min 3,000 | Max € 3,060</span>
                </div>
                <div className="pay_method__paymethod-title mb-5 mb-md-6">
                    <h5 className="n10-color">Enter your payment details</h5>
                </div>
                <div className="pay_method__formarea">
                    <form>
                        <div
                            className="d-flex align-items-center flex-wrap flex-md-nowrap gap-5 gap-md-6 mb-5">
                            <div className="d-flex w-100 p1-bg ps-3 rounded-8">
                                <div className="d-flex align-items-center w-100">
                                    <i className="ti ti-credit-card fs-five"></i>
                                    <input type="text" id="card_number" name="card_number"
                                        placeholder="Card number" />
                                </div>
                                <div className="d-flex align-items-center justify-content-end">
                                    <input className="w-75" type="text" id="expiration"
                                        name="expiration" placeholder="MM/YY CVC" />
                                </div>
                            </div>
                            <div className="d-flex w-100 p1-bg rounded-8">
                                <input type="text" placeholder="Street address" />
                            </div>
                        </div>
                        <div
                            className="d-flex align-items-center gap-5 gap-md-6 mb-5 flex-wrap flex-md-nowrap">
                            <div className="d-flex w-100 p1-bg rounded-8">
                                <input type="text"
                                    placeholder="Apt, unit, suite, etc. (optional)" />
                            </div>
                            <div className="d-flex w-100 p1-bg rounded-8">
                                <input type="text" placeholder="(+33)7 35 55 21 02" />
                            </div>
                        </div>
                        <div
                            className="d-flex align-items-center gap-5 gap-md-6 mb-5 flex-wrap flex-md-nowrap">
                            <div className="d-flex p1-bg rounded-8 w-100">
                                <input type="text" placeholder="City" />
                            </div>
                            <div className="d-flex align-items-center gap-6 w-100">
                                <div className="d-flex  p1-bg rounded-8 w-50">
                                    <input type="text" placeholder="State" />
                                </div>
                                <div className="d-flex p1-bg rounded-8 w-50">
                                    <input type="text" placeholder="Zip code" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="d-flex align-items-center justify-content-between mb-7 mb-md-10">
                            <span>Total</span>
                            <span>$3,000</span>
                        </div>
                        <button type="submit"
                            className="py-4 px-5 n11-bg rounded-2 w-100">Deposit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
