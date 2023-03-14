import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sliderText}>Slider 1</Text>
            <Slider
                style={styles.slider1}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <Text style={styles.sliderText}>Slider 2</Text>
            <Slider
                style={styles.slider2}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#00FF00"
                maximumTrackTintColor="#000000"
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


});

export default App;
