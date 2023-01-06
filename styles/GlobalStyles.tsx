import { Global, css } from "@emotion/react";
import React from "react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

const GlobalStyles: React.FC = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
