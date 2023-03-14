import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
    return (
        <View>
            <Text>Slider 1</Text>
            <Slider
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
            />
        </View>
    );
};


export default App;
