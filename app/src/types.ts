export enum BarCodeFormat {
	CODE39,
	CODE128,
	CODE128A,
	CODE128B,
	CODE128C,
	EAN13,
	EAN8,
	EAN5,
	EAN2,
	UPC,
	UPCE,
	ITF14,
	ITF,
	MSI,
	MSI10,
	MSI11,
	MSI1010,
	MSI1110,
	pharmacode,
	codabar,
	GenericBarcode
}

type BarCodeFormatType = 'CODE39' | 'CODE128' | 'CODE128A' | 'CODE128B' | 'CODE128C' 
	| 'EAN13' | 'EAN8' | 'EAN5' | 'EAN2' | 'UPC' | 'UPCE' | 'ITF14' | 'ITF' | 'MSI' | 'MSI10' | 'MSI11' | 'MSI1010' | 'MSI1110' 
	| 'pharmacode' | 'codabar' | 'GenericBarcode'

export const BarCodeFormats: Record<BarCodeFormat, { format: BarCodeFormat, code: BarCodeFormatType, name: string }> = {
	[BarCodeFormat.CODE39]: { format: BarCodeFormat.CODE39, code: 'CODE39', name: 'CODE39' },
    [BarCodeFormat.CODE128]: { format: BarCodeFormat.CODE128, code: 'CODE128', name: 'CODE128' },
    [BarCodeFormat.CODE128A]: { format: BarCodeFormat.CODE128A, code: 'CODE128A', name: 'CODE128A' },
    [BarCodeFormat.CODE128B]: { format: BarCodeFormat.CODE128B, code: 'CODE128B', name: 'CODE128B' },
    [BarCodeFormat.CODE128C]: { format: BarCodeFormat.CODE128C, code: 'CODE128C', name: 'CODE128C' },
	[BarCodeFormat.EAN13]: { format: BarCodeFormat.EAN13, code: 'EAN13', name: 'EAN-13' },
	[BarCodeFormat.EAN8]: { format: BarCodeFormat.EAN8, code: 'EAN8', name: 'EAN-8' },
	[BarCodeFormat.EAN5]: { format: BarCodeFormat.EAN5, code: 'EAN5', name: 'EAN-5' },
	[BarCodeFormat.EAN2]: { format: BarCodeFormat.EAN2, code: 'EAN2', name: 'EAN-2' },
	[BarCodeFormat.UPC]: { format: BarCodeFormat.UPC, code: 'UPC', name: 'UPC' },
	[BarCodeFormat.UPCE]: { format: BarCodeFormat.UPCE, code: 'UPCE', name: 'UPCE' },
	[BarCodeFormat.ITF14]: { format: BarCodeFormat.ITF14, code: 'ITF14', name: 'ITF14' },
	[BarCodeFormat.ITF]: { format: BarCodeFormat.ITF, code: 'ITF', name: 'ITF' },
	[BarCodeFormat.MSI]: { format: BarCodeFormat.MSI, code: 'MSI', name: 'MSI' },
	[BarCodeFormat.MSI10]: { format: BarCodeFormat.MSI10, code: 'MSI10', name: 'MSI Mod 10' },
	[BarCodeFormat.MSI11]: { format: BarCodeFormat.MSI11, code: 'MSI11', name: 'MSI Mod 11' },
	[BarCodeFormat.MSI1010]: { format: BarCodeFormat.MSI1010, code: 'MSI1010', name: 'MSI Mod 1010' },
	[BarCodeFormat.MSI1110]: { format: BarCodeFormat.MSI1110, code: 'MSI1110', name: 'MSI Mod 1110' },
	[BarCodeFormat.pharmacode]: { format: BarCodeFormat.pharmacode, code: 'pharmacode', name: 'Pharmacode' },
	[BarCodeFormat.codabar]: { format: BarCodeFormat.codabar, code: 'codabar', name: 'Codabar' },
	[BarCodeFormat.GenericBarcode]: { format: BarCodeFormat.GenericBarcode, code: 'GenericBarcode', name: 'Generic Barcode' },
}
