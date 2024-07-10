import Image from "next/image";
import { liveSoccerMatch } from "@/public/data/tabTwo";

export default function BasketballLive() {
    return (
        <section className="top_matches">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 gx-0 gx-sm-4">
                        <div className="top_matches__main">
                            <div className="row w-100">
                                <div className="col-12">
                                    <div className="top_matches__title d-flex align-items-center gap-2 mb-4 mb-md-6">
                                        <Image src="/images/icon/live-match.png" width={32}
                                            height={32} alt="Icon" />
                                        <h3>Live Matches</h3>
                                    </div>
                                    <div className="top_matches__content">
                                        <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                            <div className="row gx-0 gy-xl-0 gy-7">
                                                <div className="col-xl-5 col-xxl-4">
                                                    <div className="top_matches__clubname">
                                                        <div
                                                            className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <Image src="/images/icon/basketball.png" width={16} height={16}
                                                                    alt="Icon" /> <span
                                                                        className="fs-eight cpoint">International
                                                                    Euroleague</span>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                                                <Image src="/images/icon/live.png" width={16} height={16}
                                                                    alt="icon" />
                                                                <span className="fs-eight cpoint">Today,
                                                                    23:00</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                            <div>
                                                                <div
                                                                    className="d-flex align-items-center gap-2 mb-4">
                                                                    <Image className="rounded-5"
                                                                        src="/images/icon/queensland.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Sacramento
                                                                        Kings</span>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <Image className="rounded-5"
                                                                        src="/images/icon/western-australia.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Golden
                                                                        Warriors</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                <div className="d-flex flex-column gap-1">
                                                                    <span
                                                                        className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                                                    <span
                                                                        className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">0</span>
                                                                </div>
                                                                <span className="v-line lg"></span>
                                                                <div className="d-flex flex-column gap-5">
                                                                    <Image className="cpoint"
                                                                        src="/images/icon/line-chart.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-xxl-8 d-xl-flex">
                                                    <div className="top_matches__clubdata top_matches__clubdatatwo">
                                                        <div className="table-responsive maintaintwo">
                                                            <table className="table mb-0 pb-0">
                                                                <thead>
                                                                    <tr className="text-center">
                                                                        <th scope="col"><span
                                                                            className="fs-eight">Winner (incl.
                                                                            overtime)
                                                                        </span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight"></span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">Handicap (incl
                                                                            overtime)</span>
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
                                                                                        className="fs-seven text-center d-block mb-2">1</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.5</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven text-center d-block mb-2">2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.8</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="pt-4">
                                                                            <div
                                                                                className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven text-center d-block mb-2">(1.7)1</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.39</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven text-center d-block mb-2">(-7.5)1</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">2.85</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="pt-4">
                                                                            <div
                                                                                className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven text-center d-block mb-2">(-7.5)1</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven text-center d-block mb-2">(-1.5)1</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.39</span>
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
                                        <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                            <div className="row gx-0 gy-xl-0 gy-7">
                                                <div className="col-xl-5 col-xxl-4">
                                                    <div className="top_matches__clubname">
                                                        <div
                                                            className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <Image src="/images/icon/basketball.png" width={16} height={16}
                                                                    alt="Icon" /> <span
                                                                        className="fs-eight cpoint">International.
                                                                    Euroleague</span>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                <span className="fs-eight cpoint">Today,
                                                                    23:00</span>
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <Image src="/images/icon/updwon.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                    <Image src="/images/icon/t-shart.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                            <div>
                                                                <div
                                                                    className="d-flex align-items-center gap-2 mb-4">
                                                                    <Image src="/images/icon/sivasspor.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Sivasspor</span>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <Image src="/images/icon/trabzonspor.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Trabzonspor</span>
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
                                                                        src="/images/icon/star.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-xxl-8">
                                                    <div className="top_matches__clubdata">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0 pb-0">
                                                                <thead>
                                                                    <tr className="text-center">
                                                                        <th scope="col"><span
                                                                            className="fs-eight">1x2</span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">Double
                                                                            chance</span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">Total</span>
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
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
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
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
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
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="top_matches__cmncard p2-bg p-4 rounded-3">
                                            <div className="row gx-0 gy-xl-0 gy-7">
                                                <div className="col-xl-5 col-xxl-4">
                                                    <div className="top_matches__clubname">
                                                        <div
                                                            className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <Image src="/images/icon/basketball.png" width={16} height={16}
                                                                    alt="Icon" /> <span
                                                                        className="fs-eight cpoint">USA. NBA</span>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                <span className="fs-eight cpoint">Today,
                                                                    23:00</span>
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <Image src="/images/icon/updwon.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                    <Image src="/images/icon/t-shart.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                            <div>
                                                                <div
                                                                    className="d-flex align-items-center gap-2 mb-4">
                                                                    <Image src="/images/icon/istanbul-basaksehir.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Istanbul
                                                                        Basaksehir</span>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <Image src="/images/icon/pendikspor.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Pendikspor</span>
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
                                                <div className="col-xl-7 col-xxl-8">
                                                    <div className="top_matches__clubdata">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0 pb-0">
                                                                <thead>
                                                                    <tr className="text-center">
                                                                        <th scope="col"><span
                                                                            className="fs-eight">1x2</span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">Double
                                                                            chance</span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">Total</span>
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
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
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
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
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
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2">draw</span>
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
    )
}
