import { promotionData } from '@/public/data/allPageData'
import Image from 'next/image'
import React from 'react'

export default function Promotions() {
    return (
        <>
            <section className="Promotions pb-120">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 gx-0 gx-lg-4">
                            <div className="Promotions__main">
                                <div className="row w-100 gy-6">
                                    <div className="col-12">
                                        <h3>Promotions for you</h3>
                                    </div>

                                    {promotionData.map(({id, imgSrc, title, bonusvalue}) => (
                                        <div className="col-xxl-6" key={id}>
                                        <div
                                            className="Promotions__card d-flex align-items-center justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap gap-6 p-4 p-lg-10 rounded-8 p3-bg">
                                            <div className="Promotions__card-thumb text-center">
                                                <Image src={imgSrc} width={308} height={203} alt="Icon" />
                                            </div>
                                            <div className="Promotions__card-content text-center text-sm-start">
                                                    <h3 className="mb-6">{title}</h3>
                                                    <span className="fs-two mb-10 mb-md-15 d-block">{bonusvalue}</span>
                                                <button type="button" className="cmn-btn px-5 py-3">Get Bonus</button>
                                            </div>
                                        </div>
                                    </div>
                                    ))}

                                    {/* <div className="col-xxl-6">
                                        <div
                                            className="Promotions__card d-flex align-items-center justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap gap-6 p-4 p-lg-10 rounded-8 p3-bg">
                                            <div className="Promotions__card-thumb text-center">
                                                <Image src="/images/promotion2.png" width={335} height={214} alt="Icon" />
                                            </div>
                                            <div className="Promotions__card-content text-center text-sm-start">
                                                <h3 className="mb-6">Cashback Bonus</h3>
                                                <span className="fs-two mb-10 mb-md-15 d-block">20% up to €800</span>
                                                <button type="button" className="cmn-btn px-5 py-3">Get Bonus</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6">
                                        <div
                                            className="Promotions__card d-flex align-items-center justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap gap-6 p-4 p-lg-10 rounded-8 p3-bg">
                                            <div className="Promotions__card-thumb text-center">
                                                <Image src="/images/promotion1.png" width={308} height={203} alt="Icon" />
                                            </div>
                                            <div className="Promotions__card-content text-center text-sm-start">
                                                <h3 className="mb-6">Casino Welcome bonus</h3>
                                                <span className="fs-two mb-10 mb-md-15 d-block">50% up to €900</span>
                                                <button type="button" className="cmn-btn px-5 py-3">Get Bonus</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6">
                                        <div
                                            className="Promotions__card d-flex align-items-center justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap gap-6 p-4 p-lg-10 rounded-8 p3-bg">
                                            <div className="Promotions__card-thumb text-center">
                                                <Image src="/images/promotion4.png" width={294} height={249} alt="Icon" />
                                            </div>
                                            <div className="Promotions__card-content text-center text-sm-start">
                                                <h3 className="mb-6">Weekend Reload Bonus</h3>
                                                <span className="fs-two mb-10 mb-md-15 d-block">€700 + 50 Bonus Spins</span>
                                                <button type="button" className="cmn-btn px-5 py-3">Get Bonus</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6">
                                        <div
                                            className="Promotions__card d-flex align-items-center justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap gap-6 p-4 p-lg-10 rounded-8 p3-bg">
                                            <div className="Promotions__card-thumb text-center">
                                                <Image src="/images/promotion3.png" width={256} height={254} alt="Icon" />
                                            </div>
                                            <div className="Promotions__card-content text-center text-sm-start">
                                                <h3 className="mb-6">Casino Welcome bonus</h3>
                                                <span className="fs-two mb-10 mb-md-15 d-block">25% up to €4,000</span>
                                                <button type="button" className="cmn-btn px-5 py-3">Get Bonus</button>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
