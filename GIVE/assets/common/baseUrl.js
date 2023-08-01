import { Platform } from "react-native";

let baseURL = "";

if (Platform.OS === "android") {
   baseURL = 'http://10.0.2.2:8000/api/v1/';         // Android emulator
  // baseURL = "http://192.168.177.120:8000/api/v1/"; // Physical device (change "192.168.246.126" with your ip address )
} else {
  baseURL = "http://localhost:8000/api/v1/"; //localhost
}
export default baseURL;
