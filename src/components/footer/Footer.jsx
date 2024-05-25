import React from 'react';
import { Box, Container, Flex, Text, Image, VStack } from '@chakra-ui/react';

import Logo from '../../assets/images/Logo.svg';

export const Footer = () => {
	return (
		<Box as='section' className='hero-section' backgroundColor='#fafafa'>
			<Container maxW='1180px' padding='80px 10px' margin='0 auto'>
				<Flex
					flexDir='row'
					justifyContent='space-between'
					flexWrap='wrap'
					gap='40px'
				>
					<Box>
						<Image src={Logo} />
					</Box>

					<VStack alignItems='flex-start' padding='10px'>
						<Text
							as='h4'
							fontSize='20px'
							fontWeight='500'
							lineHeight='1.25'
							color='#333'
							margin='0 0 10px'
						>
							Links
						</Text>
						<Text
							as='h6'
							fontSize='16px'
							fontWeight='400'
							lineHeight='1.25'
							color='#333'
							margin='0 0 5px'
						>
							About
						</Text>
						<Text
							as='h6'
							fontSize='16px'
							fontWeight='400'
							lineHeight='1.25'
							color='#333'
							margin='0 0 5px'
						>
							Menu
						</Text>
						<Text
							as='h6'
							fontSize='16px'
							fontWeight='400'
							lineHeight='1.25'
							color='#333'
							margin='0 0 5px'
						>
							Reserve A Table
						</Text>
					</VStack>

					<VStack alignItems='flex-start' padding='10px'>
						<Text
							as='h4'
							fontSize='20px'
							fontWeight='500'
							lineHeight='1.25'
							color='#333'
							margin='0 0 10px'
						>
							Contact
						</Text>
						<Text
							as='h6'
							fontSize='16px'
							fontWeight='400'
							lineHeight='1.25'
							color='#333'
							margin='0 0 5px'
						>
							Phone: +1 234567890
						</Text>
						<Text
							as='h6'
							fontSize='16px'
							fontWeight='400'
							lineHeight='1.25'
							color='#333'
							margin='0 0 5px'
						>
							Email: help@littlelemon.com
						</Text>
					</VStack>

					<VStack alignItems='flex-start' padding='10px'>
						<Text
							as='h4'
							fontSize='20px'
							fontWeight='500'
							lineHeight='1.25'
							color='#333'
							margin='0 0 10px'
						>
							Social Media
						</Text>
						<Text
							as='h6'
							fontSize='16px'
							fontWeight='400'
							lineHeight='1.25'
							color='#333'
							margin='0 0 5px'
						>
							Facebook
						</Text>
						<Text
							as='h6'
							fontSize='16px'
							fontWeight='400'
							lineHeight='1.25'
							color='#333'
							margin='0 0 5px'
						>
							Instagram
						</Text>
						<Text
							as='h6'
							fontSize='16px'
							fontWeight='400'
							lineHeight='1.25'
							color='#333'
							margin='0 0 5px'
						>
							Youtube
						</Text>
					</VStack>
				</Flex>
			</Container>
		</Box>
	);
};
