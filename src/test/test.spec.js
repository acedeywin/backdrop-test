import supertest from "supertest"
import chai from "chai"
import sinonChai from "sinon-chai"
import validUrl from "valid-url"

import app from "../index"
import Model from "../models/model"
import { baseUrl, shortId } from "../utils"

chai.use(sinonChai)
export const { expect, have } = chai
export const request = supertest.agent(app)

describe("Utils file", () => {
  it("Should be a string", done => {
    expect(baseUrl).to.be.a("string")
    done()
  })

  it("Should return a random string", done => {
    expect(shortId()).to.be.a("string")
    done()
  })
})

describe("GET", () => {
  it("Should verify code and redirect user", done => {
    const urlCode = "awqert"
    const url = Model.findUrlCode(urlCode)
    request.get(`/${urlCode}`).end((err, res) => {
      if (err) return done(err)
      expect(urlCode).length.to.be.lessThan(7)
      expect(urlCode).length.to.be.greaterThan(5)
      expect(urlCode).to.be.a("string")
      if (!url) {
        expect(res.status).to.equal(404)
        expect(res.body).to.be.an("object")
        expect(res.body).to.equal("No url found.")
      }
    })
    done()
  })
})

describe("GraphQL", () => {
  it("Should return shortenUrl", done => {
    request.post("/graphql").end((err, res) => {
      if (err) return done(err)
      const longUrl =
        "https://github.com/craigkerstiens/json_node_example/issues/2"
      const urlCode = "awqert"

      let url = Model.findUrl(longUrl)

      if (!url) {
        const shorterUrl = `${baseUrl}${urlCode}`
        const details = { urlCode, url: args.url, shorterUrl }
        url = Model.createUrl(details)

        expect(res.body.details).to.have.property("shorterUrl")
        expect(res.body.details)
          .to.have.property("shorterUrl")
          .to.be.a("string")
        expect(res.body.details).to.be.an("object")
      }
    })
    done()
  })
})
