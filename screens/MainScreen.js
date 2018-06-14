//importtar librerias para hacer un componente
import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import Expo from 'expo';
import icon from '../assets/icons/pure-icon.png';
import KeysButtons from '../components/KeysButtons';
import CapoButtons from '../components/CapoButtons';
import CapoKey from '../components/CapoKeys';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });

//Hacer un Componente
class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Capo Keys',
        headerStyle: {
            height: Platform.OS === 'android' ? 35 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
          },
          headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
          },
          headerLeft: <Image source={icon} style={styles.imageStyle} />
      });

    state = {
        appIsReady: false
    }

    componentWillMount() {
        this.loadAssetsAsync();
    }

    async loadAssetsAsync() {
        const imageAssets = cacheImages([icon]);
        await Promise.all([...imageAssets]);
        this.setState({ appIsReady: true });
    }

    render() {
        const { containerStyle, dividerStyle } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd' }}>        
                <View style={containerStyle}>
                    <KeysButtons />
                    <Divider style={dividerStyle} />
                    <CapoButtons />
                    <Divider style={dividerStyle} />
                    <CapoKey />
                </View>
            </View>
        );        
    }
}

const styles = {
    imageStyle: {
      marginTop: 20,
      marginLeft: 10,
      width: 40,
      height: 40
    },
    containerStyle: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    dividerStyle: {
      width: SCREEN_WIDTH * 0.9,
      backgroundColor: '#2196F3'
    }
  };

//Hacer el componente disponible para otras partes de la aplicación.
export default MainScreen;
