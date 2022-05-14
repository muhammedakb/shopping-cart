import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { ChangeEvent, FC, useState } from "react";
import { Wrapper } from "./Filter.styles";

type Props = {
  filter: string[];
};

const Filter: FC<Props> = ({ filter }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <Wrapper>
      <Box sx={{ maxWidth: 180 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter items</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Filter items"
            onChange={handleChange}
          >
            {filter.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Wrapper>
  );
};

export default Filter;
