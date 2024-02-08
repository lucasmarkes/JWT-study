# Tokens JWT

## São tokens "autossuficientes" que servem para realizar troca de informações de forma segura entre aplicações no formato JSON.

- Self-contained: Carregam dentro de si todas as informações necessárias para validá-lo.
- Stateless: Sendo os tokens autossuficientes, não precisamos salvar nada no servidor em um cache ou banco de dados. Por isso são "sem estado".
- Multi-language: Por usar JSON, qualquer linguaguem consegue manipular.

## Anatomia do JWT:

- Header -> Vai até o primeiro ponto da string JWT, é onde armazena as informações como o tipo do token, e o algoritmo usado para gerar a assinatura.
- Payload -> Vai até o segundo ponto da string JWT, é o lugar no qual salvamos as informações do token: quando foi gerado, data de exp, id de quem gerou, etc..
- Assinatura -> Vai até o terceiro pontom, ultima parte, é a parte mais importante do JWT, é ela quem garante que o token foi gerado pela sua aplicação e que não houve modificação após ser gerado.

## Tanto o Header quanto Payload são baseados em base64url.

** se atentar que o base64 cresce de acordo com as informações são inseridas dentro do payload, e o http tem um limite de tamanho!! **

## A assinatura é da seguinte forma:

- hash({headerEncodadobase64}.{payloadEncodadeoBase64}, 'secret')
  ** essa chave secreta vem do backend, não pode ser exibida publicamente **
