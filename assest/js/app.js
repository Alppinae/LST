document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        {
            name: "Sefer Alp Kurt",
            nickname: "Alppinae",
            image: "assest/css/img/jett.webp",
            details: "Oyuncu1, takımımızın önde gelen isimlerinden biridir. Deneyimli ve stratejik bir oyuncudur."
        },
        {
            name: "Ulaş Gündoğdu",
            nickname: "Desperate",
            image: "assest/css/img/Onival.jpg",
            details: "Küçük Takımın Küçük Taraftarı 8 "
        },
        {
            name: "Ümitcan Karabulut",
            nickname: "Jyix",
            image: "assest/css/img/kj.webp",
            details: "Oyuncu3, ekip içindeki takım ruhunu destekleyen bir liderdir. Stratejik düşünme yeteneği ile bilinir."
        },
        {
            name: "Talha Küçük",
            nickname: "Fionerus",
            image: "assest/css/img/raze.png",
            details: "Duelist Player "
        },
        {
            name: "Oyuncu5",
            nickname: "TakmaAd5",
            image: "assest/css/img/saova.jpg",
            details: "Oyuncu5, takımın stratejilerini hızlı bir şekilde uygulayabilen bir oyuncudur."
        },
    ];

    const teamMembersContainer = document.getElementById("team-members");

    teamMembers.forEach((member) => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");

        const memberImage = document.createElement("img");
        memberImage.classList.add("member-image");
        memberImage.src = member.image;
        memberImage.alt = `${member.name}'s image`;

        const memberDetails = document.createElement("div");
        memberDetails.classList.add("member-details");
        memberDetails.innerHTML = `<h3>${member.name}</h3><p>${member.nickname}</p><button class="details-button">Detayları Göster</button><p class="details">${member.details}</p>`;
        
        memberCard.appendChild(memberImage);
        memberCard.appendChild(memberDetails);
        teamMembersContainer.appendChild(memberCard);
    });

    const detailsButtons = document.querySelectorAll(".details-button");
    detailsButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;
            details.classList.toggle("show");
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {

    var logo = document.createElement('img');
    logo.src = 'assest/css/img/download.png'; 
    logo.alt = 'Logo';
    logo.id = 'logo';

    document.body.appendChild(logo);
});
