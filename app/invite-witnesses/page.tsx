"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, FileText } from "lucide-react"

export default function InviteWitnessesPage() {
  const [witness1Email, setWitness1Email] = useState("")
  const [witness2Email, setWitness2Email] = useState("")
  const [invitationsSent, setInvitationsSent] = useState(false)

  const handleSendInvitations = () => {
    if (!witness1Email || !witness2Email) {
      alert("Please enter both witness email addresses")
      return
    }
    setInvitationsSent(true)
    alert("Invitations sent to witnesses")
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Invite Witnesses</h1>
        <p className="text-gray-600 mt-2">Send secure invitations to witnesses for will signing</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Will Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium text-blue-900">Will #123</p>
            <p className="text-blue-700 text-sm">Created for John Smith on July 16, 2025</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mail className="mr-2 h-5 w-5" />
            Witness Invitations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="witness1">Witness 1 Email</Label>
              <Input
                id="witness1"
                type="email"
                value={witness1Email}
                onChange={(e) => setWitness1Email(e.target.value)}
                placeholder="witness1@email.com"
                disabled={invitationsSent}
              />
            </div>

            <div>
              <Label htmlFor="witness2">Witness 2 Email</Label>
              <Input
                id="witness2"
                type="email"
                value={witness2Email}
                onChange={(e) => setWitness2Email(e.target.value)}
                placeholder="witness2@email.com"
                disabled={invitationsSent}
              />
            </div>
          </div>

          {invitationsSent ? (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium">Invitations sent to witnesses successfully</span>
              </div>
              <p className="text-green-700 text-sm mt-2">
                Witnesses will receive secure links to review and sign the will.
              </p>
            </div>
          ) : (
            <Button onClick={handleSendInvitations} className="w-full bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              Send Invitations
            </Button>
          )}

          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Next Steps:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Witnesses will receive email invitations with secure links</li>
              <li>• Each witness must connect their wallet to sign</li>
              <li>• Both witnesses must sign for the will to be valid</li>
              <li>• You'll be notified when all signatures are collected</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
