import { HStack, VStack, Text, Button, Icon, IconButton, SimpleGrid, Box, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Select, Textarea, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { StarIcon } from '@chakra-ui/icons';
import React from "react";

export default function ModalWithButton() {

    const OverlayTwo = () => (
        <ModalOverlay
            bg="rgba(29, 48, 69, 0.9)"
            backdropFilter='blur(1px)'
            backdropBlur='2px'
            zIndex={99}
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure();

    const ModalOverLay = <OverlayTwo />

    const [filledStars, setFilledStars] = useState(0);

    const handleStarClick = (index: number) => {
        if (index === filledStars - 1) {
            setFilledStars(index);
        } else {
            setFilledStars(index + 1);
        }
    };

    let [value, setValue] = React.useState('')

    let handleInputChange = (e: { target: { value: any; }; }) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    return (
        <>
            <Button
                size='md'
                height='50px'
                width='210px'
                padding='16px, 40px, 16px, 40px'
                border='6px'
                backgroundColor='#3366FF'
                className='review-button'
                onClick={onOpen}
            >
                LEAVE A REVIEW
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} size={'xl'} isCentered>
                {ModalOverLay}
                <ModalContent className="modal-container">

                    <ModalBody>
                        <VStack gap={'10px'} width={'100%'} mb={'24px'}>
                            <Text className="modal-header" alignSelf={'center'}>Review Location</Text>
                            <Text width={"100%"} className="modal-address">Bonny and Clyde Street, Ajao Estate, Lagos</Text>
                        </VStack>

                        <VStack gap={'24px'} width={'100%'}>
                            <VStack width={'100%'}>
                                <Select className="modal-select" placeholder='Select Amenities' backgroundColor={'#F3F7FE'} m={'0px'}>
                                    <option value='option1'>traffic</option>
                                    <option value='option2'>road</option>
                                    <option value='option3'>water</option>
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
                                    value={value}
                                    onChange={handleInputChange}
                                    placeholder='Placeholder'
                                    minHeight={'172px'}
                                />
                            </VStack>

                            <HStack width={'100%'}>
                                <Checkbox className="modal-check" textAlign={'left'} size='sm'>Post as anonymous</Checkbox>
                            </HStack>

                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack width={'100%'} gap={'24px'}>
                            <Button
                                padding='16px, 40px, 16px, 40px'
                                border='6px'
                                isDisabled
                                backgroundColor='#3366FF'
                                colorScheme="customBlue"
                                color={'#FFFFFF'}
                                width={'100%'}
                                onClick={onClose}>SUBMIT</Button>
                            <Button border={'0.5px solid #5378F6'} variant={'outline'} width={'100%'} color={'#3366FF'} onClick={onClose}>CANCEL</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}