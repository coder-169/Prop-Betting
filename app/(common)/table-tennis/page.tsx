import HeaderMain from '@/components/Shared/HeaderMain';
import TopTableTennis from '@/components/Pages/TableTennis/TopTableTennis';
import UpCmingTableTennis from '@/components/Pages/TableTennis/UpCmingTableTennis';

export default function page() {
    return (
        <>
            <HeaderMain />
            <TopTableTennis />
            <UpCmingTableTennis />
        </>
    )
}