import React from "react";

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });

  // setHeadComponents([
  //   <link
  //     key="adobe-fonts"
  //     rel="stylesheet"
  //     href="https://use.typekit.net/zcl4usb.css"
  //   />,
  // ]);
};
