import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setAllToInput } from '../utils/adapter';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

interface Props {
	name: string;
	portNumber: number;
}

export default function HdmiInput({ name, portNumber }: Props) {
	const { mutate, isLoading } = useMutation(
		() =>
			axios.post(
				'http://192.168.168.100/cgi/cam_vlan.cgi',
				setAllToInput(portNumber),
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
			className='grid aspect-video h-full place-items-center rounded bg-blue-700 py-2 px-4 shadow hover:bg-blue-600 active:scale-95 active:shadow-none disabled:bg-gray-600 disabled:shadow-none'
		>
			{isLoading ? <ArrowPathIcon className='h-full animate-spin' /> : name}
		</button>
	);
}
