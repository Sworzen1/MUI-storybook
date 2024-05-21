import React from "react";
import { Button } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";

export default {
	component: Button,
	title: "Button",
	tags: ["autodocs"],
} as Meta;

const Template: StoryFn = args => <Button {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
	variant: "outlined",
	children: "Outlined Button",
};
Outlined.argTypes = {
	variant: { control: "text" },
	children: { control: "text" },
	size: { control: { type: "select", options: ["small", "medium", "large"] } },
	color: {
		control: {
			type: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"error",
				"info",
				"success",
				"warning",
			],
		},
	},
	disabled: { control: "boolean" },
};

export const Contained = Template.bind({});
Contained.args = {
	variant: "contained",
	children: "Contained Button",
};
Contained.argTypes = {
	variant: { control: "text" },
	children: { control: "text" },
	size: { control: { type: "select", options: ["small", "medium", "large"] } },
	color: {
		control: {
			type: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"error",
				"info",
				"success",
				"warning",
			],
		},
	},
	disabled: { control: "boolean" },
};

export const Ghost = Template.bind({});
Ghost.args = {
	variant: "ghost",
	children: "Ghost Button",
};
Ghost.argTypes = {
	variant: { control: "text" },
	children: { control: "text" },
	size: { control: { type: "select", options: ["small", "medium", "large"] } },
	color: {
		control: {
			type: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"error",
				"info",
				"success",
				"warning",
			],
		},
	},
	disabled: { control: "boolean" },
};

export const Link = Template.bind({});
Link.args = {
	variant: "link",
	children: "Link Button",
};
Link.argTypes = {
	variant: { control: "text" },
	children: { control: "text" },
	size: { control: { type: "select", options: ["small", "medium", "large"] } },
	color: {
		control: {
			type: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"error",
				"info",
				"success",
				"warning",
			],
		},
	},
	disabled: { control: "boolean" },
};
