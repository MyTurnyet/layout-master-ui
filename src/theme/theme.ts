type colorTheme = {
    color: string,
    light: string,
    dark: string,
    on_background?: string,
    on_background_light?: string,
}

export type SiteTheme = {
    colors: {
        primary: colorTheme,
        secondary: colorTheme,
        tertiary: colorTheme,
        highlight: string,
    },
    font: {
        core: string,
        header: string,
        logo: string,
    },
}
const redRailroad: SiteTheme = {
        colors: {
            primary: {
                color: "#FFFFFF",
                light: "#FFFFFF",
                dark: "#cccccc",
                on_background: "#000",
                on_background_light: "#A1A1A1"
            },
            secondary: {
                color: "#2a3747",
                light: "#546172",
                dark: "#011120",
                on_background: "#fff"
            },

            tertiary: {
                color: "#e6c300",
                light: "#fff099",
                dark: "#665700",
            },
            highlight: "#FA4141"
        },
        font: {
            logo: "'Share Tech Mono', monospace",
            header: "'Raleway', sans-serif",
            core: "'Merriweather Sans', sans-serif",
        }
    }
;

const defaultTheme = redRailroad;
export default defaultTheme;

