const orderOptions = [
  {
    description: "Sort by Date descending (default)",
    value: "-spent_at",
  },
  {
    description: "Sort by Date ascending",
    value: "spent_at",
  },
  {
    description: "Sort by Value descending",
    value: "-value",
  },
  {
    description: "Sort by Value ascending",
    value: "value",
  },
];

const defaultOrderOption = orderOptions[0];

export { orderOptions, defaultOrderOption };
