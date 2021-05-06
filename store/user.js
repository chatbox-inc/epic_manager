import {createNamespacedHelpers} from "vuex"

export const authUserMapper = createNamespacedHelpers("user")

export const state = () => {
  return {
    user: null,
    token: null
  }
}

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION() {
    console.log("auth mutation")
  },
  SET_USER(state, { user, token }) {
    state.user = user
    state.token = token
  },
  LOGOUT(state) {
    state.user = null
    state.token = null
  }
}

export const actions = {
  onAuthStateChangedAction(ctx, { authUser }) {
    console.log("auth", authUser)
  },
  onLogin({ commit }, { additionalUserInfo, user, credential }) {
    const userInfo = {
      uid: user.uid,
      name: additionalUserInfo.profile.name,
      email: additionalUserInfo.profile.email,
      login: additionalUserInfo.profile.login
    }
    commit("SET_USER", { user: userInfo, token: credential.accessToken })
  },
  async onLogout({ commit }) {
    await this.$fireModule.auth().signOut()
    commit("LOGOUT")
  }
}
