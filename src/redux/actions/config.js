const config = {
    env:'dev',
    local:{
    'url':"http://localhost:4000/",
    },
    dev:{
    'url':"http://13.127.214.1:4000/",
      },
    }

const env= config.env

export default config[env]