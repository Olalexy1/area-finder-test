import React from "react";
import { HStack, VStack, Text, Button, Icon, IconButton, SimpleGrid, Box, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Select, Textarea, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { StarIcon } from '@chakra-ui/icons';
import { tagData } from "./scrollableTags";

const OverlayTwo = () => (
    <ModalOverlay
        bg="rgba(29, 48, 69, 0.9)"
        backdropFilter='blur(1px)'
        backdropBlur='2px'
        zIndex={99}
    />
)

export default function ModalWithButton() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const ModalOverLay = <OverlayTwo />

    const [filledStars, setFilledStars] = useState(0);

    const [formData, setFormData] = useState({ amenities: '', ratings: filledStars, review: '', anonymous: false });

    const { amenities, ratings, review, anonymous } = formData

    const handleStarClick = (index: number) => {
        if (index === filledStars - 1) {
            setFilledStars(index);
        } else {
            setFilledStars(index + 1);
        }
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, ['anonymous']: e.target.checked })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const reviewData = {
            amenities_data: formData.amenities,
            ratings_data: filledStars,
            review_data: formData.review,
            anonymous_data: formData.anonymous
        }

        console.log(reviewData, ": review data")

    }

    return (
        <>
            <Button
                size='md'
                // height='50px'
                width='210px'
                padding='16px, 40px, 16px, 40px'
                border='6px'
                backgroundColor='#3366FF'
                className='review-button'
                onClick={onOpen}
            >
                LEAVE A REVIEW
            </Button>

            <Modal preserveScrollBarGap={true} onClose={onClose} isOpen={isOpen} size={'xl'} isCentered>
                {ModalOverLay}
                <ModalContent className="modal-container">

                    <ModalBody>
                        <VStack gap={'10px'} width={'100%'} mb={'24px'}>
                            <Text className="modal-header" alignSelf={'center'}>Review Location</Text>
                            <Text width={"100%"} className="modal-address">Bonny and Clyde Street, Ajao Estate, Lagos</Text>
                        </VStack>

                        <VStack gap={'24px'} width={'100%'}>
                            <VStack width={'100%'}>
                                <Select className="modal-select" name="amenities" placeholder='Select Amenities' backgroundColor={'#F3F7FE'} m={'0px'} onChange={handleInputChange}>
                                    {
                                        tagData.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))
                                    }
                                </Select>
                            </VStack>

                            <VStack gap={'14px'} alignItems={'flex-start'} width={'100%'}>
                                <Text className="modal-label">Rate Location</Text>
                                <Box display='flex' alignItems='center' gap={'4px'}>
                                    {Array(5)
                                        .fill('')
                                        .map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                color={i < filledStars ? '#FABB07' : '#D1D1D1'}
                                                boxSize={'18px'}
                                                onClick={() => handleStarClick(i)}
                                                cursor={'pointer'}
                                            />
                                        ))}
                                    {/* <p>{filledStars} stars filled</p> */}
                                </Box>
                            </VStack>

                            <VStack gap={'14px'} alignItems={'flex-start'} width={'100%'}>
                                <Text className="modal-label">Write Review</Text>
                                <Textarea
                                    value={review}
                                    name="review"
                                    onChange={handleInputChange}
                                    placeholder='Placeholder'
                                    minHeight={'172px'}
                                />
                            </VStack>

                            <HStack width={'100%'}>
                                <Checkbox
                                    className="modal-check" onChange={(e) => handleCheckboxChange(e)}
                                    textAlign={'left'}
                                    size='sm'>
                                    Post as anonymous
                                </Checkbox>
                            </HStack>

                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <HStack width={'100%'} gap={'24px'}>
                            <Button
                                padding='16px, 40px, 16px, 40px'
                                border='6px'
                                isDisabled={ratings === 0 && review.length === 0}
                                backgroundColor='#3366FF'
                                colorScheme="customBlue"
                                color={'#FFFFFF'}
                                width={'100%'}
                                onClick={handleSubmit}>SUBMIT</Button>
                            <Button border={'0.5px solid #5378F6'} variant={'outline'} width={'100%'} color={'#3366FF'} onClick={onClose}>CANCEL</Button>
                        </HStack>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>

    )
}