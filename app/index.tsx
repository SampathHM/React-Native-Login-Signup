import { View } from "react-native"
import LoginView from "./Login&Signup/LoginView"
import SignupView from "./Login&Signup/SignupView"

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {<LoginView />}
      {/*<SignupView />*/}
    </View>
  )
}