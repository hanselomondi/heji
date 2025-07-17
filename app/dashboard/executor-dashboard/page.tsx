"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, Download, Shield, FileText, Users, Calendar } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function ExecutorDashboardPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleConnectWallet = () => {
    const mockAddress = "0xABCdef123456789"
    setWalletAddress(mockAddress)
    setWalletConnected(true)
  }

  const handleDownloadWill = () => {
    alert("Will document downloaded successfully")
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Executor Dashboard</h1>
            <p className="text-gray-600 mt-2">Access and manage the will as the appointed executor</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      Will Status
                    </span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-medium text-green-900">Death confirmed, will unlocked</p>
                    <p className="text-green-700 text-sm mt-1">The will has been activated and is ready for execution</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Will Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="font-medium">Testator</Label>
                      <p className="text-gray-600">John Smith</p>
                    </div>
                    <div>
                      <Label className="font-medium">Date Created</Label>
                      <p className="text-gray-600">July 16, 2025</p>
                    </div>
                    <div>
                      <Label className="font-medium">Last Updated</Label>
                      <p className="text-gray-600">July 16, 2025</p>
                    </div>
                    <div>
                      <Label className="font-medium">Version</Label>
                      <p className="text-gray-600">2.0</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <Label className="font-medium">Assets</Label>
                    <div className="mt-2 space-y-2">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium">Real Estate</p>
                        <p className="text-sm text-gray-600">Family home at 123 Main St</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium">Financial Assets</p>
                        <p className="text-sm text-gray-600">Investment portfolio worth $500,000</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium">Personal Property</p>
                        <p className="text-sm text-gray-600">Personal belongings and jewelry</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <Label className="font-medium">Beneficiaries</Label>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Mary Smith</p>
                          <p className="text-sm text-gray-600">Spouse</p>
                        </div>
                        <Badge variant="outline">60% of estate</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">John Smith Jr.</p>
                          <p className="text-sm text-gray-600">Son</p>
                        </div>
                        <Badge variant="outline">40% of estate</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Executor Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {walletConnected ? (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Wallet className="h-5 w-5 text-green-600" />
                        <span className="text-green-800 font-medium">Executor wallet {walletAddress}... authenticated</span>
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
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button onClick={handleDownloadWill} disabled={!walletConnected} className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Will
                  </Button>
                  <Button disabled={!walletConnected} variant="outline" className="w-full bg-transparent">
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Probate Documents
                  </Button>
                  <Button disabled={!walletConnected} variant="outline" className="w-full bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Contact Beneficiaries
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Will created - July 16, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Witnesses signed - July 16, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Will activated - Today</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">Probate process - Pending</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Blockchain Network:</span>
                      <span className="font-medium">Ethereum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Smart Contract:</span>
                      <span className="font-medium">Verified ✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Signatures:</span>
                      <span className="font-medium">Complete ✓</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <label className={`text-sm font-medium ${className}`}>{children}</label>
}
