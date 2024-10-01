import React, { useState } from 'react'
import { Code, Trash2, Copy, FileUp, FilePlus, Download, X } from 'lucide-react'

const JSONFormatter: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
      setError('')
    } catch (err) {
      setError('Invalid JSON: ' + err.message)
      setOutput('')
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const clearAll = () => {
    setInput('')
    setOutput('')
    setError('')
  }

  return (
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg shadow-xl w-full max-w-7xl mx-auto relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-400">JSON Formatter</h2>
        <div className="flex items-center">
          <div className="flex space-x-4 mr-8">
            <button className="text-gray-300 hover:text-white" title="New">
              <FilePlus size={20} />
            </button>
            <button className="text-gray-300 hover:text-white" title="Save">
              <FileUp size={20} />
            </button>
            <button className="text-gray-300 hover:text-white" title="Download">
              <Download size={20} />
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
      </div>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={formatJSON}
          className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          <Code size={18} className="mr-2" /> Format JSON
        </button>
        <button
          onClick={clearAll}
          className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
        >
          <Trash2 size={18} className="mr-2" /> Clear All
        </button>
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          <Copy size={18} className="mr-2" /> {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="json-input" className="block text-sm font-medium text-gray-300 mb-2">
            Input JSON
          </label>
          <textarea
            id="json-input"
            rows={20}
            className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
          />
        </div>
        <div>
          <label htmlFor="json-output" className="block text-sm font-medium text-gray-300 mb-2">
            Formatted JSON
          </label>
          <pre
            id="json-output"
            className="w-full h-[calc(100%-28px)] px-3 py-2 text-gray-300 bg-gray-800 rounded-md overflow-auto font-mono whitespace-pre-wrap"
          >
            {output || error}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default JSONFormatter