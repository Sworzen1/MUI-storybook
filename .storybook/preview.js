import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import { DocsContainer, DocsPage } from "@storybook/addon-docs";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		container: DocsContainer,
		page: DocsPage,
	},
};

export const withMuiTheme = Story => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Story />
	</ThemeProvider>
);

export const decorators = [withMuiTheme];
