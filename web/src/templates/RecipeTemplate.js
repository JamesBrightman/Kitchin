import React from "react";
import {graphql} from "gatsby";
import {Typography, withTheme} from "@material-ui/core";
import Layout from "./Layout";
import styled from "styled-components";

const TemplateWrapperDiv = styled("div")`
    height: "100%";
`;

const RecipeGrid = withTheme(styled("div")`
     ${({theme}) => `
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: ${theme.spacing(3)}px ${theme.spacing(3)}px;
        border-bottom: 3px solid black;
        margin: 0 auto;
        padding-top: ${theme.spacing(6)}px;
        width: 60%;
      `}
`);

const ExtraSectionDiv = withTheme(styled("div")`
    ${({theme}) => `
        width: 60%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-bottom: ${theme.spacing(2.5)}px;
    `}
`);

const GridHeaderTypography = styled(Typography)`
        border-bottom: 3px solid black;
`;

const RecipeTemplate = (props) => {
    const {data: {sanityRecipe}} = props;

    return (
        <TemplateWrapperDiv id={"template-wrapper-div"}>
            <Layout subTitle={sanityRecipe.title}>
                <RecipeGrid id={"recipe-grid"}>
                    <div>
                        <GridHeaderTypography
                            variant={"h4"}>
                            {"Ingredients"}
                        </GridHeaderTypography>
                        <ul>
                            {sanityRecipe.ingredients.map((ingredient) => {
                                return (
                                    <li>
                                        <Typography>
                                            {ingredient}
                                        </Typography>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <GridHeaderTypography
                            variant={"h4"}>
                            {"Steps"}
                        </GridHeaderTypography>
                        <ol>
                            {sanityRecipe.steps.map((step) => {
                                return (
                                    <li>
                                        <Typography>
                                            {step}
                                        </Typography>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                </RecipeGrid>

                <ExtraSectionDiv id={"time-section"}>
                    <Typography variant={"h4"}>{"Time"}</Typography>
                    <Typography style={{paddingTop: "16px"}}>{sanityRecipe.time}</Typography>
                </ExtraSectionDiv>

                <ExtraSectionDiv id={"notes-section"}>
                    <Typography variant={"h4"}>{"Notes"}</Typography>
                    <ul>
                        {sanityRecipe.notes.map((note) => {
                            return (
                                <li>
                                    <Typography>
                                        {note}
                                    </Typography>
                                </li>
                            )
                        })}
                    </ul>
                </ExtraSectionDiv>
            </Layout>
        </TemplateWrapperDiv>
    )
};

// --- Page Query ---
// Grab the data about individual sanity stored recipes to populate this template

export const RecipeTemplateQuery = graphql`
query RecipeTemplateQuery($id: String) {
  sanityRecipe(id: { eq: $id }) {
    id
    slug {
      current
    }
    title
    time
    steps
    ingredients
    notes
  }
}`;

export default RecipeTemplate;