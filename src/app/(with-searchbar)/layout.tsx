import { ReactNode, Suspense } from 'react'
import Searchbar from '../../components/searchbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>로딩중...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  )
}
