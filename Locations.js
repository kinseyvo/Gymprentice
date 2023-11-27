import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';

const Locations = ({ route, navigation }) => {
    const context = React.useContext(AppContext);


    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Gym Locations</Text>
            <Text>Current Location: ___________</Text>
            <Button title="Enter Zip Code" />
            <Text> </Text>
            <Text> </Text>
            <Button title="Find Nearby Gyms" />
        <Button title="Find Gyms"/>
        <Text> </Text>
        <Text> </Text>
        <Text>Google Maps API goes here....WIP</Text>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'normal',
      backgroundColor: '#FAFAFA',
      paddingHorizontal: 8,
      paddingVertical: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
      color: '#3344FF',
    },
    header: {
      fontSize: 23,
      marginBottom: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    buttonContainer: {
      marginVertical: 10,
    },
    buttonWrapper: {
      marginVertical: 5,
    },
    touchableView: {
      width: 300,
      height: 300,
      backgroundColor: '#AEEEEE',
      marginBottom: 20,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 16,
    },
    textInput: {
        fontSize: 16,
    },
  });

export default Locations;