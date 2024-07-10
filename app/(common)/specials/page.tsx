import AfterElection from '@/components/Pages/Specials/AfterElection'
import DemocraticPresidential from '@/components/Pages/Specials/DemocraticPresidential'
import MinisterAfterElection from '@/components/Pages/Specials/MinisterAfterElection'
import NextLondon from '@/components/Pages/Specials/NextLondon'
import NextPresident from '@/components/Pages/Specials/NextPresident'
import OverallMajority from '@/components/Pages/Specials/OverallMajority'
import PartyLeade from '@/components/Pages/Specials/PartyLeade'
import PrimeMinister from '@/components/Pages/Specials/PrimeMinister'
import UKPolitics from '@/components/Pages/Specials/UKPolitics'
import USPresidentialElection from '@/components/Pages/Specials/USPresidentialElection'
import HeaderMain from '@/components/Shared/HeaderMain'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <>
            <HeaderMain />
            <UKPolitics />
            <NextPresident />
            <OverallMajority />
            <USPresidentialElection />
            <NextLondon />
            <PartyLeade />
            <DemocraticPresidential />
            <PrimeMinister />
            <MinisterAfterElection />
            <AfterElection />
        </>
    )
}
