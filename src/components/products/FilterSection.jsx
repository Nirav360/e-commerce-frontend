import { Checkbox, FormControlLabel } from "@mui/material";

const FilterSection = (props) => {
  const { isFetching, data, checked, handleChange } = props;
  return (
    <>
      {isFetching && <p className="text-center">Loading...</p>}
      <div className="m-2 flex flex-col">
        {data && <h4 className="font-bold">Category</h4>}
        {data &&
          data.map((categories, i) => (
            <div className="flex items-center" key={i}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={i === checked}
                    onChange={() => handleChange(i)}
                  />
                }
                label={categories}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default FilterSection;
