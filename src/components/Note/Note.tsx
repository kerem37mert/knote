import { TouchableOpacity, Text } from "react-native";

// Styles
import styles from "./Note.style";

const Note = () => {
    return(
        <TouchableOpacity style={ styles.container }>
            <Text>MyNote</Text>
        </TouchableOpacity>
    );
}

export default Note;