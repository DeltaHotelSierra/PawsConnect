// Sample pet data with fake information
const pets = [
    { id: 1, name: "Max", type: "dog", breed: "Golden Retriever", age: "young", size: "large", gender: "male", location: "Sunshine Animal Shelter", shelterId: 1, emoji: "🐕", description: "Friendly and energetic, loves to play fetch and go on long walks.", weight: 32.5, birthDate: "2023-03-15" },
    { id: 2, name: "Luna", type: "cat", breed: "Siamese", age: "adult", size: "small", gender: "female", location: "Paws & Whiskers Rescue", shelterId: 2, emoji: "🐱", description: "Graceful and affectionate, enjoys quiet moments and gentle pets.", weight: 4.2, birthDate: "2021-06-22" },
    { id: 3, name: "Charlie", type: "dog", breed: "Labrador Mix", age: "baby", size: "medium", gender: "male", location: "Happy Tails Foundation", shelterId: 3, emoji: "🐶", description: "Playful puppy with lots of energy and love to give.", weight: 12.8, birthDate: "2025-10-05" },
    { id: 4, name: "Bella", type: "cat", breed: "Persian", age: "senior", size: "small", gender: "female", location: "Meow Town Shelter", shelterId: 4, emoji: "🐈", description: "Calm and gentle senior cat looking for a quiet home.", weight: 5.5, birthDate: "2016-04-10" },
    { id: 5, name: "Rocky", type: "dog", breed: "German Shepherd", age: "adult", size: "large", gender: "male", location: "Canine Companions", shelterId: 5, emoji: "🐕‍🦺", description: "Loyal and protective, great with families and loves outdoor activities.", weight: 38.2, birthDate: "2020-08-18" },
    { id: 6, name: "Mittens", type: "cat", breed: "Tabby", age: "young", size: "small", gender: "female", location: "Furry Friends Haven", shelterId: 6, emoji: "🐱", description: "Curious and playful, enjoys climbing and exploring.", weight: 3.8, birthDate: "2023-12-01" },
    { id: 7, name: "Duke", type: "dog", breed: "Bulldog", age: "adult", size: "medium", gender: "male", location: "Rescue Rovers", shelterId: 7, emoji: "🐶", description: "Laid-back and friendly, perfect for apartment living.", weight: 22.5, birthDate: "2021-02-14" },
    { id: 8, name: "Whiskers", type: "cat", breed: "Maine Coon", age: "young", size: "medium", gender: "male", location: "Kitty Kingdom", shelterId: 8, emoji: "🐈", description: "Large and fluffy, very social and loves attention.", weight: 7.2, birthDate: "2023-05-20" },
    { id: 9, name: "Daisy", type: "dog", breed: "Beagle", age: "baby", size: "small", gender: "female", location: "Puppy Paradise", shelterId: 9, emoji: "🐕", description: "Sweet and gentle puppy with a great temperament.", weight: 8.5, birthDate: "2025-11-12" },
    { id: 10, name: "Oliver", type: "cat", breed: "British Shorthair", age: "adult", size: "medium", gender: "male", location: "Cat Castle Shelter", shelterId: 10, emoji: "🐱", description: "Independent but loving, enjoys both playtime and naps.", weight: 6.3, birthDate: "2020-09-30" },
    { id: 11, name: "Zeus", type: "dog", breed: "Rottweiler", age: "young", size: "large", gender: "male", location: "Big Hearts Rescue", shelterId: 11, emoji: "🐕‍🦺", description: "Strong and confident, needs an experienced owner.", weight: 42.0, birthDate: "2023-07-08" },
    { id: 12, name: "Cleo", type: "cat", breed: "Calico", age: "young", size: "small", gender: "female", location: "Whisker Wonderland", shelterId: 12, emoji: "🐈", description: "Sassy and spirited, full of personality and charm.", weight: 4.0, birthDate: "2024-01-25" },
    { id: 13, name: "Buddy", type: "dog", breed: "Poodle Mix", age: "senior", size: "small", gender: "male", location: "Golden Years Pet Home", shelterId: 13, emoji: "🐩", description: "Gentle senior dog looking for a peaceful retirement home.", weight: 14.2, birthDate: "2015-11-03" },
    { id: 14, name: "Nala", type: "cat", breed: "Bengal", age: "young", size: "medium", gender: "female", location: "Exotic Pets Rescue", shelterId: 14, emoji: "🐆", description: "Active and intelligent, loves interactive toys and games.", weight: 5.8, birthDate: "2023-09-17" },
    { id: 15, name: "Cooper", type: "dog", breed: "Australian Shepherd", age: "young", size: "medium", gender: "male", location: "Country Critters Shelter", shelterId: 15, emoji: "🐕", description: "Smart and energetic, needs lots of exercise and mental stimulation.", weight: 25.3, birthDate: "2024-02-28" },
    { id: 16, name: "Smokey", type: "cat", breed: "Russian Blue", age: "adult", size: "small", gender: "male", location: "Urban Cats Haven", shelterId: 16, emoji: "🐱", description: "Quiet and reserved, perfect for a calm household.", weight: 4.7, birthDate: "2019-12-11" },
    { id: 17, name: "Rosie", type: "dog", breed: "Corgi", age: "baby", size: "small", gender: "female", location: "Little Paws Sanctuary", shelterId: 17, emoji: "🐶", description: "Adorable puppy with short legs and a big heart.", weight: 9.8, birthDate: "2025-12-20" },
    { id: 18, name: "Tigger", type: "cat", breed: "Orange Tabby", age: "young", size: "medium", gender: "male", location: "Tabby Town", shelterId: 18, emoji: "🐈", description: "Bouncy and fun-loving, always ready to play.", weight: 5.5, birthDate: "2024-04-07" },
    { id: 19, name: "Sadie", type: "dog", breed: "Pit Bull Mix", age: "adult", size: "medium", gender: "female", location: "Second Chance Shelter", shelterId: 19, emoji: "🐕", description: "Sweet and misunderstood, excellent with children.", weight: 28.7, birthDate: "2021-07-19" },
    { id: 20, name: "Shadow", type: "cat", breed: "Black Cat", age: "adult", size: "small", gender: "male", location: "Midnight Meows", shelterId: 20, emoji: "🐈‍⬛", description: "Sleek and mysterious, loves cozy spots and treats.", weight: 4.5, birthDate: "2020-10-31" },
    { id: 21, name: "Thumper", type: "rabbit", breed: "Holland Lop", age: "young", size: "small", gender: "male", location: "Bunny Burrow Rescue", shelterId: 21, emoji: "🐰", description: "Gentle and friendly rabbit, great for families.", weight: 1.8, birthDate: "2023-08-14" },
    { id: 22, name: "Snowball", type: "rabbit", breed: "Lionhead", age: "baby", size: "small", gender: "female", location: "Hoppy Homes", shelterId: 22, emoji: "🐇", description: "Fluffy and adorable baby bunny looking for love.", weight: 0.9, birthDate: "2025-11-28" },
    { id: 23, name: "Tweety", type: "bird", breed: "Canary", age: "young", size: "small", gender: "male", location: "Wings & Things Aviary", shelterId: 23, emoji: "🐦", description: "Beautiful singer, fills your home with cheerful songs.", weight: 0.02, birthDate: "2024-03-05" },
    { id: 24, name: "Polly", type: "bird", breed: "Parakeet", age: "adult", size: "small", gender: "female", location: "Feathered Friends Sanctuary", shelterId: 24, emoji: "🦜", description: "Social and chatty, loves interaction and attention.", weight: 0.03, birthDate: "2022-01-18" }
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
            <button class="adopt-btn" onclick="openApplicationForm(${pet.id})">
                ❤️ Apply to Adopt ${pet.name}
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

// Open application form
function openApplicationForm(petId) {
    const pet = pets.find(p => p.id === petId);
    if (!pet) return;
    
    // Close pet details modal
    closeModal();
    
    // Open application modal
    const applicationModal = document.getElementById('applicationModal');
    document.getElementById('appPetName').textContent = pet.name;
    document.getElementById('petId').value = pet.id;
    document.getElementById('shelterId').value = pet.shelterId;
    document.getElementById('applicationDate').value = new Date().toISOString().split('T')[0];
    
    applicationModal.classList.add('active');
}

// Close application modal
function closeApplicationModal() {
    const modal = document.getElementById('applicationModal');
    modal.classList.remove('active');
    document.getElementById('adoptionForm').reset();
}

// Submit application
function submitApplication(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const applicationData = {
        // Adopters table fields
        adopter: {
            name: formData.get('adopter_name'),
            email: formData.get('adopter_email'),
            phone: formData.get('adopter_phone')
        },
        // Applications table fields
        application: {
            pet_id: parseInt(formData.get('pet_id')),
            shelter_id: parseInt(formData.get('shelter_id')),
            app_date: formData.get('app_date'),
            status: 'pending', // Default status
            housing_type: formData.get('housing_type'),
            has_yard: formData.get('has_yard'),
            other_pets: formData.get('other_pets'),
            experience: formData.get('experience'),
            reason: formData.get('reason'),
            vet_name: formData.get('vet_name'),
            vet_phone: formData.get('vet_phone')
        }
    };
    
    // In a real application, this would send data to the server
    console.log('Application submitted:', applicationData);
    
    // Show success message
    const petName = pets.find(p => p.id === applicationData.application.pet_id).name;
    alert(`✅ Application Submitted!\n\nThank you for your interest in adopting ${petName}!\n\nYour application has been received and is now pending review. A representative from ${pets.find(p => p.id === applicationData.application.pet_id).location} will contact you at ${applicationData.adopter.email} within 2-3 business days.\n\nApplication ID: APP-${Date.now()}\nStatus: Pending Review`);
    
    closeApplicationModal();
}

// Adopt pet (legacy function - now opens application form)
function adoptPet(petName) {
    const pet = pets.find(p => p.name === petName);
    if (pet) {
        openApplicationForm(pet.id);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const petModal = document.getElementById('petModal');
    const applicationModal = document.getElementById('applicationModal');
    
    if (event.target === petModal) {
        closeModal();
    }
    if (event.target === applicationModal) {
        closeApplicationModal();
    }
}

// Add enter key support for search
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchPets();
    }
});
