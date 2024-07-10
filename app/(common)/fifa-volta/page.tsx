import HeaderMain from '@/components/Shared/HeaderMain';
import FifaVoltaLive from '@/components/Pages/FifaVolta/FifaVoltaLive';
import TopFifaVolta from '@/components/Pages/FifaVolta/TopFifaVolta';

export default function page() {
    return (
        <>
            <HeaderMain />
            <TopFifaVolta />
            <FifaVoltaLive />
        </>
    )
}
