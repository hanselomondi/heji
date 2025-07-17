"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { useAuth } from "@/components/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, UserCheck, Edit, Shield, Plus, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
            <p className="text-gray-600 mt-2">
              Manage your wills and legal documents securely with blockchain technology.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <Button size="sm" asChild>
                    <Link href="/dashboard/create-will">
                      <Plus className="h-4 w-4 mr-1" />
                      Create
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Create Will</CardTitle>
                <CardDescription>Draft a new will with blockchain security</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Users className="h-8 w-8 text-green-600" />
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/dashboard/invite-witnesses">Invite</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Invite Witnesses</CardTitle>
                <CardDescription>Send secure invitations to witnesses</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Edit className="h-8 w-8 text-orange-600" />
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/dashboard/update-will">Update</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Update Will</CardTitle>
                <CardDescription>Modify existing wills securely</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Shield className="h-8 w-8 text-purple-600" />
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/dashboard/executor-dashboard">View</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Executor Access</CardTitle>
                <CardDescription>Access wills as an executor</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest will management activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="font-medium">Will #123 Created</p>
                        <p className="text-sm text-gray-600">Created for John Smith - 2 hours ago</p>
                      </div>
                      <Clock className="h-4 w-4 text-gray-400" />
                    </div>

                    <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                      <UserCheck className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <p className="font-medium">Witness Signatures Received</p>
                        <p className="text-sm text-gray-600">Will #122 fully executed - 1 day ago</p>
                      </div>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>

                    <div className="flex items-center space-x-4 p-3 bg-orange-50 rounded-lg">
                      <Edit className="h-5 w-5 text-orange-600" />
                      <div className="flex-1">
                        <p className="font-medium">Will #121 Updated</p>
                        <p className="text-sm text-gray-600">Beneficiary changes made - 3 days ago</p>
                      </div>
                      <Clock className="h-4 w-4 text-gray-400" />
                    </div>

                    <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
                      <Users className="h-5 w-5 text-purple-600" />
                      <div className="flex-1">
                        <p className="font-medium">Witnesses Invited</p>
                        <p className="text-sm text-gray-600">Invitations sent for Will #120 - 5 days ago</p>
                      </div>
                      <Clock className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Wills</span>
                    <span className="font-bold text-2xl text-blue-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pending Signatures</span>
                    <span className="font-bold text-2xl text-orange-600">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Completed</span>
                    <span className="font-bold text-2xl text-green-600">9</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">This Month</span>
                    <span className="font-bold text-2xl text-purple-600">4</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Blockchain Network</span>
                      <span className="text-green-600 font-medium">Active ✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Wallet Connected</span>
                      <span className="text-green-600 font-medium">Yes ✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Encryption</span>
                      <span className="text-green-600 font-medium">256-bit ✓</span>
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
