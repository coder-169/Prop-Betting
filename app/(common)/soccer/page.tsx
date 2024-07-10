import SoccerLive from "@/components/Pages/Soccer/SoccerLive";
import TopSoccer from "@/components/Pages/Soccer/TopSoccer";
import UpCmingSoccer from "@/components/Pages/Soccer/UpCmingSoccer";
import HeaderMain from "@/components/Shared/HeaderMain";

export default function page() {
  return (
    <>
      <HeaderMain />
      <TopSoccer />
      <SoccerLive />
      <UpCmingSoccer />
    </>
  )
}
