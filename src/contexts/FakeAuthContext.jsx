import { createContext, useReducer } from 'react';

const AuthContext = createContext();
const initialState = {
    user: null,
    isAuthenticated: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload, isAuthenticated: true };
        case 'logout':
            return { ...state, user: null, isAuthenticated: false };
        default:
            throw new Error('Unknown action type');
    }
}

const FAKE_USER = {
    name: 'Vasiliy',
    email: 'vasiliy@example.com',
    password: 'qwerty',
    avatar: 'https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-91.jpg?w=826',
};

function AuthProvider({ children }) {
    const [{ user, isAuthenticated }, dispatch] = useReducer(
        reducer,
        initialState
    );

    function login(email, password) {
        if (email === FAKE_USER.email && password === FAKE_USER.password) {
            dispatch({ type: 'login', payload: FAKE_USER });
        }
    }

    function logout() {
        dispatch({ type: 'logout' });
    }
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
