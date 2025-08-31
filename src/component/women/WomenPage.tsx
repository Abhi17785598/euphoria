import WomenClothingBestPrice from "./WomenClothingBestPrice"
import WomenLandingPage from "./WomenLandingPage"
import WomenOnlineIndia from "./WomenOnlineIndia"

const WomenPage = () => {
  return (
    <div className="min-h-screen">
      <WomenLandingPage/>
      <WomenOnlineIndia/>
      <WomenClothingBestPrice/>
    </div>
  )
}

export default WomenPage
