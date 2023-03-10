import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
    PermissionsAndroid,
} from 'react-native'
 
 
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';
 
 
export default class AddPhoto extends Component {
    options = {
        mediaType: 'photo',
        maxWidth: 800,
        maxHeight: 600
    };
    state = {
        uri: null,
        base64: null,
        comment: '',
    }
     requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'Camera Permission',
                message: 'O aplicativo precisa de permissão para câmera',
              },
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
            return false;
          }
        } else return true;
      };
    
       requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'External Storage Write Permission',
                message: 'App needs write permission',
              },
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
            return false;
          }
        } else return true;
      };
 
    captureImage = async () => {
        
        let isCameraPermitted = await this.requestCameraPermission();
        let isStoragePermitted = await this.requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(this.options, (response) => {
                if (!response.didCancel) {
                    console.log(response)
                    this.setState({ uri: response.assets[0].uri, base64: response.assets[0].data })
                }
            });
        }
    };
 
    pickImage = () => {
        launchImageLibrary(this.options, (response) => {
            if (!response.didCancel) {
                this.setState({ uri: response.assets[0].uri, base64: response.assets[0].data })
            }
        });
    };
 
    save = async () => {
        Alert.alert('Imagem Adicionada', this.state.comment)
    }
 
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: this.state.uri}}
                            style={styles.image} />                            
                    </View>

                    <TouchableOpacity onPress={this.pickImage}
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolher foto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.captureImage}
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Tirar foto</Text>
                    </TouchableOpacity>

                    <TextInput placeholder='Algum comentário para a foto?'
                        style={styles.input} value={this.state.comment}
                        //editable={this.props.name != null}
                        onChangeText={comment => this.setState({ comment })} />

                    <TouchableOpacity onPress={this.save}
                        disabled={this.props.loading}
                        style={[styles.buttom, this.props.loading ? styles.buttonDisabled : null]}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
 
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 30,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 10,
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
    },
    buttonDisabled: {
        backgroundColor: '#AAA'
    }
})
 