"use client";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IconArrowBadgeRight, IconBrandTelegram, IconBrandGithubFilled, IconBrandBehance, IconBrandFacebookFilled, IconBrandDiscordFilled, IconCurrencyBitcoin, IconBrandInstagram } from "@tabler/icons-react";

export default function MainFooter() {
    return (
        <footer className="footer_section pt-10 pt-md-15 pt-lg-20 p2-bg pb-12 pb-md-0">
            <div className="container-fluid">
                <div className="row mb-10 mb-md-15 mb-lg-20">
                    <div className="col-12">
                        <div className="footer_section__main">
                            <div className="row gy-8">
                                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2 col-xxl-2">
                                    <div className="footer_section__sports">
                                        <h4 className="mb-5 mb-md-6">Sports</h4>
                                        <ul className="d-flex flex-column gap-5">
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Sports</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="/floorball">Live Betting</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Virtuals</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Football</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="/basketball">Basketball</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="/ice-hockey">Ice Hockey</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2 col-xxl-2">
                                    <div className="footer_section__promotions">
                                        <h4 className="mb-5 mb-md-6">Promotions</h4>
                                        <ul className="d-flex flex-column gap-5">
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="/promotions">Sports Promotions</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Tournaments</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Achievements</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Bonus Shop</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                                    <div className="footer_section__help">
                                        <h4 className="mb-5 mb-md-6">Help</h4>
                                        <ul className="d-flex flex-column gap-5">
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Help</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Bet Slip Check</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">DepositsLink/
                                                    Withdrawals</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Sports results</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Sports stats</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                    <div className="footer_section__security">
                                        <h4 className="mb-5 mb-md-6">Security and Privacy</h4>
                                        <ul className="d-flex flex-column gap-5">
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Privacy Policy</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Terms aLinkd
                                                    Conditions</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Cookie Policy</Link>
                                            </li>
                                            <li className="iconstyle d-flex align-items-center">
                                                <IconArrowBadgeRight className="fs-five rtawin" />
                                                <Link className="fs-ten n4-color" href="#">Sports results</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-8 col-md-5 col-lg-6 col-xxl-3">
                                    <div className="footer_section__community">
                                        <h4 className="mb-5 mb-md-6">Join our Community</h4>
                                        <ul className="d-flex align-items-center flex-wrap gap-5">
                                            <li>
                                                <Link className="footer_section__community-sitem n4-coloLink"
                                                    href="#">
                                                    <IconBrandTelegram className="fs-three footericon" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="footer_section__community-sitem n4-coloLink"
                                                    href="#">
                                                    <IconBrandGithubFilled className="fs-three footericon" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="footer_section__community-sitem n4-coloLink"
                                                    href="#">
                                                    <IconBrandBehance className="fs-three footericon" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="footer_section__community-sitem n4-coloLink"
                                                    href="#">
                                                    <IconBrandFacebookFilled className="fs-three footericon" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="footer_section__community-sitem n4-coloLink"
                                                    href="#">
                                                    <IconBrandDiscordFilled className="fs-three footericon" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="footer_section__community-sitem n4-coloLink"
                                                    href="#">
                                                    <IconCurrencyBitcoin className="fs-three bitcoin" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="footer_section__community-sitem n4-coloLink"
                                                    href="#">
                                                    <IconBrandInstagram className="fs-three footericon" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 px-0 mx-0">
                        <div className="brand-slider n6-bg pt-7 pb-7">
                            <div className="footer_section__slider swiper-wrapper d-flex align-items-center">
                                <Swiper
                                    className="slider_hero"
                                    loop
                                    speed={2000}
                                    autoplay={{
                                        delay: 0,
                                    }}
                                    slidesPerView="auto"
                                    modules={[Autoplay]}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 3,
                                            spaceBetween: 5,
                                        },
                                        480: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        575: {
                                            slidesPerView: 5,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 7,
                                            spaceBetween: 20,
                                        },
                                        991: {
                                            slidesPerView: 8,
                                            spaceBetween: 20,
                                        },
                                        1199: {
                                            slidesPerView: 10,
                                            spaceBetween: 20,
                                        },
                                        1499: {
                                            slidesPerView: 13,
                                            spaceBetween: 24,
                                        },
                                        1799: {
                                            slidesPerView: 15,
                                            spaceBetween: 24,
                                        },
                                    }}>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image width={104} height={30} src="/images/icon/visa.png" alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image width={120} height={30} src="/images/icon/netent.png" alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image width={39} height={30} src="/images/icon/mastercard.png" alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image width={82} height={29} src="/images/icon/skrill.png" alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image width={50} height={30} src="/images/icon/maestro.png" alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/webmoney.png" width={117} height={30} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/neteller.png" width={178} height={30} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/debit.png" width={66} height={30} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/pragmathic-play.png" width={97} height={32} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/play-go.png" width={84} height={32} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/gamomat.png" width={100} height={32} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/paysafecard.png" width={180} height={30} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image width={120} height={30} src="/images/icon/netent.png" alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image width={39} height={30} src="/images/icon/mastercard.png" alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image width={82} height={29} src="/images/icon/skrill.png" alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image width={50} height={30} src="/images/icon/maestro.png" alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/webmoney.png" width={117} height={30} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/neteller.png" width={178} height={30} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/debit.png" width={66} height={30} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/pragmathic-play.png" width={97} height={32} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/play-go.png" width={84} height={32} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="footer_section__slider-brand swiper-slide px-4">
                                            <Image src="/images/icon/gamomat.png" width={100} height={32} alt="Brand" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
