import useLocalStorage from '@/composables/useLocalStorage'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const { read, write } = useLocalStorage('subnotify', 'theme')
  const theme = ref(read() || 'light')

  function toggleTheme() {

    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
 
    write(theme.value)
  }
  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    write(newTheme)
  }
  
  function setThemeWithoutLocalStorage(newTheme: 'light' | "dark"){
    theme.value = newTheme
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }
  function initializeTheme() {
    const themeStoredLocally = read()
    theme.value = themeStoredLocally
    document.documentElement.classList.toggle('dark' , theme.value =='dark')
  }

  return {
    toggleTheme,
    setTheme,
    initializeTheme,
    theme,
    setThemeWithoutLocalStorage
  }
})
