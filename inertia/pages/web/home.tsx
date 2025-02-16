import { Head } from '@inertiajs/react'
import WebLayout from '../../layouts/webLayout';
import HomeBanner from '../../components/web/HomeBanner';
import HomeCategories from '../../components/web/HomeCategories';
import HomeOffers from '../../components/web/HomeOffers';
import Newsletter from '../../components/web/Newsletter';
import HomeDeals from '../../components/web/HomeDeals';
import HomeProducts from '../../components/web/HomeProducts';
import InfoBanners from '../../components/web/InfoBanners';
import TopProducts from '../../components/web/TopProducts';
import FullBanner from '../../components/web/FullBanner';
import HomeBlogs from '../../components/web/HomeBlogs';
function Home() {
  return (
    <>
      <Head title="NXB Home Page" />
      <HomeBanner />
      <HomeCategories />
      <HomeOffers />
      <HomeProducts />
      <HomeDeals />
      <InfoBanners />
      <TopProducts />
      <FullBanner />
      <HomeBlogs/>
      <Newsletter />
    </>
  )
}

Home.layout = (page: React.ReactNode) => (
  <WebLayout title="NXB Home Page " children={page} />
);

export default Home;