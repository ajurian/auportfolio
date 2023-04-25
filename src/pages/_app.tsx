import theme from "@/theme";
import "@fontsource/public-sans";
import { CssVarsProvider, GlobalStyles, ScopedCssBaseline } from "@mui/joy";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CssVarsProvider theme={theme}>
            <ScopedCssBaseline>
                <GlobalStyles
                    styles={{
                        "html, body": {
                            margin: 0,
                            padding: 0,
                        },
                    }}
                />
                <Component {...pageProps} />
            </ScopedCssBaseline>
        </CssVarsProvider>
    );
}
