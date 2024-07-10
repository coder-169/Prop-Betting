import HeaderMain from '@/components/Shared/HeaderMain';
import BasketballLive from '@/components/Pages/Basketball/BasketballLive';
import TopBasketball from '@/components/Pages/Basketball/TopBasketball';
import UpCmingBasketball from '@/components/Pages/Basketball/UpCmingBasketball';

export default function page() {
    return (
        <>
            <HeaderMain />
            <TopBasketball />
            <BasketballLive />
            <UpCmingBasketball />
        </>
    )
}
