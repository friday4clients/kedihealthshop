import { Box, Em, Grid, GridItem, VisuallyHidden } from "@chakra-ui/react";
import SideLinks from "./side_links";

export default async function CategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <Box
            as="main"
            position={"relative"}
            h="full">
            <VisuallyHidden>
                <Em>kedi detox tea benefits and side effects</Em>
                <Em>{process.env.NEXT_PUBLIC_SITE_NAME} kedi shop nigeria</Em>

                <Em>reviews of {process.env.NEXT_PUBLIC_SITE_NAME} kedi store</Em>

                <Em>buy kedi products from trusted seller</Em>

                <Em>kedi health care official partner nigeria</Em>

                <Em>buy original kedi products online nigeria</Em>

                <Em>kedi vitanature supplement price in nigeria</Em>

                <Em>kedi cordyceps capsules for energy</Em>

                <Em>kedi constipation relief tea review</Em>

                <Em>kedi herbal toothpaste where to buy</Em>

                <Em>kedi immune booster supplements lagos</Em>

                <Em>affordable kedi health products abuja</Em>

                <Em>genuine kedi weight loss tea nigeria</Em>
            </VisuallyHidden>
            <Grid
                gap=""
                h="full"
                templateColumns={{ base: "1fr", md: "repeat(12,1fr)" }}
            >
                <GridItem display={{ base: "none", md: "block" }} bg="white" h="calc(100vh - 60px)" colSpan={2} position="sticky" top={14}>
                    <SideLinks />
                </GridItem>

                <GridItem colSpan={10}>
                    {children}
                </GridItem>
            </Grid>
        </Box>
    );
}