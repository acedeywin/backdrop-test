import express from "express"
import { graphqlHTTP } from "express-graphql"
import expressValidator from "express-validator"
import schema from "./schemas/schema"
import route from "./routes/index"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(expressValidator())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.use("/", route)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

export default app
