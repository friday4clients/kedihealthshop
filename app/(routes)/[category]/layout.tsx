import { Box, Container, Drawer, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
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
            <Grid
                gap=""
                h="full"
                templateColumns={{ base: "1fr", md: "repeat(12,1fr)" }}
            >
                <GridItem bg="white" h="calc(100vh - 60px)" colSpan={2} position="sticky" top={14}>
                    <SideLinks />
                </GridItem>

                <GridItem colSpan={10}>
                    <Container maxW="6xl">
                        {children}
                    </Container>
                </GridItem>
            </Grid>
        </Box>
    );
}