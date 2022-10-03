import { ports } from './ports';

export function setAllPortsOff(): string {
	const values = ports.map((port, idx) => {
		if (port.mode === 'input') return `m${idx}=${port.value}`;
		return `m${idx}=0`;
	});
	const payload = values.join('&');
	return payload;
}

export function setAllToInput(portNumber: number) {
	const outputValueSum = ports.reduce((pre, cur) => {
		if (cur.mode === 'output') return pre + cur.value;
		return pre;
	}, 0);
	const values = ports.map((port, idx) => {
		if (port.mode === 'output') return `m${idx}=0`;
		if (port.number === portNumber)
			return `m${idx}=${port.value + outputValueSum}`;
		return `m${idx}=${port.value}`;
	});
	return values.join('&');
}
