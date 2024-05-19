import React from 'react';
import { Box, Container, Flex, Text, Image, Button } from '@chakra-ui/react';

import heroImage from '../../../../assets/images/little-lemon-restaurant.jpg';

export const Hero = () => {
	return (
		<Box as='section' className='hero-section' backgroundColor='#495E57'>
			<Container maxW='1180px' padding='80px 10px' margin='0 auto'>
				<Flex flexDir='row' alignItems='center' gap='25px 40px'>
					<Box flexGrow='1'>
						<Text
							as='h1'
							fontSize='48px'
							fontWeight='600'
							lineHeight='1.25'
							color='#F4CE14'
							margin='0'
						>
							Little Lemon
						</Text>

						<Text
							as='h2'
							fontSize='32px'
							fontWeight='500'
							lineHeight='1.25'
							color='#FFF'
							margin='0 0 25px'
						>
							Chicago
						</Text>

						<Text
							as='p'
							fontSize='18px'
							fontWeight='400'
							lineHeight='1.4'
							maxW='550px'
							color='#FFF'
							margin='0 0 25px'
						>
							We are a family-owned mediterranean restaurant,
							focused on traditional recipes seved with a modern
							twist.
						</Text>

						<Button
							fontSize='18px'
							padding='10px 25px'
							borderRadius='8px'
							backgroundColor='#F4CE14'
							cursor='pointer'
						>
							Reserve A Table
						</Button>
					</Box>

					<Box>
						<Image
							width='400px'
							maxW='100%'
							height='400px'
							objectFit='cover'
							borderRadius='12px'
							src={heroImage}
						></Image>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
