import React, { Fragment, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
//param 1-estado(numero)>>>l11{numero}, funçao(setNumero)>>
    const [numero, setNumero] = useState (0);

//funçao(setNumero)>>
    function handleNumero(){
        const novo_numero = Math.floor(Math.random()*10);
        
        setNumero(numero + novo_numero);
    }

    return (
        <Fragment>
            <SafeAreaView style={style.container}>
                <Text style={style.numero}>{numero}</Text>
                <TouchableOpacity onPress={handleNumero} style={style.botao}>
                    <Text>Gerar número</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Fragment>
    );
};


const style = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 24,
        color: 'FFFFF',
        fontWeight: 'bold'
    },

    botao: {
        backgroundColor: 'gray',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius:5,
        justyfycontent: 'center',
        alignItems: 'center',
        marginTop: 10

    },
});

export default App; 