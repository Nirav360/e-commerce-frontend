import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        <Banner />
        <div className="mx-8">
          <FeaturedProducts />
        </div>
      </div>
    </>
  );
};

export default HomePage;
