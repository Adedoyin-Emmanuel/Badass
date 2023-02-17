import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Suspense} from "react";
import Home from "./pages/Home";
import Support from "./pages/Support";
import MainApp from "./pages/Main-App";
import Search from "./pages/Search";
import Convert from "./pages/Convert";
import Upload from "./pages/Upload";
import Settings from "./pages/Settings";
import NotFound from "./pages/404";
import "./autoload";
import db from "./backend/db";
import sayHello from "./apis/getData";
import Spinner from "./components/spinner";


function App() {
  
  //default route is the main app.
  let DEFAULT_ROUTE: JSX.Element = <MainApp/>;

  (db.get("BADASS_HOME_PAGE_SEEN") === "true") ? DEFAULT_ROUTE = <MainApp/> : DEFAULT_ROUTE = <Home/>
  sayHello();
	return (
    <Suspense fallback={<Spinner/>}>
  		<div className="App">
  			<BrowserRouter>
          <Routes>
            <Route path="/" element={DEFAULT_ROUTE} />
            <Route path="home" element={<Home/>}/>
            <Route path="app" element={<MainApp/>}/>
            <Route path="app/support" element={<Support/>}/>
            <Route path="app/upload" element={<Upload/>}/>
            <Route path="app/search" element={<Search/>}/>
            <Route path="app/convert" element={<Convert/>}/>
            <Route path="app/settings" element={<Settings/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
  		</div>
    </Suspense>
	);
}

export default App;
