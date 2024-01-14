document.addEventListener("DOMContentLoaded", function () {
    const imageGallery = document.getElementById("imageGallery");
    const keywords = [
        "technology", "programming", "artificial intelligence", "cybersecurity", "data science",
        "robotics", "machine learning", "innovation", "software development", "automation",
        "blockchain", "virtual reality", "gaming", "fintech", "finance", "healthcare",
        "sustainability", "renewable energy", "climate change", "space exploration", "astronomy",
        "nature", "photography", "art", "design", "creativity", "education", "computer",
        "meditation", "mindfulness", "fitness", "nutrition", "travel", "industry", "philosophy",
        "psychology", "literature", "music", "bank", "aikido", "sports", "adventure",
        "entrepreneurship", "leadership", "teamwork", "communication", "diversity", "community"
    ];

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomImageUrl(keyword, width = 400, height = 400) {
        return `https://source.unsplash.com/random/` + width + "x" + height + "/?" + keyword;
    }

    function appendRandomImage() {
        const img = document.createElement("img");
        const width = getRandomNumber(400, 500);
        const height = getRandomNumber(400, 500);
        const randomIndex = Math.floor(Math.random() * keywords.length);
        const randomKeyword = keywords.splice(randomIndex, 1)[0];
        img.src = getRandomImageUrl(randomKeyword, 500, 500);
        imageGallery.appendChild(img);
    }

    for (let i = 0; i < 15; i++) {
        appendRandomImage();
    }
});
