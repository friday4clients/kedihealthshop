import { ChakraProvider, createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";


const config = defineConfig({
    globalCss: {
        "html,body": {
            bg: "gray.100",
            color: "gray.emphasized",
        },
        "P": {
            color: "gray.emphasized",
        },
        "h1,h2,h3,h4,h5,h6": {
            color: "gray.contrast",
        },
    },
    theme: {
        tokens: {
            fonts: {
                merriweather: {
                    value: "Merriweather, serif"
                },
                montserrat: {
                    value: "Montserrat, sans-serif"
                },
                montserrat_alternates: {
                    value: "Montserrat Alternates, sans-serif"
                },
                oswald: {
                    value: "Oswald, sans-serif"
                },
                body: {
                    value: "montserrat"
                },
                heading: {
                    value: "montserrat"
                }
            },
            colors: {
                accent: {
                    value: "{colors.blue.700}"
                },

            }
        },
    },
})

export const system = createSystem(defaultConfig, config);