import React from "react";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {ThemeProvider} from "styled-components";
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500]
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            vlg: 1440,
            xl: 1920,
        },
    },
    overrides: {
        MuiListItem: {
            "root": {
                "&$selected": {
                    "color": blue[500],
                    "backgroundColor": blue[50]
                },
                "color": grey[700]
            }
        }
    }
});

export const MuiThemeWrapper = (props) => {
    return <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    </MuiThemeProvider>;
};
