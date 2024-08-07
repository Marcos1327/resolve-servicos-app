import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import { ButtonLogin } from '../Components/buttonLogin';

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Resolve Serviços
                </Text>

                <TextInput placeholder='Email'
                    keyboardType='email-address'
                    style={styles.input}>
                </TextInput>

                <TextInput placeholder='Password'
                    secureTextEntry
                    style={styles.input}>
                </TextInput>

                <View style={styles.espacoButton}>
                    <ButtonLogin
                        title='avançar'
                    ></ButtonLogin>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },

    text: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 26,
        textAlign: 'center',
        color: 'orange'
    },
    
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 6,
    },

    espacoButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
})