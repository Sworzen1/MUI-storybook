import React from "react";
import { Button } from "@mui/material";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

export const Outlined = () => <Button variant="outlined">dawdawd</Button>;

export const Contained = () => <Button variant="contained">dawdawd</Button>;

export const Ghost = () => <Button variant="ghost">dawdawd</Button>;

export const Link = () => <Button variant="link">dawdawd</Button>;
