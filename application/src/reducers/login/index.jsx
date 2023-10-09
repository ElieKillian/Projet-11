import { createSlice } from '@reduxjs/toolkit'
 
const authSlice = createSlice({
    // le nom du slice
    name: 'auth',
    // le state initial
    initialState:{ token : null, user : null},
    // reducers permet de définir les actions et le reducer
    reducers: {
        // Connexion et déconnexion
        setLogs: (state, action) => {
            state.token = action
            console.log('Logstate :',state.token)
        },
        // profil utilisateur
        setUser: (state, action) => {
            state.user = action
            console.log('UserState :',state.user)
        },
    },
})

// on extrait les actions et le reducer
const { actions, reducer } = authSlice
// on export chaque action individuellement
export const { setLogs, setUser } = actions
export const selectToken = state => state.token
export const selectIdUser = state => state.user
// on export le reducer comme default export
export default reducer