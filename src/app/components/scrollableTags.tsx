import { Box, Center, HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


export const tagData = ["Schools", "Hospitals", "Resort Park", "Shopping Malls", "Airport", "Train Station", "NightLife", "Public Wifi", "Parking Lot", "Security", "Public Transport", "Bus Station", "Quiet", "Beaches", "Bars", "Casinos", "Bus Station", "Quiet", "Beaches", "Bars", "Casinos"]


const ScrollableTags = () => {
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);


    const handleHorizontalScroll = (element: any, speed: number, distance: number, step: number) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };

    return (
        <>

            <HStack width={'100%'} gap={'10px'}>

                {
                    !arrowDisable && <Center className="round-icon"
                        onClick={() => {
                            handleHorizontalScroll(elementRef.current, 25, 100, -10);
                        }}>
                        <Icon as={FaChevronLeft}
                            // w={'6px'} 
                            // h={'12px'} 
                            color='#344054' />
                    </Center>
                }

                <div className="tag-container" ref={elementRef} >
                    {tagData.map((item, i) => (
                        <Center key={i} className="tags">{item}</Center>
                    ))}
                </div>

                <Center className="round-icon"
                    onClick={() => {
                        handleHorizontalScroll(elementRef.current, 25, 100, 10);
                    }}>
                    <Icon as={FaChevronRight}
                        // w={'6px'} 
                        // h={'12px'} 
                        color='#344054' />
                </Center>
            </HStack>
        </>
    );
};
export default ScrollableTags;