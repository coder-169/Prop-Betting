import Image from 'next/image';

export default function WomenGroupWinner() {
    return (
        <>
            <section className="top_matches">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 gx-0 gx-sm-4">
                            <div className="top_matches__main">
                                <div className="row w-100">
                                    <div className="col-12 pe-0">
                                        <div className="top_matches__content">
                                            <div className="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg">
                                                <div
                                                    className="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap">
                                                    <Image src="/images/icon/outrights-hugary.png" width={30} height={30} alt="Icon" />
                                                    <div className="top_matches__winnercard-obi">
                                                        <span className="mb-3">Jan 5, 2024, 14:00</span>
                                                        <h5>European Championships 2024 Women - Group D - Winner</h5>
                                                    </div>
                                                </div>
                                                <div className="row gy-2">
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Netherlands</span>
                                                                <span>4.5</span>
                                                            </div>
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2">
                                                                <span>Croatia</span>
                                                                <span>7.5</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Hungary</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6 col-xl-4">
                                                        <div className="top_matches__winnercard-sctn w-100">
                                                            <div
                                                                className="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3">
                                                                <span>Greece</span>
                                                                <span>6.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
