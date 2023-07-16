import { chakra, Tooltip, Text, Button } from '@chakra-ui/react'
import { HelpCircleIcon } from 'assets/icons/HelpCircleIcon'
import Link from 'next/link'
import React from 'react'
import { PricingCard } from './PricingCard'
import { chatsLimit } from '@typebot.io/lib/pricing'

export const FreePlanCard = () => (
  <PricingCard
    data={{
      price: 'Grátis',
      name: 'Personal',
      features: [
        'ChatBots Ilimitados',
        <>
          <Text>
            <chakra.span fontWeight="bold">
              {chatsLimit.FREE.totalIncluded}
            </chakra.span>{' '}
            chats/mês
          </Text>
          &nbsp;
          <Tooltip
            hasArrow
            placement="top"
            label="Um bate-papo é contado sempre que um usuário inicia uma conversa. Isso é
  independente do número de mensagens que envia e recebe."
          >
            <chakra.span cursor="pointer" h="7">
              <HelpCircleIcon />
            </chakra.span>
          </Tooltip>
        </>,
        'Integrações Nativas',
        'Webhooks',
        'Custom Javascript & CSS',
      ],
    }}
    button={
      <Button
        as={Link}
        href="https://app.hackleads.com.br/register"
        variant="outline"
        colorScheme="gray"
        size="lg"
        w="full"
        fontWeight="extrabold"
        py={{ md: '8' }}
      >
        Comece já
      </Button>
    }
  />
)
