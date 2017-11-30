module.exports = {
    siteMetadata: {
        title: `Pandas Eating Things!`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-glamor`,
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `meddon`,
                    `montserrat:300`,
                    `lora:400,700`,
                ]
            }
        },
    ],
}
