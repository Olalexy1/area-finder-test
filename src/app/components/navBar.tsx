'use client';
import React, { useState } from 'react';
import Image from "next/image";
import {
    Flex,
    IconButton,
    Box,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Stack,
    HStack,
    Text,
    InputGroup,
    InputLeftElement,
    Input,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { userAvatar } from '@/utils/images';
import { usePathname } from 'next/navigation';
import { Search2Icon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const pathname = usePathname();

    console.log(pathname, ':pathname')

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile, setIsMobile] = useState(false);

    const [searchValue, setSearchValue] = React.useState('');

    const handleInputChange = (event: any) => {
        setSearchValue(event.target.value);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Flex width={'100%'} justify="space-between" align="center" py={'24px'}
            // border={'1px solid red'} 
            background={pathname === '/' ? 'transparent' : ''}
        >
            <Box>
                <IconButton
                    display={{ base: 'block', md: 'none' }}
                    onClick={onOpen}
                    icon={<HamburgerIcon />}
                    aria-label="Open Menu"
                />
            </Box>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <HStack gap={'4px'}>
                            <h2 className='logo-Text'>SPOTTA</h2>
                            <span className='logo-Text-Ng'>NG</span>
                        </HStack>
                    </DrawerHeader>
                    <DrawerBody>
                        <Stack spacing={4} border={'1px solid red'} height={'100%'}>
                            <HStack width={'60%'} marginStart={'42px'}>
                                {pathname === '/reviews' &&
                                    <InputGroup>
                                        <InputLeftElement pointerEvents='none'>
                                            <Search2Icon color='#3366FF' />
                                        </InputLeftElement>
                                        <Input
                                            type='search'
                                            placeholder='Enter Address'
                                            className='input-text'
                                            value={searchValue}
                                            onChange={handleInputChange}
                                        />
                                    </InputGroup>
                                }
                            </HStack>

                            <HStack gap={'13px'} marginEnd="auto">
                                <Text className='welcome-text'>Welcome!</Text>
                                <Image
                                    className="user-avatar"
                                    src={userAvatar}
                                    alt="User Avatar"
                                    width={36}
                                    height={36}
                                    priority
                                />
                            </HStack>

                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Box padding={'0px'} width={'100%'} display={{ base: isMobile ? 'none' : 'block', md: 'block' }}>
                <Stack direction="row" justifyContent={pathname === '/reviews' ? '' : 'space-between'}>
                    <HStack gap={'4px'}>
                        <h2 className='logo-Text'>SPOTTA</h2>
                        <span className='logo-Text-Ng'>NG</span>
                    </HStack>

                    <HStack width={'60%'} marginStart={'42px'}>
                        {pathname === '/reviews' &&
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Search2Icon color='#3366FF' />
                                </InputLeftElement>
                                <Input
                                    type='search'
                                    placeholder='Enter Address'
                                    className='input-text'
                                    value={searchValue}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        }
                    </HStack>

                    <HStack gap={'13px'} marginLeft="auto">
                        <Text className='welcome-text'>Welcome!</Text>
                        <Image
                            className="user-avatar"
                            src={userAvatar}
                            alt="User Avatar"
                            width={36}
                            height={36}
                            priority
                        />
                    </HStack>
                </Stack>
            </Box>
        </Flex>
    );
};

export default Navbar;
