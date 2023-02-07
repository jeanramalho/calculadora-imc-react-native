import React from "react"
import { View, Text, TextInput, Button} from "react-native"

export default function Form() {
    
    return(
        <View>
            <View>
                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 75.385"
                keyboardType="numeric"
                />

                <Button title="Calcular IMC"/>

                <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
                
            </View>
        </View>
    )
}