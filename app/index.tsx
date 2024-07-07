import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Barcode } from "expo-barcode-generator"

export default function Index() {
	const [barcodeInput, setBarcodeInput] = useState<string>('prova')

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Enter the text you want to encode:</Text>
			<TextInput defaultValue={barcodeInput} onChangeText={newText => setBarcodeInput(newText)} />
			{!!barcodeInput && <Barcode 
				value={barcodeInput} 
				options={{ format: 'CODE128', }} 
				/>}
		</View>
	)
}
