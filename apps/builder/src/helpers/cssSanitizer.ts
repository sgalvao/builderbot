const sanitizeCSS = (css: string, forbiddenClasses: string[]): string => {
  let sanitizedCSS = css.replace(/\/\*[\s\S]*?\*\//g, '')

  forbiddenClasses.forEach((forbiddenClass) => {
    const regex = new RegExp(`\\s*${forbiddenClass}\\s*{[^}]*}\\s*`, 'g')
    sanitizedCSS = sanitizedCSS.replace(regex, '')
  })

  return sanitizedCSS
}

export default sanitizeCSS
