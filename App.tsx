import {Provider} from "react-redux";
import {store} from './store';
import {Router} from "./components/Navigation";


export default function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}
