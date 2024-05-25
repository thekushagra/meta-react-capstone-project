import React from 'react';
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';

import aboutImage from '../../../../assets/images/about-restaurant.jpg';

export const About = () => {
	return (
		<Box
			as='section'
			className='about-section'
			id='about'
			backgroundColor='#495E57'
		>
			<Container maxW='1180px' padding='80px 10px' margin='0 auto'>
				<Flex
					flexDir='row'
					flexWrap='wrap'
					alignItems='center'
					gap='25px 40px'
				>
					<Box>
						<Image
							width='550px'
							maxW='100%'
							height='400px'
							objectFit='cover'
							borderRadius='12px'
							src={aboutImage}
						></Image>
					</Box>

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
							Welcome to Little Lemon, your Mediterranean oasis!
							Enjoy authentic flavors crafted from fresh, local
							ingredients. From succulent grilled meats to
							flavorful vegetarian dishes, every bite celebrates
							the vibrant Mediterranean spirit.
						</Text>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
