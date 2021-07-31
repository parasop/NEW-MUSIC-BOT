module.exports = {
  mapRawArrayAndMakeObjectArray(array) {
    let aux = 1
    let page = 1
    let songsObject = {}
    var newSongs = []
    let test = array.length

    array.map((song) => {
      songsObject = {
        'index': aux,
        'song': song,
        'page': page
      }

      if (aux % 10 === 0) {
        page++
        if (aux === test) {
          page--
        }
      }
      newSongs.push(songsObject)
      aux++
    })
    return newSongs
  },

  choosePage(array, page) {
    let songsForPage = []
    array.map(ns => {
      if (ns.page === page) {
        songsForPage.push(ns)
      }
    })
    return songsForPage
  },

  getPage(length) {
    let total = length
    let pagesRaw = total / 10
    if (total % 10 !== 0) {
      pagesRaw++
    }
    return parseInt(pagesRaw)
  }
}