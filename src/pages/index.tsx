import type { NextPage } from 'next';
import Head from 'next/head';
import HdmiInput from '../components/HdmiInput';
import { setAllPortsOff } from '../utils/adapter';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name='description' content='Generated by create-t3-app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='container mx-auto space-y-12 p-4'>
				<h1 className='text-center text-3xl'>SDSA HDMI System</h1>
				<section className='space-y-6'>
					<h2 className='text-2xl'>Arabic Church</h2>
					<button
						onClick={() => setAllPortsOff()}
						className='w-full rounded bg-red-600 px-4 py-2 shadow transition hover:bg-red-500 active:scale-95 active:shadow-none'
					>
						Turn Off
					</button>

					<div className='grid grid-cols-3 gap-4'>
						<HdmiInput name='Alter Left' portNumber={1} />
						<HdmiInput name='Alter Middle' portNumber={2} />
						<HdmiInput name='Alter Right' portNumber={3} />
						<HdmiInput name='Lectern' portNumber={4} />
						<HdmiInput name='Wierless' portNumber={5} />
					</div>
				</section>

				<section className='space-y-6'>
					<h2 className='text-2xl'>English Church</h2>
					<button
						onClick={() => setAllPortsOff()}
						className='w-full rounded bg-red-600 px-4 py-2 shadow transition hover:bg-red-500 active:scale-95 active:shadow-none'
					>
						Turn Off
					</button>

					<div className='grid grid-cols-3 gap-4'>
						<button className='aspect-video rounded bg-blue-700'>
							Upstairs
						</button>
						<button className='aspect-video rounded bg-blue-700'>
							Downstairs
						</button>
						<button className='aspect-video rounded bg-blue-700'>
							Wierless
						</button>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
