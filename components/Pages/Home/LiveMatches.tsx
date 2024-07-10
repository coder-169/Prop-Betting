"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { tabTwo, liveSoccerMatch, liveIceHockeyMatch, liveIceFifaVoltaMatch } from "@/public/data/tabTwo";
import { useState } from 'react';

export default function LiveMatches() {
  const [activeItem, setActiveItem] = useState(tabTwo[0]);

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
      <section className="top_matches">
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
                        src="/images/icon/live-match.png"
                        alt="Icon"
                      />
                      <h3>Live Matches</h3>
                    </div>
                    <div className="top_matches__content">
                      <div className="singletab">
                        <Tab.Group>
                          <Tab.List className="tablinks d-flex align-items-center gap-4 flex-wrap mb-5 mb-md-6">
                            {tabTwo.map((tabTwoSingle) => (
                              <Tab className="nav-links" key={tabTwoSingle.buttonName}>
                                <span onClick={() => handleClick(tabTwoSingle)}
                                  style={getItemStyle(tabTwoSingle)} className="tablink clickable-active2 d-flex align-items-center gap-2 py-2 px-4 p3-bg rounded-17" >
                                  <Image
                                    width={16}
                                    height={16}
                                    src={tabTwoSingle.imgSrc}
                                    alt="Icon"
                                  />{" "}
                                  {tabTwoSingle.buttonName}
                                </span>
                              </Tab>
                            ))}
                          </Tab.List>
                          <Tab.Panels>
                            <Tab.Panel className="tabitem active">
                              {liveSoccerMatch.map(
                                ({
                                  id,
                                  football,
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
                                              <Image src="/images/icon/floorball.png" width={16} height={16}
                                                alt="Icon" /> <span
                                                  className="fs-eight cpoint">Turkiye . Super
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
                                              <div className="d-flex flex-column gap-1">
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                              </div>
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
                                )
                              )}
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/floorball.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">Oceania Pacific
                                            Games</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="Icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="Icon" />
                                          </div>
                                          <span className="fs-eight cpoint">66′ 1st
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
                                                className="fs-seven cpoint">Fiji</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image src="/images/icon/cmn-footbal.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Solomon
                                              Islands</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">1</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                          </div>
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

                                              <th scope="col">
                                                <span className="fs-eight"></span>
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr className="w-100">
                                              <td className="pt-4 w-100">
                                                <div
                                                  className="top_matches__innercount w-100">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active px-7 rounded-3 n11-bg text-center w-100">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap py-5 w-100">No
                                                      Markets Available</span>
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
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/floorball.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">Oceania Pacific
                                            Games</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="Icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="Icon" />
                                          </div>
                                          <span className="fs-eight cpoint">66′ 1st
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
                                                className="fs-seven cpoint">Fiji</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image src="/images/icon/cmn-footbal.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Solomon
                                              Islands</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">1</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                          </div>
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
                                              <th scope="col">
                                              </th>
                                              <th scope="col">
                                                {/* <span className="fs-eight">Double
                                                                                        chance</span> */}
                                              </th>
                                              <th scope="col">
                                                <span className="fs-eight"></span>
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr className="w-100">
                                              <td className="pt-4 w-100">
                                                <div
                                                  className="top_matches__innercount w-100">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active px-7 rounded-3 n11-bg text-center w-100">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap py-5 w-100">No
                                                      Markets Available</span>
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
                                          <Image src="/images/icon/floorball.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">Oceania Pacific
                                            Games</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="Icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="Icon" />
                                          </div>
                                          <span className="fs-eight cpoint">66′ 1st
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
                                                className="fs-seven cpoint">Fiji</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image src="/images/icon/cmn-footbal.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Solomon
                                              Islands</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">1</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                          </div>
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
                                            <tr>
                                              <th scope="col"><span
                                                className="fs-eight ms-20 ps-4">Total</span>
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
                              {liveSoccerMatch.map(
                                ({
                                  id,
                                  football,
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
                                              <Image src="/images/icon/floorball.png" width={16} height={16}
                                                alt="Icon" /> <span
                                                  className="fs-eight cpoint">Turkiye . Super
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
                                              <div className="d-flex flex-column gap-1">
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                              </div>
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
                                          <Image src="/images/icon/fifa-volta.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">Turkiye . Super
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
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                          </div>
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
                                              className="fs-eight cpoint">Women,
                                            Apertura</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="Icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="Icon" />
                                          </div>
                                          <span className="fs-eight cpoint">82′ 2nd
                                            half</span>
                                        </div>
                                      </div>
                                      <div
                                        className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                        <div>
                                          <div
                                            className="d-flex align-items-center gap-2 mb-4">
                                            <Image className="rounded-5"
                                              src="/images/icon/borussia-bortmund.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Dortmund</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image className="rounded-5"
                                              src="/images/icon/mainz.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Mainz</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                          </div>
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
                                              <th scope="col">
                                                {/* <span className="fs-eight">1x2</span> */}
                                              </th>
                                              <th scope="col">
                                                {/* <span className="fs-eight">Double
                                                    chance</span> */}
                                              </th>
                                              <th scope="col">
                                                <span className="fs-eight"></span>
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr className="w-100">
                                              <td className="pt-4 w-100">
                                                <div
                                                  className="top_matches__innercount w-100">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active px-7 rounded-3 n11-bg text-center w-100">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap py-5 w-100">No
                                                      Markets Available</span>
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
                                              className="fs-eight cpoint">England
                                            League</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="Icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="Icon" />
                                          </div>
                                          <span className="fs-eight cpoint">66′ 1st
                                            half</span>
                                        </div>
                                      </div>
                                      <div
                                        className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                        <div>
                                          <div
                                            className="d-flex align-items-center gap-2 mb-4">
                                            <Image src="/images/icon/manchester-city.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Manchester
                                              City</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image src="/images/icon/man-united.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Man.
                                              United</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">1</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                          </div>
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
                                            <tr>
                                              <th scope="col"><span
                                                className="fs-eight ms-20 ps-4">Total</span>
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
                                                      className="fw-bold d-block">3.45</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">1</span>
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
                                              className="fs-eight cpoint">Turkiye . Super
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
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                          </div>
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
                                                className="fs-eight">Winner</span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">First
                                                set-winner</span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">Second
                                                set-winner</span>
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td className="pt-4">
                                                <div
                                                  className="top_matches__innercount d-flex align-items-center gap-2 opacity-50">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">3</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                </div>
                                              </td>
                                              <td className="pt-4">
                                                <div
                                                  className="top_matches__innercount d-flex align-items-center gap-2 opacity-50">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">3</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                </div>
                                              </td>
                                              <td className="pt-4">
                                                <div
                                                  className="top_matches__innercount d-flex align-items-center gap-2 opacity-50">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">3</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
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
                                              className="fs-eight cpoint">Turkiye . Super
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
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                          </div>
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
                                                className="fs-eight">Winner</span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">First
                                                set-winner</span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">Second
                                                set-winner</span>
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td className="pt-4">
                                                <div
                                                  className="top_matches__innercount d-flex align-items-center gap-2 opacity-50">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">3</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                </div>
                                              </td>
                                              <td className="pt-4">
                                                <div
                                                  className="top_matches__innercount d-flex align-items-center gap-2 opacity-50">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">3</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                </div>
                                              </td>
                                              <td className="pt-4">
                                                <div
                                                  className="top_matches__innercount d-flex align-items-center gap-2 opacity-50">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-10 rounded-3 n11-bg text-center">
                                                    <span
                                                      className="fs-seven d-block mb-2 text-nowrap">3</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
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
                                              className="fs-eight cpoint">Turkiye . Super
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
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                          </div>
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
                                                className="fs-eight">Win</span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">First
                                                set-winner</span>
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
                            </Tab.Panel>
                            <Tab.Panel className="tabitem active">
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
                                              className="fs-eight cpoint">Bangladesh vs
                                            NewZealand</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap me-6">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="Icon" />
                                          <span className="fs-eight cpoint">Today,
                                            23:00</span>
                                          <div className="d-flex align-items-center gap-1">
                                            <Image src="/images/icon/updwon.png" width={16} height={16}
                                              alt="Icon" />
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                        <div>
                                          <div
                                            className="d-flex align-items-center gap-2 mb-4">
                                            <Image className="rounded-5"
                                              src="/images/icon/Bangladesh.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Bangladesh</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image src="/images/icon/new-zealand.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">New
                                              Zealand</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">100/8</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
                                          <div className="d-flex flex-column gap-5">
                                            <Image className="cpoint"
                                              src="/images/icon/line-chart.png" width={16} height={16}
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
                                                className="fs-eight">Draw no
                                                bet</span>
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
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="icon" />
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
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">0</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
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
                                              className="fs-eight cpoint">India Vijay Hazare
                                            Trophy</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="icon" />
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
                                              src="/images/icon/auckland-aces.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Auckland
                                              Aces</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image className="rounded-5"
                                              src="/images/icon/otago-volts.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">Otago
                                              Volts</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">248/2</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">268/7</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
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
                                                className="fs-eight">Winner (incl.
                                                super over)
                                              </span>
                                              </th>
                                            </tr>
                                          </thead>

                                          <tbody>
                                            <tr>
                                              <td className="pt-4">
                                                <div
                                                  className="top_matches__innercount d-flex align-items-center gap-2 opacity-50">
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                    <span
                                                      className="fs-seven text-center d-block mb-2">1</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
                                                  </div>
                                                  <div
                                                    className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                    <span
                                                      className="fs-seven text-center d-block mb-2">2</span>
                                                    <span
                                                      className="fw-bold d-block">-</span>
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
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="icon" />
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
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">0</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
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
                            </Tab.Panel>
                            <Tab.Panel className="tabitem active">
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">International
                                            Euroleague</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
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
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">0</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
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
                                                className="fs-eight">Winner
                                              </span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">1x2</span>
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
                                                      className="fw-bold d-block">3.45</span>
                                                  </div>
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
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">International
                                            Euroleague</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
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
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">71/2</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">0</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
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
                                                className="fs-eight">Winner
                                              </span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">1x2</span>
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
                                                      className="fw-bold d-block">3.45</span>
                                                  </div>
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
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">World Cup (5
                                            overs)</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap me-6">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="Icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
                                            alt="Icon" />
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
                                              src="/images/icon/Bangladesh.png" width={24} height={24}
                                              alt="Icon" />
                                            <span
                                              className="fs-seven cpoint">Bangladesh</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image src="/images/icon/new-zealand.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">New
                                              Zealand</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">100/8</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
                                          <div className="d-flex flex-column gap-5">
                                            <Image className="cpoint"
                                              src="/images/icon/line-chart.png" width={16} height={16}
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
                                                className="fs-eight">Total
                                                runs</span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">Australia total
                                                runs</span>
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
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">World Cup (5
                                            overs)</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap me-6">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="Icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
                                            alt="Icon" />
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
                                              src="/images/icon/Bangladesh.png" width={24} height={24}
                                              alt="Icon" />
                                            <span
                                              className="fs-seven cpoint">Bangladesh</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image src="/images/icon/new-zealand.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">New
                                              Zealand</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">100/8</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
                                          <div className="d-flex flex-column gap-5">
                                            <Image className="cpoint"
                                              src="/images/icon/line-chart.png" width={16} height={16}
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
                                                className="fs-eight">Total
                                                runs</span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">Australia total
                                                runs</span>
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
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">International
                                            Euroleague</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
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
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">71/2</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">0</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
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
                                                className="fs-eight">Winner
                                              </span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">1x2</span>
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
                                                      className="fw-bold d-block">3.45</span>
                                                  </div>
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
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">International
                                            Euroleague</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
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
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">0</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
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
                                                className="fs-eight">Winner
                                              </span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">1x2</span>
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
                                                      className="fw-bold d-block">3.45</span>
                                                  </div>
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
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">International
                                            Euroleague</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
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
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">71/2</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">0</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
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
                                                className="fs-eight">Winner
                                              </span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">1x2</span>
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
                                                      className="fw-bold d-block">3.45</span>
                                                  </div>
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
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">World Cup (5
                                            overs)</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap me-6">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="Icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
                                            alt="Icon" />
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
                                              src="/images/icon/Bangladesh.png" width={24} height={24}
                                              alt="Icon" />
                                            <span
                                              className="fs-seven cpoint">Bangladesh</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image src="/images/icon/new-zealand.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">New
                                              Zealand</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">100/8</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
                                          <div className="d-flex flex-column gap-5">
                                            <Image className="cpoint"
                                              src="/images/icon/line-chart.png" width={16} height={16}
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
                                                className="fs-eight">Total
                                                runs</span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">Australia total
                                                runs</span>
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
                              <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                <div className="row gx-0 gy-xl-0 gy-7">
                                  <div className="col-xl-5 col-xxl-4">
                                    <div className="top_matches__clubname">
                                      <div
                                        className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                        <div className="d-flex align-items-center gap-1">
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">World Cup (5
                                            overs)</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap me-6">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="Icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
                                            alt="Icon" />
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
                                              src="/images/icon/Bangladesh.png" width={24} height={24}
                                              alt="Icon" />
                                            <span
                                              className="fs-seven cpoint">Bangladesh</span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2">
                                            <Image src="/images/icon/new-zealand.png" width={24} height={24}
                                              alt="Icon" /> <span
                                                className="fs-seven cpoint">New
                                              Zealand</span>
                                          </div>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">100/8</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
                                          <div className="d-flex flex-column gap-5">
                                            <Image className="cpoint"
                                              src="/images/icon/line-chart.png" width={16} height={16}
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
                                                className="fs-eight">Total
                                                runs</span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">Australia total
                                                runs</span>
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
                                          <Image src="/images/icon/ecricket.png" width={16} height={16}
                                            alt="Icon" /> <span
                                              className="fs-eight cpoint">International
                                            Euroleague</span>
                                        </div>
                                        <div
                                          className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                          <Image src="/images/icon/live.png" width={16} height={16}
                                            alt="icon" />
                                          <Image src="/images/icon/play.png" width={16} height={16}
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
                                          <div className="d-flex flex-column gap-1">
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven">71/2</span>
                                            <span
                                              className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">0</span>
                                          </div>
                                          <span
                                            className="v-line lg d-none d-xl-block"></span>
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
                                                className="fs-eight">Winner
                                              </span>
                                              </th>
                                              <th scope="col"><span
                                                className="fs-eight">1x2</span>
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
                                                      className="fw-bold d-block">3.45</span>
                                                  </div>
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
                              {liveIceHockeyMatch.map(
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
                                              <Image src={basketball} width={16} height={16}
                                                alt="Icon" /> <span
                                                  className="fs-eight cpoint">{titletwo}</span>
                                            </div>
                                            <div
                                              className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap me-6">
                                              <Image src="/images/icon/live.png" width={16} height={16}
                                                alt="Icon" />
                                              <Image src="/images/icon/play.png" width={16} height={16}
                                                alt="Icon" />
                                              <span className="fs-eight cpoint">6′ 2nd half</span>

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
                                                  alt="Icon" /> <span
                                                    className="fs-seven cpoint">{clubNameTwo}</span>
                                              </div>
                                            </div>
                                            <div
                                              className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                              <div className="d-flex flex-column gap-1">
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven">2</span>
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">2</span>
                                              </div>
                                              <span
                                                className="v-line lg d-none d-xl-block"></span>
                                              <div className="d-flex flex-column gap-5">
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
                                ))}
                            </Tab.Panel>
                            <Tab.Panel className="tabitem active">
                              {liveIceHockeyMatch.map(
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
                                              <Image src={basketball} width={16} height={16}
                                                alt="Icon" /> <span
                                                  className="fs-eight cpoint">{titletwo}</span>
                                            </div>
                                            <div
                                              className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap me-6">
                                              <Image src="/images/icon/live.png" width={16} height={16}
                                                alt="Icon" />
                                              <Image src="/images/icon/play.png" width={16} height={16}
                                                alt="Icon" />
                                              <span className="fs-eight cpoint">6′ 2nd half</span>

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
                                                  alt="Icon" /> <span
                                                    className="fs-seven cpoint">{clubNameTwo}</span>
                                              </div>
                                            </div>
                                            <div
                                              className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                              <div className="d-flex flex-column gap-1">
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven">2</span>
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">2</span>
                                              </div>
                                              <span
                                                className="v-line lg d-none d-xl-block"></span>
                                              <div className="d-flex flex-column gap-5">
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
                                ))}
                            </Tab.Panel>
                            <Tab.Panel className="tabitem active">
                              {liveIceFifaVoltaMatch.map(
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
                                                  className="fs-eight cpoint">India Super
                                                League</span>
                                            </div>
                                            <div
                                              className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap me-6">
                                              <Image src="/images/icon/live.png" width={16} height={16}
                                                alt="Icon" />
                                              <Image src="/images/icon/play.png" width={16} height={16}
                                                alt="Icon" />
                                              <span className="fs-eight cpoint">6′ 2nd half</span>

                                            </div>
                                          </div>
                                          <div
                                            className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                            <div>
                                              <div
                                                className="d-flex align-items-center gap-2 mb-4">
                                                <Image className="rounded-5"
                                                  src="/images/icon/mail.png" width={24} height={24}
                                                  alt="Icon" />
                                                <span className="fs-seven cpoint">Jamshedpur
                                                  FC</span>
                                              </div>
                                              <div className="d-flex align-items-center gap-2">
                                                <Image src="/images/icon/new-zealand.png" width={24} height={24}
                                                  alt="Icon" /> <span
                                                    className="fs-seven cpoint">ATK Mohun
                                                  Bagan</span>
                                              </div>
                                            </div>
                                            <div
                                              className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                              <div className="d-flex flex-column gap-1">
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven">2</span>
                                                <span
                                                  className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">2</span>
                                              </div>
                                              <span
                                                className="v-line lg d-none d-xl-block"></span>
                                              <div className="d-flex flex-column gap-5">
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
                                ))}
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