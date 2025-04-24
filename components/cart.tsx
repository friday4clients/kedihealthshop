import { Box, Button, CloseButton, Drawer, Heading, IconButton, Link, Portal, Stack } from "@chakra-ui/react"
import { BiCart } from "react-icons/bi"

const Cart = () => {

    return <Drawer.Root>
        <Drawer.Trigger asChild>
            <IconButton _hover={{ color: "accent" }}>
                <BiCart />
            </IconButton>
        </Drawer.Trigger>
        <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
                <Drawer.Content bg="white">
                    <Drawer.Header>
                        <Drawer.Title>Cart</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                        <Stack gap="4">
                            <Heading fontSize="md" fontWeight="sm">Your Items</Heading>
                            {/* Example items, replace with dynamic data */}
                            <Stack>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <span>Item 1</span>
                                    <span>$10.00</span>
                                </Box>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <span>Item 2</span>
                                    <span>$15.00</span>
                                </Box>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <span>Item 3</span>
                                    <span>$20.00</span>
                                </Box>
                            </Stack>
                        </Stack>

                        <Stack mt="6" gap="4">
                            <Heading fontSize="md" fontWeight="sm">Total</Heading>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <span>Total:</span>
                                <span>$45.00</span>
                            </Box>
                        </Stack>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Stack mt="4" gap="4">
                            <Drawer.ActionTrigger asChild>
                                <Link href="/checkout">
                                    <Button bg="blue.500" color="white" px="4" py="2" borderRadius="md" textAlign="center">
                                        Proceed to Checkout
                                    </Button>
                                </Link>
                            </Drawer.ActionTrigger>
                        </Stack>
                    </Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                        <CloseButton color="black" size="sm" />
                    </Drawer.CloseTrigger>
                </Drawer.Content>
            </Drawer.Positioner>
        </Portal>
    </Drawer.Root>
}

export default Cart;