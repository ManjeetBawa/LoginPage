import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
function App() {
  let email: string = '';
  let password = '';
  const emailChecker = () => {
    if (email === '') {
      return Alert.alert('Email cannot be empty');
    }
  };
  const PassChecker = () => {
    if (password === '') {
      return Alert.alert('password too short');
    }
  };
  const submitted = () => {
    if (password === '' && email === '') {
      return Alert.alert('Details not valid');
    } else {
      return Alert.alert('success');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require('./assets/yellow.jpg')}>
        <View style={styles.box}>
          <View style={styles.upperbox}>
            <View style={styles.textbox}>
              <Image style={styles.key} source={require('./assets/Key.png')} />
              <Text style={styles.alltext}>Welcome</Text>
              <Text style={styles.alltext}>Sign in to continue</Text>
            </View>
          </View>
          <View style={styles.lowerbox}>
            <View style={styles.emailPass}>
              <Text style={styles.bodytext}>Email address</Text>
              <TextInput
                style={styles.inputstyle}
                onEndEditing={emailChecker}
                keyboardType="email-address"
                onChangeText={val => {
                  email = val;
                }}
              />
            </View>
            <View style={styles.emailPass}>
              <Text style={styles.bodytext}>Password</Text>
              <View style={styles.iconbox}>
                <TextInput
                  // style={styles.inputstyle}
                  onEndEditing={PassChecker}
                  secureTextEntry={true}
                  onChangeText={val => {
                    password = val;
                  }}
                />
                <TouchableOpacity>
                  <Image
                    style={styles.eyeimage}
                    source={require('./assets/eyeicon.png')}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.bttn} onPress={submitted}>
                <Text style={styles.bttntext}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lowertexts}>
              <TouchableOpacity>
                <Text style={styles.blueclr}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.blueclr}>Forget Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  key: {
    height: 70,
    width: 70,
  },
  bgimage: {
    height: '100%',
    width: '100%',
  },
  box: {
    flex: 1,
  },
  upperbox: {
    flex: 0.5,
    // backgroundColor: 'pink',
  },
  lowerbox: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 0.5,
    backgroundColor: '#F1F1F1',
  },
  textbox: {
    marginTop: '20%',
    marginLeft: '10%',
  },
  alltext: {
    color: '#52575D',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  emailPass: {
    paddingHorizontal: 15,
    paddingTop: 10,
    marginBottom: 10,
  },
  bodytext: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputstyle: {
    marginTop: 5,
    borderWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 10,
  },
  bttn: {
    backgroundColor: '#F6BE00',
    paddingHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
  },
  bttntext: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  lowertexts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  blueclr: {
    color: '#52575D',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  eyeimage: {
    width: 25,
    height: 25,
  },
  iconbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
});

export default App;
