"use client"

import categories from "@/lib/categories";
import { Stack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function isActiveLink(path: string, category: string): boolean {
    return path.includes(`/${category.replaceAll(" ", "_")}`);
}
export default function SideLinks() {
    const path = usePathname();

    return (
        <Stack mt="6" gap="3" px={12} pb="6">
            <Heading fontSize="lg" fontWeight="sm">Categories</Heading>
            {categories.map((category, index) => {
                const isActive = isActiveLink(path, category?.category);
                return (
                    <Link color={isActive ? "accent" : "inherit"} key={index} href={`/${category?.category?.replaceAll(" ", "_")}`}>
                        <Heading _hover={{ color: "accent" }} textStyle={"xs"} color={isActive ? "accent" : "inherit"}>
                            {category?.category}
                        </Heading>
                    </Link>
                );
            })}
        </Stack >
    )

}