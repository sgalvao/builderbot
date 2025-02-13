import { DocIcon } from 'assets/icons'
import * as React from 'react'

export const links = [
  {
    label: 'Resources',
    children: [
      // {
      //   label: 'GitHub repository',
      //   description: 'Check out the entire source code of the project',
      //   href: 'https://github.com/sgalvao/builderBot',
      //   icon: <GitHubIcon fill="blue.300" />,
      // },
      {
        label: 'Documentation',
        description:
          "Everything you need to know about how to use Typebot's builder",
        href: 'https://docs.typebot.io',
        icon: <DocIcon />,
      },
      // {
      //   label: 'Roadmap',
      //   description:
      //     "Follow the development and make suggestions for which features you'd like to see",
      //   href: 'https://feedback.typebot.io/roadmap',
      //   icon: <MapIcon />,
      // },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
]
