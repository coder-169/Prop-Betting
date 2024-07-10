"use client"
import React, { useEffect, useState } from 'react'
import { IconGift, IconMessageDots, IconMenu2, IconX, IconUserCircle, IconMoodHappy, IconFileTypePdf, IconAt, IconPhotoPlus, IconSend } from "@tabler/icons-react";
import Image from 'next/image';

export default function HeaderTwoChat() {
    const [isCardExpanded, setIsCardExpanded] = useState(false);

    const toggleCard = () => {
      setIsCardExpanded(!isCardExpanded);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (isCardExpanded && !event.target.closest(".cmns_msgarea")) {
          setIsCardExpanded(false);
        }
      };
      document.body.addEventListener("click", handleClickOutside);
      return () => {
        document.body.removeEventListener("click", handleClickOutside);
      };
    }, [isCardExpanded]);
    return (
        <>
            <div className="cmn-head">
                <button onClick={toggleCard} type="button" aria-label="Shopping Button"
                    className="common_toggles2 py-1 px-2 n11-bg rounded-5 position-relative">
                    <IconMessageDots height={24} width={24} className="slide-toggle2 ti ti-message-dots fs-four" />
                    <span className="fs-eight g1-bg px-1 rounded-5 position-absolute end-0 top-0">2</span>
                </button>
                <div className={`cmns_msgarea msg_area common_area2 p2-bg rounded-2 ${isCardExpanded ? "" : "massagearashow"}`}>
                    <div className="cmns_msgarea__head d-flex align-items-center justify-content-between gap-5 n11-bg px-6 py-2">
                        <div className="d-flex align-items-center gap-2">
                            <button type="button"><IconMenu2 height={24} width={24} className="ti ti-menu-2 fs-four n5-color" /></button>
                            <h5 className="fs-five">Chat</h5>
                        </div>
                        <div onClick={toggleCard} className="common_toggles3">
                            <IconX className="ti ti-x fs-four cpoint n5-color" />
                        </div>
                    </div>
                    <div className="cmns_msgarea__body p-5 p-md-6">
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/flores.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Flores, Juanita</h6>
                                    <span className="n3-color seven">Dec 30 21:28</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/miles.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Miles, Esther</h6>
                                    <span className="n3-color seven">Aug 15 10:29</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/nguyen.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Nguyen, Shane</h6>
                                    <span className="n3-color seven">Apr 11 18:30</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/cooper.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Cooper, Kristin</h6>
                                    <span className="n3-color seven">Apr 11 18:30</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/miles.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Miles, Esther</h6>
                                    <span className="n3-color seven">May 22 04:43</span>
                                </div>
                                <p className="mb-2">Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                                <Image src="/images/etiam-consequat.png" height={500} width={287} alt="Icon" />
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/henry-arthur.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Nguyen, Shane</h6>
                                    <span className="n3-color seven">Jul 25 17:09</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/nguyen.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Henry, Arthur</h6>
                                    <span className="n3-color seven">Sep 4 06:53</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/henry-arthur.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Henry, Arthur</h6>
                                    <span className="n3-color seven">May 22 04:43</span>
                                </div>
                                <p className="mb-2">Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                                <Image src="/images/etiam-sem.png" height={349} width={186} alt="Icon" />
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/flores.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Flores, Juanita</h6>
                                    <span className="n3-color seven">Jul 25 17:09</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/henry-arthur.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Nguyen, Shane</h6>
                                    <span className="n3-color seven">Jul 25 17:09</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/nguyen.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Henry, Arthur</h6>
                                    <span className="n3-color seven">May 22 04:43</span>
                                </div>
                                <p className="mb-2">Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                                <Image src="/images/convallis.png" height={349} width={186} alt="Icon" />
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/discot.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Nguyen, Shane</h6>
                                    <span className="n3-color seven">Jul 25 17:09</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/henry-arthur.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Black, Marvin</h6>
                                    <span className="n3-color seven">Jun 23 14:31</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-4 mb-4">
                            <div className="cmns_msgarea__head-thumb">
                                <Image className="rounded-5" src="/images/flores.png" height={30} width={30} alt="Icon" />
                            </div>
                            <div className="cmns_msgarea__head-conent">
                                <div className="d-flex align-items-center gap-2">
                                    <h6>Flores, Juanita</h6>
                                    <span className="n3-color seven">Jan 31 09:53</span>
                                </div>
                                <p>Etiam consequat tellus sem, eget ullamcorper arcu convallis eu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cmns_msgarea__footer py-4 py-md-5 px-5 px-md-6 position-absolute bottom-0 n11-bg w-100">
                        <form className="d-flex align-items-center justify-content-end flex-wrap flex-sm-nowrap gap-2 gap-sm-5 w-100">
                            <div className="cmns_msgarea__footer-fileup d-flex align-items-center py-1 pe-3 gap-sm-1">
                                <input type="text" placeholder="Send message" />
                                <label>
                                    <IconPhotoPlus width={24} height={24} className="ti ti-photo-plus fs-four cpoint" />
                                </label>
                                <input className="d-none" type="file" id="img" />
                                <span>
                                    <IconAt width={24} height={24} className="ti ti-at fs-four cpoint" />
                                </span>
                                <label>
                                    <IconFileTypePdf width={24} height={24} className="ti ti-file-type-pdf fs-four cpoint" />
                                </label>
                                <input className="d-none" type="file" id="pdf" />
                                <span><IconMoodHappy width={24} height={24} className="ti ti-mood-happy fs-four cpoint" /></span>
                                <button className="py-3 px-5 g1-bg rounded-8"><IconSend width={24} height={24} className="ti ti-send fs-four" /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
