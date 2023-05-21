import { Platform } from "react-native";

let baseURL = '';

if (Platform.OS === 'android') {
  baseURL = 'http://192.168.246.126:8000/api/v1/';
} else {
  baseURL = 'http://localhost:8000/api/v1/';
}

export default baseURL;
