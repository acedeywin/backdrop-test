import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
} from "graphql"
// import validUrl from "valid-url"
import { baseUrl, shortId } from "../utils"
import Model from "../models/model"

const UrlType = new GraphQLObjectType({
  name: "Url",
  fields: () => ({
    shorterUrl: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: "UrlQuery",
  fields: {
    shortenURL: {
      type: UrlType,
      args: { url: { type: new GraphQLNonNull(GraphQLString) } },
      resolve: async (_, args) => {
        try {
          if (!validUrl.isUri(baseUrl)) {
            return null
          }

          const urlCode = shortId()

          if (validUrl.isUri(args.url)) {
            let url = await Model.findUrl(args.url)

            if (!url) {
              const shorterUrl = `${baseUrl}${urlCode}`
              const details = { urlCode, url: args.url, shorterUrl }
              url = await Model.createUrl(details)
              return details
            } else {
              const data = { shorterUrl: url.short_url }

              return data
            }
          } else {
            return null
          }
        } catch (err) {
          console.log(err)
          return "Server error"
        }
      },
    },
  },
})

const schema = new GraphQLSchema({
  query: RootQuery,
})

export default schema
