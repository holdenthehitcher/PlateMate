import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, Picker} from "react-native";
import {Icon} from 'react-native-elements';

type Props = {
    path: any;
    visible: boolean;
    items: string[];
    title: string;
    onClose: () => void;
    onSelect: (value: string) => void;
    value?: string;
};



const HeightInput: React.FC<Props> = ({ 
    path, visible, title, onClose, onSelect}) => {
  
const items = ["1","2","3","4","5","6","7","8"];
  return (
    <Modal animated transparent visible={visible} animationType="fade">
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <View style={styles.header}>
                    <Icon name="close" />
                    <Text>{title || 'Placeholder'}</Text>
                    <Icon name="check" />
                </View>
                <Picker>
                    {items.map(item => <Picker.Item key={item} value={item} label={item} />)}

                </Picker>
            </View>

        </View>


    </Modal>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    pickerContainer: {
        height: 200,
        width: '100%',
        backgroundColor: 'white'
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee'

    }

})

export default HeightInput;
