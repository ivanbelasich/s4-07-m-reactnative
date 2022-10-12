import Header from "./src/components/Header";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import Welcome from "./src/screens/Welcome";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
    const [Load, setLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 5000);
    }, []);

    if (Load) {
        return <Welcome />;
    }

    return (
        <>
            <Provider store={store}>
                <RootSiblingParent>
                    {/* <Header /> */}
                    <Navigation />
                </RootSiblingParent>
            </Provider>
        </>
    );
}
