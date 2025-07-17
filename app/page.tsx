import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Users, Lock, CheckCircle, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold text-gray-900">Heji</h1>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Secure Wills with <span className="text-blue-600">Blockchain</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Heji System revolutionizes will management for law firms with blockchain technology, ensuring tamper-proof
            documentation, digital signatures, and fraud prevention.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/register">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">Login to Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Heji System?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for law firms, our platform combines legal expertise with cutting-edge blockchain
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Lock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Blockchain Security</CardTitle>
                <CardDescription>
                  Immutable records stored on blockchain ensure your wills cannot be tampered with or forged.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Digital Signatures</CardTitle>
                <CardDescription>
                  Wallet-based digital signatures from testators, lawyers, and witnesses provide legal authenticity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Witness Management</CardTitle>
                <CardDescription>
                  Streamlined witness invitation and signing process with secure blockchain verification.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Fraud Prevention</CardTitle>
                <CardDescription>
                  Advanced cryptographic protection prevents unauthorized access and document manipulation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Legal Compliance</CardTitle>
                <CardDescription>
                  Built to meet legal requirements for will creation, witnessing, and execution processes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <ArrowRight className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Easy Integration</CardTitle>
                <CardDescription>
                  Seamlessly integrates into existing law firm workflows with intuitive user interface.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Heji System Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, secure process that transforms traditional will management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Create Will</h3>
              <p className="text-gray-600">
                Lawyer and testator collaborate to draft the will using our secure platform.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Digital Signing</h3>
              <p className="text-gray-600">Testator and lawyer sign the will using their blockchain wallets.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Witness Verification</h3>
              <p className="text-gray-600">Witnesses receive secure invitations to review and sign the will.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
              <p className="text-gray-600">Completed will is stored immutably on the blockchain for future access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Clients' Wills?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading law firms who trust Heji System for secure, blockchain-based will management.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-lg font-semibold">Heji | UZH DDiB '25</span>
            </div>
            <p className="text-gray-400">© 2025 Heji System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
