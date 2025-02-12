import { useState } from "react";
import { View, TextInput, ScrollView } from "react-native";

// Styles
import styles from "./Edit.style";

const Edit = () => {

    const [note, setNote] = useState("");

    return(
        <View style={ styles.container }> 
            <TextInput
                style= { styles.title }
                placeholder="Başlık"
            />
            <TextInput 
                style={ styles.note}
                value={ note }
                multiline={ true } 
                placeholder="Not"
                onChangeText={value=>setNote(value)}
            /> 
        </View>
    );
}

export default Edit;