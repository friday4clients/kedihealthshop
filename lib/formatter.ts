export const formatPrice = (price: string) => {
    const formatter = new Intl.NumberFormat('en-UK', { style: "currency", currency: "NGN", currencyDisplay:"narrowSymbol" });
    return formatter.format(Number(price));
}