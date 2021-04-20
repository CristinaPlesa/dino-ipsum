import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

class dinoIpsumGetter {
  static getFromApi(numberOfParagraphs) {
    try {
      let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${numberOfParagraphs}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(request.response);
          }
        }
        request.open("GET", url, true);
        request.send();
      })

      promise.then(function(response) {
        const body = JSON.parse(response);
        console.log(response);
        displayIpsum(response.data);
      }, function(error) {
        throw Error(error)
      })
    } catch(error) {
      console.error(error)
    }
  }
}

function displayIpsum()
