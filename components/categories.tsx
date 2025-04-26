import { getCategories } from "@/lib/utils"
import { Drawer } from "@chakra-ui/react";
import Link from "next/link";

export default async function CategoryLinks() {
    const categories = await getCategories();
    return (
        <>
            {
                categories?.map((category, index) => (
                    <Drawer.ActionTrigger asChild key={index}>
                    <Link href={`/${category?.replaceAll(" ", "_")}`}>
                        {category}
                    </Link>
                    </Drawer.ActionTrigger>
                ))
            }
        </>
    )
}