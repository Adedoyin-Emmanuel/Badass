import React from "react";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import * as navigate from "./../includes/scripts/handleNavigation";
import Button from "../components/button";


const Settings = () => {

    navigate.checkIfHomePageSeen();
    return (
    <React.Fragment>
      <section className="container-fluid width-toggle-5 p-0">
         <AppHeader title="Settings"/>
         
       <AppFooter childrenSettingsActivePage="current-active-page"/>

      </section>
    </React.Fragment>
    );
};

export default Settings;