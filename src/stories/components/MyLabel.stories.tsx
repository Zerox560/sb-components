import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        size: { control: "select" },
        color: { control: "select" },
        fontColor: { control: "color" }
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Normal = Template.bind({});
Normal.args = {
    label: "Hello World",
    size: "normal"
}

export const Small = Template.bind({});
Small.args = {
    label: "Hello World",
    size: "h3"
}

export const Medium = Template.bind({});
Medium.args = {
    label: "Hello World",
    size: "h2"
}

export const Big = Template.bind({});
Big.args = {
    label: "Hello World",
    size: "h1"
}

export const Primary = Template.bind({});
Primary.args = {
    label: "Hello World",
    size: "h1",
    color: "primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Hello World",
    size: "h1",
    color: "secondary"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: "Hello World",
    size: "h1",
    color: "tertiary"
}

export const Capitalize = Template.bind({});
Capitalize.args = {
    label: "Hello World",
    size: "h1",
    allCaps: true
}
