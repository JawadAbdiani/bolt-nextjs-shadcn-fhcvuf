import { Zap, Shield, Rocket, Smartphone } from 'lucide-react'

const categories = [
  { icon: Zap, name: "Fast Performance", description: "Lightning-quick load times" },
  { icon: Shield, name: "Secure Platform", description: "Top-notch security measures" },
  { icon: Rocket, name: "Scalable Solutions", description: "Grow with confidence" },
  { icon: Smartphone, name: "Mobile-First", description: "Optimized for all devices" },
]

export default function Categories() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-indigo-100 mb-8 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl"
            >
              <category.icon className="w-12 h-12 text-indigo-300 mb-4" />
              <h3 className="text-xl font-semibold text-indigo-100 mb-2">{category.name}</h3>
              <p className="text-indigo-200">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}