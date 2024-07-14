import React, { useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Searchmodal from "../Components/Searchmodal";
import Searchcontext from "../ContextApi/Contextapi"
const Routing = () => {
  // state for the search value
  const [search, setSearch] = useState("");
  return (
    <>
    <Searchcontext.Provider value={{search,setSearch}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/search" element={<Searchmodal />}></Route>
        </Routes>
      </BrowserRouter>
      </Searchcontext.Provider>
    </>
  );
};

export default Routing;
