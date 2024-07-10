import HeaderMain from '@/components/Shared/HeaderMain';
import TopFloorball from '@/components/Pages/Floorball/TopFloorball';
import FloorballLive from '@/components/Pages/Floorball/FloorballLive';
import UpCmingFloorball from '@/components/Pages/Floorball/UpCmingFloorball';

export default function page() {
    return (
        <>
            <HeaderMain />
            <TopFloorball />
            <FloorballLive />
            <UpCmingFloorball />
        </>
    )
}
