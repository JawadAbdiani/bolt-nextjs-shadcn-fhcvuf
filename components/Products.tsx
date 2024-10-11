import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'

const featuredProducts = [
  {
    name: "Premium Package",
    description: "All-in-one solution for growing businesses",
    price: 199.99,
    discountedPrice: 149.99,
    discountPercentage: 25,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Starter Kit",
    description: "Perfect for new entrepreneurs",
    price: 99.99,
    discountedPrice: 79.99,
    discountPercentage: 20,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Pro Suite",
    description: "Advanced tools for professionals",
    price: 299.99,
    discountedPrice: 249.99,
    discountPercentage: 17,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
]

export default function Products() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-indigo-100 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.discountPercentage}% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-100 mb-2">{product.name}</h3>
                <p className="text-indigo-200 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-indigo-100">${product.discountedPrice}</span>
                    <span className="text-sm text-indigo-300 line-through ml-2">${product.price}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-indigo-100">{product.rating}</span>
                  </div>
                </div>
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}