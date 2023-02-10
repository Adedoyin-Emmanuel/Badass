import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Support from "./pages/Support";
import "./autoload";
import db from "./backend/db";
function App() {

  const DEFAULT_ROUTE = "";

  (db.get("BADASS_HOME_PAGE_SEEN") === "true") ? 

	return (
		<div className="App">
			<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home/>}/>
          <Route path="support" element={<Support/>}/>
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
