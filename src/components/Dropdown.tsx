import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Regions } from "../utilities/utilities";
import "../index.css";

interface DropdownProps {
  isDarkMode: boolean;
  region: string;
  updateRegion: (region: string) => void;
}

const Dropdown = (props: DropdownProps): JSX.Element => {
  const handleChange = (event: SelectChangeEvent) => {
    props.updateRegion(event.target.value);
  };

  const darkTheme = createTheme({
    palette: {
      mode: props.isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <FormControl fullWidth size="small" className="sm:max-w-[180px]">
        <InputLabel id="regionLabel" className="dark:text-slate-100">
          Regions
        </InputLabel>
        <Select
          labelId="regionLabel"
          label="Regions"
          value={props.region}
          onChange={handleChange}
          className="dark:bg-neutral-900"
          //sx={selectStyle}
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
    </ThemeProvider>
  );
};

export default Dropdown;
