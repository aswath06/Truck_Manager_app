import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.dashboardtext}>Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dashboardtext: {
        color: "black",
        fontSize: 20,
        fontWeight: "600",
        padding: 10, // Add some padding around the text
       // Optional: To visually check the text block
        width: "100%", // Make the text span the full width
        textAlign: 'left', // Align the text to the left
        marginLeft:10,
    }
});
