"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, FileText, Users, History } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"

interface Beneficiary {
  id: string
  name: string
  details: string
}

export default function UpdateWillPage() {
  const [testatorName, setTestatorName] = useState("John Smith")
  const [assets, setAssets] = useState(
    "Family home at 123 Main St, Investment portfolio worth $500,000, Personal belongings and jewelry",
  )
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    { id: "1", name: "Mary Smith", details: "Spouse - 60% of estate" },
    { id: "2", name: "John Smith Jr.", details: "Son - 40% of estate" },
  ])
  const [executorName, setExecutorName] = useState("Jane Doe")
  const [executorEmail, setExecutorEmail] = useState("executor@email.com")
  const [hasUpdated, setHasUpdated] = useState(false)

  const addBeneficiary = () => {
    setBeneficiaries([...beneficiaries, { id: Date.now().toString(), name: "", details: "" }])
  }

  const removeBeneficiary = (id: string) => {
    setBeneficiaries(beneficiaries.filter((b) => b.id !== id))
  }

  const updateBeneficiary = (id: string, field: "name" | "details", value: string) => {
    setBeneficiaries(beneficiaries.map((b) => (b.id === id ? { ...b, [field]: value } : b)))
  }

  const handleUpdateDraft = () => {
    alert("Draft updated successfully")
  }

  const handleSignUpdate = () => {
    setHasUpdated(true)
    alert("Updated will signed by wallet 0x123...")
  }

  const handleInviteNewWitnesses = () => {
    alert("Redirecting to witness invitation for updated will...")
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Update Will</h1>
            <p className="text-gray-600 mt-2">Modify existing will with blockchain security</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <History className="mr-2 h-5 w-5" />
                    Version History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="font-medium text-blue-900">Version 2 (Current Draft)</p>
                      <p className="text-blue-700 text-sm">Being edited now</p>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="font-medium text-gray-700">Version 1</p>
                      <p className="text-gray-600 text-sm">Created July 16, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Will Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="testator">Testator Name</Label>
                    <Input id="testator" value={testatorName} onChange={(e) => setTestatorName(e.target.value)} />
                  </div>

                  <div>
                    <Label htmlFor="assets">Assets</Label>
                    <Textarea id="assets" value={assets} onChange={(e) => setAssets(e.target.value)} rows={4} />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Label>Beneficiaries</Label>
                      <Button onClick={addBeneficiary} size="sm" variant="outline">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Beneficiary
                      </Button>
                    </div>
                    {beneficiaries.map((beneficiary) => (
                      <div key={beneficiary.id} className="border rounded-lg p-4 mb-3">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium">Beneficiary</h4>
                          {beneficiaries.length > 1 && (
                            <Button onClick={() => removeBeneficiary(beneficiary.id)} size="sm" variant="ghost">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input
                            placeholder="Beneficiary Name"
                            value={beneficiary.name}
                            onChange={(e) => updateBeneficiary(beneficiary.id, "name", e.target.value)}
                          />
                          <Input
                            placeholder="Details (relationship, inheritance)"
                            value={beneficiary.details}
                            onChange={(e) => updateBeneficiary(beneficiary.id, "details", e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="executor-name">Executor Name</Label>
                      <Input id="executor-name" value={executorName} onChange={(e) => setExecutorName(e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="executor-email">Executor Email</Label>
                      <Input
                        id="executor-email"
                        type="email"
                        value={executorEmail}
                        onChange={(e) => setExecutorEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Update Status</CardTitle>
                </CardHeader>
                <CardContent>
                  {hasUpdated ? (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">Will Updated ✓</p>
                      <p className="text-green-700 text-sm">Signed with blockchain</p>
                    </div>
                  ) : (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-yellow-800 font-medium">Draft Changes</p>
                      <p className="text-yellow-700 text-sm">Requires signature to save</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button onClick={handleUpdateDraft} variant="outline" className="w-full bg-transparent">
                    Update Draft
                  </Button>
                  <Button
                    onClick={handleSignUpdate}
                    className="w-full"
                    variant={hasUpdated ? "secondary" : "default"}
                    disabled={hasUpdated}
                  >
                    {hasUpdated ? "Updated & Signed ✓" : "Sign with Wallet"}
                  </Button>
                  <Button onClick={handleInviteNewWitnesses} className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Invite New Witnesses
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Change Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <p className="text-gray-600">Changes in this version:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Updated asset valuation</li>
                      <li>• Modified beneficiary percentages</li>
                      <li>• Added new executor contact</li>
                    </ul>
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
