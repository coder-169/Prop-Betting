import HeaderMain from '@/components/Shared/HeaderMain';
import TennisLive from '@/components/Pages/Tennis/TennisLive';
import TopTennis from '@/components/Pages/Tennis/TopTennis';
import UpCmingTennis from '@/components/Pages/Tennis/UpCmingTennis';

export default function page() {
    return (
        <>
            <HeaderMain />
            <TopTennis />
            <TennisLive />
            <UpCmingTennis />
        </>
    )
}
