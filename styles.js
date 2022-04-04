'use strict';
import { StyleSheet } from 'react-native';

const primary_color = "#6f2f94"

styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
      width: "100%",
    },

    // Input Styles
    itemsStyleInput: {
        backgroundColor: "#6f2f94",
        margin: 10,
        padding: 30,
        borderRadius: 20,
        height: "50%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around"
    },

    textInput: {
      borderRadius: 20, 
      borderWidth: 2, 
      width: "100%",
      padding: 9, 
      textAlign: "center", 
      backgroundColor: "white", 
      margin: 5,
    },

    itemsStyle: {
        backgroundColor: primary_color,
        margin: 10,
        padding: 20,
        borderRadius: 20,
        height: "35%",
        width: "100%",
        alignItems: "flex-start",
    },

    itemsStyleInput: {
        backgroundColor: primary_color,
        margin: 10,
        padding: 30,
        borderRadius: 20,
        height: "50%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around"
    },

    textInput: {
      borderRadius: 20, 
      borderWidth: 2, 
      width: "100%",
      padding: 9, 
      textAlign: "center", 
      backgroundColor: "white", 
      margin: 5,
    },

    // List Styles
    textStyle: {
      backgroundColor: primary_color,
      padding: 50,
      margin: 10,
      borderRadius: 20,
      width: "90%",
    },

    listItem: {
      color: "white",
      fontSize: 10,
    },

    // Modal Styles
    modalTitle: {
        padding: 5,
        backgroundColor: "#ccc",
        textAlign: "center",
        color: "white",
        fontSize: 22
      },
  
      modalMessage: {
        flex: 1,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
      },
  
      modalText: {
        fontSize: 20,
        fontWeight: "bold",
      },
  
      modalItem: {
        fontSize: 30,
        textAlign: "center",
      },
  
      modalButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        padding: 16,
        backgroundColor: "orange",
        margin: 15,
        padding: 10,
        borderRadius: 20,
      },
});

export default styles;
