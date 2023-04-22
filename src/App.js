import Chat from "./Components/Chat";
import SignIn from "./Components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./Firebase/firebase.js"

function App() {

  const [ user ] = useAuthState(auth)

  return (
    <div className="App">
      { user ? <Chat /> : <SignIn /> }
    </div>
  );
}

export default App;
