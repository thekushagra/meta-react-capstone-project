import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

import { MenuCard } from './../../components';
import greekSalad from './../../../../assets/images/greek-salad.jpg';
import lemonDessert from './../../../../assets/images/lemon-dessert.jpg';

const menuItems = [
	{
		name: 'Greek Salad',
		price: '6.99',
		desc: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.',
		image: greekSalad,
	},
	{
		name: 'Lemon Dessert',
		price: '9.99',
		desc: 'A creamy custard like pudding, made with heavy cream, sweetened with sugar, flavored with lemon zest and “curdled” with lemon juice',
		image: lemonDessert,
	},
];

export const Menu = () => {
	return (
		<Box
			as='section'
			className='menu-section'
			id='menu'
			backgroundColor='#FFF'
		>
			<Container maxW='1180px' padding='80px 10px' margin='0 auto'>
				<Box marginBottom='60px'>
					<Text
						as='h2'
						fontSize='32px'
						fontWeight='600'
						lineHeight='1.25'
						color='#333'
					>
						Specials
					</Text>
				</Box>

				<Flex
					flexDir='row'
					alignItems='flex-start'
					justifyContent='flex-start'
					flexWrap='wrap'
					gap='20px'
				>
					{menuItems.map((item) => {
						return (
							<MenuCard
								key={item.name}
								name={item.name}
								price={item.price}
								desc={item.desc}
								image={item.image}
							/>
						);
					})}
				</Flex>
			</Container>
		</Box>
	);
};
