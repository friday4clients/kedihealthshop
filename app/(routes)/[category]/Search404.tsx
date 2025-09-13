"use client"

import { Button, EmptyState, Stack } from "@chakra-ui/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { use } from "react"
import { LuSearch } from "react-icons/lu"

const SearchNotFound = ({ searchValue }: { searchValue: string }) => {
    const navigate = useRouter();
    const path = usePathname();
    return (
        <EmptyState.Root>
            <EmptyState.Content>
                <EmptyState.Indicator>
                    <LuSearch />
                </EmptyState.Indicator>
                <Stack textAlign="center">
                    <EmptyState.Title>Search Not Found</EmptyState.Title>
                    <EmptyState.Description>
                        We couldn't find any results for your search {searchValue}. Please try different keywords.
                    </EmptyState.Description>
                </Stack>
                <Button asChild bg="accent">
                    <Link href={`${path}?search=`}>Clear search</Link>
                </Button>
            </EmptyState.Content>
        </EmptyState.Root>
    )
}

export default SearchNotFound;