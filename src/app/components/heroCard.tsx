'use client';

import React, { useState } from 'react';
import Image from "next/image";
import {
    Box,
    HStack,
    VStack,
    Text,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { heroCardAvatar } from '@/utils/images';

export interface HeroCardProps {
    id: number,
    name: string,
    duration: string,
    location: string,
    rating: number,
    comment: string,
    thumbsUp: number,
    thumbsDown: number,
    messagesCount: number,
    badgeText: string
}

const HeroCard: React.FunctionComponent<HeroCardProps> = ({
    id,
    name,
    duration,
    location,
    rating,
    comment,
    thumbsUp,
    thumbsDown,
    messagesCount,
    badgeText
}) => {

    const createMarkup = (html: string) => {
        return { __html: html };
    };

    return (
        <Box borderWidth='1px' borderRadius='15px' overflow='hidden' padding={'16px'} className='hero-card'>
            <HStack width={'100%'} justifyContent={'space-between'}>
                <HStack>
                    <Image
                        className="user-avatar"
                        src={heroCardAvatar}
                        alt="User Avatar"
                        width={25}
                        height={25}
                        priority
                    />
                    <VStack gap={0} justifyContent={'left'}>
                        <Text className='card-name'>{name}</Text>
                        <Text className='card-duration'>{duration}</Text>
                    </VStack>
                </HStack>

                <VStack gap={0} justifyContent={'left'}>
                    <Text className='location-text'>
                        {location}
                    </Text>
                    <Box display='flex' alignItems='center' gap={'1px'}>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < rating ? '#FABB07' : '#D1D1D1'}
                                    boxSize={'12px'}
                                />
                            ))}
                    </Box>
                </VStack>
            </HStack>

            {/* <Text className='card-body'>
                {comment}
            </Text> */}

            <div className='card-body' dangerouslySetInnerHTML={createMarkup(comment)} />

            <HStack width={'100%'} justifyContent={'space-between'}>
                <HStack>
                    <HStack>
                        <Image
                            src="/thumbs-up.svg"
                            alt="Thumbs up"
                            width={12.5}
                            height={12.5}
                            priority
                        />
                        <Text className='card-count'>{thumbsUp}</Text>
                    </HStack>
                    <HStack>
                        <Image
                            src="/thumbs-down.svg"
                            alt="Thumbs up"
                            width={12.5}
                            height={12.5}
                            priority
                        />
                        <Text className='card-count'>{thumbsDown < 10 ? 0 + '' + thumbsDown : thumbsDown}</Text>
                    </HStack>
                    <HStack>
                        <Image
                            src="/message.svg"
                            alt="Thumbs up"
                            width={12.5}
                            height={12.5}
                            priority
                        />
                        <Text className='card-count'>{messagesCount}</Text>
                    </HStack>

                </HStack>
                <Text borderColor={'#A07C22'} backgroundColor={'#F5E9CB'} color={'#594510'} className='card-badge'>{badgeText}</Text>
            </HStack>
        </Box>
    )
}

export default HeroCard

