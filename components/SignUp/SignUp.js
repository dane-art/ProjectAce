import React from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';


const SignUp = ({navigation}) => {

    function navigate(){
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.mainView}>  
            <View style={styles.TopView}>
                <Image style={styles.ImageStyle}source={require('../../assets/logo.png')}  ></Image>
            </View>

            <ScrollView style={styles.BottomView}>
                <Text style={styles.Heading}>
                    Primeira vez{'\n'}
                    por aqui?👋
                </Text>

            <View style={styles.FormView}>
                <TextInput placeholder={"Mete aí o teu nome🫵"} placeholderTextColor={"#fff"} style={styles.TextInput} />
                <TextInput placeholder={"Não te enganes no email👮‍♂️"} placeholderTextColor={"#fff"} style={styles.TextInput} />
                <TextInput placeholder={"Número de telémovel📞"} placeholderTextColor={"#fff"} style={styles.TextInput} />
                <TextInput placeholder={"Password JÁ🤫"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput} />
                <TextInput placeholder={"Confirma a Password🤫"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput} />
                    <TouchableOpacity style={styles.Button}>
                            <Text style={styles.ButtonText}>Regista-te</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.TextButton} onPress={navigate}>
                <Text style={styles.SignUpText}>
                    Já tens uma conta?
                </Text>
                </TouchableOpacity>
            </ScrollView>

    </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopView:{
        width: '100%',
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomView:{
        width: '100%',
        height: '75%',
        backgroundColor: '#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    ImageStyle:{
        width: '70%',
        resizeMode: 'contain',
    },
    Heading:{
        color: '#fff',
        fontSize:36,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 50,
 
    },
    FormView:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
    },
    TextInput:{
        width: '90%',
        borderWidth:1,
        borderColor: '#fff',
        height: 52,
        borderRadius:10,
        paddingLeft: 10,
        marginTop: 20,
        color: '#fff',
    },
    Button:{
        width: '90%',
        color: '#000',
        height:52,
        backgroundColor: '#fff', 
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: 20,
        borderRadius:10,
    },
    ButtonText:{
        fontWeight: 'bold',
        fontSize:18,
    },
    SignUpText:{
        color: 'gray',

    },
    TextButton:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,

    }
})

export default SignUp