import { Checkbox } from "@mui/material";

const FilterSection = (props) => {
  const { isFetching, data, checked, handleChange } = props;
  return (
    <>
      {isFetching && <p className="text-center">Loading...</p>}
      <div className="m-2 flex flex-col">
        {data && <h4 className="font-bold ml-2">Category</h4>}
        {data &&
          data.map((categories, i) => (
            <div className="flex items-center" key={i}>
              <Checkbox checked={i === checked} onChange={() => handleChange(i)} />
              <p>{categories}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default FilterSection;
