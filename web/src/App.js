import React from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import FiltersAndOrderings from "./components/FiltersAndOrderings/FiltersAndOrderings";
import SpendingList from "./components/SpendingList/SpendingList";
import { Main } from "./styles/ComponentStyles";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Form />
        <FiltersAndOrderings />
        <SpendingList />
      </Main>
    </>
  );
}
