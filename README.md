# ⏱️ Cronômetro Simples

Um cronômetro digital interativo desenvolvido do zero para fins de estudo e prática. O projeto foca na manipulação limpa do DOM (Document Object Model), controle de estados de botões nativos do HTML e formatação precisa de strings de tempo.

## 🚀 Tecnologias Utilizadas
- **HTML5:** Estrutura semântica contendo o display de tempo e os botões de controle com atributos assíncronos de inicialização (`disabled`).
- **CSS3:** Layout moderno e centralizado utilizando **Flexbox**, reset global com `box-sizing`, manipulação de estados como `:hover` e estilização customizada para elementos desabilitados.
- **JavaScript (ES6):** Lógica de temporização assíncrona com `setInterval` e `clearInterval`, controle rígido do fluxo e estados dos botões, além de formatação de strings numéricas usando `padStart(2, '0')`.

## 🛠️ Como o Código Funciona
- **Iniciar / Retomar:** Ativa o gatilho do cronômetro incrementando os segundos a cada `1000ms`. Bloqueia o próprio clique para blindar a aplicação contra múltiplas execuções aceleradas.
- **Parar:** Pausa o intervalo ativo mantendo o valor acumulado na memória e liberando os botões de retomada e reinício.
- **Reiniciar:** Zera a contagem e renderiza o display novamente para `00:00:00`, restaurando o estado original do botão "Iniciar".

## 📦 Como rodar o projeto localmente
1. Clone este repositório:
   ```bash
   git clone https://github.com/anthonyluccas/cronometro-js.git
   ```
2. Abra a pasta do projeto e dê um duplo clique no arquivo `index.html` para executá-lo diretamente no seu navegador.

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.