const server = require('./API/server')

const PORT = process.env.PORT || 3300

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})