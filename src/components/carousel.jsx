import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardBody, CardFooter, Text, Heading, Button, IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      icon={<FaArrowLeft />}
      isRound
      position="absolute"
      left={2}
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      icon={<FaArrowRight />}
      isRound
      position="absolute"
      right={2}
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <Box width="412px">
      <Slider {...settings}>
        <Card bg="rgba(108,99, 255,0.15)" backdropFilter="blur(30px)" color="#e0e0e0" p="4" borderRadius="12px">
          <CardBody>
            <Text fontSize="lg">View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter as='flex' flexDirection="row">
            <Text fontSize="xl">Rocio Alba</Text>
            <Text fontSize="lg">Senior UX Designer II, Elsevier</Text>
          </CardFooter>
        </Card>
        <Card bg="#1a1a1a" p="4">
          <CardBody>
            <Text fontSize="lg">View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter as='flex' flexDirection="row">
            <Text fontSize="xl">Rocio Alba</Text>
            <Text fontSize="lg">Senior UX Designer II, Elsevier</Text>
          </CardFooter>
        </Card>
        <Card bg="#1a1a1a" p="4">
          <CardBody>
            <Text fontSize="lg">View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter as='flex' flexDirection="row">
            <Text fontSize="xl">Rocio Alba</Text>
            <Text fontSize="lg">Senior UX Designer II, Elsevier</Text>
          </CardFooter>
        </Card>
      </Slider>
    </Box>
  );
};

export default CarouselComponent;
