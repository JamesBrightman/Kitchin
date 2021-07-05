module.exports = {
    siteMetadata: {
        title: "Kitchin🍳",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-material-ui",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blogPosts",
                path: "./src",
            }
        },
    ],
};
