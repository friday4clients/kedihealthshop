"use client"

import { getCategories } from "@/lib/utils";
import { Stack, Heading } from "@chakra-ui/react"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function isActiveLink(path: string, category: string): boolean {
    return path.includes(`/${category.replaceAll(" ", "_")}`);
}
export default function SideLinks() {
    // const [categories, setCategories] = useState<Awaited<ReturnType<typeof getCategories>>>([]);
    const categories = [
        "Immune & General Wellness",
        "Sexual Health & Fertility",
        "Digestive & Liver Health",
        "Diabetes & Blood Sugar",
        "Eye & Brain Health",
        "Malaria & Infection",
        "Bone & Joint Support",
        "Skin & Beauty",
        "Diagnostic & Therapy Equipment",
        "Agricultural Product"
    ];
    const path = usePathname();

    return (
        <Stack mt="6" gap="3" px={12} pb="6">
            <Heading fontSize="lg" fontWeight="sm">Categories</Heading>
            {categories.map((category, index) => {
                const isActive = isActiveLink(path, category);
                return (
                    <Link color={isActive ? "accent" : "inherit"} key={index} href={`/${category.replaceAll(" ", "_")}`}>
                        <Heading _hover={{ color: "accent" }} textStyle={"xs"} color={isActive ? "accent" : "inherit"}>
                            {category}
                        </Heading>
                    </Link>
                );
            })}
        </Stack >
    )

}