# Nome do Aplicativo

Podcast Manager

## Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes episódios de podcats separados por categoria

## Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios de podcasts em sessões de categorias
- [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

### Feature

- Listar os episódios de podcasts em sessões de categorias

### Como vou implementar

  Vou retornar em uma api rest (json) o nome do podcast, o nome do episódio, a imagem de capa e link.

  ```js
  [
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg"
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "bodybuilding"]
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg"
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"]
  }

  ]
  

  ```
