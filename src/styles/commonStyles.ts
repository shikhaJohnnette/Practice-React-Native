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

    });

export default commonStyles;