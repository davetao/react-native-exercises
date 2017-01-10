import React from 'react';
import { View } from 'react-native';
import { Input, Text } from 'native-base';

const Field = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>
				{label}
			</Text>
			<Input
				style={inputStyle}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	labelStyle: {
		width: 100,
		paddingTop: 8,
		paddingBottom: 8,
		color: '#808080'
	},
	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Field };
