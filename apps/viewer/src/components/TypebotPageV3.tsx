import { Standard } from '@typebot.io/nextjs'
import { useRouter } from 'next/router'
import { SEO } from './Seo'
import { Typebot } from '@typebot.io/schemas/features/typebot/typebot'
import { BackgroundType } from '@typebot.io/schemas/features/typebot/theme/enums'

export type TypebotV3PageProps = {
  url: string
  name: string
  publicId: string | null
  isHideQueryParamsEnabled: boolean | null
  background: Typebot['theme']['general']['background']
  metadata: Typebot['settings']['metadata']
}

export const TypebotPageV3 = ({
  publicId,
  name,
  url,
  isHideQueryParamsEnabled,
  metadata,
  background,
}: TypebotV3PageProps) => {
  const { asPath, push } = useRouter()

  const clearQueryParamsIfNecessary = () => {
    const hasQueryParams = asPath.includes('?')
    if (!hasQueryParams || !(isHideQueryParamsEnabled ?? true)) return
    push(asPath.split('?')[0], undefined, { shallow: true })
  }

  return (
    <div
      style={{
        height: '100vh',
        // Set background color to avoid SSR flash
        backgroundColor:
          background?.type === BackgroundType.COLOR
            ? background?.content
            : background?.type === BackgroundType.NONE
            ? undefined
            : '#f3f3f3',
      }}
    >
      <SEO url={url} typebotName={name} metadata={metadata} />
      <Standard typebot={publicId} onInit={clearQueryParamsIfNecessary} />
    </div>
  )
}
