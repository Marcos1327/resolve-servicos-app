import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons' 

export default function SignIn() {

    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={500} style={styles.containeForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                placeholder='Digite um email...' 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                >

                </TextInput>

                <Text style={styles.title}>Senha</Text>
                <View style={{ position: 'relative' }}>
                    <TextInput 
                        placeholder='Sua senha' 
                        style={styles.input}
                        secureTextEntry={!passwordVisible}
                        maxLength={32}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity  
                        style={styles.icon}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Ionicons 
                            name={passwordVisible ? "eye-off" : "eye"} 
                            color="#38a69d" 
                            size={25}
                        /> 
                    </TouchableOpacity>
                </View>

                {password.length >= 32 && (
                    <Text style={styles.errorText}>O limite máximo de 32 caracteres foi atingido.</Text>
                )}

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'

    },

    containerHeader: {
       marginTop: '14%',
       marginBottom: '8%',
       paddingStart: '5%', 
    },

    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },

    containeForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title: {
        fontSize: 20,
        marginTop: 28
    },

    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },

    icon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },

    errorText: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },

    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },

    registerText: {
        color: '#a1a1a1'
    }
})