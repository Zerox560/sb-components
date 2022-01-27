"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capitalize = exports.Tertiary = exports.Secondary = exports.Primary = exports.Big = exports.Medium = exports.Small = exports.Normal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: "select" },
        color: { control: "select" },
        fontColor: { control: "color" }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args), void 0); };
exports.Normal = Template.bind({});
exports.Normal.args = {
    label: "Hello World",
    size: "normal"
};
exports.Small = Template.bind({});
exports.Small.args = {
    label: "Hello World",
    size: "h3"
};
exports.Medium = Template.bind({});
exports.Medium.args = {
    label: "Hello World",
    size: "h2"
};
exports.Big = Template.bind({});
exports.Big.args = {
    label: "Hello World",
    size: "h1"
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    label: "Hello World",
    size: "h1",
    color: "primary"
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "Hello World",
    size: "h1",
    color: "secondary"
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: "Hello World",
    size: "h1",
    color: "tertiary"
};
exports.Capitalize = Template.bind({});
exports.Capitalize.args = {
    label: "Hello World",
    size: "h1",
    allCaps: true
};
