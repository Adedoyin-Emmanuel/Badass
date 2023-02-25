import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Suspense} from "react";
import Home from "./pages/Home";
import Support from "./pages/Support";
import MainApp from "./pages/Main-App";
import Search from "./pages/Search";
import Convert from "./pages/Convert";
import Remove from "./pages/Remove";
import Settings from "./pages/Settings";
import NotFound from "./pages/404";
import "./autoload";
import db from "./backend/db";
import sayHello from "./apis/getData";
import Spinner from "./components/spinner";
import SearchResult from "./pages/SearchResult";



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
            <Route path="app/removebg" element={<Remove/>}/>
            <Route path="app/search" element={<Search/>}/>
            <Route path="app/convert" element={<Convert/>}/>
            <Route path="app/settings" element={<Settings/>}/>
            <Route path="app/search/:packview" element={<SearchResult/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
  		</div>
    </Suspense>
	);
}

export default App;
