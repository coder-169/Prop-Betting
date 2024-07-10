import HeaderMain from '@/components/Shared/HeaderMain';
import Hungary from '@/components/Pages/Waterpolo/Hungary';
import Image from 'next/image';
import International from '@/components/Pages/Waterpolo/International';
import LENChampionsLeague from '@/components/Pages/Waterpolo/LENChampionsLeague';
import WomenGroupD from '@/components/Pages/Waterpolo/WomenGroupD';
import WomenGroupWinner from '@/components/Pages/Waterpolo/WomenGroupWinner';
import LENChampionsWinner from '@/components/Pages/Waterpolo/LENChampionsWinner';
import WomenGroupAWinner from '@/components/Pages/Waterpolo/WomenGroupAWinner';
import WomenGroupCWinner from '@/components/Pages/Waterpolo/WomenGroupCWinner';
import WomenGroupBWinner from '@/components/Pages/Waterpolo/WomenGroupBWinner';
import WomenGroupDWinner from '@/components/Pages/Waterpolo/WomenGroupDWinner';
import OutrightsItaly from '@/components/Pages/Waterpolo/OutrightsItaly';

export default function page() {
    return (
        <>
            <HeaderMain />
            <Hungary />
            <International />
            <LENChampionsLeague />
            <WomenGroupD />
            <WomenGroupWinner />
            <LENChampionsWinner />
            <WomenGroupWinner />
            <WomenGroupAWinner />
            <WomenGroupCWinner />
            <WomenGroupBWinner />
            <WomenGroupDWinner />
            <LENChampionsLeague />
            <OutrightsItaly />
        </>
    )
}
