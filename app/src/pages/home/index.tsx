import { useState } from 'react';
import Barcode from 'react-barcode';
import { BarCodeFormat, BarCodeFormats } from '../../types';

export default function HomePage() {
	const [value, setValue] = useState<string>('')
	const [format, setFormat] = useState<BarCodeFormat>(BarCodeFormat.CODE128)

	return <main>
		<h1>Barry</h1>
		<p><input type="text" value={value} onChange={e => setValue(e.target.value)}/></p>
		<p>
			<select value={format} onChange={e => setFormat(parseInt(e.target.value) as BarCodeFormat)}>
				{Object.values(BarCodeFormats).map(f => <option key={f.format} value={f.format}>{f.name}</option>)}
			</select>
		</p>
		<Barcode value={value} format={BarCodeFormats[format].code} />
	</main>
}
