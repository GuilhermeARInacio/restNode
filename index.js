const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, () => console.log('Server listen in port 3000'))