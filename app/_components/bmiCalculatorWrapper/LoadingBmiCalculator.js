const Spinner = () => {
	return (
		<>
			<div className='loader' />
			<style jsx>{`
				.loader {
					width: 80px;
					aspect-ratio: 1;
					border-radius: 50%;
					background: radial-gradient(farthest-side, #7c3c8f 94%, #0000)
							top/10px 10px no-repeat,
						conic-gradient(#0000 20%, #7c3c8f);
					-webkit-mask: radial-gradient(
						farthest-side,
						#0000 calc(100% - 10px),
						#000 0
					);
					animation: l13 1.4s infinite linear;
				}
				@keyframes l13 {
					100% {
						transform: rotate(1turn);
					}
				}
			`}</style>
		</>
	);
};

const LoadingBmiCalculator = () => {
	return (
		<div className='absolute inset-0 w-full h-full flex justify-center items-center bg-[rgba(236,218,244,0.50)] rounded-xl'>
			<Spinner />
		</div>
	);
};

export default LoadingBmiCalculator;
