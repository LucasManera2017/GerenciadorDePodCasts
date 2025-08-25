# 🎧 Podcast Manager

## 📌 Descrição

O **Podcast Manager** é um aplicativo inspirado no estilo da Netflix, que centraliza diferentes episódios de podcasts em vídeo, organizados por categorias. A proposta é facilitar a navegação e descoberta de conteúdos relevantes em um só lugar.


## ✨ Filtrar episódios por nome de podcast

- **Endpoint:** `GET /episode?podcastName={nome}`
- **Descrição:** Retorna uma lista de episódios de podcast com base no nome do podcast fornecido.
- **Exemplo de requisição:** `GET /episode?podcastName=flow`

## 🚀 Como funciona

### 📂 Estrutura da API

O backend expõe uma **API REST** que retorna os episódios em formato **JSON**, contendo:

* Nome do podcast
* Nome do episódio
* ID do vídeo
* Imagem de capa
* Link do episódio
* Categorias associadas

### 📄 Exemplo de retorno da API

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "bodybuilding"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

## 🛠️ Tecnologias utilizadas

* **Node.js** (backend e API REST)
* **JavaScript/TypeScript**
* **Tsup e Tsx**
* **HTTP nativo**

## 📌Como Utilizar

1. Clone este repositório
2. Instale as depêndencias usando `npm install`
3. Inicie o servidor executando `start:dev`
4. Acesse os endpoints fornecidos para listar os episódios ou filtrá-los por nome de podcast.
