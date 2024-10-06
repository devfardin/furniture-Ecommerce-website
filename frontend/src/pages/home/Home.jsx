import HeroSlider from './HeroSlider'
import Featurecategory from './Featurecategory'
import SectionTitle from '../../components/SectionTitle'
import Trendyproducts from './Trendyproducts'
import Categorys from './Categorys'
import OurStore from './Our-shop/OurStore'
import AddBanner from './AddBanner'
import ShopInfo from '../../components/shared/ShopInfo'
const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Featurecategory />
      <SectionTitle title='Trendy Product'
        des='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vivamus morbi et ornare est Orci et sed commodo.' />
      <Trendyproducts />
      <Categorys/>
      <OurStore/>
      <AddBanner/>
      <ShopInfo/>
    </div>
  )
}

export default Home