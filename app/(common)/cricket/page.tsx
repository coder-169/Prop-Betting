import HeaderMain from '@/components/Shared/HeaderMain';
import CricketLive from '@/components/Pages/Cricket/CricketLive';
import TopCricket from '@/components/Pages/Cricket/TopCricket';
import UpCmingCricket from '@/components/Pages/Cricket/UpCmingCricket';

export default function page() {
    return (
        <>
            <HeaderMain />
            <TopCricket />
            <CricketLive />
            <UpCmingCricket />
        </>
    )
}
