"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Wallet, FileText, Shield } from "lucide-react"

export default function WitnessSigningPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [hasReviewed, setHasReviewed] = useState(false)
  const [hasSigned, setHasSigned] = useState(false)

  const handleConnectWallet = () => {
    const mockAddress = "0x789abcdef123456"
    setWalletAddress(mockAddress)
    setWalletConnected(true)
  }

  const handleSign = () => {
    if (!hasReviewed) {
      alert("Please confirm that you have reviewed the will")
      return
    }
    setHasSigned(true)
    alert("Witness signed with wallet 0x789...")
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Witness Signing</h1>
        <p className="text-gray-600 mt-2">Review and sign the will as a witness</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Will Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-4 rounded-lg space-y-2">
            <p className="font-medium text-blue-900">Will for John Smith</p>
            <p className="text-blue-700 text-sm">Created on July 16, 2025</p>
            <p className="text-blue-700 text-sm">Lawyer: Jane Doe</p>
            <p className="text-blue-700 text-sm">Status: Awaiting witness signatures</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Wallet Authentication
          </CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Will Review & Signing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-3">Will Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Testator:</strong> John Smith
              </p>
              <p>
                <strong>Executor:</strong> Jane Doe (executor@email.com)
              </p>
              <p>
                <strong>Primary Beneficiary:</strong> Mary Smith (Spouse)
              </p>
              <p>
                <strong>Assets:</strong> Family home, investment portfolio, personal belongings
              </p>
              <p>
                <strong>Created:</strong> July 16, 2025
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="reviewed"
              checked={hasReviewed}
              onCheckedChange={(checked) => setHasReviewed(checked as boolean)}
            />
            <Label htmlFor="reviewed" className="text-sm">
              I have reviewed the will and confirm its contents
            </Label>
          </div>

          {hasSigned ? (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium">Successfully signed as witness</span>
              </div>
              <p className="text-green-700 text-sm mt-2">Your signature has been recorded on the blockchain.</p>
            </div>
          ) : (
            <Button onClick={handleSign} disabled={!walletConnected || !hasReviewed} className="w-full">
              <Wallet className="mr-2 h-4 w-4" />
              Sign with Wallet
            </Button>
          )}

          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Important Notes:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Your signature will be permanently recorded on the blockchain</li>
              <li>• You are confirming that you witnessed the testator's signature</li>
              <li>• This signature cannot be revoked once submitted</li>
              <li>• Contact the law firm if you have any questions</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
