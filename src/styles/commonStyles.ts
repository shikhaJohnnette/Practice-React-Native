import {StyleSheet}  from 'react-native';
const  commonStyles = StyleSheet.create ({
     container : {
         flex : 1,
         justifyContent :'center',
         alignItems :'center',
         backgroundColor :'#f5f5f5'
         } ,
     title : {
         fontSize :24,
         fontWeight :'bold',
         color :'#333'
        marginBottom: 16,
       textAlign: "center",

         },
    input : {
        width :'90%',
        height : 50,
        paddingHorizontal :10,
        marginVertical :8,
        borderWidth : 1,
          borderColor: '#ccc',
            borderRadius: 8,
            backgroundColor: '#fff',
        },
  button: {
    marginTop: 16,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

 card: {
        backgroundColor: '#f8f9fa',
        padding: 20, // Adds padding inside the card
        alignSelf: "center", // Ensures the card adjusts to its content and centers itself
  },

    });

export default commonStyles;