import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Support from "./pages/Support";
import "./autoload";
import Db from "./backend/db";
function App() {

  const DEFAULT_ROUTE = "";

  ()

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
