"use client"

import { HStack, Stat, Separator } from "@chakra-ui/react"
import CountUp from "react-countup"

const Stats = () => {

    return (
        <HStack
            w="fit"
            mt="12"
            h="20"
            gap="6"
            border="sm"
            borderColor="gray.200"
            p="6"
            py="12"
            rounded="xl"
            overflow={"hidden"}
            justifyContent={"start"}>
            <Stat.Root>
                <Stat.Label>Products Sold</Stat.Label>
                <Stat.ValueText
                    textStyle="3xl"
                    fontWeight={"black"}
                    color="accent">
                    <CountUp duration={2.5} delay={2} end={500} />
                </Stat.ValueText>
            </Stat.Root>
            <Separator
                h="vh"
                borderColor="gray.200"
                orientation={"vertical"} />
            <Stat.Root w="fit">
                <Stat.Label>Monthly&nbsp;Visitors</Stat.Label>
                <Stat.ValueText
                    textStyle="3xl"
                    fontWeight={"black"}
                    color="accent"
                >
                    <CountUp delay={2} duration={2.5} end={200} />
                </Stat.ValueText>
            </Stat.Root>
        </HStack>
    )
}

export default Stats;