import Image from "next/image";
import { rugbyLeague } from "@/public/data/allPageData";

export default function UpCmingRugby() {
    return (
        <section className="top_matches">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 gx-0 gx-sm-4">
                        <div className="top_matches__main">
                            <div className="row w-100 mb-8 mb-md-10">
                                <div className="col-12">
                                    <div className="top_matches__title d-flex align-items-center gap-2 mb-4 mb-md-6">
                                        <Image src="/images/icon/rugby-union.png" width={28}
                                            height={28} alt="Icon" />
                                        <h3>Rugby League</h3>
                                    </div>
                                    <div className="top_matches__content">
                                        {rugbyLeague.map(
                                            ({
                                                id,
                                                titletwo,
                                                clubone,
                                                clubtwo,
                                                clubNameOne,
                                                clubNameTwo,
                                            }) => (
                                                <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4" key={id}>
                                                    <div className="row gx-0 gy-xl-0 gy-7">
                                                        <div className="col-xl-5 col-xxl-4">
                                                            <div className="top_matches__clubname">
                                                                <div
                                                                    className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                    <div className="d-flex align-items-center gap-1">
                                                                        <Image src="/images/icon/rugby.png" width={16} height={16}
                                                                            alt="Icon" /> <span
                                                                            className="fs-eight cpoint">{titletwo}</span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                        <span className="fs-eight cpoint me-xl-6">Dec 8, 02:00</span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                    <div>
                                                                        <div
                                                                            className="d-flex align-items-center gap-2 mb-4">
                                                                            <Image className="rounded-5" src={clubone} width={24} height={24}
                                                                                alt="Icon" /> <span
                                                                                className="fs-seven cpoint">{clubNameOne}</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center gap-2">
                                                                            <Image className="rounded-5" src={clubtwo} width={24} height={24}
                                                                                alt="Icon" /> <span
                                                                                className="fs-seven cpoint">{clubNameTwo}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                        <span
                                                                            className="v-line lg d-none d-xl-block"></span>
                                                                        <div className="d-flex flex-column gap-5">
                                                                            <Image className="cpoint"
                                                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                                                alt="Icon" />
                                                                            <Image className="cpoint"
                                                                                src="/images/icon/star2.png" width={16} height={16}
                                                                                alt="Icon" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-7 col-xxl-8 d-xl-flex">
                                                            <div className="top_matches__clubdata top_matches__clubdatatwo">
                                                                <div className="table-responsive">
                                                                    <table className="table mb-0 pb-0">
                                                                        <thead>
                                                                            <tr className="text-center ">
                                                                                <th scope="col"><span
                                                                                    className="fs-eight">1x2</span>
                                                                                </th>
                                                                                <th scope="col"><span
                                                                                    className="fs-eight">Draw no bet</span>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="pt-4">
                                                                                    <div
                                                                                        className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                        <div
                                                                                            className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                            <span
                                                                                                className="fs-seven text-center d-block mb-2">2</span>
                                                                                            <span
                                                                                                className="fw-bold d-block">3.8</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                            <span
                                                                                                className="fs-seven text-center d-block mb-2">2</span>
                                                                                            <span
                                                                                                className="fw-bold d-block">3.8</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                            <span
                                                                                                className="fs-seven text-center d-block mb-2">1</span>
                                                                                            <span
                                                                                                className="fw-bold d-block">3.45</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="pt-4">
                                                                                    <div
                                                                                        className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                        <div
                                                                                            className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                            <span
                                                                                                className="fs-seven text-center d-block mb-2">2</span>
                                                                                            <span
                                                                                                className="fw-bold d-block">3.8</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                            <span
                                                                                                className="fs-seven text-center d-block mb-2">1</span>
                                                                                            <span
                                                                                                className="fw-bold d-block">3.45</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <hr className=" w-100 mt-8 d-none d-xl-block n4-color" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
