import React from "react";
import { Typography, Box } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";

export default {
	title: "Typography",
	component: Typography,
	tags: ["autodocs"],
} as Meta;

const Template: StoryFn = args => (
	<Box>
		<Typography {...args}>Sample Text</Typography>
	</Box>
);

export const DisplayXL = Template.bind({});
DisplayXL.args = {
	variant: "displayXL",
	children: "Display XL",
};

export const DisplayL = Template.bind({});
DisplayL.args = {
	variant: "displayL",
	children: "Display L",
};

export const DisplayM = Template.bind({});
DisplayM.args = {
	variant: "displayM",
	children: "Display M",
};

export const DisplayS = Template.bind({});
DisplayS.args = {
	variant: "displayS",
	children: "Display S",
};

export const HeadlineL = Template.bind({});
HeadlineL.args = {
	variant: "headlineL",
	children: "Headline L",
};

export const HeadlineM = Template.bind({});
HeadlineM.args = {
	variant: "headlineM",
	children: "Headline M",
};

export const HeadlineS = Template.bind({});
HeadlineS.args = {
	variant: "headlineS",
	children: "Headline S",
};

export const TitleSemiL = Template.bind({});
TitleSemiL.args = {
	variant: "titleSemiL",
	children: "Title Semi L",
};

export const TitleMediumL = Template.bind({});
TitleMediumL.args = {
	variant: "titleMediumL",
	children: "Title Medium L",
};

export const TitleRegularL = Template.bind({});
TitleRegularL.args = {
	variant: "titleRegularL",
	children: "Title Regular L",
};

export const TitleSemiBig = Template.bind({});
TitleSemiBig.args = {
	variant: "titleSemiBig",
	children: "Title Semi Big",
};

export const TitleMediumBig = Template.bind({});
TitleMediumBig.args = {
	variant: "titleMediumBig",
	children: "Title Medium Big",
};

export const TitleM = Template.bind({});
TitleM.args = {
	variant: "titleM",
	children: "Title M",
};

export const TitleS = Template.bind({});
TitleS.args = {
	variant: "titleS",
	children: "Title S",
};

export const BodyRegularL = Template.bind({});
BodyRegularL.args = {
	variant: "bodyRegularL",
	children: "Body Regular L",
};

export const BodyMediumL = Template.bind({});
BodyMediumL.args = {
	variant: "bodyMediumL",
	children: "Body Medium L",
};

export const BodySemiL = Template.bind({});
BodySemiL.args = {
	variant: "bodySemiL",
	children: "Body Semi L",
};

export const BodyRegularM = Template.bind({});
BodyRegularM.args = {
	variant: "bodyRegularM",
	children: "Body Regular M",
};

export const BodyMediumM = Template.bind({});
BodyMediumM.args = {
	variant: "bodyMediumM",
	children: "Body Medium M",
};

export const BodySemiM = Template.bind({});
BodySemiM.args = {
	variant: "bodySemiM",
	children: "Body Semi M",
};

export const BodyRegularS = Template.bind({});
BodyRegularS.args = {
	variant: "bodyRegularS",
	children: "Body Regular S",
};

export const BodyMediumS = Template.bind({});
BodyMediumS.args = {
	variant: "bodyMediumS",
	children: "Body Medium S",
};

export const BodySemiS = Template.bind({});
BodySemiS.args = {
	variant: "bodySemiS",
	children: "Body Semi S",
};

export const LabelL = Template.bind({});
LabelL.args = {
	variant: "labelL",
	children: "Label L",
};

export const LabelM = Template.bind({});
LabelM.args = {
	variant: "labelM",
	children: "Label M",
};

export const LabelS = Template.bind({});
LabelS.args = {
	variant: "labelS",
	children: "Label S",
};
