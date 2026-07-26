"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Load saved user from localStorage only after mount (avoids
  // server/client mismatch errors that Next.js is strict about).
  useEffect(() => {
    const saved = localStorage.getItem("habesha_user")
    if (saved) setUser(JSON.parse(saved))
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem("habesha_user", JSON.stringify(user))
    } else {
      localStorage.removeItem("habesha_user")
    }
  }, [user])

  function login(email, password) {
    // FAKE auth — accepts anything, no real check yet.
    // Replaced with a real API call once the backend exists.
    setUser({ name: email.split("@")[0], email })
    return { success: true }
  }

  function register(name, email, password) {
    setUser({ name, email })
    return { success: true }
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
