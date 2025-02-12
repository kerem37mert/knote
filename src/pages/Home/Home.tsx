import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

// Components
import HomeContiner from "../../components/HomeContainer";
import NoteListContainer from "../../components/NoteListContainer";
import AddNote from "../../components/AddNote";
 
const Home = () => {

    const navigation = useNavigation();

    return(
        <HomeContiner>
            <NoteListContainer />
            <AddNote />
        </HomeContiner>
    );
}

export default Home;