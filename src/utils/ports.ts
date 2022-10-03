interface Port {
	number: number;
	mode: 'input' | 'output' | 'config';
	value: number;
	name: string;
}

export const ports: Port[] = [
	{ number: 1, mode: 'input', value: 1, name: 'Alter Left' },
	{ number: 2, mode: 'input', value: 2, name: 'Alter Middle' },
	{ number: 3, mode: 'input', value: 4, name: 'Alter Right' },
	{ number: 4, mode: 'input', value: 8, name: 'Lecturn' },
	{ number: 5, mode: 'input', value: 16, name: 'Wierless' },
	{ number: 6, mode: 'input', value: 32, name: '' },
	{ number: 7, mode: 'input', value: 64, name: '' },
	{ number: 8, mode: 'input', value: 128, name: '' },
	{ number: 9, mode: 'output', value: 256, name: 'Front Left' },
	{ number: 10, mode: 'output', value: 512, name: 'Front Right' },
	{ number: 11, mode: 'output', value: 1024, name: 'Back Left' },
	{ number: 12, mode: 'output', value: 2048, name: 'Back Right' },
	{ number: 13, mode: 'output', value: 4096, name: 'St John' },
	{ number: 14, mode: 'output', value: 8192, name: 'Hall' },
	{ number: 15, mode: 'output', value: 16384, name: '' },
	{ number: 16, mode: 'output', value: 32768, name: '' },
	{ number: 17, mode: 'output', value: 65536, name: '' },
	{ number: 18, mode: 'output', value: 131072, name: '' },
	{ number: 19, mode: 'output', value: 262144, name: '' },
	{ number: 20, mode: 'output', value: 524288, name: '' },
	{ number: 21, mode: 'output', value: 1048576, name: 'Audio' },
	{ number: 22, mode: 'output', value: 2097152, name: 'Recording PC' },
	{ number: 23, mode: 'config', value: 0, name: '' },
	{ number: 24, mode: 'config', value: 0, name: '' },
	{ number: 25, mode: 'config', value: 0, name: '' },
	{ number: 26, mode: 'config', value: 0, name: '' },
	{ number: 27, mode: 'config', value: 0, name: '' },
];
