"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IconBallFootball } from "@tabler/icons-react";

export default function TopSlider() {
  return (
    <>
      <section className="hero_area pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0 gx-sm-4">
              <div className="hero_area__main">
                <div className="row w-100">
                  <div className="col-12">
                    <div className="live-playing">
                      <div className="hero_area__topslider swiper-wrapper">
                        <Swiper
                          className="slider_hero"
                          loop
                          speed={5000}
                          autoplay={{
                            delay: 0,
                          }}
                          slidesPerView="auto"
                          modules={[Autoplay]}
                          breakpoints={{
                            0: {
                              slidesPerView: 1,
                            },
                            480: {
                              slidesPerView: 1.5,
                              spaceBetween: 20,
                            },
                            575: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            991: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            1499: {
                              slidesPerView: 3,
                              spaceBetween: 24,
                            },
                            1799: {
                              slidesPerView: 3.5,
                              spaceBetween: 24,
                            },
                          }}>
                          <SwiperSlide>
                            <div className="hero_area__topslider-card swiper-slide p-4 p-md-6">
                              <div className="hero_area__topslider-cardtop d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="d-flex align-items-center gap-2">
                                  <IconBallFootball className="n5-color" />
                                  <span className="fs-seven n5-color cpoint">
                                    Premier league
                                  </span>
                                </div>
                                <span className="fs-seven n5-color cpoint">
                                  Feb 2, 00:00
                                </span>
                              </div>
                              <div className="hero_area__topslider-cardbody d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="hero_area__topslider-flag">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/chealse.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                                <div className="hero_area__topslider-vs">
                                  <span className="fw-bold n5-color">VS</span>
                                </div>
                                <div className="hero_area__topslider-flag text-end d-flex flex-column justify-content-end align-items-end ">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/liverpool.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                              </div>
                              <div className="hero_area__topslider-cardfooter d-flex align-items-center justify-content-between gap-4">
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">1</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">X</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">2</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="hero_area__topslider-card swiper-slide p-4 p-md-6">
                              <div className="hero_area__topslider-cardtop d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="d-flex align-items-center gap-2">
                                  <IconBallFootball className="n5-color" />
                                  <span className="fs-seven n5-color cpoint">
                                    Premier league
                                  </span>
                                </div>
                                <span className="fs-seven n5-color cpoint">
                                  Feb 2, 00:00
                                </span>
                              </div>
                              <div className="hero_area__topslider-cardbody d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="hero_area__topslider-flag">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/chealse.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                                <div className="hero_area__topslider-vs">
                                  <span className="fw-bold n5-color">VS</span>
                                </div>
                                <div className="hero_area__topslider-flag text-end d-flex flex-column justify-content-end align-items-end ">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/liverpool.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                              </div>
                              <div className="hero_area__topslider-cardfooter d-flex align-items-center justify-content-between gap-4">
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">1</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">X</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">2</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="hero_area__topslider-card swiper-slide p-4 p-md-6">
                              <div className="hero_area__topslider-cardtop d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="d-flex align-items-center gap-2">
                                  <IconBallFootball className="n5-color" />
                                  <span className="fs-seven n5-color cpoint">
                                    Premier league
                                  </span>
                                </div>
                                <span className="fs-seven n5-color cpoint">
                                  Feb 2, 00:00
                                </span>
                              </div>
                              <div className="hero_area__topslider-cardbody d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="hero_area__topslider-flag">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/chealse.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                                <div className="hero_area__topslider-vs">
                                  <span className="fw-bold n5-color">VS</span>
                                </div>
                                <div className="hero_area__topslider-flag text-end d-flex flex-column justify-content-end align-items-end ">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/liverpool.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                              </div>
                              <div className="hero_area__topslider-cardfooter d-flex align-items-center justify-content-between gap-4">
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">1</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">X</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">2</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="hero_area__topslider-card swiper-slide p-4 p-md-6">
                              <div className="hero_area__topslider-cardtop d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="d-flex align-items-center gap-2">
                                  <IconBallFootball className="n5-color" />
                                  <span className="fs-seven n5-color cpoint">
                                    Premier league
                                  </span>
                                </div>
                                <span className="fs-seven n5-color cpoint">
                                  Feb 2, 00:00
                                </span>
                              </div>
                              <div className="hero_area__topslider-cardbody d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="hero_area__topslider-flag">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/chealse.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                                <div className="hero_area__topslider-vs">
                                  <span className="fw-bold n5-color">VS</span>
                                </div>
                                <div className="hero_area__topslider-flag text-end d-flex flex-column justify-content-end align-items-end ">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/liverpool.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                              </div>
                              <div className="hero_area__topslider-cardfooter d-flex align-items-center justify-content-between gap-4">
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">1</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">X</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">2</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="hero_area__topslider-card swiper-slide p-4 p-md-6">
                              <div className="hero_area__topslider-cardtop d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="d-flex align-items-center gap-2">
                                  <IconBallFootball className="n5-color" />
                                  <span className="fs-seven n5-color cpoint">
                                    Premier league
                                  </span>
                                </div>
                                <span className="fs-seven n5-color cpoint">
                                  Feb 2, 00:00
                                </span>
                              </div>
                              <div className="hero_area__topslider-cardbody d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="hero_area__topslider-flag">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/chealse.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                                <div className="hero_area__topslider-vs">
                                  <span className="fw-bold n5-color">VS</span>
                                </div>
                                <div className="hero_area__topslider-flag text-end d-flex flex-column justify-content-end align-items-end ">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/liverpool.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                              </div>
                              <div className="hero_area__topslider-cardfooter d-flex align-items-center justify-content-between gap-4">
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">1</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">X</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">2</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="hero_area__topslider-card swiper-slide p-4 p-md-6">
                              <div className="hero_area__topslider-cardtop d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="d-flex align-items-center gap-2">
                                  <IconBallFootball className="n5-color" />
                                  <span className="fs-seven n5-color cpoint">
                                    Premier league
                                  </span>
                                </div>
                                <span className="fs-seven n5-color cpoint">
                                  Feb 2, 00:00
                                </span>
                              </div>
                              <div className="hero_area__topslider-cardbody d-flex align-items-center justify-content-between mb-4 mb-md-6">
                                <div className="hero_area__topslider-flag">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/chealse.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                                <div className="hero_area__topslider-vs">
                                  <span className="fw-bold n5-color">VS</span>
                                </div>
                                <div className="hero_area__topslider-flag text-end d-flex flex-column justify-content-end align-items-end ">
                                  <div className="hero_area__topslider-flagbox mb-2">
                                    <Image
                                      width={40}
                                      height={40}
                                      src="/images/icon/liverpool.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <h6 className="cpoint">Chealsea</h6>
                                </div>
                              </div>
                              <div className="hero_area__topslider-cardfooter d-flex align-items-center justify-content-between gap-4">
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">1</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">X</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                                <div className="hero_area__topslider-cfitem d-flex align-items-center gap-4 py-2 justify-content-center w-100 p2-bg cpoint">
                                  <span className="fs-eight n5-color">2</span>
                                  <span className="fw-bold fs-eight">1.87</span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
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
