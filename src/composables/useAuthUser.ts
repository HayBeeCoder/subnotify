import { ref, type Ref } from 'vue'
import useSupabase from './useSupabase'
import type { Provider, User } from '@supabase/supabase-js'

// user is set outside of the useAuthUser function
// so that it will act as global state and always refer to a single user
const user: Ref<User | null> = ref(null)

export default function useAuthUser() {
  const { supabase } = useSupabase()

  /**
   * Login with email and password
   */
  // const login = async ({ email, password }: { email: string; password: string }) => {
  //   const { user, error } = await supabase.auth.signIn({ email, password })
  //   if (error) throw error
  //   return user
  // }

  /**
   * Login with google, github, etc
   */
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

  /**
   * Logout
   */
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  /**
   * Check if the user is logged in or not
   */
  const isLoggedIn = (): boolean => {
    if (!user.value) {
      supabase.auth.getSession().then(({ data }) => {
        console.log('User session:', data.session)
        return
      })
    }
    return true
  }

  /**
   * Register
   */
  // const register = async ({ email, password, ...meta }) => {}

  /**
   * Update user email, password, or meta data
   */
  // const update = async (data) => {}

  /**
   * Send user an email to reset their password
   * (ie. support "Forgot Password?")
  //  */
  // const sendPasswordRestEmail = async (email) => {}

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
