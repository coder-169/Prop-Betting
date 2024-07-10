import Image from "next/image";
import { iceHockeyMatch } from "@/public/data/tabOne";

export default function TopNba2k() {
    return (
        <section className="top_matches">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 gx-0 gx-sm-4">
                        <div className="top_matches__main pt-20">
                            <div className="row w-100 pt-md-5">
                                <div className="col-12">
                                    <div className="top_matches__title d-flex align-items-center gap-2 mb-4 mb-md-5">
                                        <Image src="/images/icon/king.png" width={32}
                                            height={32} alt="Icon" />
                                        <h3>Top Soccer</h3>
                                    </div>
                                    <div className="top_matches__content">
                                        <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                            <div className="row gx-0 gy-xl-0 gy-7">
                                                <div className="col-xl-5 col-xxl-4">
                                                    <div className="top_matches__clubname">
                                                        <div
                                                            className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <Image src="/images/icon/fifa-volta.png" width={16} height={16}
                                                                    alt="Icon" /> <span
                                                                        className="fs-eight cpoint">USA NBA
                                                                    All-time</span>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <Image src="/images/icon/live.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                    <Image src="/images/icon/play.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                </div>
                                                                <span className="fs-eight cpoint">2′ 4th
                                                                    quarter</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                            <div>
                                                                <div
                                                                    className="d-flex align-items-center gap-2 mb-4">
                                                                    <Image src="/images/icon/cf-ttigres-uanl.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">CF Tigres
                                                                        UANL</span>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <Image src="/images/icon/club-america.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Club
                                                                        America</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                <div className="d-flex flex-column gap-1">
                                                                    <span
                                                                        className="top_matches__cmncard-countcercle  rounded-17 fs-seven">52</span>
                                                                    <span
                                                                        className="top_matches__cmncard-countcercle  rounded-17 fs-seven">54</span>
                                                                </div>
                                                                <span
                                                                    className="v-line lg d-none d-xl-block"></span>
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
                                                                            className="fs-eight">Winner (incl
                                                                            overtime)</span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">1x2</span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">Total (incl
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
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">2.25</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="pt-4">
                                                                            <div
                                                                                className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">1
                                                                                        or draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.39</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">1
                                                                                        or 2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">draw
                                                                                        or 2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">2.45</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="pt-4">
                                                                            <div
                                                                                className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">over
                                                                                        0.5</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">under
                                                                                        0.5</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.39</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">over
                                                                                        5</span>
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
                                                                <Image src="/images/icon/fifa-volta.png" width={16} height={16}
                                                                    alt="Icon" /> <span
                                                                        className="fs-eight cpoint">Turkiye Super
                                                                    Lig</span>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <Image src="/images/icon/live.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                    <Image src="/images/icon/play.png" width={16} height={16}
                                                                        alt="Icon" />
                                                                </div>
                                                                <span className="fs-eight cpoint">56′ 2nd
                                                                    half</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                            <div>
                                                                <div
                                                                    className="d-flex align-items-center gap-2 mb-4">
                                                                    <Image src="/images/icon/cmn-footbal.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Petroleros de
                                                                        FC</span>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <Image src="/images/icon/cmn-footbal.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Escorpiones
                                                                        FC</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                <div className="d-flex flex-column gap-1">
                                                                    <span
                                                                        className="top_matches__cmncard-countcercle  rounded-17 fs-seven">52</span>
                                                                    <span
                                                                        className="top_matches__cmncard-countcercle  rounded-17 fs-seven">52</span>
                                                                </div>
                                                                <span
                                                                    className="v-line lg d-none d-xl-block"></span>
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
                                                                            className="fs-eight">Winner (incl
                                                                            overtime)</span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">1x2</span>
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
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">2.25</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="pt-4">
                                                                            <div
                                                                                className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">1
                                                                                        or draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.39</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">1
                                                                                        or 2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">draw
                                                                                        or 2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">2.45</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="pt-4">
                                                                            <div
                                                                                className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">over
                                                                                        0.5</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">under
                                                                                        0.5</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.39</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">over
                                                                                        5</span>
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
                                                                <Image src="/images/icon/fifa-volta.png" width={16} height={16}
                                                                    alt="Icon" /> <span
                                                                        className="fs-eight cpoint">Belarus League
                                                                    A</span>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                <span className="fs-eight cpoint me-4">Today,
                                                                    10:52</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                            <div>
                                                                <div
                                                                    className="d-flex align-items-center gap-2 mb-4">
                                                                    <Image src="/images/icon/cmn-footbal.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Mogilev</span>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <Image src="/images/icon/cmn-footbal.png" width={24} height={24}
                                                                        alt="Icon" /> <span
                                                                            className="fs-seven cpoint">Pinsk</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                <div className="d-flex flex-column gap-1">
                                                                    <span
                                                                        className="top_matches__cmncard-countcercle  rounded-17 fs-seven">52</span>
                                                                    <span
                                                                        className="top_matches__cmncard-countcercle  rounded-17 fs-seven">54</span>
                                                                </div>
                                                                <span
                                                                    className="v-line lg d-none d-xl-block"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-xxl-8">
                                                    <div className="top_matches__clubdata">
                                                        <div className="table-responsive maintaintwo">
                                                            <table className="table mb-0 pb-0">
                                                                <thead>
                                                                    <tr className="text-center">
                                                                        <th scope="col"><span
                                                                            className="fs-eight">Winner (incl
                                                                            overtime)</span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">1x2</span>
                                                                        </th>
                                                                        <th scope="col"><span
                                                                            className="fs-eight">Total (incl
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
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">2.25</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="pt-4">
                                                                            <div
                                                                                className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">1
                                                                                        or draw</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.39</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">1
                                                                                        or 2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">draw
                                                                                        or 2</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">2.45</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="pt-4">
                                                                            <div
                                                                                className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">over
                                                                                        0.5</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">3.45</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">under
                                                                                        0.5</span>
                                                                                    <span
                                                                                        className="fw-bold d-block">1.39</span>
                                                                                </div>
                                                                                <div
                                                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                    <span
                                                                                        className="fs-seven d-block mb-2 text-nowrap">over
                                                                                        5</span>
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
