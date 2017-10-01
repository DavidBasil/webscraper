var cheerio = require('cheerio')
var request = require('request')
var fs = require('fs')

function scrape(){
	request('https://www.reddit.com/', function(err, res, body){
		if (err) throw new Error(err)
		var $ = cheerio.load(body)
		var titles = []
		$('a.title').each(function(i, el){
			var title = $(el).text()
			titles.push(title)
		})
		fs.writeFile('title.txt', titles.join('\n'))
	})
}

scrape()
