"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Users, UserCheck, Edit, Shield, Home } from "lucide-react"

const navigation = [
  { name: "Login", href: "/", icon: Home },
  { name: "Create Will", href: "/create-will", icon: FileText },
  { name: "Invite Witnesses", href: "/invite-witnesses", icon: Users },
  { name: "Witness Signing", href: "/witness-signing", icon: UserCheck },
  { name: "Update Will", href: "/update-will", icon: Edit },
  { name: "Executor Dashboard", href: "/executor-dashboard", icon: Shield },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
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
    </div>
  )
}
