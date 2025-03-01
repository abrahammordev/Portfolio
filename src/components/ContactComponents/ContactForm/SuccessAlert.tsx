import { Box, chakra, Flex, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const SuccesAlert = () => {
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
                bg: "#3e3e3e",
            }}
            p={50}
            shadow="md"
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
                rounded="lg"
                overflow="hidden"
            >
                <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
                    <Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />
                </Flex>

                <Box mx={-3} py={2} px={4}>
                    <Box mx={3}>
                        <chakra.span
                            color="green.500"
                            _dark={{
                                color: "green.400",
                            }}
                            fontWeight="bold"
                        >
                            Success
                        </chakra.span>
                        <chakra.p
                            color="gray.600"
                            _dark={{
                                color: "gray.200",
                            }}
                            fontSize="sm"
                        >
                            Correo enviado correctamente
                        </chakra.p>
                    </Box>
                </Box>
            </Flex>
        </Flex>

    );
};
export default SuccesAlert;