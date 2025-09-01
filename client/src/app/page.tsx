'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Image, 
  Code, 
  FileText, 
  Zap, 
  ArrowRight,
  Sparkles,
  Cpu,
  Palette,
  Terminal
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Brain,
    title: 'AI Text Generation',
    description: 'Generate high-quality content, emails, and documents with GPT-4',
    color: 'from-blue-500 to-cyan-500',
    href: '/text-generation'
  },
  {
    icon: Palette,
    title: 'AI Image Creation',
    description: 'Create stunning visuals with DALL-E 3 and Stable Diffusion',
    color: 'from-purple-500 to-pink-500',
    href: '/image-generation'
  },
  {
    icon: Terminal,
    title: 'Code Intelligence',
    description: 'Analyze, review, and generate code with AI assistance',
    color: 'from-green-500 to-emerald-500',
    href: '/code-analysis'
  },
  {
    icon: FileText,
    title: 'Document Processing',
    description: 'Extract, analyze, and convert documents with OCR and AI',
    color: 'from-orange-500 to-red-500',
    href: '/document-processing'
  }
]

const stats = [
  { label: 'AI Models', value: '15+' },
  { label: 'Languages', value: '50+' },
  { label: 'Integrations', value: '100+' },
  { label: 'Uptime', value: '99.9%' }
]

export default function HomePage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\">
      {/* Hero Section */}
      <div className=\"relative overflow-hidden\">
        <div className=\"absolute inset-0 bg-gradient-to-r from-purple-800/20 to-cyan-800/20\" />
        <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16\">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=\"text-center\"
          >
            <div className=\"flex justify-center mb-8\">
              <div className=\"relative\">
                <div className=\"absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse\" />
                <Cpu className=\"relative w-16 h-16 text-white\" />
              </div>
            </div>
            
            <h1 className=\"text-5xl md:text-7xl font-bold text-white mb-6\">
              AI Productivity
              <span className=\"bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent\">
                {' '}Suite
              </span>
            </h1>
            
            <p className=\"text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto\">
              Supercharge your workflow with cutting-edge AI tools for text generation, 
              image creation, code analysis, and document processing.
            </p>
            
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
              <Link href=\"/dashboard\">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=\"bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:shadow-2xl transition-all duration-300\"
                >
                  Get Started <ArrowRight className=\"w-5 h-5\" />
                </motion.button>
              </Link>
              
              <Link href=\"/demo\">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=\"border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300\"
                >
                  View Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\">
        <div className=\"grid grid-cols-2 md:grid-cols-4 gap-8\">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className=\"text-center\"
            >
              <div className=\"text-3xl md:text-4xl font-bold text-white mb-2\">
                {stat.value}
              </div>
              <div className=\"text-gray-400\">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=\"text-center mb-16\"
        >
          <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-6\">
            Powerful AI Features
          </h2>
          <p className=\"text-xl text-gray-300 max-w-3xl mx-auto\">
            Everything you need to boost productivity with artificial intelligence
          </p>
        </motion.div>

        <div className=\"grid md:grid-cols-2 lg:grid-cols-4 gap-8\">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              className=\"relative group\"
            >
              <Link href={feature.href}>
                <div className=\"relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full\">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className=\"w-6 h-6 text-white\" />
                  </div>
                  
                  <h3 className=\"text-xl font-semibold text-white mb-3\">
                    {feature.title}
                  </h3>
                  
                  <p className=\"text-gray-400 mb-4\">
                    {feature.description}
                  </p>
                  
                  <div className=\"flex items-center text-purple-400 group-hover:text-purple-300 transition-colors\">
                    <span className=\"text-sm font-medium\">Learn more</span>
                    <ArrowRight className=\"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform\" />
                  </div>
                  
                  {hoveredFeature === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className=\"absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl\"
                    />
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=\"bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-8 md:p-12 text-center border border-white/10\"
        >
          <Sparkles className=\"w-12 h-12 text-purple-400 mx-auto mb-6\" />
          <h2 className=\"text-3xl md:text-4xl font-bold text-white mb-6\">
            Ready to Transform Your Workflow?
          </h2>
          <p className=\"text-xl text-gray-300 mb-8 max-w-2xl mx-auto\">
            Join thousands of professionals using AI to boost their productivity and creativity.
          </p>
          <Link href=\"/signup\">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=\"bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300\"
            >
              Start Free Trial
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}