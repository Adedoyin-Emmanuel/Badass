import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Support from "./pages/Support";
import "./autoload";
import db from "./backend/db";
function App() {

  let DEFAULT_ROUTE: JSX.Element =;

  (db.get("BADASS_HOME_PAGE_SEEN") === "true") ? DEFAULT_ROUTE = "Main-Page" : DEFAULT_ROUTE = <Home/>

	return (
		<div className="App">
			<BrowserRouter>
        <Routes>
          <Route path={DEFAULT_ROUTE} element={<Home />} />
          <Route path="home" element={<Home/>}/>
          <Route path="support" element={<Support/>}/>
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
