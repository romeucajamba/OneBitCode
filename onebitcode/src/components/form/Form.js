import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Result from "./Result/result";
import styles from "./styles"

export default function Form() {
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function calculator() {
        return setImc(((altura * altura) / peso).toFixed(2))
    }
    function validator() {
        if (peso != null && altura != null) {
            calculator()
            setMessageImc("Seu peso é igual: ")
            setTextButton("Calcular novamente")
            setAltura(null)
            setPeso(null)
            return
        } else {
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
        }
    }
    return (
        <View style={styles.form}>
            <View style={styles.formContext} >
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.formInput}
                    value={altura}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                    onChangeText={setAltura}

                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.formInput}
                    value={peso}
                    placeholder="Ex. 50kg"
                    keyboardType="numeric"
                    onChangeText={setPeso}

                />
                <TouchableOpacity
                    style={styles.buttonCalculator}

                    onPress={() => validator()}
                >
                    <Text style={styles.textCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
                <Result messageResultImc={messageImc} resultImc={imc} />
            </View>
        </View>
    )
}