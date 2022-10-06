import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Building, getBuildingUrl, setAllPortsOff } from '../utils/adapter';

interface Props {
	building: Building;
}

function turnOff(building: Building) {
	return fetch(getBuildingUrl(building), {
		method: 'POST',
		body: setAllPortsOff(building),
		mode: 'no-cors',
		credentials: 'include',
		headers: {
			'Authorization': 'Basic ' + Buffer.from('admin:admin').toString('base64'),
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'text/plain',
		},
	});
}

export default function OffButton({ building }: Props) {
	const { mutate, isLoading } = useMutation(()=>turnOff(building),
		{
			onSuccess: () => toast.success('TVs turned off'),
			onError: () => toast.error('Error turning off'),
		}
	);

	return (
		<button
			onClick={() => mutate()}
			disabled={isLoading}
			className='grid w-full place-items-center rounded bg-red-600 px-4 py-2 shadow transition hover:bg-red-500 active:scale-95 active:shadow-none disabled:scale-100 disabled:bg-gray-600 disabled:shadow-none'
		>
			{isLoading ? <ArrowPathIcon className='h-6 animate-spin' /> : 'Turn Off'}
		</button>
	);
}
