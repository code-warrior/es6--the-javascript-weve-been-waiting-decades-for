// Strings: Tagged templates
let firstDonor = `Frank`,
    firstDonation = 3,
    secondDonor = `Jane`,
    secondDonation = 1;

function thanksForYourDonation(literals, name, donationAmount) {
    return literals[0] + name + literals[1] + donationAmount + literals[2];
}

console.log(thanksForYourDonation`Hi, ${firstDonor}. Thanks for your \$${firstDonation} donation. Animals all over the world thank you for fighting for them.`);
console.log(thanksForYourDonation`Good morning, ${secondDonor}. Your \$${secondDonation} donation is incredibly generous. You’ve just saved hundreds of animals from a life of torture.`);
