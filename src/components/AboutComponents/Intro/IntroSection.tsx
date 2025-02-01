import { Flex, Avatar, Box, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Header from './IntroHeader';
import React from 'react';
import profilePicture from '../../../assets/profilePictureW.webp';
import { useTranslation } from 'react-i18next';

const IntroSection: React.FC = () => {
    const MotionBox = motion(Box);
    const MotionFlex = motion(Flex);
    const ANIMATION_DURATION = 0.5;
    const color = 'brand.300';
    const { t } = useTranslation();


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
                    <MotionBox whileHover={{ scale: 1.05 }} rounded="full" shadow="lg">
                        <Avatar
                            width={{ base: "30vw", md: "20vw", lg: "20vw" }}
                            height={{ base: "30vw", md: "20vw", lg: "20vw" }}
                            showBorder={true}
                            borderColor={'background.50'}
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
                        <MotionBox whileHover={{ translateY: -5 }} width="max-content">
                            <Header underlineColor={color} mt={0} cursor="pointer" width="max-content">
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
                </MotionFlex>
            </Flex>
        </Container>
    );
};

export default IntroSection;
