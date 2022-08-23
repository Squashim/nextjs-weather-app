import React, { useState } from "react";
import Image from "next/image";

const Weather = ({ data, units }) => {
	return (
		<div className='w-full h-full max-w-[474px] mx-auto px-4 relative my-4 rounded-lg flex flex-col  text-gray-200 z-10'>
			<div className='relative flex justify-center gap-20 sm:justify-between py-12 sm:pb-12 items-center '>
				<div className='flex flex-col items-center'>
					<Image
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt='/'
						width='100'
						height='100'
					/>
					<p className='sm:text-2xl text-xl font-semibold'>
						{data.weather[0].main}
					</p>
				</div>
				<p className='sm:text-9xl text-6xl'>
					{units === "metric"
						? data.main.temp.toFixed(0)
						: ((data.main.temp * 9) / 5 + 32).toFixed(0)}
					{units === "metric" ? "\u00b0C" : "\u00b0F"}
				</p>
			</div>

			<div className='bg-[#121212]/50 relative p-8 rounded-lg sm:mt-12'>
				<p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
				<div className='flex justify-between text-center'>
					<div className='flex flex-col gap-2'>
						<p className='font-bold text-2xl'>
							{units === "metric"
								? data.main.temp.toFixed(0)
								: ((data.main.temp * 9) / 5 + 32).toFixed(0)}
							{units === "metric" ? "\u00b0C" : "\u00b0F"}
						</p>
						<p className='text-sm font-semibold sm:text-xl'>Feels Like</p>
					</div>
					<div className='flex flex-col gap-2'>
						<p className='font-bold text-2xl'>{data.main.humidity}%</p>
						<p className='text-sm font-semibold sm:text-xl'>Humidity</p>
					</div>
					<div className='flex flex-col gap-2'>
						<p className='font-bold text-2xl'>
							{data.wind.speed.toFixed(0)}
							<span className='text-xs '> KM/H</span>
						</p>

						<p className='text-sm font-semibold sm:text-xl'>Winds</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
