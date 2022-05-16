// Components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import LinearProgress from "@material-ui/core/LinearProgress";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// Icons
import HighlightOff from "@material-ui/icons/HighlightOff";
import { ChangeEvent, FC, memo } from "react";
import { useQuery } from "react-query";
import { Wrapper, Filters } from "./Filter.styles";

type Props = {
  children?: React.ReactNode;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Filter: FC<Props> = ({ children, filter, setFilter }) => {
  const getCategories = async (): Promise<string[]> =>
    await (await fetch("https://fakestoreapi.com/products/categories")).json();

  const { data, isLoading, error } = useQuery<string[]>(
    "categories",
    getCategories
  );

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setFilter(event.target.value as string);
  };

  if (isLoading) return <LinearProgress />;

  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Box sx={{ width: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Filter items by category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter ?? ""}
            label="Filter items"
            onChange={handleChange}
          >
            <MenuItem value="">Choose category</MenuItem>
            {data?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {filter && (
        <Filters onClick={() => setFilter("")}>
          <Typography>Clear filter</Typography>
          <HighlightOff htmlColor="#dc2626" />
        </Filters>
      )}
      {children}
    </Wrapper>
  );
};

export default memo(Filter);
