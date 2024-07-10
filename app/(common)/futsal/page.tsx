import HeaderMain from '@/components/Shared/HeaderMain';
import FutsalLive from '@/components/Pages/Futsal/FutsalLive';
import TopFutsal from '@/components/Pages/Futsal/TopFutsal';
import UpCmingFutsal from '@/components/Pages/Futsal/UpCmingFutsal';

export default function page() {
    return (
        <>
            <HeaderMain />
            <TopFutsal />
            <FutsalLive />
            <UpCmingFutsal />
        </>
    )
}
