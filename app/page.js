// app/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="text-center space-y-8">
            {/* Hero Content */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
                Connect and Chat with
                <span className="text-indigo-600"> Anyone, Anywhere</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience seamless communication with Kerp. Share messages, files, and create meaningful connections in real-time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Get Started Free
              </Link>
              <Link
                href="/learn-more"
                className="px-8 py-3 text-base font-medium text-gray-600 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Hero Image */}
            <div className="mt-12 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-6xl bg-gradient-to-r from-indigo-400/30 to-purple-400/30 blur-3xl" />
              </div>
              <div className="relative">
                <Image
                  src="/chat-app-mockup.png" // Add your mockup image here
                  alt="Kerp Chat App Interface"
                  width={1200}
                  height={800}
                  className="rounded-2xl shadow-2xl border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Kerp?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the next generation of messaging with our powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Chat</h3>
              <p className="text-gray-600">
                Instant message delivery with real-time typing indicators and read receipts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Group Chats</h3>
              <p className="text-gray-600">
                Create and manage group conversations with unlimited participants.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">
                Your conversations are secure with military-grade encryption for complete privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">10M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">150+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
