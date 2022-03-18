const front = require('./front.js');
const fakeUsers = require('./fakeUsers.json');
const app = express();

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(api)
app.use(front)

app.listen(3000, () => console.log(`SERVER ON`))