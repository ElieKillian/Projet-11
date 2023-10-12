import { createSlice } from '@reduxjs/toolkit'
 
const initialState = { token: null, user: null };

const authSlice = createSlice({
    // le nom du slice
    name: 'auth',
    // le state initial
    initialState,
    // reducers permet de définir les actions et le reducer
    reducers: {
        // Connexion
        setLogs: (state, action) => {
            state.token = action
            // console.log('Logstate :',state.token)
        },
        // profil utilisateur
        setUser: (state, action) => {
            state.user = action
            console.log('UserState :',state.user)
        },
        // déconnexion
        disconnect: (state, action) =>{
            state.token = initialState.token;
            state.user = initialState.user;
            // console.log('Logstate :',state.token)
            // console.log('UserState :',state.user)
        }
    },
})

// on extrait les actions et le reducer
const { actions, reducer } = authSlice
// on export chaque action individuellement
export const { setLogs, setUser, modUser, disconnect } = actions
export const selectToken = state => state.token
export const selectUser = state => state.user
// on export le reducer comme default export
export default reducer