import React from 'react';
import { Container, Flex, Box, HStack, Link, Image } from '@chakra-ui/react';

import Logo from '../../assets/images/Logo.svg';

export const Header = () => {
	const navLinks = [
		{
			name: 'Home',
			ref: '#home',
		},
		{
			name: 'Menu',
			ref: '#menu',
		},
		{
			name: 'About',
			ref: '#about',
		},
	];

	return (
		<Box as='header' className='header' padding='10px'>
			<Container maxW='1180px' padding='10px' margin='0 auto'>
				<Flex justifyContent='space-between'>
					<Box className='header-logo'>
						<Image src={Logo}></Image>
					</Box>

					<HStack className='header-navigation'>
						{navLinks.map((item) => {
							return (
								<Box key={item.name} margin='0 15px'>
									<Link
										href={item.ref}
										fontSize='14px'
										fontWeight='500'
										letterSpacing='1px'
										textTransform='uppercase'
										textDecor='none'
										color='#333'
									>
										{item.name}
									</Link>
								</Box>
							);
						})}
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};
