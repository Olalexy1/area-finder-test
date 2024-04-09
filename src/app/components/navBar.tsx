'use client';
import React, { useState } from 'react';
import Image from "next/image";
import {
    Text,
    Flex,
    HStack,
    InputGroup,
    InputLeftElement,
    Input,
} from '@chakra-ui/react';
import { userAvatar } from '@/utils/images';
import { usePathname } from 'next/navigation';
import { Search2Icon } from '@chakra-ui/icons';

export default function NavBar() {

    const pathname = usePathname()

    // Check the current route
    console.log(pathname, 'see pathname');

    return (
        <nav className="app_navBar">
            <HStack border={'1px solid red'} width={'100%'}>
                <HStack gap={'4px'}>
                    <h2 className='logo-Text'>SPOTTA</h2>
                    <span className='logo-Text-Ng'>NG</span>
                </HStack>

                {pathname === '/reviews' &&
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Search2Icon color='#3366FF' />
                        </InputLeftElement>
                        <Input width={'60%'} borderRadius={'6px'} type='search' placeholder='Enter Address' border={"1px solid #D4DCF1"} background={'#ffffff'}
                            className='input-text' />
                    </InputGroup>
                }

                <HStack gap={'13px'}>
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
            </HStack>
        </nav>
    )
}