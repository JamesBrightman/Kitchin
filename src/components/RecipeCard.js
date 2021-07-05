import React from "react";
import {navigate} from "gatsby";
import styled from 'styled-components';
import {Card, CardContent, Typography, withTheme} from "@material-ui/core";

const RecipeCardComponent = withTheme(styled(Card)`
     ${({theme}) => `
        margin: ${theme.spacing(1)}px;
        height: ${theme.spacing(12)}px;
        border-top: ${theme.spacing(1)}px solid ${theme.palette.primary.main};
      `}
`);

const RecipeCardWrapper = styled("div")`
     min-width: 25%;
     max-width: 50%;
     flex: 1;
     text-align: center;
`;

export const RecipeCard = ({data}) => {
    return (
        <RecipeCardWrapper id={"recipe-card-wrapper"}
                           onClick={() => {
                               navigate(data.fields.slug)
                           }}
        >
            <RecipeCardComponent elevation={5}>
                <CardContent>
                    <Typography>{data.frontmatter.title}</Typography>
                    <Typography color={"textSecondary"}>{data.frontmatter.time}</Typography>
                </CardContent>
            </RecipeCardComponent>
        </RecipeCardWrapper>
    )
};