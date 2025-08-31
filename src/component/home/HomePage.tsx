import HomeBigSavingZone from "./HomeBigSavingZone"
import HomeBrandDeal from "./HomeBrandDeal"
import HomeCategoriesForMen from "./HomeCategoriesForMen"
import HomeCategoriesForWomen from "./HomeCategoriesForWomen"
import HomeFashionSection from "./HomeFashionSection"
import HomeFeedbackSection from "./HomeFeedbackSection"
import HomeHeroCart from "./HomeHeroCart"
import HomeHeroPage from "./HomeHeroPage"
import HomeLimitedZone from "./HomeLimitedZone"
import HomeNewArrival from "./HomeNewArrival"

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HomeHeroPage/>
      <HomeHeroCart/>
      <HomeNewArrival/>
      <HomeBigSavingZone/>
      <HomeFashionSection/>
      <HomeCategoriesForMen/>
      <HomeCategoriesForWomen/>
      <HomeBrandDeal/>
      <HomeLimitedZone/>
      <HomeFeedbackSection/>
    </div>
  )
}

export default HomePage
