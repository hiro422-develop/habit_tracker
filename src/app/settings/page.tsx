'use client'

import { useState } from 'react'
import Modal from '@/components/Modal'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-white p-4 pb-20">
      <div className="text-center text-xl font-bold mb-6">設定</div>

      {/* 各項目リスト */}
      <div className="space-y-4">
        <SettingItem label="アカウント情報" onClick={() => alert('未実装')} />
        <SettingItem label="通知設定" onClick={() => alert('未実装')} />

        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-xl">
          <span className="text-sm font-medium">ダークモード</span>
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <SettingItem label="バックアップ・同期" onClick={() => alert('未実装')} />
        <SettingItem label="ログアウト" onClick={() => setShowLogoutModal(true)} danger />
      </div>

      {/* ログアウト確認モーダル */}
      <Modal show={showLogoutModal} onClose={() => setShowLogoutModal(false)}>
        <div className="text-center space-y-4">
          <p className="text-base font-semibold">ログアウトしますか？</p>
          <div className="flex justify-between gap-4 mt-4">
            <button
              onClick={() => setShowLogoutModal(false)}
              className="flex-1 py-2 bg-gray-300 rounded-lg"
            >
              キャンセル
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 py-2 bg-red-500 text-white rounded-lg"
            >
              ログアウト
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

// サブコンポーネント（リスト項目）
function SettingItem({
  label,
  onClick,
  danger = false
}: {
  label: string
  onClick: () => void
  danger?: boolean
}) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center px-4 py-3 rounded-xl cursor-pointer ${
        danger ? 'bg-red-100 text-red-700' : 'bg-gray-100'
      }`}
    >
      <span className="text-sm font-medium">{label}</span>
      <span>›</span>
    </div>
  )
}
