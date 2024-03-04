import MobileImage from "../../assets/mobile.jpg";
const Banner = () => {
  return (
    <>
      {/* <div className="mx-auto w-11/12 my-4"> */}
      <div className="image flex md:flex-row flex-col min-h-[30rem] max-w-full">
        <div className="text mx-auto md:ml-12">
          <h2>Explore the Special Collection</h2>
        </div>
        <img src={MobileImage} width={400} height={400} className="!object-contain" />
      </div>
      {/* </div> */}
    </>
  );
};

export default Banner;
