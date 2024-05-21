import React from "react";
import { Chip } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";

export default {
	component: Chip,
	title: "Chip",
	tags: ["autodocs"],
} as Meta;

const Template: StoryFn = args => <Chip {...args} />;

export const Info = Template.bind({});
Info.args = {
	label: "Info Chip",
	color: "default",
	size: "medium",
};
Info.argTypes = {
	label: { control: "text" },
	size: { control: { type: "select", options: ["small", "medium"] } },
};

export const Progress = Template.bind({});
Progress.args = {
	label: "Progress Chip",
	color: "default",
	size: "medium",
};
Progress.argTypes = {
	label: { control: "text" },
	size: { control: { type: "select", options: ["small", "medium"] } },
};

export const Finished = Template.bind({});
Finished.args = {
	label: "Finished Chip",
	color: "default",
	size: "medium",
};
Finished.argTypes = {
	label: { control: "text" },
	size: { control: { type: "select", options: ["small", "medium"] } },
};

export const Error = Template.bind({});
Error.args = {
	label: "Error Chip",
	color: "default",
	size: "medium",
};
Error.argTypes = {
	label: { control: "text" },
	size: { control: { type: "select", options: ["small", "medium"] } },
};
