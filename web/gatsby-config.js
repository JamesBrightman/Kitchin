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
                name: "fileSystem",
                path: "./src",
            }
        },
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: '73mi3q96',
                dataset: 'production',
                // watchMode: true,
                token: process.env.SANITY_TOKEN,
            }
        }
    ]
};
