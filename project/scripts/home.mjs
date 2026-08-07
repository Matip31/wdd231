import { CreateNav } from "./navigation.mjs";
import { CreateFooter } from "./footer.mjs";
import { getWeather } from "./weather.mjs";
import { initializeDialogs } from "./dialogs.mjs";
CreateNav();
CreateFooter();
getWeather();
initializeDialogs();