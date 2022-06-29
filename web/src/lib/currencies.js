// We've chosen to simplify storage of currencies as integers 2 orders of
// magnitude higher than their nominal value, i.e. storing an integer of 1234
// represents the value of 12.34.
//
// TODO: implement a system that can handle currencies with subdivisions other
// than 1/100 of the currency's value.

const currencies = ["USD", "HUF"];

const defaultCurrency = currencies[0];

export { currencies, defaultCurrency };
