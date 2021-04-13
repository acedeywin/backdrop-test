### GraphQL Url Shortener

## Description

The query `shortenURL` accepts one required argument:

`url` - this should be a valid URL.

```query{
  shortenURL(url: "Insert url") {
    shorterUrl
  }
}
```

And respond with a shorter URL string consisting of:

- Host url
- A string path of length 6 characters

```
{
  "data": {
    "shortenURL": {
      "shorterUrl": "https://host.url/jcoyfx"
    }
  }
}
```

## How to Run App

In the project directory, run:

`yarn install`

To install the dependencies

## To Start

Run `yarn start`

## To Create Table

Run `yarn createtable`

Make sure to first setup Postgres in your local environment and create a database before running the above command.

## To Drop Table

Run `yarn droptable`

## To Test

Run `yarn test`
