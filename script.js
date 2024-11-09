// tıklama olayını işleyen işlev
function toggleDetails(event) {
    const details = event.currentTarget;
    const summary = details.querySelector("summary");
    const expandIcon = summary.querySelector(".expand-icon");
    const detailsContent = details.querySelector(".faq-content");

    if (details.open) {
        // Eksi ikonu göster
        expandIcon.src = "assetst/icons8-minus-26.png";
        // İçeriğin yüksekliğini otomatik ayarla
        detailsContent.style.maxHeight = detailsContent.scrollHeight + "px";
    } else {
        // Artı ikonu göster
        expandIcon.src = "assetst/icons8-plus-24.png";
        // İçeriği kapatırken maxHeight'ı sıfırla
        detailsContent.style.maxHeight = "0";
    }
}

// Tüm details öğelerine toggle olayını ekle
const detailsElements = document.querySelectorAll("details");
detailsElements.forEach((details) => {
    // Toggle olayını 'toggle' etkinliğinde dinle (click yerine daha uygun)
    details.addEventListener("toggle", toggleDetails);
});
