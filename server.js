const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})



server.get("/", function (require, response) {
  const about = {
    avatar_url: "https://lh3.googleusercontent.com/Og_Eu6RYyo_G_cSQd32L47ICSVrtIyiHCRbawgd5OIMlJGX_zBZT4HAxo_nEONzomabGreiNrZxpp4rSIGbPBeEZKINMsQHZKJ0EWMefWvHToagBAn4BR-Gqxj8s6kdq6CGNmWIMq1yMTIVWvkWrtdC_8iMctR5Kc0fwwNxVqyje6BE2qCCMCzzasPdjRpRFXixMv0P78RFOEcqXplhYxwCH8w6hic18NW1LxBTKT4AyVYckHrfCrXGVsB3GhnRYsfxHDIMhz76KoIyjB0rLIGUav6IWIkWsi4pGwJPGwFVsmRvs0s2iEhVVtDy3W6LFkrGoL3wHVtCAG32WsUsg15fOFQOIsavKRVWkPPo8eFmc-6m4PSrIQdp1fMZqE1xPZ7fCUkC2uHjHbiwzN20315EdfybYxSLyWofCiW5FPHDX83wfWJULnE2LJOg3Qxq7DGEG0MSQK1-v9KG0MQlCM9otNf8Cf8FAkYSH-rSFMWqLV7dpj4_sRpS0S9DX31HCYakUsNnHOparxbTbjW0L-AtXNw8riuIBTJQ25yfmrxnMAXkrJBwG8tzC2aCa3s7hn79Unlibcqyy2T5I7BUD1oj9-gLxhPSY38-8T2CbubTvJo2pL2BIqwDzGPlJOtNfSzjcRBAuwGwsOiTgYX2lxssLi08Wt_DKdqBta3DkZ7H7Gk7HWVXfPg=w691-h921-no",
    name: "Guilherme Fonseca",
    role: "Aluno - Rocketseat",
    description: 'Aprendiz de programador fullstack node.js e react <a href="http://Rocketseat.com.br" target="_blank">Rocketseat</a>',
    links: [
      {
        name: "Github",
        url: "https://github.com/guilhermefonsa"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/guis_i"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/guilherme-fonseca-8038227a/"
      },

    ],
  }


  return response.render("about", { about })

})

server.get("/classes", function (require, response) {
  return response.render("classes", { items: videos })

})

server.get("/video", function (requeire, response) {
  const id = requeire.query.id

  const video = videos.find(function(video){
    return video.id == IDBCursor
    
  
    
  })

  if (!video){
    return response.send("Video not found!")
  }

  return response.render("video",{item : video})

})

server.listen(5000, function () {
  console.log("server is running")
})