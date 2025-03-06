import { ref, type Ref } from 'vue'
import useSupabase from './useSupabase'
import type { Provider, Session, User } from '@supabase/supabase-js'

const user: Ref<User | null> = ref(null)

export default function useAuthUser() {
  const { supabase } = useSupabase()

  const loginWithSocialProvider = async (provider: Provider) => {
    try {
      console.log({ start: 1 })
      const data = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: 'http://localhost:5173/dashboard',
        },
      })
      console.log({ data })
      // return data.data.
      alert()
    } catch (error) {
      if (error) throw error
    }
    return
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser()
    if (error) {
      console.log('Error fetching user:', error)
    } else {
      console.log('User deets: ', data.user)
    }
    return data.user
  }

  async function refreshToken(session: Session) {
    const { data, error } = await supabase.auth.refreshSession({
      refresh_token: session.refresh_token,
    })
    if (error) console.log('Error refreshing access token: ', error)
    return data
  }

  function isAccessTokenExpired(session: Session) {
    if (!session || !session.expires_at) return true // No session, assume expired

    const currentTime = Math.floor(Date.now() / 1000) // Current

    return currentTime >= session.expires_at
  }
  const isLoggedIn = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error) return false

    const is_access_token_expired = isAccessTokenExpired(data.session as Session)
    if (!data.session) {
      return false
    }
    if (is_access_token_expired) {
      const refresh_token_response = await refreshToken(data.session as Session)
      if (refresh_token_response.session || refresh_token_response.user) {
        user.value = refresh_token_response.user
      }
    } else {
      user.value = await getUser()
    }

    console.log({ user: user.value })
    alert('user spotted!')
    return true
  }

  return {
    user,
    // login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    // register,
    // update,
    // sendPasswordRestEmail,
    // maybeHandleEmailConfirmation,
  }
}
