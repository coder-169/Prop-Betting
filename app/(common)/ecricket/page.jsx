import HeaderMain from '@/components/Shared/HeaderMain';
import EcricketLive from '@/components/Pages/Ecricket/EcricketLive';
import TopEcricket from '@/components/Pages/Ecricket/TopEcricket';
import UpCmingEcricket from '@/components/Pages/Ecricket/UpCmingEcricket';

export default function page() {
    return (
        <>
            <HeaderMain />
            <TopEcricket />
            <EcricketLive />
            <UpCmingEcricket />
        </>
    )
}
