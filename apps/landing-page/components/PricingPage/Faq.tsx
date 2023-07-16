import { Heading, VStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'

export const Faq = () => (
  <VStack w="full" spacing="10">
    <Heading textAlign="center">Perguntas Frequentes</Heading>
    <SimpleGrid columns={[1, 2]} spacing={10}>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          O que é considerado no limite mensal de chat?
        </Heading>
        <Text>
          Um bate-papo é contado sempre que um usuário inicia uma conversa. Isso
          é independente do número de mensagens que envia e recebe. Para
          exemplo, se um usuário iniciar uma discussão e enviar 10 mensagens
          para o bot, contará como 1 chat. Se o usuário conversar novamente mais
          tarde e sua sessão for lembrada, ela não será contada como um novo
          chat. <br />
          <br />
          Uma maneira fácil de pensar sobre isso: 1 chat equivale a uma linha em
          sua tabela de resultados.
        </Text>
      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          O que acontece quando excedo meus limites de chat?
        </Heading>
        <Text>
          Você receberá um e-mail de aviso quando atingir 80% do seu limite.
          Depois de atingir o limite, você receberá outro e-mail alerta. Seus
          bots continuarão em execução. Você será gentilmente solicitado a
          atualize sua assinatura. Se você não fornecer uma resposta após ~48h,
          seus bots estarão fechados pelo restante do mês. Para Espaço de
          trabalho GRATUITO, se você exceder 600 chats, seus bots serão fechado
          automaticamente.
        </Text>
      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          O que é considerado armazenamento?
        </Heading>
        <Text>
          Você acumula armazenamento para cada arquivo que seu usuário carrega
          em seu chatBot. Se você excluir o resultado associado, ele liberará o
          usado espaço.
        </Text>
      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          O que acontece se eu exceder o limite de armazenamento?
        </Heading>
        <Text>
          Ao exceder o tamanho de armazenamento incluído em seu plano, você
          receba um alerta por e-mail. Não haverá nenhuma resposta imediata
          cobranças adicionais e seus bots continuarão a armazenar novos
          arquivos. Se você continuar a exceder o limite, você será gentilmente
          solicitado a atualizar sua assinatura.
        </Text>
      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          Posso cancelar meu plano a qualquer momento?
        </Heading>
        <Text>
          Sim, você pode cancelar, atualizar ou fazer downgrade da sua
          assinatura a qualquer tempo. Não há compromisso de tempo mínimo ou
          bloqueio.
          <br />
          <br />
          Ao fazer upgrade ou downgrade de sua assinatura, você receberá acesso
          às novas opções imediatamente. Sua próxima fatura terá um montante
          rateado.
        </Text>
      </Stack>
      <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
        <Heading as="h2" fontSize="2xl">
          Oferecem pagamentos anuais?
        </Heading>
        <Text>
          Sim, os planos Starter e Pro podem ser adquiridos com pagamentos
          mensais ou anuais cobrança.
          <br />
          <br />
          Os planos anuais são mais baratos e oferecem um desconto de 16% em
          comparação com pagamentos mensais.
        </Text>
      </Stack>
    </SimpleGrid>
  </VStack>
)
