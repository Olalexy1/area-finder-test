'use client';
import React from 'react';
import Image from "next/image";
import NavBar from "../components/navBar";
import { HStack, VStack, Text, Button, Icon, IconButton, SimpleGrid, Box, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Select } from "@chakra-ui/react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import ScrollableTags from "../components/scrollableTags";
import ReviewCard from "../components/reviewCard";
import { reviewDummyData } from "@/utils/dummyData";
import { galleryImg, galleryImg2, galleryImg3 } from "@/utils/images";
import ModalWithButton from '../components/modal';


export default function Reviews() {

  return (
    <div className="review-page">
      <VStack className='header'>
        <NavBar />
        <HStack width="100%" justifyContent={"space-between"} mt={'82px'}>
          <VStack>
            <Text className="address-text">Bonny and Clyde Street, Ajao Estate, Lagos
            </Text>
            <Text className="address-subtext">
              "450" Reviews <span>(People are raving about the selected location)</span>
            </Text>
          </VStack>
          <HStack gap={'16px'}>

            <ModalWithButton/>

            <IconButton
              size='md'
              variant='outline'
              aria-label='Bookmark'
              borderColor='#3366FF'
              width='56px'
              height='50px'
              color='#3366FF'
              icon={<CiBookmark />}
            />

            <IconButton
              size='md'
              variant='outline'
              aria-label='Share'
              borderColor='#3366FF'
              width='56px'
              height='50px'
              color='#3366FF'
              icon={<CiShare2 />}
            />

            {/* <Icon as={CiShare2} w={'18px'} h={'19.92px'} color='#3366FF' /> */}

          </HStack>
        </HStack>
        <ScrollableTags />
      </VStack>

      <VStack className='review-section'>
        <HStack width={'100%'} alignItems={'flex-start'} justifyContent={'space-between'} gap={'28px'}>
          <VStack className="review-card-container">
            {reviewDummyData.map((item, index) => (
              <React.Fragment key={item.id}>
                <ReviewCard
                  id={item.id}
                  name={item.name}
                  rating={item.rating}
                  comment={item.comment}
                  thumbsUp={item.thumbsUp}
                  thumbsDown={item.thumbsDown}
                  messagesCount={item.messagesCount}
                  duration={item.duration}
                  location={item.location}
                />
                {index !== reviewDummyData.length - 1 && <Divider marginY={'8px'} />}
              </React.Fragment>
            ))}
          </VStack>
          <HStack className="image-container">
            <SimpleGrid columns={2} gap={'5px'} >
              <Image
                className="gallery-img"
                src={galleryImg}
                alt="Gallery Image"
                // width={235}
                // height={224}
                priority
              />

              <Image
                className="gallery-img"
                src={galleryImg2}
                alt="Gallery Image"
                // width={235}
                // height={224}
                priority
              />

              <Image
                className="gallery-img"
                src={galleryImg3}
                alt="Gallery Image"
                // width={235}
                // height={224}
                priority
              />
              <Box className="gallery-img">
                <Image
                  src={galleryImg}
                  alt="Gallery Image"
                  // width={235}
                  // height={224}
                  style={{ borderRadius: '8px' }}
                  priority
                />
              </Box>
            </SimpleGrid>
          </HStack>
        </HStack>
      </VStack>
    </div>
  );
}
