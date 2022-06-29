const orderOptions = [
  {
    name: "dateDescending",
    description: "Sort by Date descending (default)",
  },
  {
    name: "dateAscending",
    description: "Sort by Date ascending",
  },
  {
    name: "amountDescending",
    description: "Sort by Amount descending",
  },
  {
    name: "amountAscending",
    description: "Sort by Amount ascending",
  },
];

const defaultOrderOption = orderOptions[0].name;

export { orderOptions, defaultOrderOption };
