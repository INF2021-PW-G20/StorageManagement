import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";

export const theme = createMuiTheme(
  merge({}, defaultTheme, {
    palette: {
      secondary: {
        main: "#A0A0A0", 
      },
    }
  })
);