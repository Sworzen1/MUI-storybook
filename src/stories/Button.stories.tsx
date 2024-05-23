import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "@mui/material/Button";
import { theme } from "../theme";

export default {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["outlined", "contained", "ghost", "link"],
		},
		size: {
			control: { type: "radio" },
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

export const Contained = Template.bind({});
Contained.args = {
	variant: "contained",
	size: "medium",
	children: "Button",
};

export const Ghost = Template.bind({});
Ghost.args = {
	variant: "ghost",
	size: "medium",
	children: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
	variant: "outlined",
	size: "medium",
	children: "Button",
};

export const Link = Template.bind({});
Link.args = {
	variant: "link",
	size: "medium",
	children: "Button",
};
