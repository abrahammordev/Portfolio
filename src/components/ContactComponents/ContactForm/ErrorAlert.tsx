import { Box, chakra, Flex, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsLightningFill } from "react-icons/bs";

const ErrorAlert = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    if (!isVisible) return null;
    return (
        <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
                bg: "transparent",
            }}
            p={50}
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                maxW="sm"
                w="full"
                mx="auto"
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
                shadow="md"
                rounded="lg"
                overflow="hidden"
            >
                <Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
                    <Icon as={BsLightningFill} color="white" boxSize={6} />
                </Flex>

                <Box mx={-3} py={2} px={4}>
                    <Box mx={3}>
                        <chakra.span
                            color="red.500"
                            _dark={{
                                color: "red.400",
                            }}
                            fontWeight="bold"
                        >
                            Error
                        </chakra.span>
                        <chakra.p
                            color="gray.600"
                            _dark={{
                                color: "gray.200",
                            }}
                            fontSize="sm"
                        >
                            Ha habido un problema al enviar el correo
                        </chakra.p>
                    </Box>
                </Box>
            </Flex>
        </Flex>

    );
};
export default ErrorAlert;