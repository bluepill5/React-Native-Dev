import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import styles from '../styles';

function AddItem(props) {
    const [ textItem, setTextItem ] = useState('');
    const { onAddItem } = props;

    const onHandlerChangeItem = (t) => setTextItem(t);
    const onHandlerAddItem = () => {
        setTextItem('');
        onAddItem(textItem);
    }

    return (
        <View style={styles.itemsStyleInput}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
            Lista de Compras
        </Text>
        <TextInput
            style={styles.textInput}
            placeholder="Escribe algo"
            onChangeText={ onHandlerChangeItem }
            value={textItem}
        />
        <Button title="Agregar" onPress={ onHandlerAddItem } color="#d95c0f" />
        </View>
    );
}

export default AddItem;
