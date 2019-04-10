/**
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

type Props = {};

type State = {};

export default class App extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		return <View style={styles.container} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
});
