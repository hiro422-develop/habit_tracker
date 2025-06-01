'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (email.trim() === '') {
      alert('メールアドレスを入力してください')
      return
    }

    // 実際の認証は後から実装、今は強制ログイン扱い
    router.push('/home')
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Loopi 簡易ログイン</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="メールアドレス"
      />
      <button
        onClick={handleLogin}
        className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded"
      >
        ログインする（仮）
      </button>
    </div>
  )
}
