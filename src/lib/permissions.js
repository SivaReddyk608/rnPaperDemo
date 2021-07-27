import Permissions, { PERMISSIONS, RESULTS } from 'react-native-permissions'
import { Platform } from 'react-native'

// Used just to check if camera is enabled
export const getCameraPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      if (await Permissions.check(PERMISSIONS.ANDROID.CAMERA) === RESULTS.GRANTED) {
        return true
      }
      return false
    }
    const result = await Permissions.check(PERMISSIONS.IOS.CAMERA)
    if (result === RESULTS.GRANTED) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

export const requestCameraPermission = async () => {
  try {
    const permissions = Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA
    const result = await Permissions.check(permissions)
    if (result === RESULTS.GRANTED) {
      return true
    } if (result === RESULTS.UNAVAILABLE || result === RESULTS.DENIED) {
      const resultRequest = await Permissions.request(permissions)
      if (resultRequest === RESULTS.GRANTED) {
        return true
      }
      return false
    }
    return false
  } catch (error) {
    return false
  }
}

export const getCameraPermissionStatus = async () => {
  try {
    const permissions = Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA
    const result = await Permissions.check(permissions)
    if (result === RESULTS.UNAVAILABLE || result === RESULTS.DENIED) {
      const resultRequest = await Permissions.request(permissions)
      return resultRequest
    }
    return result
  } catch (error) {
    return RESULTS.UNAVAILABLE
  }
}
