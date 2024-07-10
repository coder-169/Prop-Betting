"use client";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { tabOne, soccerMatch, basketballMatch, iceHockeyMatch } from "@/public/data/tabOne";
import { useState } from "react";

export default function HeroMatches() {
  const [activeItem, setActiveItem] = useState(tabOne[0]);

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
                        src="/images/icon/king.png"
                        alt="Icon"
                      />
                      <h3>Top Matches</h3>
                    </div>
                    <div className="top_matches__content">
                      <div className="singletab">
                        <Tab.Group>
                          <Tab.List className="tablinks d-flex align-items-center gap-4 flex-wrap mb-5 mb-md-6">
                            {tabOne.map((tabOneSingle) => (
                              <Tab className="nav-links" key={tabOneSingle.buttonName}>
                                <span onClick={() => handleClick(tabOneSingle)}
                                  style={getItemStyle(tabOneSingle)} className="tablink clickable-active2 d-flex align-items-center gap-2 py-2 px-4 p3-bg rounded-17">
                                  <Image
                                    width={16}
                                    height={16}
                                    src={tabOneSingle.imgSrc}
                                    alt="Icon"
                                  />
                                  {tabOneSingle.buttonName}
                                </span>
                              </Tab>
                            ))}
                          </Tab.List>
                          <Tab.Panels>
                            <Tab.Panel className="tabitem active">
                              {soccerMatch.map(
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
                                  <div
                                    className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4"
                                    key={id}>
                                    <div className="row gx-0 gy-xl-0 gy-7">
                                      <div className="col-xl-5 col-xxl-4">
                                        <div className="top_matches__clubname">
                                          <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                            <div className="d-flex align-items-center gap-1">
                                              <Image src={football}
                                                width={16}
                                                height={16}
                                                alt="Icon"
                                              />
                                              <span className="fs-eight cpoint">
                                                {titletwo}
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                              <span className="fs-eight cpoint">
                                                {times}
                                              </span>
                                              <div className="d-flex align-items-center gap-1">
                                                <Image
                                                  src={updown}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
                                                <Image
                                                  src={tShart}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                            <div>
                                              <div className="d-flex align-items-center gap-2 mb-4">
                                                <Image
                                                  src={clubone}
                                                  width={24}
                                                  height={24}
                                                  alt="Icon"
                                                />
                                                <span className="fs-seven cpoint">
                                                  {clubNameOne}
                                                </span>
                                              </div>
                                              <div className="d-flex align-items-center gap-2">
                                                <Image
                                                  src={clubtwo}
                                                  width={24}
                                                  height={24}
                                                  alt="Icon"
                                                />
                                                <span className="fs-seven cpoint">
                                                  {clubNameTwo}
                                                </span>
                                              </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                              <span className="v-line lg d-none d-xl-block"></span>
                                              <div className="d-flex flex-column gap-5">
                                                <Image
                                                  className="cpoint"
                                                  src={chart}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
                                                <Image
                                                  className="cpoint"
                                                  src={star}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
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
                                                    <span className="fs-eight">
                                                      {x2}
                                                    </span>
                                                  </th>
                                                  <th scope="col">
                                                    <span className="fs-eight">
                                                      {douchance}
                                                    </span>
                                                  </th>
                                                  <th scope="col">
                                                    <span className="fs-eight">
                                                      {ttl}
                                                    </span>
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="pt-4">
                                                    <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven d-block mb-2">
                                                          {draw}
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          {point}
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven d-block mb-2">
                                                          {draw}
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          {point}
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven d-block mb-2">
                                                          {draw}
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          {point}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </td>
                                                  <td className="pt-4">
                                                    <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven d-block mb-2">
                                                          {draw}
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          {point}
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven d-block mb-2">
                                                          {draw}
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          {point}
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven d-block mb-2">
                                                          {draw}
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          {point}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </td>
                                                  <td className="pt-4">
                                                    <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven d-block mb-2">
                                                          {draw}
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          {point}
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven d-block mb-2">
                                                          {draw}
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          {point}
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven d-block mb-2">
                                                          {draw}
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          {point}
                                                        </span>
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
                              {soccerMatch.map(
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
                                  <div
                                    className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4"
                                    key={id}>
                                    <div className="row gx-0 gy-xl-0 gy-7">
                                      <div className="col-xl-5 col-xxl-4">
                                        <div className="top_matches__clubname">
                                          <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                            <div className="d-flex align-items-center gap-1">
                                              <Image
                                                src={football}
                                                width={16}
                                                height={16}
                                                alt="Icon"
                                              />
                                              <span className="fs-eight cpoint">
                                                {titletwo}
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                              <span className="fs-eight cpoint">
                                                {times}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                            <div>
                                              <div className="d-flex align-items-center gap-2 mb-4">
                                                <Image
                                                  src={clubone}
                                                  width={24}
                                                  height={24}
                                                  alt="Icon"
                                                />
                                                <span className="fs-seven cpoint">
                                                  {clubNameOne}
                                                </span>
                                              </div>
                                              <div className="d-flex align-items-center gap-2">
                                                <Image
                                                  src={clubtwo}
                                                  width={24}
                                                  height={24}
                                                  alt="Icon"
                                                />
                                                <span className="fs-seven cpoint">
                                                  {clubNameTwo}
                                                </span>
                                              </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                              <span className="v-line lg d-none d-xl-block"></span>
                                              <div className="d-flex flex-column gap-5">
                                                <Image
                                                  className="cpoint"
                                                  src={chart}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
                                                <Image
                                                  className="cpoint"
                                                  src={star}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-7 col-xxl-8 d-xl-flex">
                                        <div className="top_matches__clubdata top_matches__clubdatatwo">
                                          <div className="table-responsive maintain">
                                            <table className="table mb-0 pb-0">
                                              <thead>
                                                <tr className="text-center">
                                                  <th scope="col">
                                                    <span className="fs-eight">
                                                      Winner
                                                    </span>
                                                  </th>
                                                  <th scope="col">
                                                    <span className="fs-eight">
                                                      First set-winner
                                                    </span>
                                                  </th>
                                                  <th scope="col">
                                                    <span className="fs-eight">
                                                      Second set-winner
                                                    </span>
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="pt-4">
                                                    <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven text-center d-block mb-2">
                                                          1
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          1.5
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven text-center d-block mb-2">
                                                          2
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.8
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </td>
                                                  <td className="pt-4">
                                                    <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven text-center d-block mb-2">
                                                          1
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          1.39
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven text-center d-block mb-2">
                                                          2
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          2.85
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </td>
                                                  <td className="pt-4">
                                                    <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven text-center d-block mb-2">
                                                          1
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                        <span className="fs-seven text-center d-block mb-2">
                                                          2
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          1.39
                                                        </span>
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
                              {basketballMatch.map(
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
                                  <div
                                    className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4"
                                    key={id}>
                                    <div className="row gx-0 gy-xl-0 gy-7">
                                      <div className="col-xl-5 col-xxl-4">
                                        <div className="top_matches__clubname">
                                          <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                            <div className="d-flex align-items-center gap-1">
                                              <Image
                                                src={basketball}
                                                width={16}
                                                height={16}
                                                alt="Icon"
                                              />
                                              <span className="fs-eight cpoint">
                                                {titletwo}
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                              <span className="fs-eight cpoint">
                                                {times}
                                              </span>
                                              <div className="d-flex align-items-center gap-1">
                                                <Image
                                                  src={updown}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
                                                <Image
                                                  src={tShart}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                            <div>
                                              <div className="d-flex align-items-center gap-2 mb-4">
                                                <Image
                                                  src={clubone}
                                                  width={24}
                                                  height={24}
                                                  alt="Icon"
                                                />
                                                <span className="fs-seven cpoint">
                                                  {clubNameOne}
                                                </span>
                                              </div>
                                              <div className="d-flex align-items-center gap-2">
                                                <Image
                                                  src={clubtwo}
                                                  width={24}
                                                  height={24}
                                                  alt="Icon"
                                                />
                                                <span className="fs-seven cpoint">
                                                  {clubNameTwo}
                                                </span>
                                              </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                              <span className="v-line lg d-none d-xl-block"></span>
                                              <div className="d-flex flex-column gap-5">
                                                <Image
                                                  className="cpoint"
                                                  src={chart}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
                                                <Image
                                                  className="cpoint"
                                                  src={star}
                                                  width={16}
                                                  height={16}
                                                  alt="Icon"
                                                />
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
                                                    <span className="fs-eight">
                                                      Winner (incl. overtime)
                                                    </span>
                                                  </th>
                                                  <th scope="col">
                                                    <span className="fs-eight">
                                                      Handicap (incl. overtime)
                                                    </span>
                                                  </th>
                                                  <th scope="col">
                                                    <span className="fs-eight">
                                                      Total (incl. overtime)
                                                    </span>
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="pt-4">
                                                    <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg text-center">
                                                        <span className="fs-seven d-block mb-2">
                                                          1
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg text-center">
                                                        <span className="fs-seven d-block mb-2">
                                                          2
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg text-center">
                                                        <span className="fs-seven d-block mb-2">
                                                          draw
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </td>
                                                  <td className="pt-4">
                                                    <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg text-center">
                                                        <span className="fs-seven d-block mb-2">
                                                          draw
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg text-center">
                                                        <span className="fs-seven d-block mb-2">
                                                          draw
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg text-center">
                                                        <span className="fs-seven d-block mb-2">
                                                          draw
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </td>
                                                  <td className="pt-4">
                                                    <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg text-center">
                                                        <span className="fs-seven d-block mb-2">
                                                          draw
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg text-center">
                                                        <span className="fs-seven d-block mb-2">
                                                          draw
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
                                                      </div>
                                                      <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg text-center">
                                                        <span className="fs-seven d-block mb-2">
                                                          draw
                                                        </span>
                                                        <span className="fw-bold d-block">
                                                          3.45
                                                        </span>
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
                            <Tab.Panel>
                              <div className="tabitem active">
                                <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                  <div className="row gx-0 gy-xl-0 gy-7">
                                    <div className="col-xl-5 col-xxl-4">
                                      <div className="top_matches__clubname">
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              International Euroleague
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image
                                              src="/images/icon/live.png" width={16} height={16}
                                              alt="icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <Image
                                              src="/images/icon/updwon.png" width={16} height={16}
                                              alt="icon"
                                            />
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/queensland.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Queensland Bulls
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/western-australia.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Western Australia
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <div className="d-flex flex-column gap-1">
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven">
                                                210/6
                                              </span>
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">
                                                0
                                              </span>
                                            </div>
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    Draw no bet
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    First innings
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    First over 96
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>

                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.5
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.8
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.39
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        2.85
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.39
                                                      </span>
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
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              Bangladesh vs NewZealand
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2 pe-xl-15 flex-nowrap flex-xl-wrap">
                                            <Image
                                              src="/images/icon/live.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <div className="d-flex align-items-center gap-1">
                                              <Image
                                                src="/images/icon/updwon.png" width={16} height={16}
                                                alt="Icon"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/Bangladesh.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Bangladesh
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                src="/images/icon/new-zealand.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                New Zealand
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <div className="d-flex flex-column gap-1">
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven">
                                                210/6
                                              </span>
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">
                                                100/8
                                              </span>
                                            </div>
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                  <span className="fs-eight">
                                                    1x2
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    Draw no bet
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    First innings
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2">
                                                        draw
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2">
                                                        draw
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2">
                                                        draw
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2">
                                                        draw
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2">
                                                        draw
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2">
                                                        draw
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2">
                                                        draw
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2">
                                                        draw
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2">
                                                        draw
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
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
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              International Euroleague
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image
                                              src="/images/icon/live.png" width={16} height={16}
                                              alt="icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <Image
                                              src="/images/icon/updwon.png" width={16} height={16}
                                              alt="icon"
                                            />
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/queensland.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Queensland Bulls
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/western-australia.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Western Australia
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <div className="d-flex flex-column gap-1">
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven">
                                                210/6
                                              </span>
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">
                                                0
                                              </span>
                                            </div>
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    Draw no bet
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    First innings
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    First over 96
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>

                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.5
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.8
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.39
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        2.85
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.39
                                                      </span>
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
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              India Vijay Hazare Trophy
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image
                                              src="/images/icon/live.png" width={16} height={16}
                                              alt="icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <Image
                                              src="/images/icon/updwon.png" width={16} height={16}
                                              alt="icon"
                                            />
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/auckland-aces.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Auckland Aces
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/otago-volts.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Otago Volts
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <div className="d-flex flex-column gap-1">
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven">
                                                248/2
                                              </span>
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">
                                                268/7
                                              </span>
                                            </div>
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    Winner (incl. super over)
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>

                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 opacity-50">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        -
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        -
                                                      </span>
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
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              T20 World Cup
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <div className="d-flex align-items-center gap-1">
                                              <Image
                                                src="/images/icon/updwon.png" width={16} height={16}
                                                alt="Icon"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                src="/images/icon/nigeria.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Nigeria
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                src="/images/icon/zimbabwe.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Zimbabwe
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/star2.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                  <span className="fs-eight">
                                                    Winner (super over)
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    First iNigeria total
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    innings over total
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center ">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.39
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center text-nowrap">
                                                        over 1.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 1.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 5.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 5.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 2.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 2.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 4.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
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
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              India Vijay Hazare Trophy
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image
                                              src="/images/icon/live.png" width={16} height={16}
                                              alt="icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <Image
                                              src="/images/icon/updwon.png" width={16} height={16}
                                              alt="icon"
                                            />
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/auckland-aces.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Auckland Aces
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/otago-volts.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Otago Volts
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <div className="d-flex flex-column gap-1">
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven">
                                                248/2
                                              </span>
                                              <span className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">
                                                268/7
                                              </span>
                                            </div>
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    Winner (incl. super over)
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>

                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.3
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.9
                                                      </span>
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
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              T20 World Cup
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <div className="d-flex align-items-center gap-1">
                                              <Image
                                                src="/images/icon/updwon.png" width={16} height={16}
                                                alt="Icon"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                src="/images/icon/nigeria.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Nigeria
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                src="/images/icon/zimbabwe.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Zimbabwe
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/star2.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                  <span className="fs-eight">
                                                    Winner (super over)
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    First iNigeria total
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    innings over total
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center ">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.39
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center text-nowrap">
                                                        over 1.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 1.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 5.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 5.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 2.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 2.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 4.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
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
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              T20 World Cup
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <div className="d-flex align-items-center gap-1">
                                              <Image
                                                src="/images/icon/updwon.png" width={16} height={16}
                                                alt="Icon"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                src="/images/icon/nigeria.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Nigeria
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                src="/images/icon/zimbabwe.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Zimbabwe
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/star2.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                  <span className="fs-eight">
                                                    Winner (super over)
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    First iNigeria total
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    innings over total
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center ">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.39
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center text-nowrap">
                                                        over 1.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 1.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 5.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 5.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 2.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 2.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 4.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
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
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              T20 World Cup
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <div className="d-flex align-items-center gap-1">
                                              <Image
                                                src="/images/icon/updwon.png" width={16} height={16}
                                                alt="Icon"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                src="/images/icon/nigeria.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Nigeria
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                src="/images/icon/zimbabwe.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Zimbabwe
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/star2.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                  <span className="fs-eight">
                                                    Winner (super over)
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    First iNigeria total
                                                  </span>
                                                </th>
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    innings over total
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center ">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.39
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-center text-nowrap">
                                                        over 1.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 1.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 5.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 5.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 2.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        under 2.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven d-block mb-2 text-nowrap">
                                                        over 4.5
                                                      </span>
                                                      <span className="fw-bold d-block text-center">
                                                        3.45
                                                      </span>
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
                                        <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image
                                              src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon"
                                            />
                                            <span className="fs-eight cpoint">
                                              India Vijay Hazare Trophy
                                            </span>
                                          </div>
                                          <div className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <span className="fs-eight cpoint">
                                              Today, 23:00
                                            </span>
                                            <Image
                                              src="/images/icon/updwon.png" width={16} height={16}
                                              alt="icon"
                                            />
                                          </div>
                                        </div>
                                        <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/auckland-aces.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Auckland Aces
                                              </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image
                                                className="rounded-5"
                                                src="/images/icon/otago-volts.png" width={24} height={24}
                                                alt="Icon"
                                              />
                                              <span className="fs-seven cpoint">
                                                Otago Volts
                                              </span>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <span className="v-line lg d-none d-xl-block"></span>
                                            <div className="d-flex flex-column gap-5">
                                              <Image
                                                className="cpoint"
                                                src="/images/icon/line-chart.png" width={16} height={16}
                                                alt="Icon"
                                              />
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
                                                <th scope="col">
                                                  <span className="fs-eight">
                                                    Winner (incl. super over)
                                                  </span>
                                                </th>
                                              </tr>
                                            </thead>

                                            <tbody>
                                              <tr>
                                                <td className="pt-4">
                                                  <div className="top_matches__innercount d-flex align-items-center gap-2">
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        1
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.3
                                                      </span>
                                                    </div>
                                                    <div className="top_matches__innercount-item clickable-active py-1 px-8 rounded-3 n11-bg">
                                                      <span className="fs-seven text-center d-block mb-2">
                                                        2
                                                      </span>
                                                      <span className="fw-bold d-block">
                                                        1.9
                                                      </span>
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
                              </div>
                            </Tab.Panel>
                            <Tab.Panel>
                              <div className="tabitem active">
                                <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                  <div className="row gx-0 gy-xl-0 gy-7">
                                    <div className="col-xl-5 col-xxl-4">
                                      <div className="top_matches__clubname">
                                        <div
                                          className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon" /> <span
                                                className="fs-eight cpoint">International(5
                                              overs)</span>
                                          </div>
                                          <div
                                            className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="icon" />
                                            <span className="fs-eight cpoint">1 INN, 0.5
                                              OV</span>
                                          </div>
                                        </div>
                                        <div
                                          className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div
                                              className="d-flex align-items-center gap-2 mb-4">
                                              <Image className="rounded-5"
                                                src="/images/icon/australia.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">Australia</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image className="rounded-5"
                                                src="/images/icon/united-arab.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">United Arab
                                                Emirates</span>
                                            </div>
                                          </div>
                                          <div
                                            className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <div className="d-flex flex-column gap-1">
                                              <span
                                                className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                              <span
                                                className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">48</span>
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
                                                  className="fs-eight">Total runs
                                                </span>
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
                                                className="fs-eight cpoint">International(5
                                              overs)</span>
                                          </div>
                                          <div
                                            className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="icon" />
                                            <span className="fs-eight cpoint">1 INN, 0.5
                                              OV</span>
                                          </div>
                                        </div>
                                        <div
                                          className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div
                                              className="d-flex align-items-center gap-2 mb-4">
                                              <Image className="rounded-5"
                                                src="/images/icon/australia.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">Australia</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image className="rounded-5"
                                                src="/images/icon/united-arab.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">United Arab
                                                Emirates</span>
                                            </div>
                                          </div>
                                          <div
                                            className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <div className="d-flex flex-column gap-1">
                                              <span
                                                className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                              <span
                                                className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">48</span>
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
                                                  className="fs-eight">Total runs
                                                </span>
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
                                                className="fs-eight cpoint">International (5
                                              overs)</span>
                                          </div>
                                          <div
                                            className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="icon" />
                                            <span className="fs-eight cpoint">1 INN, 0.5
                                              OV</span>
                                          </div>
                                        </div>
                                        <div
                                          className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div
                                              className="d-flex align-items-center gap-2 mb-4">
                                              <Image src="/images/icon/cr-vasco.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">CR Vasco da Gama
                                                RJ</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image src="/images/icon/sc-corinthians.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">SC Corinthians
                                                SP</span>
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
                                                  className="fs-eight">Winner</span>
                                                </th>
                                                <th scope="col"><span
                                                  className="fs-eight">Total
                                                  runs</span>
                                                </th>
                                                <th scope="col"><span
                                                  className="fs-eight">PAK total
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
                                            <Image src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon" /> <span
                                                className="fs-eight cpoint">International(5
                                              overs)</span>
                                          </div>
                                          <div
                                            className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="icon" />
                                            <span className="fs-eight cpoint">1 INN, 0.5
                                              OV</span>
                                          </div>
                                        </div>
                                        <div
                                          className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div
                                              className="d-flex align-items-center gap-2 mb-4">
                                              <Image className="rounded-5"
                                                src="/images/icon/australia.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">Australia</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image className="rounded-5"
                                                src="/images/icon/united-arab.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">United Arab
                                                Emirates</span>
                                            </div>
                                          </div>
                                          <div
                                            className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                            <div className="d-flex flex-column gap-1">
                                              <span
                                                className="top_matches__cmncard-countcercle  rounded-17 fs-seven">210/6</span>
                                              <span
                                                className="top_matches__cmncard-countcercle  rounded-17 fs-seven text-center">48</span>
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
                                <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                  <div className="row gx-0 gy-xl-0 gy-7">
                                    <div className="col-xl-5 col-xxl-4">
                                      <div className="top_matches__clubname">
                                        <div
                                          className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                          <div className="d-flex align-items-center gap-1">
                                            <Image src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon" /> <span
                                                className="fs-eight cpoint">International (5
                                              overs)</span>
                                          </div>
                                          <div
                                            className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="icon" />
                                            <span className="fs-eight cpoint">1 INN, 0.5
                                              OV</span>
                                          </div>
                                        </div>
                                        <div
                                          className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div
                                              className="d-flex align-items-center gap-2 mb-4">
                                              <Image src="/images/icon/cr-vasco.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">CR Vasco da Gama
                                                RJ</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image src="/images/icon/sc-corinthians.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">SC Corinthians
                                                SP</span>
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
                                                  className="fs-eight">Winner</span>
                                                </th>
                                                <th scope="col"><span
                                                  className="fs-eight">Total
                                                  runs</span>
                                                </th>
                                                <th scope="col"><span
                                                  className="fs-eight">PAK total
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
                                            <Image src="/images/icon/cricket.png" width={16} height={16}
                                              alt="Icon" /> <span
                                                className="fs-eight cpoint">International (5
                                              overs)</span>
                                          </div>
                                          <div
                                            className="d-flex align-items-center gap-2 pe-xl-19 flex-nowrap flex-xl-wrap">
                                            <Image src="/images/icon/live.png" width={16} height={16}
                                              alt="icon" />
                                            <Image src="/images/icon/play.png" width={16} height={16}
                                              alt="icon" />
                                            <span className="fs-eight cpoint">1 INN, 0.5
                                              OV</span>
                                          </div>
                                        </div>
                                        <div
                                          className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                          <div>
                                            <div
                                              className="d-flex align-items-center gap-2 mb-4">
                                              <Image src="/images/icon/cr-vasco.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">CR Vasco da Gama
                                                RJ</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                              <Image src="/images/icon/sc-corinthians.png" width={24} height={24}
                                                alt="Icon" /> <span
                                                  className="fs-seven cpoint">SC Corinthians
                                                SP</span>
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
                                                  className="fs-eight">Winner</span>
                                                </th>
                                                <th scope="col"><span
                                                  className="fs-eight">Total
                                                  runs</span>
                                                </th>
                                                <th scope="col"><span
                                                  className="fs-eight">PAK total
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
                              </div>
                            </Tab.Panel>
                            <Tab.Panel className="tabitem active">
                              {iceHockeyMatch.map(
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
                                              className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                              <span className="fs-eight cpoint me-6">{times}</span>
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
                            <Tab.Panel>
                              <div className="tabitem active">
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
