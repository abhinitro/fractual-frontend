const config = {
    env:'local',
    local:{
    'url':"http://localhost:4000/",
    },
    dev:{
    'url':"http://localhost:4000/",
      },
    }

const env= config.env

export default config[env]