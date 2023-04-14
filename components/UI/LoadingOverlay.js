import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/styles";

function LoadingOverlay() {
    return(
        <View style={styles.constainer}>
            <ActivityIndicator size={'large'}/>
        </View>
    )
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:GlobalStyles.colors.primary800,
    }
})