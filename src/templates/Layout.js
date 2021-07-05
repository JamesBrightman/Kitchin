import React from "react";
import {useStaticQuery, graphql} from 'gatsby';
import {Typography} from "@material-ui/core";
import "../components/global.css";
import {MuiThemeWrapper} from "./MuiThemeWrapper";


const Layout = ({subTitle, children}) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
            <main>
                <title>{data.site.siteMetadata.title}</title>
                <Typography style={{
                    fontSize: "6em",
                    fontWeight: "700",
                    textAlign: "center"
                }}>
                    {data.site.siteMetadata.title}
                </Typography>
                <Typography style={{textAlign: "center"}} variant={"h4"}>{subTitle}</Typography>
                <MuiThemeWrapper>
                    {children}
                </MuiThemeWrapper>
            </main>
    )
};

export default Layout;