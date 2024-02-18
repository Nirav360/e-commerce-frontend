import CategoryNavigation from "./CategoryNavigation";

const SortingSection = ({ category }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="mt-2">
          <CategoryNavigation category={category} />
        </div>
        <div>Sorting</div>
      </div>
    </>
  );
};

export default SortingSection;
