// var imgFileElement = document.getElementById("fileInput");
// encodeImageFileAsURL(imgFileElement);

function encodeImageFileAsURL(element) {
    var preview = document.querySelector('img');
    var file = element.files[0];
    var reader = new FileReader();

    // reader.onloadend = function() {
    //   console.log('RESULT', reader.result)
    // }

    reader.addEventListener('load', function() {
        preview.src = reader.result;
    });
    // var img = reader.readAsDataURL(file);
    // console.log(img);
    if(file) {
        reader.readAsDataURL(file);
    }
}

