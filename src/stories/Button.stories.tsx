import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "@mui/material/Button";
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
		children: { control: "text" },
		backgroundColor: {
			control: "color",
			if: { arg: "variant", eq: "contained" },
		},
		textColor: { control: "color" },
	},
} as Meta;

const getButtonStyles = (
	variant: string,
	backgroundColor: string,
	textColor: string
): React.CSSProperties => {
	const styles: React.CSSProperties = {};

	if (variant === "contained" && backgroundColor) {
		styles.backgroundColor = backgroundColor;
	}

	if (textColor) {
		styles.color = textColor;
	}

	return styles;
};

const Template: StoryFn<any> = args => (
	<Button
		{...args}
		style={{
			...getButtonStyles(args.variant, args.backgroundColor, args.textColor),
		}}
	/>
);

export const Default = Template.bind({});
Default.args = {
	variant: "contained",
	size: "medium",
	children: "Button",
	backgroundColor: theme.palette.primary.main,
	textColor: theme.palette.arcticWhite.main,
};

export const Ghost = Template.bind({});
Ghost.args = {
	variant: "ghost",
	size: "medium",
	children: "Button",
	backgroundColor: "transparent",
	textColor: theme.palette.primary.main,
};

export const Outlined = Template.bind({});
Outlined.args = {
	variant: "outlined",
	size: "medium",
	children: "Button",
	backgroundColor: "transparent",
	textColor: theme.palette.primary.main,
};

export const Link = Template.bind({});
Link.args = {
	variant: "link",
	size: "medium",
	children: "Button",
	backgroundColor: "transparent",
	textColor: theme.palette.primary.main,
};
