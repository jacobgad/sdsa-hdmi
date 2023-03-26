import type { Building } from '../utils/adapter';
import type { Port } from '../utils/ports';
import { useMutation } from '@tanstack/react-query';
import { getBuildingUrl, setAllToInput } from '../utils/adapter';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface Props {
	port: Port;
	building: Building;
}

function setInput(building: Building, portNumber: Port['number']) {
	return fetch(getBuildingUrl(building), {
		method: 'POST',
		body: setAllToInput(portNumber, building),
		mode: 'no-cors',
		credentials: 'include',
		headers: {
			Authorization: 'Basic ' + btoa('admin:admin'),
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'text/plain',
		},
	});
}

export default function HdmiInput({ port, building }: Props) {
	const { mutate, isLoading } = useMutation(
		() => setInput(building, port.number),
		{
			onSuccess: () => toast.success('Updated'),
			onError: () => toast.error('Error switching input'),
		}
	);

	return (
		<button
			onClick={() => mutate()}
			disabled={isLoading}
			className='grid aspect-video h-full place-items-center rounded bg-blue-700 py-2 px-4 shadow hover:bg-blue-600 active:scale-95 active:shadow-none disabled:scale-100 disabled:bg-gray-600 disabled:shadow-none'
		>
			{isLoading ? (
				<ArrowPathIcon className='h-full animate-spin' />
			) : (
				port.name
			)}
		</button>
	);
}
