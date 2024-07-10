"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { tabThree, soccerUpComing, tennisUpCE, basketballUpCE, eCricketUpCE, amricanFootballUpCE, nb2klast, fifaVoltaLast } from "@/public/data/tabThree";
import { useState } from 'react';

export default function UpComingEvents() {
    const [activeItem, setActiveItem] = useState(tabThree[0]);

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
            <section className="top_matches pb-5 pb-md-6">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 gx-0 gx-lg-4">
                            <div className="top_matches__main">
                                <div className="row w-100">
                                    <div className="col-12">
                                        <div className="top_matches__title d-flex align-items-center gap-2 mb-4">
                                            <Image
                                                width={32}
                                                height={32}
                                                src="/images/icon/clock-icon.png"
                                                alt="Icon"
                                            />
                                            <h3>Upcoming Events</h3>
                                        </div>
                                        <div className="top_matches__content">
                                            <div className="singletab">
                                                <Tab.Group>
                                                    <Tab.List className="tablinks d-flex align-items-center gap-4 flex-wrap mb-5 mb-md-6">
                                                        {tabThree.map((tabThreeSingle) => (
                                                            <Tab className="nav-links" key={tabThreeSingle.buttonName}>
                                                                <span onClick={() => handleClick(tabThreeSingle)}
                                                                    style={getItemStyle(tabThreeSingle)} className="tablink clickable-active2 d-flex align-items-center gap-2 py-2 px-4 p3-bg rounded-17">
                                                                    <Image
                                                                        width={16}
                                                                        height={16}
                                                                        src={tabThreeSingle.imgSrc}
                                                                        alt="Icon"
                                                                    />{" "}
                                                                    {tabThreeSingle.buttonName}
                                                                </span>
                                                            </Tab>
                                                        ))}
                                                    </Tab.List>
                                                    <Tab.Panels>
                                                        <Tab.Panel className="tabitem active">
                                                            {soccerUpComing.map(
                                                                ({
                                                                    id,
                                                                    floorball,
                                                                    titletwo,
                                                                    times,
                                                                    updown,
                                                                    tShart,
                                                                    x2,
                                                                    douchance,
                                                                    ttl,
                                                                    clubone,
                                                                    clubtwo,
                                                                    clubNameOne,
                                                                    clubNameTwo,
                                                                    chart,
                                                                    star,
                                                                    draw,
                                                                    point,
                                                                }) => (
                                                                    <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4" key={id}>
                                                                        <div className="row gx-0 gy-xl-0 gy-7">
                                                                            <div className="col-xl-5 col-xxl-4">
                                                                                <div className="top_matches__clubname">
                                                                                    <div
                                                                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                        <div className="d-flex align-items-center gap-1">
                                                                                            <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                                alt="Icon" /> <span
                                                                                                    className="fs-eight cpoint">International
                                                                                                Cup</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                            <span className="fs-eight cpoint">In 2 days,
                                                                                                02:00</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                        <div>
                                                                                            <div
                                                                                                className="d-flex align-items-center gap-2 mb-4">
                                                                                                <Image src={clubone} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameOne}</span>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <Image src={clubtwo} width={24} height={24}
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
                                                                            <div className="col-xl-7 col-xxl-8">
                                                                                <div className="top_matches__clubdata">
                                                                                    <div className="table-responsive maintain">
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
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                                    className="fw-bold d-block">3.45</span>
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
                                                                                                                    className="fw-bold d-block">3.45</span>
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
                                                                                                                    2.5</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                                    2</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                                    3.0</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                )
                                                            )}
                                                        </Tab.Panel>
                                                        <Tab.Panel className="tabitem active">
                                                            <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                                                <div className="row gx-0 gy-xl-0 gy-7">
                                                                    <div className="col-xl-5 col-xxl-4">
                                                                        <div className="top_matches__clubname">
                                                                            <div
                                                                                className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                <div className="d-flex align-items-center gap-1">
                                                                                    <Image src="/images/icon/fifa-volta.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Germany
                                                                                        Bundesliga</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/kawasaki.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Bayern</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/borussia-bortmund.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Borussia
                                                                                            Dortmund</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block"></span>
                                                                                    <div className="gap-5">
                                                                                        <Image className="cpoint visually-hidden"
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Portugal Liga
                                                                                        Portugal</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/bg-pathum.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">FC Porto</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/ulsan-hyundai.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Boavista
                                                                                            FC</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block"></span>
                                                                                    <div className="d-flex flex-column gap-5">
                                                                                        <Image className="cpoint d-none"
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">UEFA Youth
                                                                                        League</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/fc-shakhtar.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">FC Shakhtar
                                                                                            Donetsk</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/cmn-footbal.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Royal Antwerp FC
                                                                                            U19</span>
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Champions
                                                                                        League</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/shandong.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Shandong Taishan
                                                                                            FC</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/kaya-fc.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Kaya
                                                                                            FC-Iloilo</span>
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Champions
                                                                                        League</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/france.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">France</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/mail.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Mali</span>
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Portugal Liga
                                                                                        Portugal</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/bg-pathum.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">FC Porto</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/ulsan-hyundai.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Boavista
                                                                                            FC</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block"></span>
                                                                                    <div className="d-flex flex-column gap-5">
                                                                                        <Image className="cpoint d-none"
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Portugal Liga
                                                                                        Portugal</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/bg-pathum.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">FC Porto</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/ulsan-hyundai.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Boavista
                                                                                            FC</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block"></span>
                                                                                    <div className="d-flex flex-column gap-5">
                                                                                        <Image className="cpoint d-none"
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Saudi Arabia .
                                                                                        Division 1</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/al-faisaly.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Al Faisaly
                                                                                            FC</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/al-qaisumah.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Al
                                                                                            Qaisumah</span>
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Vietnam . Vietnam
                                                                                        Cup</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/ho-chi-minh.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Ho Chi Minh City
                                                                                            FC</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/b.binh.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">B. Bình
                                                                                            Duong</span>
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">International
                                                                                        Cup</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/argentina.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Argentina</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/germany.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Germany</span>
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">India I .
                                                                                        League</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/real-kashmir.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Real
                                                                                            Kashmir</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/inter-kashi.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Inter Kashi
                                                                                            FC</span>
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </td>
                                                                                            <td className="pt-4">
                                                                                                <div
                                                                                                    className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center opacity-50">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1
                                                                                                            or draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">-</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">International
                                                                                        Champions</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/incheon.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Incheon United
                                                                                            FC</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/yokohama.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Yokohama
                                                                                            Marinos</span>
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Saudi Division
                                                                                        1</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/al-ain.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Al Ain FC
                                                                                            (SA)</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/al-ain.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Al Arabi SC
                                                                                            (SA)</span>
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Vietnam Cup</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/ho-chi-minh.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Ho Chi Minh City
                                                                                            FC</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/b.binh.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">B. Bình
                                                                                            Duong</span>
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Vietnam Cup</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/feyenoord.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Feyenoord
                                                                                            Rotterdam</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/athletic2.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Atletico
                                                                                            Madrid</span>
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/floorball.png" width={15} height={15}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Portugal Liga
                                                                                        Portugal</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">In 2 days,
                                                                                        02:00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image src="/images/icon/bg-pathum.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">FC Porto</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/ulsan-hyundai.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Boavista
                                                                                            FC</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block"></span>
                                                                                    <div className="d-flex flex-column gap-5">
                                                                                        <Image className="cpoint d-none"
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
                                                                            <div className="table-responsive maintaintwo">
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
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            className="fw-bold d-block">3.45</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            3.0</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                        </Tab.Panel>
                                                        <Tab.Panel className="tabitem active">
                                                            {tennisUpCE.map(
                                                                ({
                                                                    id,
                                                                    basketball,
                                                                    titletwo,
                                                                    times,
                                                                    updown,
                                                                    tShart,
                                                                    x2,
                                                                    douchance,
                                                                    ttl,
                                                                    clubone,
                                                                    clubtwo,
                                                                    clubNameOne,
                                                                    clubNameTwo,
                                                                    chart,
                                                                    star,
                                                                    draw,
                                                                    point,
                                                                }) => (
                                                                    <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4" key={id}>
                                                                        <div className="row gx-0 gy-xl-0 gy-7">
                                                                            <div className="col-xl-5 col-xxl-4">
                                                                                <div className="top_matches__clubname">
                                                                                    <div
                                                                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                        <div className="d-flex align-items-center gap-1">
                                                                                            <Image src="/images/icon/tennis.png" width={16} height={16}
                                                                                                alt="Icon" />
                                                                                            <span className="fs-eight cpoint">{titletwo}</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                            <span className="fs-eight cpoint me-xl-6">Today,
                                                                                                23:00</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                        <div>
                                                                                            <div
                                                                                                className="d-flex align-items-center gap-2 mb-4">
                                                                                                <Image className="rounded-5"
                                                                                                    src={clubone} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameOne}</span>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <Image className="rounded-5"
                                                                                                    src={clubtwo} width={24} height={24}
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
                                                                                                <tr className="text-center">
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">Winner</span>
                                                                                                    </th>
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">First
                                                                                                        set-winner</span>
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
                                                                                                                    className="fs-seven text-center d-block mb-2">1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block">1.39</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                                <span
                                                                                                                    className="fs-seven text-center d-block mb-2">2</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block">2.85</span>
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
                                                        </Tab.Panel>
                                                        <Tab.Panel className="tabitem active">
                                                            {basketballUpCE.map(
                                                                ({
                                                                    id,
                                                                    basketball,
                                                                    titletwo,
                                                                    times,
                                                                    updown,
                                                                    tShart,
                                                                    x2,
                                                                    douchance,
                                                                    ttl,
                                                                    clubone,
                                                                    clubtwo,
                                                                    clubNameOne,
                                                                    clubNameTwo,
                                                                    chart,
                                                                    star,
                                                                    draw,
                                                                    point,
                                                                }) => (
                                                                    <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4" key={id}>
                                                                        <div className="row gx-0 gy-xl-0 gy-7">
                                                                            <div className="col-xl-5 col-xxl-4">
                                                                                <div className="top_matches__clubname">
                                                                                    <div
                                                                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                        <div className="d-flex align-items-center gap-1">
                                                                                            <Image src="/images/icon/basketball.png" width={16} height={16}
                                                                                                alt="Icon" /> <span
                                                                                                    className="fs-eight cpoint">Australia
                                                                                                WNBL</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                            <span className="fs-eight cpoint me-6">Today
                                                                                                13:30</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                        <div>
                                                                                            <div
                                                                                                className="d-flex align-items-center gap-2 mb-4">
                                                                                                <Image src={clubone} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameOne}</span>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <Image src={clubtwo} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameTwo}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                            <span
                                                                                                className="v-line lg d-none d-xl-block mb-15"></span>
                                                                                            <div className="d-flex flex-column gap-5">
                                                                                                <Image className="cpoint"
                                                                                                    src="/images/icon/line-chart.png" width={16} height={16}
                                                                                                    alt="Icon" />
                                                                                                <Image className="cpoint visually-hidden"
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
                                                                                                        className="fs-eight">Winner (incl.
                                                                                                        overtime)</span>
                                                                                                    </th>
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">Handicap (incl.
                                                                                                        overtime)</span>
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
                                                                                                                    className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td className="pt-4">
                                                                                                        <div
                                                                                                            className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(7.5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(-7.5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block">3.45</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(50)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block">2.28</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(-7.5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block">2.28</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td className="pt-4">
                                                                                                        <div
                                                                                                            className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(-1.5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                                    3.0</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                )
                                                            )}
                                                        </Tab.Panel>
                                                        <Tab.Panel className="tabitem active">
                                                            <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                                                <div className="row gx-0 gy-xl-0 gy-7">
                                                                    <div className="col-xl-5 col-xxl-4">
                                                                        <div className="top_matches__clubname">
                                                                            <div
                                                                                className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                <div className="d-flex align-items-center gap-1">
                                                                                    <Image src="/images/icon/cricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">T20 World Cup</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">Today 13:30</span>
                                                                                    <Image src="/images/icon/updwon.png" width={16} height={16}
                                                                                        alt="ion" />
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/rwanda.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Rwanda</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/tanzania.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Tanzania</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>
                                                                                    <div className="d-flex flex-column gap-5">
                                                                                        <Image className="cpoint"
                                                                                            src="/images/icon/line-chart.png" width={16} height={16}
                                                                                            alt="Icon" />
                                                                                        <Image className="cpoint visually-hidden"
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
                                                                                                className="fs-eight">Winner (incl.
                                                                                                overtime)</span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Handicap (incl.
                                                                                                overtime)</span>
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
                                                                                                            className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            1.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            1.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            5.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">2.28</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            4.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/cricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">T20 World Cup</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">Today 13:30</span>
                                                                                    <Image src="/images/icon/updwon.png" width={16} height={16}
                                                                                        alt="ion" />
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/rwanda.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Rwanda</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/tanzania.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Tanzania</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>
                                                                                    <div className="d-flex flex-column gap-5">
                                                                                        <Image className="cpoint"
                                                                                            src="/images/icon/line-chart.png" width={16} height={16}
                                                                                            alt="Icon" />
                                                                                        <Image className="cpoint visually-hidden"
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
                                                                                                className="fs-eight">Winner (incl.
                                                                                                overtime)</span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Handicap (incl.
                                                                                                overtime)</span>
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
                                                                                                            className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            1.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            1.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            5.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">2.28</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            4.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/cricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">T20 World Cup</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">Today 13:30</span>
                                                                                    <Image src="/images/icon/updwon.png" width={16} height={16}
                                                                                        alt="ion" />
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                <div>
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2 mb-4">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/rwanda.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Rwanda</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/tanzania.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Tanzania</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>
                                                                                    <div className="d-flex flex-column gap-5">
                                                                                        <Image className="cpoint"
                                                                                            src="/images/icon/line-chart.png" width={16} height={16}
                                                                                            alt="Icon" />
                                                                                        <Image className="cpoint visually-hidden"
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
                                                                                                className="fs-eight">Winner (incl.
                                                                                                overtime)</span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Handicap (incl.
                                                                                                overtime)</span>
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
                                                                                                            className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                                            1.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            1.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            5.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">2.28</span>
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
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                                            2.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                        <span
                                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                            4.5</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                                    <Image src="/images/icon/cricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">International
                                                                                        Euroleague</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">Today,
                                                                                        23:00</span>
                                                                                    <Image src="/images/icon/updwon.png" width={16} height={16}
                                                                                        alt="icon" />
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
                                                                                                className="fs-seven cpoint">Queensland
                                                                                            Bulls</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/western-australia.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Western
                                                                                            Australia</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>
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
                                                                            <div className="table-responsive">
                                                                                <table className="table mb-0 pb-0">
                                                                                    <thead>
                                                                                        <tr className="text-center">
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Draw no bet
                                                                                            </span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">First
                                                                                                innings</span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">First over
                                                                                                96</span>
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
                                                                                                            className="fs-seven text-center d-block mb-2">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
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
                                                                                                            className="fs-seven text-center d-block mb-2">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
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
                                                                                    <Image src="/images/icon/cricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">International
                                                                                        Euroleague</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">Today,
                                                                                        23:00</span>
                                                                                    <Image src="/images/icon/updwon.png" width={16} height={16}
                                                                                        alt="icon" />
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
                                                                                                className="fs-seven cpoint">Queensland
                                                                                            Bulls</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/western-australia.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Western
                                                                                            Australia</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>
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
                                                                            <div className="table-responsive">
                                                                                <table className="table mb-0 pb-0">
                                                                                    <thead>
                                                                                        <tr className="text-center">
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Draw no bet
                                                                                            </span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">First
                                                                                                innings</span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">First over
                                                                                                96</span>
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
                                                                                                            className="fs-seven text-center d-block mb-2">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
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
                                                                                                            className="fs-seven text-center d-block mb-2">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">3.45</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
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
                                                                                    <Image src="/images/icon/cricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">International
                                                                                        Euroleague</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">Today,
                                                                                        23:00</span>
                                                                                    <Image src="/images/icon/updwon.png" width={16} height={16}
                                                                                        alt="icon" />
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
                                                                                                className="fs-seven cpoint">Queensland
                                                                                            Bulls</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/western-australia.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Western
                                                                                            Australia</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>
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
                                                                            <div className="table-responsive">
                                                                                <table className="table mb-0 pb-0">
                                                                                    <thead>
                                                                                        <tr className="text-center">
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Winner (super
                                                                                                over)
                                                                                            </span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Winner</span>
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
                                                                                                            className="fs-seven text-center d-block mb-2">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">2.85</span>
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
                                                            <div className="top_matches__cmncard p2-bg p-4 rounded-3">
                                                                <div className="row gx-0 gy-xl-0 gy-7">
                                                                    <div className="col-xl-5 col-xxl-4">
                                                                        <div className="top_matches__clubname">
                                                                            <div
                                                                                className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                <div className="d-flex align-items-center gap-1">
                                                                                    <Image src="/images/icon/cricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">International
                                                                                        Euroleague</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                                                                    <span className="fs-eight cpoint">Today,
                                                                                        23:00</span>
                                                                                    <Image src="/images/icon/updwon.png" width={16} height={16}
                                                                                        alt="icon" />
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
                                                                                                className="fs-seven cpoint">Queensland
                                                                                            Bulls</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/western-australia.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Western
                                                                                            Australia</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>
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
                                                                                                className="fs-eight">Winner (super
                                                                                                over)
                                                                                            </span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Winner</span>
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
                                                                                                            className="fs-seven text-center d-block mb-2">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">2.85</span>
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
                                                        </Tab.Panel>
                                                        <Tab.Panel className="tabitem active">
                                                            {eCricketUpCE.map(
                                                                ({
                                                                    id,
                                                                    titletwo,
                                                                    times,
                                                                    updown,
                                                                    tShart,
                                                                    x2,
                                                                    douchance,
                                                                    ttl,
                                                                    clubone,
                                                                    clubtwo,
                                                                    clubNameOne,
                                                                    clubNameTwo,
                                                                    chart,
                                                                    star,
                                                                    draw,
                                                                    point,
                                                                }) => (
                                                                    <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4" key={id}>
                                                                        <div className="row gx-0 gy-xl-0 gy-7">
                                                                            <div className="col-xl-5 col-xxl-4">
                                                                                <div className="top_matches__clubname">
                                                                                    <div
                                                                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                        <div className="d-flex align-items-center gap-1">
                                                                                            <Image src="/images/icon/ecricket.png" width={16} height={16}
                                                                                                alt="Icon" /> <span
                                                                                                    className="fs-eight cpoint">Men&apos;s World
                                                                                                Cup</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap">
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
                                                                                                    src={clubone} width={24} height={24}
                                                                                                    alt="Icon" />
                                                                                                <span className="fs-seven cpoint">{clubNameOne}</span>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <Image src={clubtwo} width={24} height={24}
                                                                                                    alt="Icon" />
                                                                                                <span
                                                                                                    className="fs-seven cpoint">{clubNameTwo}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 position-relative pe-xl-15">

                                                                                            <span
                                                                                                className="v-line lg d-none d-xl-block mb-15"></span>

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
                                                                                                        className="fs-eight">Winner</span>
                                                                                                    </th>
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">Total
                                                                                                        runs</span>
                                                                                                    </th>
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">Sri Lanka
                                                                                                        total</span>
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
                                                                )
                                                            )}
                                                            <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                                                <div className="row gx-0 gy-xl-0 gy-7">
                                                                    <div className="col-xl-5 col-xxl-4">
                                                                        <div className="top_matches__clubname">
                                                                            <div
                                                                                className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                <div className="d-flex align-items-center gap-1">
                                                                                    <Image src="/images/icon/cricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">International
                                                                                        Euroleague</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
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
                                                                                            alt="Icon" />
                                                                                        <span className="fs-seven cpoint">Queensland
                                                                                            Bulls</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/western-australia.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Western
                                                                                            Australia</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-7 col-xxl-8 d-xl-flex">
                                                                        <div className="top_matches__clubdata top_matches__clubdatatwo">
                                                                            <div className="table-responsive">
                                                                                <table className="table mb-0 pb-0">
                                                                                    <thead>
                                                                                        <tr className="text-center">
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Draw no bet
                                                                                            </span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">First
                                                                                                innings</span>
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
                                                                                                            className="fs-seven text-center d-block mb-2">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">2.85</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
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
                                                                                    <Image src="/images/icon/cricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">International
                                                                                        Euroleague</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
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
                                                                                            alt="Icon" />
                                                                                        <span className="fs-seven cpoint">Queensland
                                                                                            Bulls</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image className="rounded-5"
                                                                                            src="/images/icon/western-australia.png" width={24} height={24}
                                                                                            alt="Icon" /> <span
                                                                                                className="fs-seven cpoint">Western
                                                                                            Australia</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>
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
                                                                                                className="fs-eight">Draw no bet
                                                                                            </span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">First
                                                                                                innings</span>
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
                                                                                                            className="fs-seven text-center d-block mb-2">1</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">1.39</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
                                                                                                        <span
                                                                                                            className="fw-bold d-block">2.85</span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                                                                        <span
                                                                                                            className="fs-seven text-center d-block mb-2">2</span>
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
                                                            <div className="top_matches__cmncard p2-bg p-4 rounded-3">
                                                                <div className="row gx-0 gy-xl-0 gy-7">
                                                                    <div className="col-xl-5 col-xxl-4">
                                                                        <div className="top_matches__clubname">
                                                                            <div
                                                                                className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                <div className="d-flex align-items-center gap-1">
                                                                                    <Image src="/images/icon/ecricket.png" width={16} height={16}
                                                                                        alt="Icon" /> <span
                                                                                            className="fs-eight cpoint">Men&apos;s World
                                                                                        Cup</span>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap">
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
                                                                                            src="/images/icon/ecricket.png" width={24} height={24}
                                                                                            alt="Icon" />
                                                                                        <span className="fs-seven cpoint">Nigeria</span>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <Image src="/images/icon/ecricket.png" width={24} height={24}
                                                                                            alt="Icon" />
                                                                                        <span
                                                                                            className="fs-seven cpoint">Zimbabwe</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">

                                                                                    <span
                                                                                        className="v-line lg d-none d-xl-block mb-15"></span>

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
                                                                                                className="fs-eight">Winner</span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Total
                                                                                                runs</span>
                                                                                            </th>
                                                                                            <th scope="col"><span
                                                                                                className="fs-eight">Sri Lanka
                                                                                                total</span>
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
                                                        </Tab.Panel>
                                                        <Tab.Panel className="tabitem active">
                                                            {amricanFootballUpCE.map(
                                                                ({
                                                                    id,
                                                                    titletwo,
                                                                    times,
                                                                    updown,
                                                                    tShart,
                                                                    x2,
                                                                    douchance,
                                                                    ttl,
                                                                    clubone,
                                                                    clubtwo,
                                                                    clubNameOne,
                                                                    clubNameTwo,
                                                                    chart,
                                                                    star
                                                                }) => (
                                                                    <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4" key={id}>
                                                                        <div className="row gx-0 gy-xl-0 gy-7">
                                                                            <div className="col-xl-5 col-xxl-4">
                                                                                <div className="top_matches__clubname">
                                                                                    <div
                                                                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                        <div className="d-flex align-items-center gap-1">
                                                                                            <Image src="/images/icon/america-football.png" width={16} height={16}
                                                                                                alt="Icon" /> <span
                                                                                                    className="fs-eight cpoint">USA Regular
                                                                                                Season</span>
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
                                                                                                <Image src={clubone} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameOne}</span>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <Image src={clubtwo} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameTwo}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                            <span
                                                                                                className="v-line lg d-none d-xl-block"></span>
                                                                                            <div className="d-flex flex-column gap-5 mb-5">
                                                                                                <Image className="cpoint mt-5"
                                                                                                    src="/images/icon/line-chart.png" width={16} height={16}
                                                                                                    alt="Icon" />
                                                                                                <Image className="cpoint d-none"
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
                                                                                                        className="fs-eight">Winner (incl
                                                                                                        overtime)</span>
                                                                                                    </th>
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">Handicap (incl
                                                                                                        overtime)</span>
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
                                                                )
                                                            )}
                                                        </Tab.Panel>
                                                        <Tab.Panel className="tabitem active">
                                                            {basketballUpCE.map(
                                                                ({
                                                                    id,
                                                                    basketball,
                                                                    titletwo,
                                                                    times,
                                                                    updown,
                                                                    tShart,
                                                                    x2,
                                                                    douchance,
                                                                    ttl,
                                                                    clubone,
                                                                    clubtwo,
                                                                    clubNameOne,
                                                                    clubNameTwo,
                                                                    chart,
                                                                    star,
                                                                    draw,
                                                                    point,
                                                                }) => (
                                                                    <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4" key={id}>
                                                                        <div className="row gx-0 gy-xl-0 gy-7">
                                                                            <div className="col-xl-5 col-xxl-4">
                                                                                <div className="top_matches__clubname">
                                                                                    <div
                                                                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                        <div className="d-flex align-items-center gap-1">
                                                                                            <Image src="/images/icon/basketball.png" width={16} height={16}
                                                                                                alt="Icon" /> <span
                                                                                                    className="fs-eight cpoint">Australia
                                                                                                WNBL</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                            <span className="fs-eight cpoint me-6">Today
                                                                                                13:30</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                        <div>
                                                                                            <div
                                                                                                className="d-flex align-items-center gap-2 mb-4">
                                                                                                <Image src={clubone} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameOne}</span>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <Image src={clubtwo} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameTwo}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                            <span
                                                                                                className="v-line lg d-none d-xl-block mb-15"></span>
                                                                                            <div className="d-flex flex-column gap-5">
                                                                                                <Image className="cpoint"
                                                                                                    src="/images/icon/line-chart.png" width={16} height={16}
                                                                                                    alt="Icon" />
                                                                                                <Image className="cpoint visually-hidden"
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
                                                                                                        className="fs-eight">Winner (incl.
                                                                                                        overtime)</span>
                                                                                                    </th>
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">Handicap (incl.
                                                                                                        overtime)</span>
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
                                                                                                                    className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">3.45</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td className="pt-4">
                                                                                                        <div
                                                                                                            className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(7.5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">1.39</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(-7.5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block">3.45</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(50)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block">2.28</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(-7.5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block">2.28</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td className="pt-4">
                                                                                                        <div
                                                                                                            className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(-1.5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">(5)
                                                                                                                    1</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">2.28</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                                                <span
                                                                                                                    className="fs-seven d-block mb-2 text-nowrap">over
                                                                                                                    3.0</span>
                                                                                                                <span
                                                                                                                    className="fw-bold d-block text-nowrap">3.45</span>
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
                                                                )
                                                            )}
                                                        </Tab.Panel>
                                                        <Tab.Panel className="tabitem active">
                                                            {nb2klast.map(
                                                                ({
                                                                    id,
                                                                    basketball,
                                                                    titletwo,
                                                                    times,
                                                                    updown,
                                                                    tShart,
                                                                    x2,
                                                                    douchance,
                                                                    ttl,
                                                                    clubone,
                                                                    clubtwo,
                                                                    clubNameOne,
                                                                    clubNameTwo,
                                                                    chart,
                                                                    star,
                                                                    draw,
                                                                    point,
                                                                }) => (
                                                                    <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4" key={id}>
                                                                        <div className="row gx-0 gy-xl-0 gy-7">
                                                                            <div className="col-xl-5 col-xxl-4">
                                                                                <div className="top_matches__clubname">
                                                                                    <div
                                                                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                        <div className="d-flex align-items-center gap-1">
                                                                                            <Image src="/images/icon/fifa-volta.png" width={16} height={16}
                                                                                                alt="Icon" /> <span
                                                                                                    className="fs-eight cpoint">Men&apos;s World Cup</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                            <span className="fs-eight cpoint">Today, 23:00</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                        <div>
                                                                                            <div
                                                                                                className="d-flex align-items-center gap-2 mb-4">
                                                                                                <Image className="rounded-5"
                                                                                                    src={clubone} width={24} height={24}
                                                                                                    alt="Icon" />
                                                                                                <span className="fs-seven cpoint">{clubNameOne}</span>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <Image src={clubtwo} width={24} height={24}
                                                                                                    alt="Icon" />
                                                                                                <span
                                                                                                    className="fs-seven cpoint">{clubNameTwo}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 position-relative pe-xl-15">

                                                                                            <span
                                                                                                className="v-line lg d-none d-xl-block mb-15"></span>

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
                                                                                                        className="fs-eight">Winner</span>
                                                                                                    </th>
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">Total
                                                                                                        runs</span>
                                                                                                    </th>
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">Sri Lanka
                                                                                                        total</span>
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
                                                                )
                                                            )}
                                                        </Tab.Panel>
                                                        <Tab.Panel className="tabitem active">
                                                            {fifaVoltaLast.map(
                                                                ({
                                                                    id,
                                                                    basketball,
                                                                    titletwo,
                                                                    times,
                                                                    updown,
                                                                    tShart,
                                                                    x2,
                                                                    douchance,
                                                                    ttl,
                                                                    clubone,
                                                                    clubtwo,
                                                                    clubNameOne,
                                                                    clubNameTwo,
                                                                    chart,
                                                                    star,
                                                                    draw,
                                                                    point,
                                                                }) => (
                                                                    <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4" key={id}>
                                                                        <div className="row gx-0 gy-xl-0 gy-7">
                                                                            <div className="col-xl-5 col-xxl-4">
                                                                                <div className="top_matches__clubname">
                                                                                    <div
                                                                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                                        <div className="d-flex align-items-center gap-1">
                                                                                            <Image src="/images/icon/fifa-volta.png" width={16} height={16}
                                                                                                alt="Icon" /> <span
                                                                                                    className="fs-eight cpoint">{titletwo}</span>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                                            <span className="fs-eight cpoint me-7">Today,
                                                                                                13:07</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                                        <div>
                                                                                            <div
                                                                                                className="d-flex align-items-center gap-2 mb-4">
                                                                                                <Image src={clubone} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameOne}</span>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <Image src={clubtwo} width={24} height={24}
                                                                                                    alt="Icon" /> <span
                                                                                                        className="fs-seven cpoint">{clubNameTwo}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                                            <span
                                                                                                className="v-line lg d-none d-xl-block"></span>
                                                                                            <div className="d-flex flex-column gap-5 mb-5">
                                                                                                <Image className="cpoint mt-5"
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
                                                                                                        className="fs-eight">Winner (incl
                                                                                                        overtime)</span>
                                                                                                    </th>
                                                                                                    <th scope="col"><span
                                                                                                        className="fs-eight">Handicap (incl
                                                                                                        overtime)</span>
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
                                                                )
                                                            )}
                                                        </Tab.Panel>
                                                    </Tab.Panels>
                                                </Tab.Group>
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
    );
}