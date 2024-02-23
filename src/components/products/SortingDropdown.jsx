import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useProductContext from "../../hooks/useProductContext";

const SortingDropdown = () => {
  const [sortBy, setSortBy] = useState("");
  const { sorting, isCategoryChanged } = useProductContext();

  const handleChange = (event) => {
    const sortValue = event.target.value;
    setSortBy(sortValue);
    sorting(sortValue); //Function to sort product based on dropdown option
  };

  useEffect(() => {
    if (isCategoryChanged) {
      setSortBy("");
    }
  }, [isCategoryChanged]);
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
        <InputLabel id="select-sort-by">Sort By</InputLabel>
        <Select
          labelId="select-sort-by"
          value={sortBy}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value={"Price(LowToHigh)"}>Price: Low to High</MenuItem>
          <MenuItem value={"Price(HighToLow)"}>Price: High to Low</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SortingDropdown;
