import React from "react";
import { View } from "react-native";
import Note from "../Note";

// Style
import styles from "./NoteListContainer.style";
const NoteListContainer = () => {
    return(
        <View style={ styles.container }>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </View>
    );
}

export default NoteListContainer;