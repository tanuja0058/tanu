function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("largeImg");
    var captionText = document.getElementById("caption");

    // Get the image clicked on's source URL
    var imgSrc = img.querySelector('img').src;

    // Extract the filename from the full path (e.g., image1.jpg)
    var imgFileName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1);

    // Set the modal's background image URL
    modal.style.display = "block";
    modalImg.src = imgSrc;

    // Initialize caption text
    var captionTextContent = '';

    // Use the switch statement to handle specific captions based on the image filename
    switch (imgFileName) {
        case "image1.jpg":
            captionTextContent = "Wat Suthat temple was built over 200 years ago and ever since it is a peaceful place of worship.";
            break;
        case "image2.jpg":
            captionTextContent = "Wat Chedi Luang is among the most famous temples in Chiang Mai. It is most symbolically identified by its incomplete pagoda, which was brought down from a lofty 85 meters to 60 meters after an earthquake in 1545 and now remains partly destroyed. Nevertheless, it is an enormous structure engraved with mythological motifs and enshrining several Buddha images.";
            break;
        case "image3.jpg":
            captionTextContent = "Since Ayutthaya was the Thai kingdom's ancient capital, it is now the historical metropolis of the country with many ancient relics and buildings, Wat Phra Sri Sanphet being one of them. This 14th-century temple was regarded as the holiest religious site in the kingdom, structured with the grandest architecture anyone had ever laid eyes on. It formed part of the Royal Palace complex of King Ramathibodi I and his successors.";
            break;
        case "image4.jpg":
            captionTextContent = "Wat Chiang Man, built by the first king of Lanna, Mangrai, is an ancient Buddhist temple in the Chiang Mai Province of Northern Thailand. When Mangrai established Chiang Mai as the capital of his royal kingdom, Wat Chiang Man was the first temple to be built, way back in 1297 CE. The shrine is famous for the Crystal Buddha, locally called Phra Sae Tang Khamani, known for its healing and protective powers.";
            break;
        case "image5.jpg":
            captionTextContent = "Atop Doi Suthep Mountain on the western outskirts of Chiang Mai, the Wat Phra That Doi Suthep temple is one of the most sacred temples in Thailand. The views from the temple and the beauty of the surrounding area are what make this temple unique to tourists. The temple was built in 1386, and it is believed that a bone from the Buddha's shoulder is housed there.";
            break;
        case "image6.jpg":
            captionTextContent = "Wat Mahathat is the ruins of an ancient Buddhist temple in Ayutthaya, the capital of the former Phra Nakhon Si Ayutthaya Province in the valley of Chao Phraya. Wat Mahathat was built in 1374 by King Boromma Rachathirat I to enshrine Buddha relics. It represents Mount Meru and has a legacy of both Buddhism and Hinduism. It is also known as the 'Temple of the Great Relic.'";
            break;
        default:
            captionTextContent = "Explore the beauty of Thailand through its architectural wonders and historical landmarks.";
            break;
    }

    // Set the caption text in the modal
    captionText.innerHTML = captionTextContent;

    // Close the modal when clicking outside or on the close button
    document.addEventListener('click', function (e) {
        if (e.target == modal || e.target.classList.contains('close')) {
            modal.style.display = "none";
        }
    });
}
