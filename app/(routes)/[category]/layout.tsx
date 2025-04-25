import { Box, Container, Grid } from "@chakra-ui/react";

export default function CategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Box
            as="main"
            bg="white"
            h="full">
            <Grid
                gap=""
                h="full"
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            >
                {children}
            </Grid>
            <Container maxW="6xl">

            </Container>
        </Box>
    );
}