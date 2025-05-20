import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./screens/AppLayout/AppLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
