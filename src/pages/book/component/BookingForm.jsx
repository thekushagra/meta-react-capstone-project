import React from 'react';
import { useFormik } from 'formik';

import './bookingForm.scss';

export const BookingForm = ({
	setDate,
	availableTimes,
	handleAvailableTimes,
	setGuests,
	setOccasion,
}) => {
	const formik = useFormik({
		initialValues: {
			date: '',
			time: '',
			guests: '',
			occasion: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));

			// setDate(() => values.date);
			// setGuests(() => values.guests);
			// setOccasion(() => values.occasion);
			handleAvailableTimes(values.time);

			console.log(JSON.stringify(values, null, 2));

			// console.log(JSON.stringify(availableTimes, null, 2));
		},
	});

	return (
		<form className='booking-form' onSubmit={formik.handleSubmit}>
			<label htmlFor='firstName'>Choose A Date</label>
			<input
				id='date'
				name='date'
				type='date'
				onChange={formik.handleChange}
				value={formik.values.date}
			/>

			<label htmlFor='time'>Select The Time</label>
			<select
				name='time'
				value={formik.values.time}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			>
				<option value='' label='Date'>
					Date
				</option>
				{availableTimes.map((item) => {
					if (item.booked === false) {
						return (
							<option
								key={item.id}
								value={item.time}
								label={item.time}
							>
								{item.time}
							</option>
						);
					}
				})}
			</select>

			<label htmlFor='guests'>Guests</label>
			<input
				id='guests'
				name='guests'
				type='number'
				onChange={formik.handleChange}
				value={formik.values.guests}
			/>

			<label htmlFor='occasion'>Select The Occasion</label>
			<select
				name='occasion'
				value={formik.values.occasion}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			>
				<option value='' label='Occasion'>
					Occasion
				</option>
				<option value='birthday' label='Birthday'>
					Birthday
				</option>
				<option value='anniversary' label='Anniversary'>
					Anniversary
				</option>
			</select>

			<button type='submit'>Submit</button>
		</form>
	);
};
