import {StyleSheet} from 'react-native';
// import Signup from './screens/signup';
export const GlobalStyle = StyleSheet.create({
  SearchInput: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  mainScreen: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  mainIcon: {
    width: '10%',
  },
  Signup: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  SignupView: {
    width: '80%',
    borderRadius: 20,
    elevation: 12,
    shadowColor: 'grey',
    overflow: 'hidden',
    backgroundColor: 'white',
    marginVertical: 15,
  },
  SignupInput: {
    padding: 8,
    paddingHorizontal: 20,
    fontSize: 15,
  },
  Button: {
    backgroundColor: '#07ABF1',
    borderRadius: 20,
    padding: 12,
    paddingHorizontal: 40,
    marginVertical: 15,
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 2,
    paddingVertical: 1,
    height: '100%',
    width: '100%'
  },
  heading: {
    paddingVertical: 8,
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 3, height: 5 },
    textShadowRadius: 10
  },
  inputField: {
    width: '85%',
    borderWidth:2,
    borderRadius: 10,
    padding: 0,
    color: 'white',
    borderColor: 'white',
    fontSize: 16,
    paddingHorizontal: 15
  },
  addBtn: {
    width: '10%',
    paddingVertical: 8,
    marginHorizontal: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAllBtn: {
    marginVertical: 10,
    paddingVertical: 8,
    width: '100%',
  },
  todoListView: {
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 5,
    marginHorizontal: 10,
  },
  todoText: {
    paddingTop:5,
    width: '80%',
    color: 'black'
  },
  editAndDelete: {
    width: 25,
    height: 25
  },
  countOrNoCount: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 15,
    fontSize: 20,
    textDecoration: 'underline'
  }

});