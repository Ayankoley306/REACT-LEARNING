import { useContext, createContext } from "react";

export const themeContext = createContext({
    themeMode: "light",
    darkMode: () => { },
    lightMode: () => { }

})

export default function useTheme() {
    return useContext(themeContext);
}