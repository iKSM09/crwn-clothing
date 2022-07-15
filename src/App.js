import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation/navgation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h2>This is the Shop.</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
