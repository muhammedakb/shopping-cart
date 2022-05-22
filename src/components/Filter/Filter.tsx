import { ChangeEvent, FC, memo } from "react";
import { useQuery } from "react-query";
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
// Styles
import { Wrapper, Filters, FiltersWrapper } from "./Filter.styles";
// Types
import { SortType } from "../../App";

type Props = {
  children?: React.ReactNode;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  sort: SortType;
  setSort: React.Dispatch<React.SetStateAction<SortType>>;
};

const filterOptions = ["Price low to high", "Price high to low"];

const Filter: FC<Props> = ({ children, filter, setFilter, sort, setSort }) => {
  const getCategories = async (): Promise<string[]> =>
    await (await fetch("https://fakestoreapi.com/products/categories")).json();

  const { data, isLoading, error } = useQuery<string[]>(
    "categories",
    getCategories
  );

  const handleFilterChange = (event: ChangeEvent<{ value: unknown }>) => {
    setFilter(event.target.value as string);
  };

  const handleSortChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSort(event.target.value as SortType);
  };

  if (isLoading) return <LinearProgress />;

  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <FiltersWrapper>
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel>Filter items by category</InputLabel>
            <Select
              value={filter ?? ""}
              label="Filter items"
              onChange={handleFilterChange}
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
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel>Sort items</InputLabel>
            <Select
              value={sort ?? ""}
              label="Sort items"
              onChange={handleSortChange}
            >
              <MenuItem value="">Sort items</MenuItem>
              {filterOptions?.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {(filter || sort) && (
          <Filters
            onClick={() => {
              setFilter("");
              setSort(undefined);
            }}
          >
            <Typography>Clear filters</Typography>
            <HighlightOff htmlColor="#dc2626" />
          </Filters>
        )}
      </FiltersWrapper>

      {children}
    </Wrapper>
  );
};

export default memo(Filter);
