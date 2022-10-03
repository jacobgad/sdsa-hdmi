import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Building, getBuildingUrl, setAllPortsOff } from '../utils/adapter';

interface Props {
	building: Building;
}

export default function OffButton({ building }: Props) {
	const { mutate, isLoading } = useMutation(
		() =>
			axios.post(getBuildingUrl(building), setAllPortsOff(building), {
				auth: {
					username: 'admin',
					password: 'admin',
				},
			}),
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
