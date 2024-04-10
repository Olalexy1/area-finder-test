'use client';

import React, { useState } from 'react';
import Image from "next/image";
import {
    Text,
    VStack,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    SimpleGrid,
    Box,
    HStack
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import HeroCard from './heroCard';
import { reviewDummyData } from '@/utils/dummyData';

export default function HeroSection() {
    return (
        <div className='app_heroSection'>
            <VStack alignItems="left" className='hero-text-container'>
                <VStack width={'60%'} className='hero-text-inner-container' alignItems="left">
                    <Text className='hero-title-text'>Find a place you will love to live!
                    </Text>
                    <Text className='hero-subtitle-text'>
                        See through the lenses of people who have
                        lived or visited the neighborhood you might
                        have in mind.
                    </Text>
                </VStack>

                <HStack width={'calc(60% + 40px)'}>
                    <InputGroup marginStart={'1px'}>
                        <InputLeftElement pointerEvents='none'>
                            <Search2Icon color='#0D2159' />
                        </InputLeftElement>
                        <Input type='search' placeholder='Enter Address' border={"1px solid #D4DCF1"} background={'#F3F7FE'} marginBottom={'10px'}
                            className='input-text' />
                    </InputGroup>
                </HStack>

                <Button
                    size='md'
                    // height='50px'
                    width='146px'
                    padding='16px, 40px, 16px, 40px'
                    border='6px'
                    backgroundColor='#3366FF'
                    className='search-button'
                >
                    SEARCH
                </Button>
            </VStack>

            <Box>
                <SimpleGrid columns={2} gap={'22px'} width={'556px'} height={'100%'}
                    className='hero-card-container'
                >
                    {
                        reviewDummyData.map((item,) => (
                            <HeroCard id={item.id} name={item.name} rating={item.rating} comment={item.comment} thumbsUp={item.thumbsUp} thumbsDown={item.thumbsDown} messagesCount={item.messagesCount} badgeText={item.badgeText} duration={item.duration} location={item.location} />
                        ))
                    }

                </SimpleGrid>
            </Box>


        </div>
    )
}