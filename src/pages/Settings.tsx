import React, {Suspense} from "react";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import * as navigate from "./../includes/scripts/handleNavigation";
import Button from "../components/button";
import db from "./../backend/db";
import Spinner from "./../components/spinner";

const Settings = () => {

    const restoreFactorySettings = () =>{
        if(db.get("BADASS_HOME_PAGE_SEEN") === "true")
        {
          db.delete("BADASS_HOME_PAGE_SEEN");
          navigate.navigateToHome();
        }
    }

    navigate.checkIfHomePageSeen();
    return (
    <React.Fragment>
      <Suspense fallback={<Spinner/>}>
          <Spinner/>
          <section className="container-fluid width-toggle-5 p-0">
             <AppHeader title="Settings"/>
               <div className="py-4 my-1 d-sm-none d-md-block"></div>

                  <section className="factory-settings my-3 p-2">
                    <label
                      htmlFor="factory-settings-reset "
                      className="text-capitalize text-light">
                      restore factory settings
                    </label>
                    <section className="d-flex align-items-center justify-content-center d-lg-block my-3">
                      <Button className="brand-button-outline my-3 width-toggle text-capitalize fw-bold" text="Restore Settings" onClick={restoreFactorySettings}></Button>

                    </section>
                    <p className="text-muted brand-small-text-2">
                      Restoring factory settings removes all the data stored on this
                      device. You would be taken to the home screen!</p>
                  </section>
           <AppFooter childrenSettingsActivePage="current-active-page"/>

          </section>
      </Suspense>
    </React.Fragment>
    );
};

export default Settings;