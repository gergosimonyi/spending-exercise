const orderOptions = [
  {
    description: "Sort by Date descending (default)",
    value: "-date",
  },
  {
    description: "Sort by Date ascending",
    value: "date",
  },
  {
    description: "Sort by Amount descending",
    value: "-value",
  },
  {
    description: "Sort by Amount ascending",
    value: "value",
  },
];

const defaultOrderOption = orderOptions[0];

export { orderOptions, defaultOrderOption };
