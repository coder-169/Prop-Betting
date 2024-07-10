import HeaderMain from '@/components/Shared/HeaderMain';
import TopPenaltyShootout from '@/components/Pages/PenaltyShootout/TopPenaltyShootout';
import UpCmingPenaltyShootout from '@/components/Pages/PenaltyShootout/UpCmingPenaltyShootout';

export default function page() {
    return (
        <>
            <HeaderMain />
            <TopPenaltyShootout />
            <UpCmingPenaltyShootout />
        </>
    )
}