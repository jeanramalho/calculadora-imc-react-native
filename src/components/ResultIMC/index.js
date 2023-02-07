import React from "react"
import { View, Text} from "react-native"
import Form from "../Form"

export default function ResultIMC(props) {
    
    return(
        <View>
            <Text>{props.resultimc}</Text>
            <Text>{props.messageResultImc}</Text>
        </View>
    )
}