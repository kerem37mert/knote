import React from "react";
import { View } from "react-native";

// Styles
import styles from "./HomeContainer.style";

interface HomeContainerProps {
    children: React.ReactNode;
}

const HomeContiner = ({ children }: HomeContainerProps) => {
    return(
        <View style={ styles.container }>
            { children }
        </View>
    );
}

export default HomeContiner;