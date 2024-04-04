import HeroSlider from './HeroSlider'
import Featurecategory from './Featurecategory'
import SectionTitle from '../../components/SectionTitle'
import Trendyproducts from './Trendyproducts'
const Home = () => {
  return (
    <div>
      <HeroSlider/>
     <Featurecategory/>
     <SectionTitle title='Trendy Product'
     des='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vivamus morbi et ornare est Orci et sed commodo.
'/>
<Trendyproducts/>
    </div>
  )
}

export default Home