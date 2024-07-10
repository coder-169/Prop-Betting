import OutrightsPolitics from '@/components/Pages/Cycling/OutrightsPolitics'
import ParisRoubaixWinner from '@/components/Pages/Cycling/ParisRoubaixWinner'
import TourFlandersWinner from '@/components/Pages/Cycling/TourFlandersWinner'
import TourFranceWinner from '@/components/Pages/Cycling/TourFranceWinner'
import HeaderMain from '@/components/Shared/HeaderMain'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <>
            <HeaderMain />
            <OutrightsPolitics />
            <TourFranceWinner />
            <ParisRoubaixWinner />
            <TourFlandersWinner />
        </>
    )
}
