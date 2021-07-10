exports.createPages = async ({graphql, actions}) => {
    const path = require("path");
    // Destructure the createPage function from the actions object
    const {createPage} = actions;

    const result = await graphql(`
    query {
        allSanityRecipe {
          edges {
            node {
              id
              slug {
                current
              }
            }
          }
        }
}`);

    if (result.errors) {
        console.log("ERRORS IN CREATING PAGES")
    }

    // Create Recipes
    const recipes = result.data.allSanityRecipe.edges;

    recipes.forEach(({node}, index) => {
        createPage({
            path: node.slug.current,
            component: path.resolve(`./src/templates/RecipeTemplate.js`),
            context: {id: node.id}, //Context is for passing data to component template to help filter
        })
    })
};