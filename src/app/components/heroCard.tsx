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
    badgeText?: string
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
        <Box borderWidth='1px' borderRadius='15px' padding={'16px'} className='hero-card'>
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


            <div className='card-body' dangerouslySetInnerHTML={createMarkup(comment)} />

            <HStack width={'100%'} justifyContent={'space-between'}>
                <HStack>
                    <HStack gap={'4px'}>
                        <Image
                            src="/thumbs-up.svg"
                            alt="Thumbs up"
                            width={12.5}
                            height={12.5}
                            priority
                        />
                        <Text className='card-count'>{thumbsUp}</Text>
                    </HStack>
                    <HStack gap={'4px'}>
                        <Image
                            src="/thumbs-down.svg"
                            alt="Thumbs up"
                            width={12.5}
                            height={12.5}
                            priority
                        />
                        <Text className='card-count'>{thumbsDown < 10 ? 0 + '' + thumbsDown : thumbsDown}</Text>
                    </HStack>
                    <HStack gap={'4px'}>
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

                <Text
                    border={badgeText === 'traffic' ? '1px solid #A07C22' : badgeText === 'network' ? '1px solid  #AD307B' : badgeText === 'power' ? 'none' : badgeText === 'water' ? '#2863B8' : badgeText === 'security' ? '#6A498E' : badgeText === 'road' ? '#B26D22' : ''}
                    backgroundColor={badgeText === 'traffic' ? '#F5E9CB' : badgeText === 'network' ? '#FCDCEF' : badgeText === 'power' ? '#F66A57' : badgeText === 'water' ? '#D1E4FA' : badgeText === 'security' ? '#E4CEFD' : badgeText === 'road' ? '#F3DFCC' : ''}
                    color={badgeText === 'traffic' ? '#594510' : badgeText === 'network' ? '#821958' : badgeText === 'power' ? '#1E1E1E' : badgeText === 'water' ? '#1F4781' : badgeText === 'security' ? '#472270' : badgeText === 'road' ? '#5F380E' : ''}
                    className='card-badge'>{badgeText}
                </Text>
            </HStack>
        </Box>
    )
}

export default HeroCard

