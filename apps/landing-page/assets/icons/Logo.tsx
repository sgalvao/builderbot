import Icon, { IconProps } from '@chakra-ui/icon'
import React from 'react'
import Image from 'next/image'

export const Logo = () => (
  <Image src={'/logo.png'} width={40} height={20} alt="hack leads logo" />
)
