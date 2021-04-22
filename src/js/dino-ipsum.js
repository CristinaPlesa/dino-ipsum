export default class DinoIpsum {
  static getFromApi(numberOfParagraphs) {
    try {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${numberOfParagraphs}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(request.response);
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    } catch(error) {
      console.error(error);
      return error;
    }
  }
}
