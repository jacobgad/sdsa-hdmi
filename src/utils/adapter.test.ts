import { describe, test, expect } from 'vitest';
import { setAllPortsOff, setAllToInput } from './adapter';

const alterMiddleConfig =
	'm0=1&m1=4194050&m2=4&m3=8&m4=16&m5=32&m6=64&m7=128&m8=0&m9=0&m10=0&m11=0&m12=0&m13=0&m14=0&m15=0&m16=0&m17=0&m18=0&m19=0&m20=0&m21=0&m22=0&m23=0&m24=0&m25=0&m26=0';

const alterLeftConfig =
	'm0=4194049&m1=2&m2=4&m3=8&m4=16&m5=32&m6=64&m7=128&m8=0&m9=0&m10=0&m11=0&m12=0&m13=0&m14=0&m15=0&m16=0&m17=0&m18=0&m19=0&m20=0&m21=0&m22=0&m23=0&m24=0&m25=0&m26=0';

const offConfig =
	'm0=1&m1=2&m2=4&m3=8&m4=16&m5=32&m6=64&m7=128&m8=0&m9=0&m10=0&m11=0&m12=0&m13=0&m14=0&m15=0&m16=0&m17=0&m18=0&m19=0&m20=0&m21=0&m22=0&m23=0&m24=0&m25=0&m26=0';

describe('Set all to input', () => {
	test('Alter middle config should match known value', () => {
		const config = setAllToInput(2, 'demiana');
		expect(config).toEqual(alterMiddleConfig);
	});

	test('Alter left config should match know value', () => {
		const config = setAllToInput(1, 'demiana');
		expect(config).toEqual(alterLeftConfig);
	});
});

describe('Set all to off', () => {
	test('Should match the known off config', () => {
		const config = setAllPortsOff('demiana');
		expect(config).toEqual(offConfig);
	});
});
