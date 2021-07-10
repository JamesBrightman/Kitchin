import React, {useEffect, useState} from 'react';
import SearchBar from 'material-ui-search-bar';
import Layout from '../templates/Layout';
import {graphql} from "gatsby";
import {RecipeCard} from "../components/RecipeCard";
import {withTheme} from "@material-ui/core";
import styled from "styled-components";

const MuiSearchBar = withTheme(styled(SearchBar)`
     ${({theme}) => `
        width: 80%;
        margin: ${theme.spacing(4)}px auto ${theme.spacing(2)}px auto
      `}
`);

const RecipeCardHolder = styled("div")`
    display: flex;
    flex-wrap: wrap
`;

const IndexPage = ({data}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [availrecipes, setAvailRecipes] = useState([]);

    useEffect(() => {
        let tempAvailRecipes = [];
        data.allSanityRecipe.edges.forEach((ele) => {
            if (ele.node.title.toLowerCase()
                .includes(searchTerm.toLowerCase())) {
                tempAvailRecipes.push(ele)
            }
        });
        setAvailRecipes(tempAvailRecipes);
    }, [searchTerm, data.allSanityRecipe.edges]);

    return (
        <Layout subTitle={"Easy online recipe book."}>
            <MuiSearchBar
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e)
                }}
                placeholder="Search..."
            />
            <RecipeCardHolder id={"recipe-card-holder"}>
                {availrecipes.map((ele) => {
                    return (
                        <RecipeCard data={ele.node}/>
                    )
                })}
            </RecipeCardHolder>
        </Layout>
    )
};

// --- Page Query ---

export const IndexQuery = graphql`
query IndexQuery {
  allSanityRecipe {
    edges {
      node {
        id
        ingredients
        notes
        steps
        time
        title
        slug {
          current
        }
      }
    }
  }
}`;

export default IndexPage;