import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const withMuiTheme = Story => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Story />
	</ThemeProvider>
);

export const decorators = [withMuiTheme];
