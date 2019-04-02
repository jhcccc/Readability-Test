# Mock Readme

# Article Extractor

Extract the title, author, body of a news article from a webpage. (e.g. https://www.nytimes.com/2019/04/01/business/british-business-brexit.html)
🌟 supports dynamically-loaded webpage
🌟 easy deployment with Docker

This was produced as a GSoC project of the [mediacloud project](https://mediacloud.org/). 

## Installation

`$ docker pull mediacloud/article-extractor`

## Usage

`$ docker run` `-p 8080:8080` `-D mediacloud/article-extractor`
This creates an HTTP server. 

**Request Specification**
 HTTP POST with JSON
 

    {
      "url": "https://www.nytimes.com/2019/04/01/business/british-business-brexit.html", // URL to extract from
      "options": { // optional options
        "connection": {
          "timeout": 10000, // HTTP connection timeout in ms
          "proxy": false, // proxy server to use
          "userAgent": "TBD" // user agent
        },
        "parser": {
          "allowJavaScript": true, // allow execution of JavaScript
          "onloadTrigger": { // determine when the contents finish loading
            "onInterval": { // check whether the contents are rendered at intervals
              "enabled": true,
              "interval": 1000, // time interval in ms
              "maxTries": 10 // number of tries before giving up
            },
            "onEvent": { // tell jsdom that the page finishes loading by firing an event
              "enabled": false,
              "source": "builtin", // "builtin" or "external", ignored if "enabled" is false
              "script": "" // when the "source" is "external", the provided script will run. When the contents are rendered, it should fire a onModulesLoaded event.
            }
          }
        }
      }
    }


 
 **Response** **Specification**
 JSON
 

    {
      "status": 200, // status code
      "message": "", // error message
      "data": {
        "title": "Hello World!", // article title if the program succeeds
        "author": "Mike", // article author
        "date": "2019/4/4", // date posted
        "body": "Sample content." // article body
      }
    } 

