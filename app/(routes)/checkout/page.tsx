import { Button } from '@chakra-ui/react';
import { getProducts, getProductById, getCategories } from '@/lib/utils';

const CheckoutPage = async () => {
    const isLoggedIn = true; // Replace with actual authentication logic
    const cats = await getCategories();
    const products = await getProducts(cats?.[0]); // Fetch all products
    const category1Products = (await getProducts(cats?.[0]))?.slice(0, 2);
    const category2Products = (await getProducts(cats?.[1]))?.slice(0, 2);
    const cartItems = [...category1Products, ...category2Products]; // Combine products from both categories
    const retailerDetails = {
        name: 'Retailer Name',
        email: 'retailer@example.com',
        phone: '+123456789',
        whatsapp: '+123456789',
    }; // Replace with actual retailer details

    return (
        <div className="checkout-page">
            <h1>Checkout Page</h1>

            {!isLoggedIn ? (
                <div className="login-prompt">
                    <p>Please log in to proceed with checkout.</p>
                    <button>Login</button>
                </div>
            ) : (
                <>
                    {/* Cart Display */}
                    <section className="cart-display">
                        <h2>Your Cart</h2>
                        {cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item?.id}>
                                        {item?.title} - ${item?.price}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </section>

                    {/* Retailer Account Details */}
                    <section className="retailer-details">
                        <h2>Retailer Details</h2>
                        <p>Name: {retailerDetails.name}</p>
                        <p>Email: {retailerDetails.email}</p>
                        <p>Phone: {retailerDetails.phone}</p>
                        <p>WhatsApp: {retailerDetails.whatsapp}</p>
                    </section>

                    {/* Checkout Options */}
                    <section className="checkout-options">
                        <h2>Checkout Options</h2>
                        <Button colorScheme="blue">
                            Checkout by Email
                        </Button>
                        <Button colorScheme="green">
                            Checkout by WhatsApp
                        </Button>
                        <Button colorScheme="teal">
                            Checkout by Phone Call
                        </Button>
                    </section>
                </>
            )}
        </div>
    );
};

export default CheckoutPage;