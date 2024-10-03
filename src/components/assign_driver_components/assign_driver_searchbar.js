import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import Bookicon from '../../assets/icons/bookicon';
import SearchIcon from '../../assets/icons/searchicon';
import Filtericon from '../../assets/icons/filtericon';

function Search() {
  const [inputText, setInputText] = useState('');
  return (
    <View>
      <View style={styles.row}>
        <SearchIcon style={styles.icon} />
        <TextInput
          cursorColor={'grey'}
          style={styles.input}
          placeholder="Search drivers"
          placeholderTextColor={'grey'}
          value={inputText}
          onChangeText={text => setInputText(text)}
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.filter}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Filters</Text>
            <Filtericon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 5,
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: 8,
    color: 'black',
  },
  input: {
    paddingVertical: 4,
    paddingLeft: 45,
    width: '55%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    color: 'black',
    alignItems: 'center',
  },
  row: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filter: {
    width: '27%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4721e',
    borderRadius: 50,
  },
});

export default Search;
