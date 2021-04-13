import dotenv from "dotenv-safe"

dotenv.config({ silent: true })

export const baseUrl = process.env.BASEURL

export const shortId = () => {
  let code = ""
  let text = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < 6; i++)
    code += text.charAt(Math.floor(Math.random() * text.length))

  return code
}
