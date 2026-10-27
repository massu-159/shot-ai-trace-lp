import { createContext, useContext } from 'react'
import { ja } from './data/ja'
import type { Content } from './data/types'

/**
 * トップページの文言（言語ごと）。入口（main.tsx・main.en.tsx）が App に渡し、
 * 各セクションは useContent() で読む。
 */
export const ContentContext = createContext<Content>(ja)

export function useContent(): Content {
  return useContext(ContentContext)
}
