import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoIpsum from './js/dino-ipsum.js';

function displayIpsum(dataArray) {
  let html = ``;
  dataArray.forEach(wordsArray => {
    html += `<p>${wordsArray.join(" ")}.</p>`;
  });
  $("#response").html(html);
}

$(document).ready(function() {
  $("#input-form").submit(event => {
    event.preventDefault();
    const numberOfParagraphs = $("#paragraphs").val();
    console.log("HERE")
    let promise = DinoIpsum.getFromApi(numberOfParagraphs);

    promise.then(function(response) {
      console.log("SUCCESS",response)
      const body = JSON.parse(response);
      displayIpsum(body);
    }, function(error) {
      throw Error(error);
    });
  })
});


