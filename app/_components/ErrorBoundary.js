"use client";

import { useEffect, useState } from "react";

export default function ErrorBoundary({ children }) {
	const [hasError, setHasError] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const handleError = (error) => {
			console.error("Caught in global error boundary:", error);
			setError(error);
			setHasError(true);
		};

		window.addEventListener("error", handleError);
		window.addEventListener("unhandledrejection", (event) =>
			handleError(event.reason)
		);

		return () => {
			window.removeEventListener("error", handleError);
			window.removeEventListener("unhandledrejection", handleError);
		};
	}, []);

	if (hasError) {
		return (
			<div className='min-h-screen flex items-center justify-center bg-gray-100'>
				<div className='bg-white p-8 rounded-lg shadow-md max-w-md w-full'>
					<h2 className='text-2xl font-bold text-red-600 mb-4'>
						Something went wrong
					</h2>
					<p className='text-gray-700 mb-4'>
						We're sorry, but there was an error loading this page.
					</p>
					{error && (
						<div className='bg-gray-100 p-4 rounded mb-4 overflow-auto max-h-40'>
							<pre className='text-sm text-gray-800'>{error.toString()}</pre>
						</div>
					)}
					<button
						onClick={() => {
							setHasError(false);
							setError(null);
							window.location.href = "/";
						}}
						className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
						Go to Home Page
					</button>
				</div>
			</div>
		);
	}

	return children;
}
