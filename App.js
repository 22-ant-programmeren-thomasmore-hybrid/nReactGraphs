import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
    const [slider2Value, setSlider2Value] = useState(0);

    const handleSlider2Change = (value) => {
        setSlider2Value(value);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sliderText}>Slider 1</Text>
            <Slider
                style={styles.slider1}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
            />
            <Text style={styles.sliderText}>Slider 2</Text>
            <Text style={styles.sliderValue}>{slider2Value.toFixed(2)}</Text>
            <Slider
                style={styles.slider2}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#00FF00"
                maximumTrackTintColor="#000000"
                onValueChange={handleSlider2Change}
            />
            <Text style={styles.sliderText}>Slider 3</Text>
            <Slider
                style={styles.slider3}
                minimumValue={-50}
                maximumValue={50}
                minimumTrackTintColor="#0000FF"
                maximumTrackTintColor="#000000"
                inverted={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    sliderText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sliderValue: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    slider1: {
        width: 200,
        height: 40,
        marginBottom: 10,
    },
    slider2: {
        width: 200,
        height: 40,
        marginBottom: 10,
    },
    slider3: {
        width: 200,
        height: 40,
        marginBottom: 10,
    },
});

export default App;
