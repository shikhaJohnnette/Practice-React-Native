
import React , {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, View , Alert  } from 'react-native';
import {TextInput , Button  ,Card , Title , Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import commonStyles from 'src/styles/commonStyles.ts';


const LoginPage = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigation = useNavigation();


    const handleLogin = () => {
        if(!email || !password) {
    Alert.alert("Error" , "Please fill in all field")
            }else {
    Alert.alert("Success" , `Welcome , ${email}`);
                }
            navigation.navigate('HomePage')
        };

return (
    <View style = {commonStyles.container}>
    <Card style ={commonStyles.card} >
    <Card.Content>
 <TextInput
    label ="Email"
    value = { email }
     onChangeText={(text) => setEmail(text)}
    style={commonStyles.input}
    keyboardType="email-address"
    mode="outlined"/>

 <TextInput
  label="Password"
 value={password}
 onChangeText={(text) => setPassword(text)}
 style={commonStyles.input}
 secureTextEntry
mode="outlined"/>

           <Button
             mode="fill"
             onPress={handleLogin}
             style={commonStyles.button}
             contentStyle={styles.buttonContent}>
             Login
           </Button>



      </Card.Content>
     </Card>
    </View>
    );

    };
// end of loginFunction




