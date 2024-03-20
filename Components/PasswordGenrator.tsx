import * as Yup from 'yup'; // import { object, string, number, date, InferType } from 'yup';
import {useState} from 'react';
import {Text, TextInput,ScrollView, View,SafeAreaView,TouchableOpacity, StyleSheet} from 'react-native';
import { Formik } from 'formik';

const passwordSchema = Yup.object().shape({
  // inside 'object' we have 'shape' of our schema
  passwordLength: Yup.number() // much similar to mongoose
    .min(6, 'Password length should be minimum of 6 digit')
    .max(16, 'Maximum password length should not exceeds 16 digits')
    .required('Password can not be empty value'),
});
const PasswordGenerator = () => {
  const [password, setPasword] = useState('');
  const [isPasswordGenerated, setPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const upperCaseLetter = 'ABCDEFGIJKLMNOPQRSTUVWXYZ';

  const generatePasswordString = (
    passwordLength: number, // Taking length of password as argument
  ) => {
    return;
  };
  const createPassword = (character: string, passwordLength: number) => {
    let result = '';
    for (let index = 0; index < passwordLength; index++) {
      const characterIndex = Math.round(Math.random() * character.length); //Math.round(2.49)-->2 while Math.round(2.5)-->3
    }

    return;
  };
  const resetPassword = () => {
    return;
  };

  console.log(upperCaseLetter.charAt(4));
  console.log();

  return (
    <ScrollView keyboardShouldPersistTaps={true}>
      <SafeAreaView>
      <Text>Password Generator</Text>
      <Formik
        initialValues={{passwordLength: ''}} // what need to be tracked
        validationSchema={passwordSchema}
        onSubmit={(values) => {
          console.log(values);

          generatePasswordString(+values.passwordLength);
        }}> 
        {/* Below is callback which returns Text input and button tag */}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>

            <TextInput
            style={styles.passwordTextInput}
              onChangeText={handleChange('passwordLength')}
              // onBlur={handleBlur}
              value={values.passwordLength}
              placeholder='Example: 8'
              
            />
            {/* {errors.email && touched.email && errors.email} */}
            <TextInput
              onChangeText={handleChange('passwordLength')}
              onBlur={handleBlur}
              value={values.passwordLength}
              
            />
            <TextInput
            onChangeText={handleChange('passwordLength')}
            onBlur={handleBlur}
            value={values.passwordLength}
          />
            {/* <button type="submit" disabled={isSubmitting}>
              <Text>Submit</Text>
            </button> */}
          
        
        </> ) }
      </Formik>
      </SafeAreaView>
      </ScrollView>
  );
};

export default PasswordGenerator;


const styles = StyleSheet.create({
  passwordTextInput:{
color:'red',
width: 100,
height:40,
backgroundColor:'yellow'

  }



})