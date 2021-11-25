import React, { useEffect } from 'react'
import { SafeAreaView, PermissionsAndroid } from 'react-native'
import CodePush from 'react-native-code-push'
import Camera from './components/Camera';

function App() {

  return (
    <>‍
      <SafeAreaView style={{ flex: 1 }}>‍
        <Camera />‍
      </SafeAreaView>‍
    </>
  )
}

const CODEPUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START
}

//export default CodePush(CODEPUSH_OPTIONS)
export default CodePush(CODEPUSH_OPTIONS)(App)
