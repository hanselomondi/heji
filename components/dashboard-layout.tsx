"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "./auth-provider"
import { Button } from "@/components/ui/button"
import { FileText, Users, UserCheck, Edit, Shield, Home, LogOut, User } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Create Will", href: "/dashboard/create-will", icon: FileText },
  { name: "Invite Witnesses", href: "/dashboard/invite-witnesses", icon: Users },
  { name: "Witness Signing", href: "/dashboard/witness-signing", icon: UserCheck },
  { name: "Update Will", href: "/dashboard/update-will", icon: Edit },
  { name: "Executor Dashboard", href: "/dashboard/executor-dashboard", icon: Shield },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-64 bg-blue-900 text-white min-h-screen">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Heji System</h1>
          <p className="text-blue-200 text-sm mt-1">Secure Wills with Blockchain</p>
        </div>

        <nav className="mt-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-800 text-white border-r-2 border-blue-400"
                    : "text-blue-200 hover:bg-blue-800 hover:text-white"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 w-64 p-6 border-t border-blue-800">
          <div className="flex items-center space-x-3 mb-4">
            <User className="h-8 w-8 text-blue-200" />
            <div>
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-blue-200">{user?.email}</p>
            </div>
          </div>
          <Button onClick={logout} variant="ghost" className="w-full text-blue-200 hover:bg-blue-800 hover:text-white">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <main className="flex-1">{children}</main>
    </div>
  )
}
