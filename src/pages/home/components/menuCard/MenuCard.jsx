import React from 'react';
import { Card, CardBody, Image, Heading, Text, Stack } from '@chakra-ui/react';

import './menucard.scss';

export const MenuCard = ({ name, price, desc, image }) => {
	return (
		<Card className='menu-card' border='1px solid #333' borderRadius='12px'>
			<CardBody>
				<Image
					src={image}
					alt={name}
					title={name}
					height='210px'
					width='100%'
					maxW='100%'
					objectFit='cover'
					borderRadius='8px'
				/>
				<Stack spacing='3' padding='20px'>
					<Heading fontSize='24px' fontWeight='600' margin='0'>
						{name}
					</Heading>
					<Text minH='120px'>{desc}</Text>
					<Text fontSize='18px' fontWeight='500'>
						${price}
					</Text>
				</Stack>
			</CardBody>
		</Card>
	);
};
