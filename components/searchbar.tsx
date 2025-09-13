"use client";

import { ProductType } from "@/lib/utils";
import { CloseButton, Input, InputGroup } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const navigate = useRouter();
    const searchParams = useSearchParams();

    React.useEffect(() => {
        const search = searchParams.get("search") || "";
        setQuery(search);
    }, [searchParams]);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        navigate.push(`?search=${encodeURIComponent(value)}`);
    }

    return (
        <InputGroup
            w="1/3"
            endElement={
                query && <CloseButton
                _hover={{ bg: "gray.100" }}
                size="xs"
                onClick={() => {
                    setQuery("");
                    navigate.push(`?search=`);
                }}
                />
            }
        >
            <Input
                p="4"
                type="text"
                bg="white"
                _hover={{ boxShadow: "md" }}
                borderRadius="lg"
                _focus={{ boxShadow: "outline", borderColor: "blue.500" }}
                placeholder="Search by name, description, price..."
                value={query}
                onChange={handleInputChange}
                aria-label="Search products"
            />
        </InputGroup>
    );
};

export default SearchBar;
