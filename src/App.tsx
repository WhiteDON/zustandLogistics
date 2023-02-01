import { Route, Routes } from "react-router-dom";

import Layout from "./modules/Layout";
import NoPage from "./modules/noPage";
import Dashboard from "./modules/dashboard";
import Deliveries from "./modules/deliveries";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="deliveries" element={<Deliveries />} />
        
        <Route index element={<Dashboard />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
