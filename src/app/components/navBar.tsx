import React, { useState } from 'react';
import Image from "next/image";
import {
    Text,
    Flex,
    HStack,
} from '@chakra-ui/react';
import { userAvatar } from '@/utils/images';


export default function NavBar() {

    return (
        <nav className="app_navBar">
            <HStack gap={'4px'}>
                <h2 className='logo-Text'>SPOTTA</h2>
                <span className='logo-Text-Ng'>NG</span>
            </HStack>

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
        </nav>
    )
}