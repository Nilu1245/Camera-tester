document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('videoElement');
  
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          videoElement.srcObject = stream;
        })
        .catch(function(error) {
          alert('Error accessing the webcam:', error);
        });
    } else {
      alert('getUserMedia is not supported by this browser');
    }
  });