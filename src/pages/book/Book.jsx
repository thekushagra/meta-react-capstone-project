import React, { useReducer } from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import { BookingForm } from './component/BookingForm';

export const Book = () => {
	// const [initialAvailableTimes, setInitialAvailableTimes] = useState([]);

	const initialAvailableTimes = [
		{
			id: 1,
			time: '17:00',
			booked: false,
		},
		{
			id: 2,
			time: '18:00',
			booked: false,
		},
		{
			id: 3,
			time: '19:00',
			booked: false,
		},
		{
			id: 4,
			time: '20:00',
			booked: false,
		},
		{
			id: 5,
			time: '21:00',
			booked: true,
		},
	];

	const reducer = (state, action) => {
		switch (action.type) {
			case 'booked':
				return state.map((item) => {
					if (item.time === action.time) {
						return { ...item, booked: !item.booked };
					} else {
						return item;
					}
				});

			default:
				return state;
		}
	};

	const handleAvailableTimes = (item) => {
		dispatch({ type: 'booked', time: item });
	};

	const [availableTimes, dispatch] = useReducer(
		reducer,
		initialAvailableTimes
	);

	// const [date, setDate] = useState('');
	// const [guests, setGuests] = useState('');
	// const [occasion, setOccasion] = useState('');

	return (
		<Box
			as='section'
			className='menu-section'
			id='menu'
			backgroundColor='#495E57'
		>
			<Container maxW='768px' padding='80px 10px 120px' margin='0 auto'>
				<Text
					as='h2'
					fontSize='32px'
					fontWeight='600'
					lineHeight='1.25'
					color='#FFF'
					marginBottom='40px'
				>
					Book A Table
				</Text>

				<Box>
					<BookingForm
						availableTimes={availableTimes}
						handleAvailableTimes={handleAvailableTimes}
					/>
				</Box>
			</Container>
		</Box>
	);
};
