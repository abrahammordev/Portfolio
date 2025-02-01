"use client"

import { Button, useColorMode } from "@chakra-ui/react"

const Demo = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <Button variant="outline" onClick={toggleColorMode}>
            Toggle Mode
        </Button>
    )
}
export default Demo;