import { Flex, Avatar, Box, Container, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Header from './IntroHeader';
import React from 'react';
import profilePicture from '../../../assets/profilePictureW.webp';
import { useTranslation } from 'react-i18next';
import { DownloadIcon } from '@chakra-ui/icons';

const IntroSection: React.FC = () => {
    const MotionBox = motion(Box);
    const MotionFlex = motion(Flex);
    const ANIMATION_DURATION = 0.5;
    const color = 'brand.300';
    const { t } = useTranslation();

    const buttonBg = useColorModeValue("brand.500", "brand.300");
    const buttonHoverBg = useColorModeValue("brand.600", "brand.400");
    const glowColor = useColorModeValue("rgba(66, 153, 225, 0.3)", "rgba(66, 153, 225, 0.5)");


    return (
        <Container maxW="4xl" p={{ base: 5, md: 12 }}>
            <Flex direction={['column', 'column', 'row']} align="center">

                <MotionBox
                    opacity="0"
                    initial={{
                        translateX: -150,
                        opacity: 0
                    }}
                    animate={{
                        translateX: 0,
                        opacity: 1,
                        transition: {
                            duration: ANIMATION_DURATION
                        }
                    }}
                    m="auto"
                    mb={[16, 16, 'auto']}
                >
                    <MotionBox
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 1.02 }}
                        rounded="full"
                        shadow="xl"
                        position="relative"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            inset: -4,
                            rounded: 'full',
                            bg: glowColor,
                            filter: 'blur(20px)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                        }}
                        _hover={{
                            _before: {
                                opacity: 1,
                            }
                        }}
                    >
                        <Avatar
                            width={{ base: "30vw", md: "20vw", lg: "20vw" }}
                            height={{ base: "30vw", md: "20vw", lg: "20vw" }}
                            showBorder={true}
                            borderColor={'background.50'}
                            borderWidth={4}
                            src={profilePicture}
                        />
                    </MotionBox>
                </MotionBox>


                <MotionFlex
                    position="relative"
                    ml={['auto', 'auto', 16]}
                    m={['auto', 'initial']}
                    w={['90%', '85%', '80%']}
                    maxW="800px"
                    opacity="0"
                    justifyContent="center"
                    direction="column"
                    initial={{
                        opacity: 0,
                        translateX: 150
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0,
                        transition: {
                            duration: ANIMATION_DURATION
                        }
                    }}
                >
                    <Box position="relative">
                        <MotionBox
                            whileHover={{ translateY: -5 }}
                            width="max-content"
                            cursor="pointer"
                        >
                            <Header underlineColor={color} mt={0} width="max-content">
                                Hey!
                            </Header>
                        </MotionBox>
                    </Box>
                    <Box as="h2" fontSize={{ base: 'lg', md: '2xl' }} fontWeight="400" textAlign="left">
                        {t('Intro')}
                    </Box>
                    <Box as="h2" fontSize={{ base: 'lg', md: '2xl' }} fontWeight="400" mt={5} textAlign="left">
                        {t('Welcome')}
                    </Box>

                    <MotionBox
                        mt={8}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button
                            as="a"
                            href="/AbrahamMoralesCV.pdf"
                            download="AbrahamMoralesCV.pdf"
                            colorScheme="brand"
                            size="lg"
                            leftIcon={<DownloadIcon />}
                            bg={buttonBg}
                            _hover={{ bg: buttonHoverBg, transform: "translateY(-2px)" }}
                            _active={{ transform: "translateY(0)" }}
                            transition="all 0.2s ease"
                        >
                            {t('HeroDownload')}
                        </Button>
                    </MotionBox>
                </MotionFlex>
            </Flex>
        </Container>
    );
};

export default IntroSection;
