import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    button: {
        backgroundColor: "lightgreen",
        position: "absolute",
        bottom: height - height*0.95,
        right: width - width*0.95,
        borderRadius: 20,
        padding: 5
    },

    icon: {
        fontSize: Math.min(width, height) * 0.08,
        color: "white"
    }
});