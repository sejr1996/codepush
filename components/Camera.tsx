import React, { PureComponent, useEffect } from 'react';
import CameraRoll from "@react-native-community/cameraroll";
import { RNCamera, TakePictureResponse } from 'react-native-camera';
import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid } from 'react-native';

export default function Camera() {
  let camera: RNCamera | null;

  const requestPermission = async () => {
    const response = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Get Read External Storage Access',
        message: 'get read external storage access for detecting screenshots',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    console.log(response)
  }

  const requestPermission2 = async () => {
    const response = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Get Read External Storage Access',
        message: 'get read external storage access for detecting screenshots',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    console.log(response)
  }

  useEffect(() => {
    console.log(0)
    console.log(1)
    requestPermission();
    console.log(2)
    requestPermission2();
    console.log(3)
  }, []);


  const takePicture = async () => {
    if (camera) {
      const options = { quality: 1, base64: false, width: 5000 };
      const data: TakePictureResponse = await camera.takePictureAsync(options);
      console.log(data.height);
      console.log(data.width);
      console.log(data.uri);
      console.log(1)
      const image = await CameraRoll.save(data.uri, {
        album: 'ALBUM_NAME',
      });
      console.log('image', image);
      console.log(2)
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          camera = ref;
        }}
        captureAudio={false}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }} />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
/* 
export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>

        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          captureAudio={false}
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera!!!',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }} />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAPP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1, base64: false, width: 4000 };
      const data = await this.camera.takePictureAsync(options);
      console.log(options);
      console.log(data);
      console.log(data.height);
      console.log(data.width);
      console.log(data.uri);

      console.log(1)
      const image = await CameraRoll.save(data.uri, {
        album: 'ALBUM_NAME',
      });
      console.log('image', image);
      console.log(2)

    }
  };
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});