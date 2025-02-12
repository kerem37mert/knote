import React from "react";
import { View } from "react-native";

// Styles
import styles from "./DetailContainer.style";

interface DetailContainerProps {
    children: React.ReactNode;
}

const DetailContainer = ({ children }: DetailContainerProps) => {
    return(
        <View style={ styles.container }>
             { children }
        </View>
    );
}

export default DetailContainer;