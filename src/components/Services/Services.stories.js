import { Services } from ".";

export default {
  title: "Components/Services",
  component: Services,
  argTypes: {
    cardStates: {
      options: ["branding", "branding-2", "development", "marketing", "development-2", "marketing-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    cardStates: "branding",
    className: {},
    groupClassName: {},
    frameClassName: {},
    frame:
      "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/frame-79.svg",
    groupClassNameOverride: {},
    groupWrapperClassName: {},
    divClassName: {},
    divClassNameOverride: {},
    vectorClassName: {},
    vector:
      "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/vector-2.svg",
  },
};
