import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Building, getBuildingUrl, setAllToInput } from '../utils/adapter';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Port } from '../utils/ports';

interface Props {
	port: Port;
	building: Building;
}

export default function HdmiInput({ port, building }: Props) {
	const { mutate, isLoading } = useMutation(
		() =>
			axios.post(
				getBuildingUrl(building),
				setAllToInput(port.number, building),
				{
					auth: {
						username: 'admin',
						password: 'admin',
					},
				}
			),
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
