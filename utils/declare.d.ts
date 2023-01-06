/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "twin.macro";

import { css as cssImport } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
import styledImport from "@emotion/styled";

declare global {
  interface Navigator {
    userLanguage: string;
  }

  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element;
    }
  }
}

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSInterpolation;
    tw?: string;
  }
  // The inline svg css prop
  interface SVGProps extends SVGProps<SVGSVGElement> {
    css?: CSSInterpolation;
    tw?: string;
  }
}
