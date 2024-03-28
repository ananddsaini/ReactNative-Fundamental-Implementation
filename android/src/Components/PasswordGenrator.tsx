import * as Yup from 'yup'; // import { object, string, number, date, InferType } from 'yup';
import {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';

const passwordSchema = Yup.object().shape({
  // inside 'object' we have 'shape' of our schema
  passwordLength: Yup.number() // much similar to mongoose
    .min(6, 'Password length should be minimum of 6 digit')
    .max(16, 'Maximum password length should not exceeds 16 digits')
    .required('Password can not be empty value'),
});
const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const upperCaseLetter = 'ABCDEFGIJKLMNOPQRSTUVWXYZ';
  const lowerCaseLetter='abcdefghijklmnopqrstuvwxyz';

  const generatePasswordString = (
    passwordLength: number, // Taking length of password as argument
  ) => {
    return;
  };
  const createPassword = ( passwordLength: number) => {
    let result = '';
    for (let index = 0; index < passwordLength; index++) {
      result  =result + lowerCaseLetter.charAt( Math.round(Math.random() )*25); //Math.round(2.49)-->2 while Math.round(2.5)-->3
    }

    return result;
  };
  const resetPassword = () => {
    return;
  };

  console.log(upperCaseLetter.charAt(4));
  console.log();

  return (
    <ScrollView keyboardShouldPersistTaps={true}>
      <SafeAreaView>
        <Text style={styles.boxHeading}>Password Generator</Text>
        <Formik
          initialValues={{passwordLength: ''}} // what need to be tracked
          validationSchema={passwordSchema}
          onSubmit={values => {
            // all the values(input text) are inside values
            console.log('This is values: ', values);

          createPassword(Number(values.passwordLength));
          
          
            // generatePasswordString(Number(values.passwordLength));
          }}>
          {/* Below is callback which returns Text input and button tag */}
          {({
            values,
            errors,
            touched,
            handleChange,
            
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <>
              <View>
                <Text style={styles.passwordInputHeader_0}>Enter the Length of Password: </Text>
                {/* write errors */}
                <TextInput
                  style={styles.passwordTextInput_0}
                  onChangeText={handleChange('passwordLength')}
               
                  value={values.passwordLength}
                  placeholder="Example: 8"
                />
              </View>
              <View>
                <Text style={styles.passwordInputHeader_1}>Input Field_1</Text>
                <TextInput
                  style={styles.passwordTextInput_1}
                  onChangeText={handleChange('')}
                  value={values.passwordLength}
                />
              </View>
              <View>
                <Text style={styles.passwordInputHeader_2}>Input Field_2</Text>
                <TextInput
                  style={styles.passwordTextInput_2}
                  onChangeText={handleChange('')}
                  value={values.passwordLength}
                />
              </View>
              <View>
              <TouchableOpacity onPress={()=>(handleSubmit)}><Text>Generate Password</Text></TouchableOpacity>
              </View>
             <Text>This is Password : {password}</Text>

              
              
            </>
          )}
        </Formik>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PasswordGenerator;

const styles = StyleSheet.create({
  boxHeading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  passwordInputHeader_0: {
    fontSize: 20,
    color: '#cd5c5c',
    fontWeight: 'bold',
  },

  passwordTextInput_0: {
    color: 'red',
    width: 200,
    height: 50,
    backgroundColor: '#e0ffff',
    borderRadius: 10,

    margin: 10,
  },
  passwordInputHeader_1: {
    fontSize: 20,
    color: '#cd5c5c',
    fontWeight: 'bold',
  },

  passwordTextInput_1: {
    backgroundColor: '#e0ffff',
    width: 200,
    height: 50,
    margin: 10,
    borderRadius: 10,
  },

  passwordInputHeader_2: {
    fontSize: 20,
    color: '#cd5c5c',
    fontWeight: 'bold',
   
  },
  passwordTextInput_2: {
    backgroundColor: '#e0ffff',
    width: 200,
    height: 50,
    margin: 10,
    borderRadius: 10,
  },
});
