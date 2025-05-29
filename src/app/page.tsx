'use client'
import { supabase } from '@/lib/supabaseClient'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({ email })
    alert('ログインリンクを送信しました')
  }

  return (
    <div className="p-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        placeholder="メールアドレス"
      />
      <button onClick={handleLogin} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
        ログイン
      </button>
    </div>
  )
}
