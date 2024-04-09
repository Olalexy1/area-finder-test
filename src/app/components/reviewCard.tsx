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
}

const ReviewCard: React.FunctionComponent<HeroCardProps> = ({
    id,
    name,
    duration,
    location,
    rating,
    comment,
    thumbsUp,
    thumbsDown,
    messagesCount
}) => {

    const createMarkup = (html: string) => {
        return { __html: html };
    };

    return (
        <Box overflow='hidden' className='review-card'>
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
                    <HStack gap={'5px'} >
                        <Text className='card-name'>{name}</Text>
                        <Text className='card-duration'>{duration}</Text>
                    </HStack>
                </HStack>

                <HStack gap={'5px'} alignItems={'center'}>
                    <StarIcon
                        color={ '#FABB07'}
                        boxSize={'12px'}
                    />
                    <Text className='card-rating'>{rating}.0</Text>
                </HStack>
            </HStack>


            <div className='card-body' dangerouslySetInnerHTML={createMarkup(comment)} />

            <HStack width={'100%'} justifyContent={'space-between'}>
                <HStack gap={'32px'}>
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
            </HStack>
        </Box>
    )
}

export default ReviewCard;