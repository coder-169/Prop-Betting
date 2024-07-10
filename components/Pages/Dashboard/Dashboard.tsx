"use client"
import React, { useState } from 'react'
import { IconWallet, IconCreditCard, IconCreditCardOff, IconLogout, IconUser, IconSettings, IconBellRinging, IconHistory, } from "@tabler/icons-react";
import { amountData } from '@/public/data/dashBoard';
import DepositCard from './DepositCard';
import DepositAmount from './DepositAmount';
import { Tab } from '@headlessui/react';
import WithdrawalAmount from './WithdrawalAmount';
import Link from 'next/link';
import { dashboardTabs } from '@/public/data/dashTabs';

export default function Dashboard() {
    const [activeItem, setActiveItem] = useState(dashboardTabs[0]);

    const handleClick = (itemName: any) => {
        setActiveItem(itemName);
    };
    const getItemStyle = (itemName: any) => {
        return {
            backgroundColor: activeItem === itemName ? '#0F1B42' : '',
        };
    };

    return (
        <>
            <section className="pay_method pb-120">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 gx-0 gx-sm-4">
                            <div className="hero_area__main">
                                <Tab.Group>
                                    <div className="row gy-6 gy-xxl-0 singletab">
                                        <div className="col-xxl-3">
                                            <div className="pay_method__scrol">
                                                <Tab.List
                                                    className="tablinks pay_method__scrollbar p2-bg p-5 p-md-6 rounded-4 d-flex align-items-center justify-content-center flex-xxl-column gap-3 gap-xxl-2">
                                                    {dashboardTabs.map((singleTabs) => (
                                                        <Tab onClick={() => handleClick(singleTabs)}
                                                            style={getItemStyle(singleTabs)} className="nav-links p-3 rounded-3 cpoint d-inline-block outstles" key={singleTabs.id}>
                                                            <span className="tablink d-flex align-items-center gap-2 outstles">
                                                                {singleTabs.icon}
                                                                {singleTabs.tabname}
                                                            </span>
                                                        </Tab>
                                                    ))}

                                                </Tab.List>
                                            </div>
                                        </div>
                                        <div className="col-xxl-9">
                                            <Tab.Panels className="tabcontents">
                                                <Tab.Panel>
                                                    <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8 mb-8 mb-md-10">
                                                        <div
                                                            className="pay_method__paymethod-title d-flex align-items-center gap-3 mb-6 mb-md-8">
                                                            <i className="ti ti-credit-card fs-four g1-color"></i>
                                                            <h5 className="n10-color">Payment methods</h5>
                                                        </div>
                                                        <div className="pay_method__paymethod-alitem">
                                                            <div className="row gx-4 gy-4">
                                                                <DepositCard />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <DepositAmount />
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8 mb-8 mb-md-10">
                                                        <div
                                                            className="pay_method__paymethod-title d-flex align-items-center gap-3 mb-6 mb-md-8">
                                                            <i className="ti ti-credit-card fs-four g1-color"></i>
                                                            <h5 className="n10-color">Payment methods</h5>
                                                        </div>
                                                        <div className="pay_method__paymethod-alitem">
                                                            <div className="row gx-4 gy-4">
                                                                <DepositCard />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                                        <div className="pay_method__paymethod-title mb-5 mb-md-6">
                                                            <h5 className="n10-color">Choose or enter your withdrawal amount</h5>
                                                        </div>
                                                        <div
                                                            className="pay_method__amount d-flex align-content-center justify-content-between py-3 px-5 px-md-6 mb-6 mb-md-8 flex-wrap gap-3">
                                                            <div className="pay_method__amount-actual">
                                                                <span className="fs-seven mb-3">Actual balance</span>
                                                                <div className="d-flex align-items-center gap-3">
                                                                    <span className="fw-bol">$ 7.000</span>
                                                                    <i className="ti ti-refresh fs-seven cpoint"></i>
                                                                </div>
                                                            </div>
                                                            <span className="v-line lgx d-none d-sm-block"></span>
                                                            <div className="pay_method__amount-sports">
                                                                <span className="fs-seven mb-3">Bonus No Sports</span>
                                                                <span className="fw-bol d-block">$ 0.00</span>
                                                            </div>
                                                            <span className="v-line lgx d-none d-sm-block"></span>
                                                            <div className="pay_method__amount-sports">
                                                                <span className="fs-seven mb-3">Bonus in casino</span>
                                                                <span className="fw-bol d-block">$ 0.00</span>
                                                            </div>
                                                        </div>
                                                        <WithdrawalAmount />
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pay_method__table">
                                                        <div style={{ overflowX: 'auto' }} className="pay_method__table-scrollbar">
                                                            <table className="w-100 text-center p2-bg">
                                                                <tr>
                                                                    <th className="text-nowrap">Transaction ID</th>
                                                                    <th className="text-nowrap">Payment Methods</th>
                                                                    <th className="text-nowrap">Amount</th>
                                                                    <th className="text-nowrap">Status</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>2PQ8B4KYMJ</td>
                                                                    <td>Bank / CC</td>
                                                                    <td>5,591 USD</td>
                                                                    <td className="r1-color fw-normal cpoint">Cancel</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4TQRW5WXF4</td>
                                                                    <td>Credit Card</td>
                                                                    <td>5,591 USD</td>
                                                                    <td className="g1-color fw-normal cpoint">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>XR97K86R7Y</td>
                                                                    <td>tether TRC20</td>
                                                                    <td>5,591 USD</td>
                                                                    <td className="r1-color fw-normal cpoint">Cancel</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VEJP8A5J87</td>
                                                                    <td>Bank</td>
                                                                    <td>5,591 USD</td>
                                                                    <td className="g1-color fw-normal cpoint">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>JKNFWEJ123</td>
                                                                    <td>Credit Card</td>
                                                                    <td>5,591 USD</td>
                                                                    <td className="r1-color fw-normal cpoint">Cancel</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>NC8S4QJ4K2</td>
                                                                    <td>tether TRC20</td>
                                                                    <td>5,591 USD</td>
                                                                    <td className="r1-color fw-normal cpoint">Cancel</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>DGPSN7SRM4</td>
                                                                    <td>TRON</td>
                                                                    <td>5,591 USD</td>
                                                                    <td className="g1-color fw-normal cpoint">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>ZT3FA5D8N7</td>
                                                                    <td>Ethereum</td>
                                                                    <td>5,591 USD</td>
                                                                    <td className="g1-color fw-normal cpoint">Complete</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pay_method__tabletwo">
                                                        <div style={{ overflowX: 'auto' }} className="pay_method__table-scrollbar">
                                                            <table className="w-100 text-center p2-bg">
                                                                <tr>
                                                                    <th className="text-nowrap">Transaction ID</th>
                                                                    <th className="text-nowrap">Date</th>
                                                                    <th className="text-nowrap">Transaction type</th>
                                                                    <th className="text-nowrap">Amount/Balance</th>
                                                                    <th className="text-nowrap">Status</th>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-nowrap">2PQ8B4KYMJ</td>
                                                                    <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                    <td className="text-nowrap">5,591 USD</td>
                                                                    <td className="text-nowrap">300.00/300.00</td>
                                                                    <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-nowrap">4TQRW5WXF4</td>
                                                                    <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                    <td className="text-nowrap">5,591 USD</td>
                                                                    <td className="text-nowrap">300.00/300.00</td>
                                                                    <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-nowrap">4TQRW5WXF4</td>
                                                                    <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                    <td className="text-nowrap">5,591 USD</td>
                                                                    <td className="text-nowrap">300.00/300.00</td>
                                                                    <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-nowrap">VEJP8A5J87</td>
                                                                    <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                    <td className="text-nowrap">5,591 USD</td>
                                                                    <td className="text-nowrap">300.00/300.00</td>
                                                                    <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-nowrap">JKNFWEJ123</td>
                                                                    <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                    <td className="text-nowrap">5,591 USD</td>
                                                                    <td className="text-nowrap">300.00/300.00</td>
                                                                    <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-nowrap">NC8S4QJ4K2</td>
                                                                    <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                    <td className="text-nowrap">5,591 USD</td>
                                                                    <td className="text-nowrap">300.00/300.00</td>
                                                                    <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-nowrap">DGPSN7SRM4</td>
                                                                    <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                    <td className="text-nowrap">5,591 USD</td>
                                                                    <td className="text-nowrap">300.00/300.00</td>
                                                                    <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-nowrap">ZT3FA5D8N7</td>
                                                                    <td className="text-nowrap">27.12.2023, 11:31</td>
                                                                    <td className="text-nowrap">5,591 USD</td>
                                                                    <td className="text-nowrap">300.00/300.00</td>
                                                                    <td className="g1-color fw-normal cpoint text-nowrap">Complete</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                                        <div className="pay_method__paymethod-title mb-5 mb-md-6">
                                                            <h5 className="n10-color">About You</h5>
                                                        </div>
                                                        <div className="pay_method__formarea">
                                                            <form>
                                                                <div
                                                                    className="d-flex align-items-center flex-wrap flex-md-nowrap gap-5 gap-md-6 mb-5">
                                                                    <div className="w-100">
                                                                        <label className="mb-3">First Name (Given Name)</label>
                                                                        <input className="n11-bg rounded-8" type="text"
                                                                            placeholder="First Name" />
                                                                    </div>
                                                                    <div className="w-100">
                                                                        <label className="mb-3">Last Name</label>
                                                                        <input className="n11-bg rounded-8" type="text"
                                                                            placeholder="Last Name" />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center gap-5 gap-md-6 mb-5 flex-wrap flex-md-nowrap">
                                                                    <div className="w-100">
                                                                        <label className="mb-3">Date Of Birth</label>
                                                                        <div className="d-flex align-items-center gap-6 w-100">

                                                                            <div className="d-flex n11-bg rounded-8 w-50">
                                                                                <input type="text" placeholder="12" />
                                                                            </div>
                                                                            <div className="d-flex n11-bg rounded-8 w-50">
                                                                                <input type="text" placeholder="09" />
                                                                            </div>
                                                                            <div className="d-flex n11-bg rounded-8 w-50">
                                                                                <input type="text" placeholder="1999" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-100">
                                                                        <label className="mb-3">Phone Number</label>
                                                                        <div className="d-flex gap-2">
                                                                            <input className="w-25 n11-bg rounded-8" type="text"
                                                                                placeholder="+962" />
                                                                            <input className="n11-bg rounded-8" type="text"
                                                                                placeholder="XX-XXX-XXXXX" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center flex-wrap flex-md-nowrap gap-5 gap-md-6 mb-5">
                                                                    <div className="w-100">
                                                                        <label className="mb-3">Address</label>
                                                                        <input className="n11-bg rounded-8" type="text"
                                                                            placeholder="Address..." />
                                                                    </div>
                                                                    <div className="w-100">
                                                                        <label className="mb-3 d-block">Male & Female</label>
                                                                        <select className='n11-bg extrastyle rounded-8 w-100 py-3 pe-5'>
                                                                            <option className='p6-color' data-display="Male & Female...">Male & Female...
                                                                            </option>
                                                                            <option className='p6-color' value="1">Male</option>
                                                                            <option className='p6-color' value="2">Female</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center flex-wrap flex-md-nowrap gap-5 gap-md-6 mb-5">
                                                                    <div className="w-100">
                                                                        <label className="mb-3">City / Region</label>
                                                                        <input className="n11-bg rounded-8" type="text"
                                                                            placeholder="City / Region..." />
                                                                    </div>
                                                                    <div className="w-100">
                                                                        <label className="mb-3">Country</label>
                                                                        <input className="n11-bg rounded-8" type="text"
                                                                            placeholder="United Kingdom" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex gap-2 align-items-start align-items-xl-center mb-5">
                                                                    <input type="checkbox" id="demoCheckbox" name="checkbox"
                                                                        value="1" />
                                                                    <label className="fs-seven">I authorize to collect and transmit my personal information for identity verification or <span className="g1-color"> similar uses as defined</span> in order to confirm my ability to use the website.</label>
                                                                </div>
                                                                <button className="cmn-btn py-3 px-10">Save</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                                        <div className="pay_method__paymethod-title mb-5 mb-md-6">
                                                            <h5 className="n10-color">Enter your payment details</h5>
                                                        </div>
                                                        <div className="pay_method__formarea">
                                                            <form>
                                                                <div
                                                                    className="d-flex align-items-center flex-wrap flex-md-nowrap gap-5 gap-md-6 mb-5">
                                                                    <div className="d-flex w-100 p1-bg ps-3 rounded-8">
                                                                        <div className="d-flex align-items-center w-100">
                                                                            <i className="ti ti-credit-card fs-five"></i>
                                                                            <input type="text" id="card_number2" name="card_number"
                                                                                placeholder="Card number" />
                                                                        </div>
                                                                        <div className="d-flex align-items-center justify-content-end">
                                                                            <input className="w-75" type="text" id="expiration2"
                                                                                name="expiration" placeholder="MM/YY CVC" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex w-100 p1-bg rounded-8">
                                                                        <input type="text" placeholder="Street address" />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center gap-5 gap-md-6 mb-5 flex-wrap flex-md-nowrap">
                                                                    <div className="d-flex w-100 p1-bg rounded-8">
                                                                        <input type="text"
                                                                            placeholder="Apt, unit, suite, etc. (optional)" />
                                                                    </div>
                                                                    <div className="d-flex w-100 p1-bg rounded-8">
                                                                        <input type="text" placeholder="(+33)7 35 55 21 02" />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center gap-5 gap-md-6 mb-5 flex-wrap flex-md-nowrap">
                                                                    <div className="d-flex p1-bg rounded-8 w-100">
                                                                        <input type="text" placeholder="City" />
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-6 w-100">
                                                                        <div className="d-flex  p1-bg rounded-8 w-50">
                                                                            <input type="text" placeholder="State" />
                                                                        </div>
                                                                        <div className="d-flex p1-bg rounded-8 w-50">
                                                                            <input type="text" placeholder="Zip code" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center justify-content-between mb-7 mb-md-10">
                                                                    <span>Total</span>
                                                                    <span>$3,000</span>
                                                                </div>
                                                                <button type="submit"
                                                                    className="py-4 px-5 n11-bg rounded-2 w-100">Save</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                                        <div
                                                            className="pay_method__paymethod-title d-flex align-items-center gap-3 mb-6 mb-md-8">
                                                            <IconBellRinging width={28} height={28} className="ti ti-bell-ringing fs-four" />
                                                            <h5 className="n10-color">Notifications settings </h5>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">Email Notifications</h6>
                                                                <span className="fs-seven n4-color">Receive weekly email notifications.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">Phone Notifications</h6>
                                                                <span className="fs-seven n4-color">Receive weekly Phone notifications.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">New tasks</h6>
                                                                <span className="fs-seven n4-color">Receive weekly New tasks notifications.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">Billing and payments</h6>
                                                                <span className="fs-seven n4-color">Lorem ipsum dolor sit amet consectetur. Id.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center border-0">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">Updates and announcements</h6>
                                                                <span className="fs-seven n4-color">Lorem ipsum dolor sit amet consectetur.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pay_method__paymethod p-4 p-lg-6 p2-bg rounded-8">
                                                        <div
                                                            className="pay_method__paymethod-title d-flex align-items-center gap-3 mb-6 mb-md-8">
                                                            <IconBellRinging width={28} height={28} className="ti ti-bell-ringing fs-four" />
                                                            <h5 className="n10-color">Notifications settings </h5>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">Email Notifications</h6>
                                                                <span className="fs-seven n4-color">Receive weekly email notifications.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">Phone Notifications</h6>
                                                                <span className="fs-seven n4-color">Receive weekly Phone notifications.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">New tasks</h6>
                                                                <span className="fs-seven n4-color">Receive weekly New tasks notifications.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center pb-5 pb-md-6 mb-5 mb-md-6">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">Billing and payments</h6>
                                                                <span className="fs-seven n4-color">Lorem ipsum dolor sit amet consectetur. Id.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="pay_method__Notiitem d-flex align-items-center gap-3 justify-content-between align-items-center border-0">
                                                            <div className="pay_method__Notiitem-text">
                                                                <h6 className="mb-3">Updates and announcements</h6>
                                                                <span className="fs-seven n4-color">Lorem ipsum dolor sit amet consectetur.</span>
                                                            </div>
                                                            <div className="pay_method__Notiitem-switcher">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <div className="slider">
                                                                        <div className="circle">

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                            </Tab.Panels>
                                        </div>
                                    </div>
                                </Tab.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


// import { useState } from 'react'
// import { Tab } from '@headlessui/react'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   let [categories] = useState({
//     Recent: [
//       {
//         id: 1,
//         title: 'Does drinking coffee make you smarter?',
//         date: '5h ago',
//         commentCount: 5,
//         shareCount: 2,
//       },
//       {
//         id: 2,
//         title: "So you've bought coffee... now what?",
//         date: '2h ago',
//         commentCount: 3,
//         shareCount: 2,
//       },
//     ],
//     Popular: [
//       {
//         id: 1,
//         title: 'Is tech making coffee better or worse?',
//         date: 'Jan 7',
//         commentCount: 29,
//         shareCount: 16,
//       },
//       {
//         id: 2,
//         title: 'The most innovative things happening in coffee',
//         date: 'Mar 19',
//         commentCount: 24,
//         shareCount: 12,
//       },
//     ],
//     Trending: [
//       {
//         id: 1,
//         title: 'Ask Me Anything: 10 answers to your questions about coffee',
//         date: '2d ago',
//         commentCount: 9,
//         shareCount: 5,
//       },
//       {
//         id: 2,
//         title: "The worst advice we've ever heard about coffee",
//         date: '4d ago',
//         commentCount: 1,
//         shareCount: 2,
//       },
//     ],
//   })

//   return (
//     <div className="w-full max-w-md px-2 py-16 sm:px-0">
//       <Tab.Group>
//         <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
//           {Object.keys(categories).map((category) => (
//             <Tab
//               key={category}
//               className={({ selected }) =>
//                 classNames(
//                   'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
//                   'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
//                   selected
//                     ? 'bg-white text-blue-700 shadow'
//                     : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
//                 )
//               }
//             >
//               {category}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="mt-2">
//           {Object.values(categories).map((posts, idx) => (
//             <Tab.Panel
//               key={idx}
//               className={classNames(
//                 'rounded-xl bg-white p-3',
//                 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
//               )}
//             >
//               <ul>
//                 {posts.map((post) => (
//                   <li
//                     key={post.id}
//                     className="relative rounded-md p-3 hover:bg-gray-100"
//                   >
//                     <h3 className="text-sm font-medium leading-5">
//                       {post.title}
//                     </h3>

//                     <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
//                       <li>{post.date}</li>
//                       <li>&middot;</li>
//                       <li>{post.commentCount} comments</li>
//                       <li>&middot;</li>
//                       <li>{post.shareCount} shares</li>
//                     </ul>

//                     <a
//                       href="#"
//                       className={classNames(
//                         'absolute inset-0 rounded-md',
//                         'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
//                       )}
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   )
// }
