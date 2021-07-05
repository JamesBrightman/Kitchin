const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `blog` });
        createNodeField({ //Add a slug field to the Mdx node
            node,
            name: `slug`,
            value: slug,
        })
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const path = require("path");
    // Destructure the createPage function from the actions object
    const { createPage } = actions;

    const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

    if (result.errors) {
        console.log("ERRORS IN CREATING PAGES")
    }

    // Create Recipes
    const recipes = result.data.allMdx.edges;

    recipes.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/RecipeTemplate.js`),
            context: { id: node.id }, //Context is for passing data to component template to help filter
        })
    })
};