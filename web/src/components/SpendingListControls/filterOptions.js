import { currencies } from "constants";

const filterOptions = ["ALL", ...currencies];

const defaultFilterOption = filterOptions[0];

export { filterOptions, defaultFilterOption };
