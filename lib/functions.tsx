export const toTitleCase = (data: string) => {
    return data?.trim()?.split(" ").map(token => {
        return token[0]?.toLocaleUpperCase() + token.slice(1);
    })?.join(" ");
}

export const copyLink = async (url: string) => {
    // Check if the Clipboard API is available
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url)
            .then(() => {
                console.log('Text copied to clipboard:', url);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    } else {
        console.error("Clipboard API not supported");
    }
}