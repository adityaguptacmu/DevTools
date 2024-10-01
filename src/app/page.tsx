"use client";

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { X, Terminal, Code, Hash, Palette, FileText, Database, Globe, Lock, Cpu, Zap, 
         Wifi, Sliders, BarChart2, GitBranch, Box, Layers, Compass, Smartphone, Server, 
         Cloud, Monitor, Coffee, Clipboard, Headphones, Camera, Printer, Mic, Radio, 
         Tv, Video, Music, Image, Map, Calendar, Clock, Calculator, Book, Mail, 
         MessageSquare, Share2, Link, Search, Settings, Trash2, Archive, 
         Download, Upload, RefreshCw, Shuffle, Edit3, Eye, FilePlus, Grid, Sun, Moon } from 'lucide-react'
import JSONFormatter from './components/JSONFormatter'

// Dummy tool components (now with some basic styling)
const DummyTool = ({ name }) => <div className="h-64 bg-gray-800 dark:bg-gray-200 rounded p-4">{name} Tool</div>

const tools = [
  { name: 'JSON Formatter', component: JSONFormatter, icon: Code },
  { name: 'Base64 Encoder', component: DummyTool, icon: Hash },
  { name: 'Regex Tester', component: DummyTool, icon: Terminal },
  { name: 'Color Picker', component: DummyTool, icon: Palette },
  { name: 'Markdown Editor', component: DummyTool, icon: FileText },
  { name: 'SQL Formatter', component: DummyTool, icon: Database },
  { name: 'HTML Encoder', component: DummyTool, icon: Globe },
  { name: 'JWT Decoder', component: DummyTool, icon: Lock },
  { name: 'Cron Expression Generator', component: DummyTool, icon: Clock },
  { name: 'Lorem Ipsum Generator', component: DummyTool, icon: FileText },
  { name: 'Minify/Beautify', component: DummyTool, icon: Code },
  { name: 'Diff Checker', component: DummyTool, icon: GitBranch },
  { name: 'URL Encoder/Decoder', component: DummyTool, icon: Link },
  { name: 'Hash Generator', component: DummyTool, icon: Lock },
  { name: 'UUID Generator', component: DummyTool, icon: Hash },
  { name: 'JSON to CSV', component: DummyTool, icon: FileText },
  { name: 'CSV to JSON', component: DummyTool, icon: Code },
  { name: 'XML Formatter', component: DummyTool, icon: Code },
  { name: 'YAML Formatter', component: DummyTool, icon: Code },
  { name: 'Hex to RGB', component: DummyTool, icon: Palette },
  { name: 'RGB to Hex', component: DummyTool, icon: Palette },
  { name: 'Unix Timestamp Converter', component: DummyTool, icon: Clock },
  { name: 'CSS Minifier', component: DummyTool, icon: Code },
  { name: 'JavaScript Minifier', component: DummyTool, icon: Code },
  { name: 'HTML Minifier', component: DummyTool, icon: Code },
  { name: 'SQL Minifier', component: DummyTool, icon: Database },
  { name: 'Image Compressor', component: DummyTool, icon: Image },
  { name: 'SVG Optimizer', component: DummyTool, icon: Image },
  { name: 'Markdown to HTML', component: DummyTool, icon: FileText },
  { name: 'HTML to Markdown', component: DummyTool, icon: Code },
  { name: 'JSON to XML', component: DummyTool, icon: Code },
  { name: 'XML to JSON', component: DummyTool, icon: Code },
  { name: 'YAML to JSON', component: DummyTool, icon: Code },
  { name: 'JSON to YAML', component: DummyTool, icon: Code },
  { name: 'Encryption/Decryption', component: DummyTool, icon: Lock },
  { name: 'QR Code Generator', component: DummyTool, icon: Smartphone },
  { name: 'Barcode Generator', component: DummyTool, icon: Smartphone },
  { name: 'Network Speed Test', component: DummyTool, icon: Wifi },
  { name: 'DNS Lookup', component: DummyTool, icon: Globe },
  { name: 'Whois Lookup', component: DummyTool, icon: Search },
  { name: 'IP Address Lookup', component: DummyTool, icon: Globe },
  { name: 'Port Scanner', component: DummyTool, icon: Server },
  { name: 'HTTP Headers Checker', component: DummyTool, icon: Globe },
  { name: 'SSL Certificate Checker', component: DummyTool, icon: Lock },
  { name: 'Crontab Generator', component: DummyTool, icon: Clock },
  { name: 'Chmod Calculator', component: DummyTool, icon: Lock },
  { name: 'Regex Generator', component: DummyTool, icon: Terminal },
  { name: 'Favicon Generator', component: DummyTool, icon: Image },
  { name: 'Meta Tags Generator', component: DummyTool, icon: Code },
  { name: 'Password Generator', component: DummyTool, icon: Lock },
  { name: 'Code Snippet Manager', component: DummyTool, icon: Clipboard },
  { name: 'API Tester', component: DummyTool, icon: Zap },
  { name: 'WebSocket Tester', component: DummyTool, icon: Zap },
  { name: 'CSS Gradient Generator', component: DummyTool, icon: Palette },
  { name: 'CSS Flexbox Generator', component: DummyTool, icon: Layers },
  { name: 'CSS Grid Generator', component: DummyTool, icon: Grid },
]

export default function Home() {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedTool, setSelectedTool] = useState(null)

  useEffect(() => {
    const toolName = pathname.split('/').pop()
    const tool = tools.find(t => t.name.toLowerCase().replace(/\s+/g, '-') === toolName)
    setSelectedTool(tool || null)
  }, [pathname])

  const handleToolSelect = (tool) => {
    const toolPath = tool.name.toLowerCase().replace(/\s+/g, '-')
    router.push(`/tool/${toolPath}`)
  }

  const handleCloseTool = () => {
    router.push('/')
    setSelectedTool(null)
  }

  return (
    <div className="min-h-screen bg-gray-950 p-4">
      {selectedTool ? (
        <selectedTool.component onClose={handleCloseTool} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <button
              key={index}
              onClick={() => handleToolSelect(tool)}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <tool.icon size={24} className="mb-2" />
              <span>{tool.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}