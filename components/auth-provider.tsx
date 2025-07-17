"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  email: string
  name: string
  role: "lawyer" | "client" | "witness" | "executor"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string, role: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("heji-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

    if (email && password) {
      const mockUser: User = {
        id: "1",
        email,
        name: email.split("@")[0],
        role: "lawyer",
      }
      setUser(mockUser)
      localStorage.setItem("heji-user", JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const register = async (email: string, password: string, name: string, role: string): Promise<boolean> => {
    // Mock registration - in real app, this would call an API
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

    if (email && password && name) {
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        role: role as User["role"],
      }
      setUser(mockUser)
      localStorage.setItem("heji-user", JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("heji-user")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
