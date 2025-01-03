const newFile = document.getElementById("myFile");
const memeImage = document.getElementById("memeibox");
const topText = document.getElementById("ttext");
const bottomText = document.getElementById("btext");
const topDisplay = document.getElementById('ttextdisplay');
const bottomDisplay = document.getElementById('btextdisplay');
const clearButton = document.getElementById('clearButton');

topText.addEventListener('input',function(){
    topDisplay.textContent = this.value;
});
bottomText.addEventListener("input", function(){
    bottomDisplay.textContent = this.value;
});

clearButton.addEventListener('click', function(){
    // Clear input fields
    topText.value = '';
    bottomText.value = '';

    //Clear display text

    topDisplay.textContent = '';
    bottomDisplay.textContent = '';

    //Reset image

    memeImage.src = 'placeholder.jpg'
});

newFile.addEventListener('change', function(event) {
    // Get the selected file
    const selectedFile = event.target.files[0];
    
    // Check if a file was actually selected
    if (selectedFile) {
        // Create a URL for our file
        const imageUrl = URL.createObjectURL(selectedFile);
        
        // Set the image source to our new URL
        memeImage.src = imageUrl;
        
        // Add error handling in case image doesn't load
        memeImage.onerror = function() {
            alert("Error loading image. Please try a different file.");
            memeImage.src = 'placeholder.jpg';
        };
    }
});