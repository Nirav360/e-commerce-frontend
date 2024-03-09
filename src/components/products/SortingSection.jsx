import CategoryNavigation from "./CategoryNavigation";
import SortingDropdown from "./SortingDropdown";

const SortingSection = ({ category }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center mt-2">
        <div className="mt-2">
          <CategoryNavigation category={category} />
        </div>
        <div className="mt-2">
          <SortingDropdown />
        </div>
      </div>
    </>
  );
};

export default SortingSection;
