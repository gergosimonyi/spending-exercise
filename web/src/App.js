import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import FiltersAndOrderings from "./components/FiltersAndOrderings";
import SpendingList from "./components/SpendingList";
import { MainContainer } from "./styles/ComponentStyles";

export default function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Form />
        <FiltersAndOrderings />
        <SpendingList />
      </MainContainer>
    </>
  );
}
