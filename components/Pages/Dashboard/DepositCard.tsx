import React, { useState } from 'react'
import { imagesData } from '@/public/data/dashBoard';
import Image from 'next/image';


export default function DepositCard() {
    const [activeItem, setActiveItem] = useState(imagesData[0]);

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
            {imagesData.map((imagesData) => (
                <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2" key={imagesData.id}>
                    <div onClick={() => handleClick(imagesData)}
                        style={getItemStyle(imagesData)} className="pay_method__paymethod-item pay-methods p-2 rounded-3 cpoint">
                        <Image src={imagesData.src} height={70} width={172} alt={imagesData.alt} />
                    </div>
                </div>
            ))}
        </>
    )
}
