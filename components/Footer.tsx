import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-900 to-black text-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Company Name</h3>
            <p className="mb-4">Elevating digital experiences with innovative solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-indigo-800 text-white placeholder-indigo-300 border-indigo-700 focus:border-indigo-500"
              />
              <Button type="submit" className="ml-2 bg-pink-600 hover:bg-pink-700">
                <Send size={20} />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-800 text-center">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer