"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleConnectWallet = () => {
    // Mock wallet connection
    const mockAddress = "0x123456789abcdef"
    setWalletAddress(mockAddress)
    setWalletConnected(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Heji System</h1>
          <p className="text-gray-600">Secure Wills with Blockchain</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login to Your Account</CardTitle>
            <CardDescription>Connect your wallet to access the secure will management system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email (for context)</Label>
              <Input
                id="email"
                type="email"
                placeholder="lawyer@lawfirm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {walletConnected ? (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">Wallet {walletAddress}... connected</span>
                </div>
              </div>
            ) : (
              <Button onClick={handleConnectWallet} className="w-full bg-blue-600 hover:bg-blue-700">
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            )}

            {walletConnected && (
              <Button className="w-full" asChild>
                <a href="/create-will">Continue to Dashboard</a>
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
