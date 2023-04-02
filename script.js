function selectPhotos() {

  // Define photo directories and theme options
const photoDirA = "photosA/";
const photoDirB = "photosB/";
const photoOptionsA = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg",
 "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg"];
const photoOptionsB = ["picture1.jpg", "picture2.jpg", "picture3.jpg"];
const themeOptions = ["動物の生活をより良くしてください", "使用体験をより豊かにしてください", "環境により良くしてください",
"電気を使わずに、同じような機能を実装してください", "家族全体で共有する利点を追加してください"];

// Get photo elements from HTML
const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");

// Get theme element from HTML
const theme = document.getElementById("theme");

// Randomly select photos from directories
const randomPhotoA = photoDirA + photoOptionsA[Math.floor(Math.random() * photoOptionsA.length)];
const randomPhotoB = photoDirB + photoOptionsB[Math.floor(Math.random() * photoOptionsB.length)];

// Set photo sources in HTML
photo1.src = randomPhotoA;
photo2.src = randomPhotoB;

// Randomly select theme from options and set in HTML
theme.textContent = themeOptions[Math.floor(Math.random() * themeOptions.length)];
}
