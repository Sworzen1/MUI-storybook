import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Chip from "@mui/material/Chip";

export default {
	title: "Components/Chip",
	component: Chip,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "info", "progress", "finished", "error"],
		},
		size: {
			control: { type: "radio" },
			options: ["small", "medium"],
		},
		label: { control: "text" },
	},
} as Meta;

const Template: StoryFn<any> = args => <Chip {...args} />;

export const Info = Template.bind({});
Info.args = {
	variant: "info",
	size: "medium",
	label: "Info Chip",
};

export const Progress = Template.bind({});
Progress.args = {
	variant: "progress",
	size: "medium",
	label: "Progress Chip",
};

export const Finished = Template.bind({});
Finished.args = {
	variant: "finished",
	size: "medium",
	label: "Finished Chip",
};

export const Error = Template.bind({});
Error.args = {
	variant: "error",
	size: "medium",
	label: "Error Chip",
};
