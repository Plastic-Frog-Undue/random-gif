const img = document.getElementById("gif");
    document.querySelector(".btn").addEventListener("click", function() {
        const searchTerm = document.getElementById("text").value;
        const url = 'https://api.giphy.com/v1/gifs/translate?api_key=JpcXLKawpQTKLP4tveXfjO1ayHGYuryQ&s=${searchTerm}';

        fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Something went wrong");
            return response.json();
        })
        .then(data => {
            img.src = data.data.images.original.url;
        })
        .catch(error => {
            console.error(error);
            img.alt = "Could not load GIF";
        });

    });