import {navigate} from  "./script";

export const navigateToApp = (): void =>{
	navigate("/app");
}

export const navigateToSettings = (): void =>{
	navigate("/app/settings");
}

export const navigateToSupport = (): void =>{
	navigate("/app/support");
}

export const navigateToHome = (): void =>{
	navigate("/home");
}

export const navigateToConvert = (): void =>{
    navigate("/app/convert");
}

export const navigateToUpload = (): void =>{
    navigate("/app/upload");
}

export const navigateToDownload = (): void =>{
    navigate("/app/search");
}

