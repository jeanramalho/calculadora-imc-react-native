import React, {useState} from "react"
import { View, Text, TextInput, Button} from "react-native"
import ResultImc from "./ResultImc/"

export default function Form() {

const {height, setHeight } = useState(null)
const {Weight, setWeight} = useState(null)
const { messageImc, setMessageImc} = useState("Preencha o peso e altura")
const {imc, setImc} = useState(null)
const {textButtn, setTextButton} = useState("Calcular")

function imcCalculator(){
    return setImc((Weight/(height*height)).toFixed(2))
}
    
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