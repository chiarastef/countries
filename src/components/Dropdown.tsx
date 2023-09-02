import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Regions } from "../utilities/constants";

import "../index.css";

interface DropdownProps {
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown = (props: DropdownProps): JSX.Element => {
  const handleChange = (event: SelectChangeEvent) => {
    props.setRegion(event.target.value);
  };

  return (
    <FormControl fullWidth size="small" className="sm:max-w-[180px]">
      <InputLabel id="regionLabel">Regions</InputLabel>
      <Select
        labelId="regionLabel"
        label="Regions"
        value={props.region}
        onChange={handleChange}
      >
        {Regions.map((region, idx) => {
          return (
            <MenuItem value={region} key={idx} className="capitalize">
              {region}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
