import "styled-components";
import { ThemeType } from "../config";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
