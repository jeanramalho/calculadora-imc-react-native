import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex: 1,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numberImc:{
        fontSize: 48,
        color: '#ff0043',
        fontWeight: "bold",  
    },
    information:{
        fontSize: 18,
        color: '#ff0043',
        fontWeight: "bold",      
    },
    boxSharebutton:{
        width: "100%",
        alignItems: "center",
        paddingBottom: 0,
    },
    shared:{
        width: "auto",
        height: "auto",
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
        marginVertical: 10,
    },
    sharedText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal:30,
        textAlign: "center",
    },
});

export default styles