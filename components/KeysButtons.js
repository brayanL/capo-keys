import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectKeyIndex } from '../actions';
import { BUTTON_GROUP_STYLES } from '../constants/';

/**
 * connect: Conecta un componente React a un Redux Store.
 * Retorna un nuevo componente conectado para su uso.
 * @argument mapStateToProps(function) => si es especificado el nuevo 
 * componente se subscribira a las actualizaciones de Redux Store. Funcion 
 * que me permite acceder al estado de la aplicacion a traves de props.
 * 1. El resultado de esta funcion debe ser un objeto plano.
 * 2. El primer argumento de esta funcion es el completo Redux Store state
 * 3. Retorna un objeto que sera pasado al props
 * 4. Cada vez que el store es actualizado mapStateToProps sera llamado.
 * 5. La idea principal de mapStateToProps () es aislar qué partes del estado
 *    general necesita este componente en su props.
 * @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md
 */

class KeysButtons extends Component {  
  render() {
    //Obtenemos los valores que vienen del store que fueron previamente mapeados
    //al props en la funcion mapStateToProps.
    const keys = this.props.keys;
    const selectedKeyIndex = this.props.selectedValues.selectedKeyIndex;    
    const keyButtons = keys.map(key => (key.shortKey ? '/' : [key.key]));

    const { containerStyle, buttonStyle, selectedTextStyle } = BUTTON_GROUP_STYLES;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text h3>Key</Text>
        <Text h1 style={{ marginBottom: 2 }}>{keys[selectedKeyIndex].key}</Text>
        <ButtonGroup
          onPress={index => this.props.selectKeyIndex(index)}
          selectedIndex={selectedKeyIndex}
          buttons={keyButtons}
          containerStyle={containerStyle}
          buttonStyle={buttonStyle}
          selectedTextStyle={selectedTextStyle}
        />
      </View>
    );
  }
}

/**
 * El primer argumento de esta funcion que es el state tiene los reducers keys y
 * selectedValues los cuales son asignados a constantes con el mismo nombre y mapeados al props.
 */
const mapStateToProps = ({ keys, selectedValues }) => ({ keys, selectedValues });

/**
 * El segundo parametro de connect es mapDispatchToProps.
 * Si un objeto es pasado cada funcion dentro se asume que es un Redux action creator.
 * En este caso pasamos @param selectKeyIndex el cual es una funcion que dispara una accion.
 */

export default connect(mapStateToProps, { selectKeyIndex })(KeysButtons);
