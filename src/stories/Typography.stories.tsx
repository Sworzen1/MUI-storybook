import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Typography from "@mui/material/Typography";

export default {
	title: "Components/Typography",
	component: Typography,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: [
				"displayXL",
				"displayL",
				"displayM",
				"displayS",
				"headlineL",
				"headlineM",
				"headlineS",
				"titleSemiL",
				"titleMediumL",
				"titleRegularL",
				"titleSemiBig",
				"titleMediumBig",
				"titleM",
				"titleS",
				"bodyRegularL",
				"bodyMediumL",
				"bodySemiL",
				"bodyRegularM",
				"bodyMediumM",
				"bodySemiM",
				"bodyRegularS",
				"bodyMediumS",
				"bodySemiS",
				"labelL",
				"labelM",
				"labelS",
			],
		},
		text: { control: "text" },
	},
} as Meta;

const Template: StoryFn<any> = ({ text, ...args }) => (
	<Typography {...args}>{text}</Typography>
);

export const Default = Template.bind({});

export const DisplayXL = Template.bind({});
DisplayXL.args = {
	variant: "displayXL",
	text: "Display XL Text",
};

export const DisplayL = Template.bind({});
DisplayL.args = {
	variant: "displayL",
	text: "Display L Text",
};

export const DisplayM = Template.bind({});
DisplayM.args = {
	variant: "displayM",
	text: "Display M Text",
};

export const DisplayS = Template.bind({});
DisplayS.args = {
	variant: "displayS",
	text: "Display S Text",
};

export const HeadlineL = Template.bind({});
HeadlineL.args = {
	variant: "headlineL",
	text: "Headline L Text",
};

export const HeadlineM = Template.bind({});
HeadlineM.args = {
	variant: "headlineM",
	text: "Headline M Text",
};

export const HeadlineS = Template.bind({});
HeadlineS.args = {
	variant: "headlineS",
	text: "Headline S Text",
};

export const TitleSemiL = Template.bind({});
TitleSemiL.args = {
	variant: "titleSemiL",
	text: "Title Semi L Text",
};

export const TitleMediumL = Template.bind({});
TitleMediumL.args = {
	variant: "titleMediumL",
	text: "Title Medium L Text",
};

export const TitleRegularL = Template.bind({});
TitleRegularL.args = {
	variant: "titleRegularL",
	text: "Title Regular L Text",
};

export const TitleSemiBig = Template.bind({});
TitleSemiBig.args = {
	variant: "titleSemiBig",
	text: "Title Semi Big Text",
};

export const TitleMediumBig = Template.bind({});
TitleMediumBig.args = {
	variant: "titleMediumBig",
	text: "Title Medium Big Text",
};

export const TitleM = Template.bind({});
TitleM.args = {
	variant: "titleM",
	text: "Title M Text",
};

export const TitleS = Template.bind({});
TitleS.args = {
	variant: "titleS",
	text: "Title S Text",
};

export const BodyRegularL = Template.bind({});
BodyRegularL.args = {
	variant: "bodyRegularL",
	text: "Body Regular L Text",
};

export const BodyMediumL = Template.bind({});
BodyMediumL.args = {
	variant: "bodyMediumL",
	text: "Body Medium L Text",
};

export const BodySemiL = Template.bind({});
BodySemiL.args = {
	variant: "bodySemiL",
	text: "Body Semi L Text",
};

export const BodyRegularM = Template.bind({});
BodyRegularM.args = {
	variant: "bodyRegularM",
	text: "Body Regular M Text",
};

export const BodyMediumM = Template.bind({});
BodyMediumM.args = {
	variant: "bodyMediumM",
	text: "Body Medium M Text",
};

export const BodySemiM = Template.bind({});
BodySemiM.args = {
	variant: "bodySemiM",
	text: "Body Semi M Text",
};

export const BodyRegularS = Template.bind({});
BodyRegularS.args = {
	variant: "bodyRegularS",
	text: "Body Regular S Text",
};

export const BodyMediumS = Template.bind({});
BodyMediumS.args = {
	variant: "bodyMediumS",
	text: "Body Medium S Text",
};

export const BodySemiS = Template.bind({});
BodySemiS.args = {
	variant: "bodySemiS",
	text: "Body Semi S Text",
};

export const LabelL = Template.bind({});
LabelL.args = {
	variant: "labelL",
	text: "Label L Text",
};

export const LabelM = Template.bind({});
LabelM.args = {
	variant: "labelM",
	text: "Label M Text",
};

export const LabelS = Template.bind({});
LabelS.args = {
	variant: "labelS",
	text: "Label S Text",
};
