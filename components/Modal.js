import React, { useState } from 'react';
import { Text, View, Button, Modal } from 'react-native';

import styles from '../styles';

function ModalItem(props) {
    const { visible,item, onComplete, onDelete, onCancel } = props;
    return (
        <Modal transparent={false} animationType="slide" visible={visible}>
        <View>
            <Text style={styles.modalTitle}>Descripción</Text>
        </View>
        <View style={styles.modalMessage}>
            <Text style={styles.modalText}>Desea borrar el item?</Text>
        </View>
        <View style={styles.modalMessage}>
            <Text style={styles.modalItem}>{item.value}</Text>
        </View>
        <View style={styles.modalButton}>
            <Button
            title="Completar"
            color="#2BA476"
            onPress={onComplete.bind(this, item.id)}
            />
            <Button
            title="Eliminar"
            color="#B23724"
            onPress={onDelete.bind(this, item.id)}
            />
            <Button
            style={{ margin: 10 }}
            title="Cancelar"
            color="#b0acac"
            onPress={onCancel.bind(this)}
            />
        </View>
        </Modal>
    );
}

export default ModalItem;

