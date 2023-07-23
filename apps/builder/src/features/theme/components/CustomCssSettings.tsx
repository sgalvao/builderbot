import { CodeEditor } from '@/components/inputs/CodeEditor'
import sanitizeCSS from '@/helpers/cssSanitizer'
import React from 'react'

type Props = {
  customCss?: string
  onCustomCssChange: (css: string) => void
}

export const CustomCssSettings = ({ customCss, onCustomCssChange }: Props) => {
  const handleCssChange = (css: string) => {
    const forbiddenClasses = ['a#lite-badge', 'no-watermark', 'big-text']
    const sanitizedCSS = sanitizeCSS(css, forbiddenClasses)
    onCustomCssChange(sanitizedCSS)
  }

  return (
    <CodeEditor value={customCss ?? ''} lang="css" onChange={handleCssChange} />
  )
}
