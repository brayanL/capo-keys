import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import { connect } from 'react-redux';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants';
import { closeChordsModal } from '../actions';

class ChordsModal extends Component {
    render() {
        return (
            <Modal
                transparent
                animationType={'fade'}
                visible={this.props.modal.chordsModalIsOpen}
                onRequestClose={() => this.props.closeChordsModal()}
            >
            <View style={styles.modalStyle}>
                <View style={styles.containerStyle}>
                    <View style={styles.buttonContainerStyle}>
                    <Button
                        raised
                        icon={{ name: 'close' }}
                        title="Close"
                        backgroundColor="#2196F3"
                        onPress={() => this.props.closeChordsModal()}
                    /> 
                    <FormLabel>Name</FormLabel>
                    <FormInput />
                    </View>
                </View>
            </View>

            </Modal>
        );
    }
}

const marginPerc = 0.05;
const styles = {
    modalStyle: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    containerStyle: {
      flex: 1,
      marginTop: SCREEN_HEIGHT * marginPerc,
      marginBottom: SCREEN_HEIGHT * marginPerc,
      marginLeft: SCREEN_WIDTH * marginPerc,
      marginRight: SCREEN_WIDTH * marginPerc,
      backgroundColor: 'white'
    },
    buttonContainerStyle: {
      paddingBottom: 10
    }
};

const mapStateToProps = ({ modal, selectedValues, keys }) => ({ modal, selectedValues, keys });

export default connect(mapStateToProps, { closeChordsModal })(ChordsModal);
