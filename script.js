// Sample pet data with fake information
const pets = [
    { id: 1, name: "Max", type: "dog", breed: "Golden Retriever", age: "young", size: "large", gender: "male", location: "Sunshine Animal Shelter", emoji: "🐕", description: "Friendly and energetic, loves to play fetch and go on long walks." },
    { id: 2, name: "Luna", type: "cat", breed: "Siamese", age: "adult", size: "small", gender: "female", location: "Paws & Whiskers Rescue", emoji: "🐱", description: "Graceful and affectionate, enjoys quiet moments and gentle pets." },
    { id: 3, name: "Charlie", type: "dog", breed: "Labrador Mix", age: "baby", size: "medium", gender: "male", location: "Happy Tails Foundation", emoji: "🐶", description: "Playful puppy with lots of energy and love to give." },
    { id: 4, name: "Bella", type: "cat", breed: "Persian", age: "senior", size: "small", gender: "female", location: "Meow Town Shelter", emoji: "🐈", description: "Calm and gentle senior cat looking for a quiet home." },
    { id: 5, name: "Rocky", type: "dog", breed: "German Shepherd", age: "adult", size: "large", gender: "male", location: "Canine Companions", emoji: "🐕‍🦺", description: "Loyal and protective, great with families and loves outdoor activities." },
    { id: 6, name: "Mittens", type: "cat", breed: "Tabby", age: "young", size: "small", gender: "female", location: "Furry Friends Haven", emoji: "🐱", description: "Curious and playful, enjoys climbing and exploring." },
    { id: 7, name: "Duke", type: "dog", breed: "Bulldog", age: "adult", size: "medium", gender: "male", location: "Rescue Rovers", emoji: "🐶", description: "Laid-back and friendly, perfect for apartment living." },
    { id: 8, name: "Whiskers", type: "cat", breed: "Maine Coon", age: "young", size: "medium", gender: "male", location: "Kitty Kingdom", emoji: "🐈", description: "Large and fluffy, very social and loves attention." },
    { id: 9, name: "Daisy", type: "dog", breed: "Beagle", age: "baby", size: "small", gender: "female", location: "Puppy Paradise", emoji: "🐕", description: "Sweet and gentle puppy with a great temperament." },
    { id: 10, name: "Oliver", type: "cat", breed: "British Shorthair", age: "adult", size: "medium", gender: "male", location: "Cat Castle Shelter", emoji: "🐱", description: "Independent but loving, enjoys both playtime and naps." },
    { id: 11, name: "Zeus", type: "dog", breed: "Rottweiler", age: "young", size: "large", gender: "male", location: "Big Hearts Rescue", emoji: "🐕‍🦺", description: "Strong and confident, needs an experienced owner." },
    { id: 12, name: "Cleo", type: "cat", breed: "Calico", age: "young", size: "small", gender: "female", location: "Whisker Wonderland", emoji: "🐈", description: "Sassy and spirited, full of personality and charm." },
    { id: 13, name: "Buddy", type: "dog", breed: "Poodle Mix", age: "senior", size: "small", gender: "male", location: "Golden Years Pet Home", emoji: "🐩", description: "Gentle senior dog looking for a peaceful retirement home." },
    { id: 14, name: "Nala", type: "cat", breed: "Bengal", age: "young", size: "medium", gender: "female", location: "Exotic Pets Rescue", emoji: "🐆", description: "Active and intelligent, loves interactive toys and games." },
    { id: 15, name: "Cooper", type: "dog", breed: "Australian Shepherd", age: "young", size: "medium", gender: "male", location: "Country Critters Shelter", emoji: "🐕", description: "Smart and energetic, needs lots of exercise and mental stimulation." },
    { id: 16, name: "Smokey", type: "cat", breed: "Russian Blue", age: "adult", size: "small", gender: "male", location: "Urban Cats Haven", emoji: "🐱", description: "Quiet and reserved, perfect for a calm household." },
    { id: 17, name: "Rosie", type: "dog", breed: "Corgi", age: "baby", size: "small", gender: "female", location: "Little Paws Sanctuary", emoji: "🐶", description: "Adorable puppy with short legs and a big heart." },
    { id: 18, name: "Tigger", type: "cat", breed: "Orange Tabby", age: "young", size: "medium", gender: "male", location: "Tabby Town", emoji: "🐈", description: "Bouncy and fun-loving, always ready to play." },
    { id: 19, name: "Sadie", type: "dog", breed: "Pit Bull Mix", age: "adult", size: "medium", gender: "female", location: "Second Chance Shelter", emoji: "🐕", description: "Sweet and misunderstood, excellent with children." },
    { id: 20, name: "Shadow", type: "cat", breed: "Black Cat", age: "adult", size: "small", gender: "male", location: "Midnight Meows", emoji: "🐈‍⬛", description: "Sleek and mysterious, loves cozy spots and treats." },
    { id: 21, name: "Thumper", type: "rabbit", breed: "Holland Lop", age: "young", size: "small", gender: "male", location: "Bunny Burrow Rescue", emoji: "🐰", description: "Gentle and friendly rabbit, great for families." },
    { id: 22, name: "Snowball", type: "rabbit", breed: "Lionhead", age: "baby", size: "small", gender: "female", location: "Hoppy Homes", emoji: "🐇", description: "Fluffy and adorable baby bunny looking for love." },
    { id: 23, name: "Tweety", type: "bird", breed: "Canary", age: "young", size: "small", gender: "male", location: "Wings & Things Aviary", emoji: "🐦", description: "Beautiful singer, fills your home with cheerful songs." },
    { id: 24, name: "Polly", type: "bird", breed: "Parakeet", age: "adult", size: "small", gender: "female", location: "Feathered Friends Sanctuary", emoji: "🦜", description: "Social and chatty, loves interaction and attention." }
];

let filteredPets = [...pets];

// Load pets on page load
document.addEventListener('DOMContentLoaded', function() {
    displayPets(pets);
    updatePetCount();
});

// Display pets in grid
function displayPets(petsToShow) {
    const petGrid = document.getElementById('petGrid');
    petGrid.innerHTML = '';
    
    petsToShow.forEach(pet => {
        const petCard = createPetCard(pet);
        petGrid.appendChild(petCard);
    });
}

// Create pet card element
function createPetCard(pet) {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.onclick = () => showPetDetails(pet);
    
    card.innerHTML = `
        <div class="pet-image">${pet.emoji}</div>
        <div class="pet-info">
            <h3 class="pet-name">${pet.name}</h3>
            <div class="pet-details">
                <span class="pet-tag">${pet.breed}</span>
                <span class="pet-tag">${pet.age}</span>
                <span class="pet-tag">${pet.size}</span>
            </div>
            <div class="pet-location">📍 ${pet.location}</div>
            <p class="pet-description">${pet.description}</p>
            <button class="learn-more-btn">Learn More</button>
        </div>
    `;
    
    return card;
}

// Filter pets
function filterPets() {
    const typeFilter = document.getElementById('typeFilter').value;
    const ageFilter = document.getElementById('ageFilter').value;
    const sizeFilter = document.getElementById('sizeFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;
    
    filteredPets = pets.filter(pet => {
        return (typeFilter === 'all' || pet.type === typeFilter) &&
               (ageFilter === 'all' || pet.age === ageFilter) &&
               (sizeFilter === 'all' || pet.size === sizeFilter) &&
               (genderFilter === 'all' || pet.gender === genderFilter);
    });
    
    displayPets(filteredPets);
    updatePetCount();
}

// Search pets
function searchPets() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm === '') {
        filteredPets = [...pets];
    } else {
        filteredPets = pets.filter(pet => 
            pet.name.toLowerCase().includes(searchTerm) ||
            pet.breed.toLowerCase().includes(searchTerm) ||
            pet.location.toLowerCase().includes(searchTerm) ||
            pet.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayPets(filteredPets);
    updatePetCount();
}

// Update pet count
function updatePetCount() {
    document.getElementById('petCount').textContent = filteredPets.length;
}

// Show pet details in modal
function showPetDetails(pet) {
    const modal = document.getElementById('petModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-pet-image">${pet.emoji}</div>
        <div class="modal-pet-info">
            <h2 class="modal-pet-name">${pet.name}</h2>
            <div class="modal-pet-details">
                <div class="detail-item">
                    <span class="detail-label">Breed</span>
                    <span class="detail-value">${pet.breed}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Age</span>
                    <span class="detail-value">${pet.age}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Size</span>
                    <span class="detail-value">${pet.size}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Gender</span>
                    <span class="detail-value">${pet.gender}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Type</span>
                    <span class="detail-value">${pet.type}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Location</span>
                    <span class="detail-value">${pet.location}</span>
                </div>
            </div>
            <div class="modal-description">
                <h3>About ${pet.name}</h3>
                <p>${pet.description}</p>
            </div>
            <button class="adopt-btn" onclick="adoptPet('${pet.name}')">
                ❤️ Adopt ${pet.name}
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('petModal');
    modal.classList.remove('active');
}

// Adopt pet (demo function)
function adoptPet(petName) {
    alert(`Thank you for your interest in adopting ${petName}! A shelter representative will contact you soon to discuss the next steps.`);
    closeModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('petModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Add enter key support for search
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchPets();
    }
});
