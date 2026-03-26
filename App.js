"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
// App.tsx
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var auth_1 = require("firebase/auth");
var firebase_1 = require("./src/config/firebase");
var AppNavigator_1 = require("./src/navigation/AppNavigator");
var LoadingScreen_1 = require("./src/screens/LoadingScreen");
function App() {
    var _a = (0, react_1.useState)(null), user = _a[0], setUser = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    (0, react_1.useEffect)(function () {
        var unsubscribe = (0, auth_1.onAuthStateChanged)(firebase_1.auth, function (user) {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    if (loading) {
        return <LoadingScreen_1.default />;
    }
    return (<native_1.NavigationContainer>
      <AppNavigator_1.default user={user}/>
    </native_1.NavigationContainer>);
}
