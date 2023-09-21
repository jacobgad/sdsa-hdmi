import { stDemianaPorts, stJohnPorts } from './utils/ports';
import HdmiInput from './components/HdmiInput';
import OffButton from './components/OffButton';

export default function Dashboard() {
	const stDemianaInputs = stDemianaPorts.filter(
		(port) => port.mode === 'input' && port.name
	);
	const stJohnInputs = stJohnPorts.filter(
		(port) => port.mode === 'input' && port.name
	);

	return (
		<main className='container mx-auto max-w-md space-y-12 p-4'>
			<h1 className='text-center text-3xl'>SDSA HDMI System</h1>
			<section className='space-y-6'>
				<h2 className='text-2xl'>Arabic Church</h2>
				<OffButton building='demiana' />

				<div className='grid grid-cols-3 gap-4'>
					{stDemianaInputs.map((port) => (
						<HdmiInput key={port.number} port={port} building='demiana' />
					))}
				</div>
			</section>

			<section className='space-y-6'>
				<h2 className='text-2xl'>English Church</h2>
				<OffButton building='john' />

				<div className='grid grid-cols-3 gap-4'>
					{stJohnInputs.map((port) => (
						<HdmiInput key={port.number} port={port} building='john' />
					))}
				</div>
			</section>
		</main>
	);
}
