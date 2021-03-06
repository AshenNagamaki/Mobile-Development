import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Mobile Development Project</Text>
            <Text>Author: Maksym Hubenko. IV-72</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
