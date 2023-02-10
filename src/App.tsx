import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Support from "./pages/Support";
import MainApp from "./pages/Main-App";
import Search from "./pages/Search";
import Convert from "./pages/Convert";
import Upload from "./pages/Upload";
import "./autoload";
import db from "./backend/db";
function App() {
  
  //default route is the main app.
  let DEFAULT_ROUTE: JSX.Element = <MainApp/>;

  (db.get("BADASS_HOME_PAGE_SEEN") === "true") ? DEFAULT_ROUTE = <MainApp/> : DEFAULT_ROUTE = <Home/>

	return (
		<div className="App">
			<BrowserRouter>
        <Routes>
          <Route path="/" element={DEFAULT_ROUTE} />
          <Route path="home" element={<Home/>}/>
          <Route path="support" element={<Support/>}/>
          <Route path="upload" element={<Upload/>}/>
          <Route path="search" element={<Search/>}/>
          
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
