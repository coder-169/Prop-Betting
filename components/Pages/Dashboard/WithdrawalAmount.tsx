import React, { useState } from 'react'
import { dashboardAmmount } from '@/public/data/dashBoard';

export default function WithdrawalAmount() {
    const [activeItem, setActiveItem] = useState(dashboardAmmount[0]);

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
            <div className="pay_method__paymethod-alitem mb-5 mb-md-6">
                <form>
                    <div
                        className="pay_method__paymethod-items d-flex align-items-center gap-4 gap-sm-5 gap-md-6 mb-6">
                        {dashboardAmmount.map((singleAmmount) => (
                            <div
                                className="pay_method__paymethod-item p-2 rounded-3 cpoint" key={singleAmmount.id} onClick={() => handleClick(singleAmmount)}
                                style={getItemStyle(singleAmmount)}>
                                <div className="py-3 px-5 px-md-6 n11-bg rounded-3">
                                    <span className="fs-ten fw-bold">{singleAmmount.ammounts}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type="submit"
                        className="py-4 px-5 n11-bg rounded-2 w-100">Withdrawal
                        $7,000</button>
                </form>
                <div className="text-center mt-4">
                    <span>Your withdrawal limit on month: $50,000</span>
                </div>
            </div>
        </>
    )
}
