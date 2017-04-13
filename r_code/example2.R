require(RJSONIO)

# recibir un json y devolver un json
getOptimalPortfolio <- function (jsonObj) {
  resp = fromJSON(jsonObj)
  print(resp)
  print(jsonObj)
  print(toJSON(5+8))
  return(toJSON(5+8))
}
