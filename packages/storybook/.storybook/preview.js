import { addons } from "@storybook/addons";
import { addParameters } from "@storybook/react";

const viewports = {
  smallDesktop: {
    name: "iPhone",
    styles: {
      width: "375px",
      height: "812px"
    }
  }
};

addParameters({
  viewport: {
    viewports,
    defaultViewport: "iPhone"
  }
});

addons.setConfig({
  showPanel: true,
  panelPosition: "right"
});
