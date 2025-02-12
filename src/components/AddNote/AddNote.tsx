import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

// Styles
import styles from "./AddNote.style";

const AddNote = () => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity 
            onPress={ () => navigation.navigate("DetailScreen") }
            style= { styles.button }>
            <Icon 
                style={ styles.icon } 
                name="add" 
                color="#4F8EF7"  />
        </TouchableOpacity>
    );
}

export default AddNote;