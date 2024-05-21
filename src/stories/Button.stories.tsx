import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["outlined", "contained", "ghost", "link"],
		},
		size: {
			control: { type: "select" },
			options: ["small", "medium", "large"],
		},
		disabled: { control: "boolean" },
		children: { control: "text" },
		backgroundColor: {
			control: "color",
			if: { arg: "variant", eq: "contained" },
		},
		textColor: { control: "color" },
	},
} as Meta;

const getSizeStyles = size => {
	switch (size) {
		case "small":
			return {
				fontSize: "0.75rem",
				padding: "4px 8px",
			};
		case "medium":
			return {
				fontSize: "0.875rem",
				padding: "6px 16px",
			};
		case "large":
			return {
				fontSize: "1rem",
				padding: "8px 24px",
			};
		default:
			return {};
	}
};

const Template: StoryFn<any> = args => (
	<ThemeProvider theme={theme}>
		<Button
			{...args}
			style={{
				backgroundColor:
					args.variant === "contained" ? args.backgroundColor : "transparent",
				color: args.textColor,
				...(args.variant === "link" && getSizeStyles(args.size)),
			}}
		/>
	</ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
	variant: "contained",
	size: "medium",
	disabled: false,
	children: "Button",
	backgroundColor: theme.palette.primary.main,
	textColor: theme.palette.arcticWhite.main,
};

export const Ghost = Template.bind({});
Ghost.args = {
	variant: "ghost",
	size: "medium",
	disabled: false,
	children: "Button",
	backgroundColor: "transparent",
	textColor: theme.palette.primary.main,
};

export const Outlined = Template.bind({});
Outlined.args = {
	variant: "outlined",
	size: "medium",
	disabled: false,
	children: "Button",
	backgroundColor: "transparent",
	textColor: theme.palette.primary.main,
};

export const Link = Template.bind({});
Link.args = {
	variant: "link",
	size: "medium",
	disabled: false,
	children: "Button",
	backgroundColor: "transparent",
	textColor: theme.palette.primary.main,
};
