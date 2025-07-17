"use client"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, FileText, Users } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"

interface Beneficiary {
  id: string
  name: string
  details: string
}

interface Guardian {
  id: string
  name: string
  details: string
}

export default function CreateWillPage() {
  const [testatorName, setTestatorName] = useState("")
  const [assets, setAssets] = useState("")
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([{ id: "1", name: "", details: "" }])
  const [executorName, setExecutorName] = useState("")
  const [executorEmail, setExecutorEmail] = useState("")
  const [guardians, setGuardians] = useState<Guardian[]>([])
  const [testatorSigned, setTestatorSigned] = useState(false)
  const [lawyerSigned, setLawyerSigned] = useState(false)

  const addBeneficiary = () => {
    setBeneficiaries([...beneficiaries, { id: Date.now().toString(), name: "", details: "" }])
  }

  const removeBeneficiary = (id: string) => {
    setBeneficiaries(beneficiaries.filter((b) => b.id !== id))
  }

  const updateBeneficiary = (id: string, field: "name" | "details", value: string) => {
    setBeneficiaries(beneficiaries.map((b) => (b.id === id ? { ...b, [field]: value } : b)))
  }

  const addGuardian = () => {
    setGuardians([...guardians, { id: Date.now().toString(), name: "", details: "" }])
  }

  const removeGuardian = (id: string) => {
    setGuardians(guardians.filter((g) => g.id !== id))
  }

  const updateGuardian = (id: string, field: "name" | "details", value: string) => {
    setGuardians(guardians.map((g) => (g.id === id ? { ...g, [field]: value } : g)))
  }

  const handleTestatorSign = () => {
    setTestatorSigned(true)
    alert("Signed by wallet 0x123...")
  }

  const handleLawyerSign = () => {
    setLawyerSigned(true)
    alert("Signed by lawyer wallet 0x456...")
  }

  const handleSaveDraft = () => {
    alert("Draft saved successfully")
  }

  const handleInviteWitnesses = () => {
    alert("Redirecting to witness invitation...")
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Create New Will</h1>
            <p className="text-gray-600 mt-2">Draft a new will with blockchain security</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
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
                    <Input
                      id="testator"
                      value={testatorName}
                      onChange={(e) => setTestatorName(e.target.value)}
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <Label htmlFor="assets">Assets</Label>
                    <Textarea
                      id="assets"
                      value={assets}
                      onChange={(e) => setAssets(e.target.value)}
                      placeholder="List all assets including property, investments, personal belongings..."
                      rows={4}
                    />
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
                      <Input
                        id="executor-name"
                        value={executorName}
                        onChange={(e) => setExecutorName(e.target.value)}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="executor-email">Executor Email</Label>
                      <Input
                        id="executor-email"
                        type="email"
                        value={executorEmail}
                        onChange={(e) => setExecutorEmail(e.target.value)}
                        placeholder="executor@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Label>Guardians (Optional)</Label>
                      <Button onClick={addGuardian} size="sm" variant="outline">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Guardian
                      </Button>
                    </div>
                    {guardians.map((guardian) => (
                      <div key={guardian.id} className="border rounded-lg p-4 mb-3">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium">Guardian</h4>
                          <Button onClick={() => removeGuardian(guardian.id)} size="sm" variant="ghost">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input
                            placeholder="Guardian Name"
                            value={guardian.name}
                            onChange={(e) => updateGuardian(guardian.id, "name", e.target.value)}
                          />
                          <Input
                            placeholder="Details (relationship, responsibilities)"
                            value={guardian.details}
                            onChange={(e) => updateGuardian(guardian.id, "details", e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lawyer Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label>Lawyer</Label>
                      <Input value="Jane Doe" disabled />
                    </div>
                    <Button
                      onClick={handleLawyerSign}
                      className="w-full"
                      variant={lawyerSigned ? "secondary" : "default"}
                      disabled={lawyerSigned}
                    >
                      {lawyerSigned ? "Lawyer Signed ✓" : "Lawyer Sign"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button onClick={handleSaveDraft} variant="outline" className="w-full bg-transparent">
                    Save Draft
                  </Button>
                  <Button
                    onClick={handleTestatorSign}
                    className="w-full"
                    variant={testatorSigned ? "secondary" : "default"}
                    disabled={testatorSigned}
                  >
                    {testatorSigned ? "Signed with Wallet ✓" : "Sign with Wallet"}
                  </Button>
                  <Button onClick={handleInviteWitnesses} className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Invite Witnesses
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
