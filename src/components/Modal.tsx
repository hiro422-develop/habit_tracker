'use client'

import { ReactNode } from 'react'

type ModalProps = {
  show: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ show, onClose, children }: ModalProps) {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}
