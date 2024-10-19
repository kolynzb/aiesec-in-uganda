import Wrapper from "@/layouts/wrapper";
import HowItWorksTwo from './components/how-it-works/how-it-works-2';
import BlogTwo from './components/blogs/blog-two';
import FeatureSix from './components/features/feature-six';
import HeroBannerSix from "./components/hero-banners/hero-banner-six";
import FancyBannerSix from "./components/fancy-banner/fancy-banner-6";
import FooterOne from "@/layouts/footers/footer-one";
import FeatureThree from "./components/features/feature-three";
import HeaderFive from "@/layouts/headers/header-5";
import FeedbackThree from "./components/feedBacks/feedback-three";

export default function Home() {
  return (
    <Wrapper>
      {/* header start */}
      <HeaderFive />
      {/* header end */}
      {/* hero banner start */}
      <HeroBannerSix />
      {/* hero banner end */}
      {/* feature three start */}
      <FeatureThree />
      {/* feature three end */}

        {/* how it works start */}
        <HowItWorksTwo />
        {/* how it works end */}

         {/* feedback three start */}
         <FeedbackThree />
        {/* feedback three end */}
      {/* blog two start */}
      <BlogTwo />
      {/* blog two end */}
      {/* feature six start */}
      <FeatureSix />
      {/* feature six end */}

      {/* fancy banner start */}
      <FancyBannerSix />
      {/* fancy banner end */}

      {/* footer start */}
      <FooterOne style_2={true} />
      {/* footer end */}
    </Wrapper>
  );
}
