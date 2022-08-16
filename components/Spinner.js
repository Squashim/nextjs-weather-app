import React from "react";
import spinner from "../public/spinner.gif";

const Spinner = () => {
	return (
		<>
			<Image alt='loading' src={spinner} className='w-[200px] m-auto block' />
		</>
	);
};

export default Spinner;
