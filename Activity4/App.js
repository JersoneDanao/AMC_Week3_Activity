import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeTextName] = React.useState('Name: ');
  const [age, onChangeTextAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [number, onChangeContact] = React.useState('Contact Number: ');
  const [value, onChangeText] = React.useState('About ME: ');
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {
            flexDirection: 'column',
            backgroundColor: value,
          },
        ]}>
        <View>
          <Image 
             source={{
            uri:'https://th.bing.com/th/id/OIP.wB1-UZe25zVF7YE6yRA2iwHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7',
            }}
            style={{width: 80, height: 80, margin: 7}}
          />
          <Image 
             source={{
            uri:'https://images4.alphacoders.com/900/900765.png',
            }}
            style={{width: 80, height: 80, margin: 7}}
          />
          <Image 
             source={{
            uri:'https://images5.alphacoders.com/946/946182.png',
            }}
            style={{width: 80, height: 80, margin: 7}}
          />
          <Image 
             source={{
            uri:'https://tse1.explicit.bing.net/th/id/OIP.luFvMDC1U_PnBt5QH1mr_wAAAA?rs=1&pid=ImgDetMain',
            }}
            style={{width: 80, height: 80, margin: 7}}
          />
          <Image 
             source={{
            uri:'https://storage.qoo-img.com/cimg/note/2023/06/21/6d6dbd0e7b387e7c647f4029afb3fa34.jpg',
            }}
            style={{width: 80, height: 80, margin: 7}}
          />
          <Image 
             source={{
            uri:'https://image-cf.kddi-video.com/c17/c17709b93ed728cedeea539a853fcd2e/fit-background-transparent/1547665444/750x422.png',
            }}
            style={{width: 80, height: 80, margin: 7}}
          />
          <Image 
             source={{
            uri:'https://i.pinimg.com/originals/88/92/d2/8892d231c763084bebb3369a317ddca7.jpg',
            }}
            style={{width: 80, height: 80, margin: 7}}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextName}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextAge}
          value={age}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={number}
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
  },
});

export default TextInputExample;