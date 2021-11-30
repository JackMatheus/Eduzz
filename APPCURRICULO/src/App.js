import React, { Fragment, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, View, Image, Alert } from 'react-native';
import foto from '/assets/Foto Perfil.PNG';
import Icon from 'react-native-vector-icons/Feather'

const App = () => {


    return (
        <Fragment>

            <View style={style.page}>
                <View style={style.container_cabecalho}>
                    <Image source={foto} style={style.foto} />
                    <Text style={style.nome}>Jackson Chagas</Text>
                    <Text style={style.funcao}>Desenvolvedor Mobile</Text>
                    <Text style={style.empresa}>Buscando novos desafios</Text>
                </View>

                <View style={style.redes_sociais}>
                    <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                        <Icon name="github" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
                        <Icon name="facebook" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                        <Icon name="linkedin" size={30} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Card titulo="Formação Academica">
                        <Text style={style.card_content_text}>ETEC</Text>
                        <Text style={style.card_content_text}>SENAI</Text>
                        <Text style={style.card_content_text}>UNIP</Text>
                    </Card>
                    <Card titulo="Experiencias Profissional">
                        <Text style={style.card_content_text}>SOFT Develop Company</Text>
                        <Text style={style.card_content_text}>AMS</Text>
                        <Text style={style.card_content_text}>ASX Engine</Text>
                    </Card>
                </View>
            </View>



        </Fragment>
    );
};


const style = StyleSheet.create({
    page: {
        backgroundColor: '#E7E7E7',
        flex: 1,
    },
    container_cabecalho: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    foto: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10
    },
    funcao: {
        color: '#939393',
        marginBottom: 10
    },
    empresa: {
        color: '#939393',
        marginBottom: 10
    },
    redes_sociais: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20
    },
    card_content_text: {
        color: '#939393',
        marginBottom: 10
        
    }
})


export default App;