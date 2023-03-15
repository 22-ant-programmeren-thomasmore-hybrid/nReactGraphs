import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
    const [sliderValue, setSliderValue] = useState(0);
    const [slider4Klaar, setSlider4Klaar] = useState(false);

    const onSlider4Complete = () => {
        setSlider4Klaar(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sliderText}>Basic slider</Text>
            <Slider
                style={styles.slider1}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
            />

            <Text style={styles.sliderText}>Slider en haar waarde</Text>
            <Text style={styles.sliderValueText}>{sliderValue.toFixed(2)}</Text>
            <Slider
                style={styles.slider2}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#00FF00"
                maximumTrackTintColor="#000000"
                onValueChange={(value) => setSliderValue(value)}
            />

            <Text style={styles.sliderText}>Inverted slider</Text>
            <Slider
                style={styles.slider3}
                minimumValue={-50}
                maximumValue={50}
                minimumTrackTintColor="#0000FF"
                maximumTrackTintColor="#000000"
                inverted={true}
            />

            <Text style={styles.sliderText}>Een malige slider</Text>
            {slider4Klaar ? (
                <Text style={styles.completedText}>Goed gedaan!</Text>
            ) : (
                <Slider
                    style={styles.slider4}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FF0000"
                    maximumTrackTintColor="#000000"
                    onSlidingComplete={() => onSlider4Complete()}
                />
            )}

        </View>
    );
}

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
    sliderValueText: {
        fontSize: 16,
        marginBottom: 10,
    },
    completedText: {
        fontSize: 16,
        color: '#00FF00',
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
    slider4: {
        width: 200,
        height: 40,
        marginBottom: 10,
    },
});
