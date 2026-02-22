// PawsConnect - Pet Adoption Platform
// Database Schema Implementation
// 
// Tables (1:N relationships):
// 1. Shelters: shelter_id (PK), name, address, contact
// 2. Pets: pet_id (PK), name, breed, birth_date, weight, shelter_id (FK → Shelters)
// 3. Adopters: adopter_id (PK), name, address, contact
// 4. Applications: application_id (PK), adopter_id (FK → Adopters), pet_id (FK → Pets), application_date, status
// 5. MedicalRecords: record_id (PK), pet_id (FK → Pets), checkup_time, notes

// Pet data following database schema
// Pets table: pet_id, name, breed, birth_date, weight, shelter_id
const pets = [
    { pet_id: 1, name: "Max", breed: "Golden Retriever", birth_date: "2023-03-15", weight: 32.5, shelter_id: 1 },
    { pet_id: 2, name: "Luna", breed: "Siamese", birth_date: "2021-06-22", weight: 4.2, shelter_id: 2 },
    { pet_id: 3, name: "Charlie", breed: "Labrador Mix", birth_date: "2025-10-05", weight: 12.8, shelter_id: 3 },
    { pet_id: 4, name: "Bella", breed: "Persian", birth_date: "2016-04-10", weight: 5.5, shelter_id: 4 },
    { pet_id: 5, name: "Rocky", breed: "German Shepherd", birth_date: "2020-08-18", weight: 38.2, shelter_id: 5 },
    { pet_id: 6, name: "Mittens", breed: "Tabby", birth_date: "2023-12-01", weight: 3.8, shelter_id: 6 },
    { pet_id: 7, name: "Duke", breed: "Bulldog", birth_date: "2021-02-14", weight: 22.5, shelter_id: 7 },
    { pet_id: 8, name: "Whiskers", breed: "Maine Coon", birth_date: "2023-05-20", weight: 7.2, shelter_id: 8 },
    { pet_id: 9, name: "Daisy", breed: "Beagle", birth_date: "2025-11-12", weight: 8.5, shelter_id: 9 },
    { pet_id: 10, name: "Oliver", breed: "British Shorthair", birth_date: "2020-09-30", weight: 6.3, shelter_id: 10 },
    { pet_id: 11, name: "Zeus", breed: "Rottweiler", birth_date: "2023-07-08", weight: 42.0, shelter_id: 11 },
    { pet_id: 12, name: "Cleo", breed: "Calico", birth_date: "2024-01-25", weight: 4.0, shelter_id: 12 },
    { pet_id: 13, name: "Buddy", breed: "Poodle Mix", birth_date: "2015-11-03", weight: 14.2, shelter_id: 13 },
    { pet_id: 14, name: "Nala", breed: "Bengal", birth_date: "2023-09-17", weight: 5.8, shelter_id: 14 },
    { pet_id: 15, name: "Cooper", breed: "Australian Shepherd", birth_date: "2024-02-28", weight: 25.3, shelter_id: 15 },
    { pet_id: 16, name: "Smokey", breed: "Russian Blue", birth_date: "2019-12-11", weight: 4.7, shelter_id: 16 },
    { pet_id: 17, name: "Rosie", breed: "Corgi", birth_date: "2025-12-20", weight: 9.8, shelter_id: 17 },
    { pet_id: 18, name: "Tigger", breed: "Orange Tabby", birth_date: "2024-04-07", weight: 5.5, shelter_id: 18 },
    { pet_id: 19, name: "Sadie", breed: "Pit Bull Mix", birth_date: "2021-07-19", weight: 28.7, shelter_id: 19 },
    { pet_id: 20, name: "Shadow", breed: "Black Cat", birth_date: "2020-10-31", weight: 4.5, shelter_id: 20 },
    { pet_id: 21, name: "Thumper", breed: "Holland Lop", birth_date: "2023-08-14", weight: 1.8, shelter_id: 21 },
    { pet_id: 22, name: "Snowball", breed: "Lionhead", birth_date: "2025-11-28", weight: 0.9, shelter_id: 22 },
    { pet_id: 23, name: "Tweety", breed: "Canary", birth_date: "2024-03-05", weight: 0.02, shelter_id: 23 },
    { pet_id: 24, name: "Polly", breed: "Parakeet", birth_date: "2022-01-18", weight: 0.03, shelter_id: 24 }
];

// Shelter data following database schema
// Shelters table: shelter_id, name, address, contact
const shelters = [
    { shelter_id: 1, name: "Sunshine Animal Shelter", address: "123 Sunny Lane, Springfield, CA 94102", contact: "(555) 123-4567" },
    { shelter_id: 2, name: "Paws & Whiskers Rescue", address: "456 Feline Way, Oakland, CA 94601", contact: "(555) 234-5678" },
    { shelter_id: 3, name: "Happy Tails Foundation", address: "789 Joy Street, San Jose, CA 95110", contact: "(555) 345-6789" },
    { shelter_id: 4, name: "Meow Town Shelter", address: "321 Cat Avenue, Berkeley, CA 94704", contact: "(555) 456-7890" },
    { shelter_id: 5, name: "Canine Companions", address: "654 Bark Boulevard, Fremont, CA 94536", contact: "(555) 567-8901" },
    { shelter_id: 6, name: "Furry Friends Haven", address: "987 Pet Place, Hayward, CA 94541", contact: "(555) 678-9012" },
    { shelter_id: 7, name: "Rescue Rovers", address: "147 Helper Road, San Mateo, CA 94401", contact: "(555) 789-0123" },
    { shelter_id: 8, name: "Kitty Kingdom", address: "258 Royal Street, Palo Alto, CA 94301", contact: "(555) 890-1234" },
    { shelter_id: 9, name: "Puppy Paradise", address: "369 Playtime Lane, Mountain View, CA 94040", contact: "(555) 901-2345" },
    { shelter_id: 10, name: "Cat Castle Shelter", address: "741 Meow Manor, Sunnyvale, CA 94086", contact: "(555) 012-3456" },
    { shelter_id: 11, name: "Big Hearts Rescue", address: "852 Courage Court, Santa Clara, CA 95050", contact: "(555) 123-7890" },
    { shelter_id: 12, name: "Whisker Wonderland", address: "963 Fantasy Road, Milpitas, CA 95035", contact: "(555) 234-8901" },
    { shelter_id: 13, name: "Golden Years Pet Home", address: "159 Retirement Way, Cupertino, CA 95014", contact: "(555) 345-9012" },
    { shelter_id: 14, name: "Exotic Pets Rescue", address: "753 Safari Street, Los Gatos, CA 95030", contact: "(555) 456-0123" },
    { shelter_id: 15, name: "Country Critters Shelter", address: "951 Ranch Road, Morgan Hill, CA 95037", contact: "(555) 567-1234" },
    { shelter_id: 16, name: "Urban Cats Haven", address: "357 City Center, San Francisco, CA 94102", contact: "(555) 678-2345" },
    { shelter_id: 17, name: "Little Paws Sanctuary", address: "246 Tiny Trail, Saratoga, CA 95070", contact: "(555) 789-3456" },
    { shelter_id: 18, name: "Tabby Town", address: "864 Stripe Street, Campbell, CA 95008", contact: "(555) 890-4567" },
    { shelter_id: 19, name: "Second Chance Shelter", address: "135 Hope Avenue, Gilroy, CA 95020", contact: "(555) 901-5678" },
    { shelter_id: 20, name: "Midnight Meows", address: "791 Shadow Lane, Sunnyvale, CA 94085", contact: "(555) 012-6789" },
    { shelter_id: 21, name: "Bunny Burrow Rescue", address: "468 Carrot Court, Santa Cruz, CA 95060", contact: "(555) 123-8901" },
    { shelter_id: 22, name: "Hoppy Homes", address: "579 Jump Street, Watsonville, CA 95076", contact: "(555) 234-9012" },
    { shelter_id: 23, name: "Wings & Things Aviary", address: "802 Flight Path, Scotts Valley, CA 95066", contact: "(555) 345-0123" },
    { shelter_id: 24, name: "Feathered Friends Sanctuary", address: "913 Nest Road, Aptos, CA 95003", contact: "(555) 456-1234" }
];

// Helper function to get shelter name by ID
function getShelterById(shelterId) {
    return shelters.find(s => s.shelter_id === shelterId);
}

// Helper function to calculate age from birth_date
function calculateAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    const ageInMonths = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
    
    if (ageInMonths < 12) return "baby";
    if (ageInMonths < 24) return "young";
    if (ageInMonths < 84) return "adult";
    return "senior";
}

// Helper function to determine pet type from breed
function getPetType(breed) {
    const dogBreeds = ["Golden Retriever", "Labrador Mix", "German Shepherd", "Bulldog", "Beagle", "Rottweiler", "Poodle Mix", "Australian Shepherd", "Corgi", "Pit Bull Mix"];
    const catBreeds = ["Siamese", "Persian", "Tabby", "Maine Coon", "British Shorthair", "Calico", "Bengal", "Russian Blue", "Orange Tabby", "Black Cat"];
    const rabbitBreeds = ["Holland Lop", "Lionhead"];
    const birdBreeds = ["Canary", "Parakeet"];
    
    if (dogBreeds.includes(breed)) return "dog";
    if (catBreeds.includes(breed)) return "cat";
    if (rabbitBreeds.includes(breed)) return "rabbit";
    if (birdBreeds.includes(breed)) return "bird";
    return "other";
}

// Helper function to get emoji for pet type
function getPetEmoji(type) {
    const emojis = {
        dog: "🐕",
        cat: "🐱",
        rabbit: "🐰",
        bird: "🐦"
    };
    return emojis[type] || "🐾";
}

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
    
    const petType = getPetType(pet.breed);
    const age = calculateAge(pet.birth_date);
    const shelter = getShelterById(pet.shelter_id);
    const emoji = getPetEmoji(petType);
    
    // Determine size based on weight
    let size = "small";
    if (pet.weight > 15) size = "medium";
    if (pet.weight > 30) size = "large";
    
    card.innerHTML = `
        <div class="pet-image">${emoji}</div>
        <div class="pet-info">
            <h3 class="pet-name">${pet.name}</h3>
            <div class="pet-details">
                <span class="pet-tag">${pet.breed}</span>
                <span class="pet-tag">${age}</span>
                <span class="pet-tag">${size}</span>
            </div>
            <div class="pet-location">📍 ${shelter ? shelter.name : 'Unknown Shelter'}</div>
            <p class="pet-description">Weight: ${pet.weight} lbs | Born: ${pet.birth_date}</p>
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
    
    filteredPets = pets.filter(pet => {
        const petType = getPetType(pet.breed);
        const petAge = calculateAge(pet.birth_date);
        let petSize = "small";
        if (pet.weight > 15) petSize = "medium";
        if (pet.weight > 30) petSize = "large";
        
        return (typeFilter === 'all' || petType === typeFilter) &&
               (ageFilter === 'all' || petAge === ageFilter) &&
               (sizeFilter === 'all' || petSize === sizeFilter);
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
        filteredPets = pets.filter(pet => {
            const shelter = getShelterById(pet.shelter_id);
            return pet.name.toLowerCase().includes(searchTerm) ||
                   pet.breed.toLowerCase().includes(searchTerm) ||
                   (shelter && shelter.name.toLowerCase().includes(searchTerm));
        });
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
    
    const petType = getPetType(pet.breed);
    const age = calculateAge(pet.birth_date);
    const emoji = getPetEmoji(petType);
    const shelter = getShelterById(pet.shelter_id);
    
    let size = "small";
    if (pet.weight > 15) size = "medium";
    if (pet.weight > 30) size = "large";
    
    modalContent.innerHTML = `
        <div class="modal-pet-image">${emoji}</div>
        <div class="modal-pet-info">
            <h2 class="modal-pet-name">${pet.name}</h2>
            <div class="modal-pet-details">
                <div class="detail-item">
                    <span class="detail-label">Pet ID</span>
                    <span class="detail-value">#${pet.pet_id}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Breed</span>
                    <span class="detail-value">${pet.breed}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Birth Date</span>
                    <span class="detail-value">${pet.birth_date}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Age Category</span>
                    <span class="detail-value">${age}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Weight</span>
                    <span class="detail-value">${pet.weight} lbs</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Size</span>
                    <span class="detail-value">${size}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Type</span>
                    <span class="detail-value">${petType}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Shelter</span>
                    <span class="detail-value">${shelter ? shelter.name : 'Unknown'}</span>
                </div>
            </div>
            <div class="modal-description">
                <h3>About ${pet.name}</h3>
                <p>${shelter ? shelter.name : 'Unknown Shelter'} - ${shelter ? shelter.contact : 'Contact unavailable'}</p>
                <p>${shelter ? shelter.address : 'Address unavailable'}</p>
            </div>
            <button class="adopt-btn" onclick="openApplicationForm(${pet.pet_id})">
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
    const pet = pets.find(p => p.pet_id === petId);
    if (!pet) return;
    
    // Close pet details modal
    closeModal();
    
    // Open application modal
    const applicationModal = document.getElementById('applicationModal');
    document.getElementById('appPetName').textContent = pet.name;
    document.getElementById('petId').value = pet.pet_id;
    document.getElementById('shelterId').value = pet.shelter_id;
    document.getElementById('applicationDate').value = new Date().toISOString().split('T')[0];
    
    applicationModal.classList.add('active');
}

// Close application modal
function closeApplicationModal() {
    const modal = document.getElementById('applicationModal');
    modal.classList.remove('active');
    document.getElementById('adoptionForm').reset();
}

// Submit application (following database schema)
function submitApplication(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    // Following database schema strictly:
    // Adopters table: adopter_id, name, address, contact
    // Applications table: application_id, adopter_id (FK), pet_id (FK), application_date, status
    
    const applicationData = {
        adopter: {
            // adopter_id would be generated by database
            name: formData.get('adopter_name'),
            address: "Address pending home visit",  // In real app, would collect this
            contact: `Email: ${formData.get('adopter_email')}, Phone: ${formData.get('adopter_phone')}`
        },
        application: {
            // application_id would be generated by database
            // adopter_id would be the FK to the adopter created above
            pet_id: parseInt(formData.get('pet_id')),
            application_date: formData.get('app_date'),
            status: 'pending'
        }
    };
    
    // In a real application, this would send data to the server
    // The server would:
    // 1. Create adopter record and get adopter_id
    // 2. Create application record with adopter_id FK and pet_id FK
    console.log('Application Data (following database schema):', applicationData);
    
    // Show success message
    const pet = pets.find(p => p.pet_id === applicationData.application.pet_id);
    const shelter = getShelterById(pet.shelter_id);
    alert(`✅ Application Submitted!\n\nThank you for your interest in adopting ${pet.name}!\n\nYour application has been received and is now pending review. A representative from ${shelter ? shelter.name : 'the shelter'} will contact you at ${formData.get('adopter_email')} within 2-3 business days.\n\nApplication Date: ${applicationData.application.application_date}\nStatus: ${applicationData.application.status}`);
    
    closeApplicationModal();
}

// Adopt pet (legacy function - now opens application form)
function adoptPet(petName) {
    const pet = pets.find(p => p.name === petName);
    if (pet) {
        openApplicationForm(pet.pet_id);
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
