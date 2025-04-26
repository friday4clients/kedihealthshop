"use client"

import { ProductType } from "@/lib/utils"
import { HStack } from "@chakra-ui/react"
import { link } from "fs"
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TwitterShareButton, XIcon, PinterestShareButton, PinterestIcon, LinkedinShareButton, LinkedinIcon } from "react-share"

const Share = (props: { product: ProductType, link: string }) => {
    const { product, link } = props;

    return (
        <HStack>
            <FacebookShareButton
                url={link}
                aria-label="Share on Facebook"
                hashtag={product?.title}
                className="flex justify-start items-center gap-4 !p-2 rounded-md hover:!bg-gray-100">
                <FacebookIcon round size={16} />
                Facebook
            </FacebookShareButton>

            <WhatsappShareButton
                className="flex justify-start items-center gap-4 !p-2 rounded-md hover:!bg-gray-100"
                url={link}
                aria-label="Share on WhatsApp"
                title={product?.title}>
                <WhatsappIcon aria-label="WhatsApp og" round size={16} />
                WhatsApp
            </WhatsappShareButton>

            <TwitterShareButton
                aria-label="Share on X(Twitter)"
                className="flex justify-start items-center gap-4 !p-2 rounded-md hover:!bg-gray-100"
                url={link}
                title={product!.title}
                hashtags={[product!.title!, ...(product!.benefits! as string[])]}
                related={[product!.title]}>
                <XIcon round size={16} />
                X(Twitter)
            </TwitterShareButton>

            <PinterestShareButton
                aria-label="Share on Pinterest"
                media={product!.imageUrls![0]}
                className="flex justify-start items-center gap-4 !p-2 rounded-md hover:!bg-gray-100"
                url={link}
                title={product?.title}>
                <PinterestIcon round size={16} />
                Pinterest
            </PinterestShareButton>

            <LinkedinShareButton
                aria-label="Share on Linkedin"
                className="flex justify-start items-center gap-4 !p-2 rounded-md hover:!bg-gray-100"
                url={link}
                title={product?.title}>
                <LinkedinIcon round size={16} />
                Linkedin
            </LinkedinShareButton>

        </HStack>
    )
}

export default Share;