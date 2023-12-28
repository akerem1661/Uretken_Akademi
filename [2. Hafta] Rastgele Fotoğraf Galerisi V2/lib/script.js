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
    "entrepreneurship", "leadership", "teamwork", "communication", "diversity", "community",
    "color", "light", "shadows", "landscape", "portrait", "macro", "photography", "composition",
    "photography equipment", "night shot", "outdoor", "planets", "night sky", "underwater",
    "birds", "wildlife", "plants", "forests", "beach", "mountains", "city", "nightlife",
    "archaeology", "architecture", "history", "culture", "festivals", "fashion", "food", "coffee",
    "books", "tech advancements", "future cities", "urban transformation", "transportation", "infrastructure",
    "people", "emotion", "eyes", "smile", "love", "happiness", "sadness",
    "colorful", "black and white", "minimalist", "retro", "modern", "cool tones", "warm tones",
    "geometric", "abstract", "natural light", "studio shot", "panorama", "macro details", "backlight",
    "photo filters", "vertical shot", "horizontal shot", "portrait mode", "landscape mode", "macro mode",
    "color burst", "contrast", "image clarity", "composition rules", "pose", "perspective", "night photography", "reflections",
    "irregular patterns", "textures", "modern architecture", "traditional architecture", "minimalist design", "street art", "graffiti", "vintage",
    "natural landscapes", "transportation vehicles", "bicycles", "cars", "motorcycles", "watercraft", "aircraft", "train",
    "travel destinations", "vacation", "adventure sports", "extreme sports", "camping", "mountaineering", "diving", "sailing",
    "running", "swimming", "cycling", "volleyball", "basketball", "football", "tennis", "golf",
    "coffee shot", "food photography", "recipes", "desserts", "beverages", "restaurants", "street food", "fast food",
    "gourmet cuisine", "organic products", "healthy eating", "vegetarian dishes", "vegan dishes", "gluten-free dishes", "world cuisines", "breakfast",
    "aquarium", "zoo", "circus", "concert", "theatre", "film", "film set", "game",
    "museum", "art gallery", "sculpture", "painting", "modern art", "traditional art", "folk art", "exhibition",
    "design objects", "architectural details", "antiques", "collections", "hobbies", "toys", "games", "electronic devices",
    "musical instruments", "concerts", "festivals", "music bands", "solo artists", "concert atmosphere", "party", "nightlife",
    "business", "office life", "business meetings", "business relationships", "business strategies", "business achievements", "financial charts", "business equipment",
    "leadership", "education", "educational technologies", "classroom education", "online education", "career development", "remote work", "office decoration",
    "natural light", "studio shot", "landscape shot", "macro details", "minimalist design", "color theory", "composition rules", "cool tones",
    "warm tones", "retro style", "fashion photography", "fashion designs", "runway", "fashion blog", "social media", "cross-cultural communication",
    "food culture", "music culture", "art culture", "travel culture", "modern living", "cultural exchange"
];


    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomImageUrl(keyword, width = 400, height = 400) {
        return `https://source.unsplash.com/random/` + width + "x" + height + "/?" + keyword;
    }

    function replaceImage(img) {
        const width = getRandomNumber(400, 500);
        const height = getRandomNumber(400, 500);
        const randomIndex = Math.floor(Math.random() * keywords.length);
        const randomKeyword = keywords.splice(randomIndex, 1)[0];
        img.src = getRandomImageUrl(randomKeyword, 500, 500);
    }

    function appendRandomImage() {
        const img = document.createElement("img");
        replaceImage(img);
        img.addEventListener("mouseover", function () {
            replaceImage(img);
        });
        imageGallery.appendChild(img);
    }

    for (let i = 0; i < 15; i++) {
        appendRandomImage();
    }
});
