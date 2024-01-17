document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        {
            name: "Sefer Alp Kurt",
            nickname: "Alppinae",
            image: "assest/css/img/jett.webp",
            details: " Oyuncu öncü veya kontrol karakterlerini tercih eder. Soğuk kanlı olduğu bir ana denk gelmediyseniz şanslısınız geldiyseniz çoktan ilk mermisi sizi bulmuştur. You cant hide but you cant run "
        },
        {
            name: "Ulaş Gündoğdu",
            nickname: "Desperate",
            image: "assest/css/img/Onival.jpg",
            details: " Oyuncu sentinel oynayarak aynı zamanda karakterini yansıtır.Sabrını sınayacak kadar bekler ve arkanı döndüğün an herşeyi çoktan kaybetmişsindir. Desperate is my name but youre the one who seems Desperate right now "
        },
        {
            name: "Ümitcan Karabulut",
            nickname: "Jyix",
            image: "assest/css/img/kj.webp",
            details: " "
        },
        {
            name: "Talha Küçük",
            nickname: "Fionerus",
            image: "assest/css/img/raze.png",
            details: "Duelist Player "
        },
        {
            name: "Furkan Özcan",
            nickname: "dwellerjrr",
            image: "assest/css/img/saova.jpg",
            details: " "
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
