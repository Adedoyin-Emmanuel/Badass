import { navigate } from "./script";
import db from "./../../backend/db";


export const navigateToProject = (): void => {
    navigate("https://github.com/Adedoyin-Emmanuel/Badass");
}

export const navigateToGithub = (): void => {
    navigate("https://github.com/Adedoyin-Emmanuel");
}
export const navigateToApp = (): void => {
    navigate("/app");
}

export const navigateToSettings = (): void => {
    navigate("/app/settings");
}

export const navigateToSupport = (): void => {
    navigate("/app/support");
}

export const navigateToHome = (): void => {
    navigate("/home");
}

export const navigateToConvert = (): void => {
    if (db.get("BADASS_HOME_PAGE_SEEN") === "true") {
        navigate("/app/convert");
    }
}

export const navigateToUpload = (): void => {
    if (db.get("BADASS_HOME_PAGE_SEEN") === "true") {
        navigate("/app/upload");
    }
}

export const navigateToDownload = (): void => {
    if (db.get("BADASS_HOME_PAGE_SEEN") === "true") {
        navigate("/app/search");
    }
}


export const checkIfHomePageSeen = (): void => {
    if (!(db.get("BADASS_HOME_PAGE_SEEN") === "true")) {
        navigateToHome();
    }
}