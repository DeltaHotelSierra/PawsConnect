// PawsConnect — data layer (ported from script.js)
// Follows the same DB schema: Shelters, Pets, Adopters, Applications, MedicalRecords

export const shelters = [
  { shelter_id: 1, name: 'Sunshine Animal Shelter', address: '123 Sunny Lane, Springfield, CA 94102', contact: '(555) 123-4567' },
  { shelter_id: 2, name: 'Paws & Whiskers Rescue', address: '456 Feline Way, Oakland, CA 94601', contact: '(555) 234-5678' },
  { shelter_id: 3, name: 'Happy Tails Foundation', address: '789 Joy Street, San Jose, CA 95110', contact: '(555) 345-6789' },
  { shelter_id: 4, name: 'Meow Town Shelter', address: '321 Cat Avenue, Berkeley, CA 94704', contact: '(555) 456-7890' },
  { shelter_id: 5, name: 'Canine Companions', address: '654 Bark Boulevard, Fremont, CA 94536', contact: '(555) 567-8901' },
  { shelter_id: 6, name: 'Furry Friends Haven', address: '987 Pet Place, Hayward, CA 94541', contact: '(555) 678-9012' },
  { shelter_id: 7, name: 'Rescue Rovers', address: '147 Helper Road, San Mateo, CA 94401', contact: '(555) 789-0123' },
  { shelter_id: 8, name: 'Kitty Kingdom', address: '258 Royal Street, Palo Alto, CA 94301', contact: '(555) 890-1234' },
  { shelter_id: 9, name: 'Puppy Paradise', address: '369 Playtime Lane, Mountain View, CA 94040', contact: '(555) 901-2345' },
  { shelter_id: 10, name: 'Cat Castle Shelter', address: '741 Meow Manor, Sunnyvale, CA 94086', contact: '(555) 012-3456' },
  { shelter_id: 11, name: 'Big Hearts Rescue', address: '852 Courage Court, Santa Clara, CA 95050', contact: '(555) 123-7890' },
  { shelter_id: 12, name: 'Whisker Wonderland', address: '963 Fantasy Road, Milpitas, CA 95035', contact: '(555) 234-8901' },
  { shelter_id: 13, name: 'Golden Years Pet Home', address: '159 Retirement Way, Cupertino, CA 95014', contact: '(555) 345-9012' },
  { shelter_id: 14, name: 'Exotic Pets Rescue', address: '753 Safari Street, Los Gatos, CA 95030', contact: '(555) 456-0123' },
  { shelter_id: 15, name: 'Country Critters Shelter', address: '951 Ranch Road, Morgan Hill, CA 95037', contact: '(555) 567-1234' },
  { shelter_id: 16, name: 'Urban Cats Haven', address: '357 City Center, San Francisco, CA 94102', contact: '(555) 678-2345' },
  { shelter_id: 17, name: 'Little Paws Sanctuary', address: '246 Tiny Trail, Saratoga, CA 95070', contact: '(555) 789-3456' },
  { shelter_id: 18, name: 'Tabby Town', address: '864 Stripe Street, Campbell, CA 95008', contact: '(555) 890-4567' },
  { shelter_id: 19, name: 'Second Chance Shelter', address: '135 Hope Avenue, Gilroy, CA 95020', contact: '(555) 901-5678' },
  { shelter_id: 20, name: 'Midnight Meows', address: '791 Shadow Lane, Sunnyvale, CA 94085', contact: '(555) 012-6789' },
  { shelter_id: 21, name: 'Bunny Burrow Rescue', address: '468 Carrot Court, Santa Cruz, CA 95060', contact: '(555) 123-8901' },
  { shelter_id: 22, name: 'Hoppy Homes', address: '579 Jump Street, Watsonville, CA 95076', contact: '(555) 234-9012' },
  { shelter_id: 23, name: 'Wings & Things Aviary', address: '802 Flight Path, Scotts Valley, CA 95066', contact: '(555) 345-0123' },
  { shelter_id: 24, name: 'Feathered Friends Sanctuary', address: '913 Nest Road, Aptos, CA 95003', contact: '(555) 456-1234' },
];

export const pets = [
  { pet_id: 1, name: 'Max', breed: 'Golden Retriever', birth_date: '2023-03-15', weight: 32.5, shelter_id: 1 },
  { pet_id: 2, name: 'Luna', breed: 'Siamese', birth_date: '2021-06-22', weight: 4.2, shelter_id: 2 },
  { pet_id: 3, name: 'Charlie', breed: 'Labrador Mix', birth_date: '2025-10-05', weight: 12.8, shelter_id: 3 },
  { pet_id: 4, name: 'Bella', breed: 'Persian', birth_date: '2016-04-10', weight: 5.5, shelter_id: 4 },
  { pet_id: 5, name: 'Rocky', breed: 'German Shepherd', birth_date: '2020-08-18', weight: 38.2, shelter_id: 5 },
  { pet_id: 6, name: 'Mittens', breed: 'Tabby', birth_date: '2023-12-01', weight: 3.8, shelter_id: 6 },
  { pet_id: 7, name: 'Duke', breed: 'Bulldog', birth_date: '2021-02-14', weight: 22.5, shelter_id: 7 },
  { pet_id: 8, name: 'Whiskers', breed: 'Maine Coon', birth_date: '2023-05-20', weight: 7.2, shelter_id: 8 },
  { pet_id: 9, name: 'Daisy', breed: 'Beagle', birth_date: '2025-11-12', weight: 8.5, shelter_id: 9 },
  { pet_id: 10, name: 'Oliver', breed: 'British Shorthair', birth_date: '2020-09-30', weight: 6.3, shelter_id: 10 },
  { pet_id: 11, name: 'Zeus', breed: 'Rottweiler', birth_date: '2023-07-08', weight: 42.0, shelter_id: 11 },
  { pet_id: 12, name: 'Cleo', breed: 'Calico', birth_date: '2024-01-25', weight: 4.0, shelter_id: 12 },
  { pet_id: 13, name: 'Buddy', breed: 'Poodle Mix', birth_date: '2015-11-03', weight: 14.2, shelter_id: 13 },
  { pet_id: 14, name: 'Nala', breed: 'Bengal', birth_date: '2023-09-17', weight: 5.8, shelter_id: 14 },
  { pet_id: 15, name: 'Cooper', breed: 'Australian Shepherd', birth_date: '2024-02-28', weight: 25.3, shelter_id: 15 },
  { pet_id: 16, name: 'Smokey', breed: 'Russian Blue', birth_date: '2019-12-11', weight: 4.7, shelter_id: 16 },
  { pet_id: 17, name: 'Rosie', breed: 'Corgi', birth_date: '2025-12-20', weight: 9.8, shelter_id: 17 },
  { pet_id: 18, name: 'Tigger', breed: 'Orange Tabby', birth_date: '2024-04-07', weight: 5.5, shelter_id: 18 },
  { pet_id: 19, name: 'Sadie', breed: 'Pit Bull Mix', birth_date: '2021-07-19', weight: 28.7, shelter_id: 19 },
  { pet_id: 20, name: 'Shadow', breed: 'Black Cat', birth_date: '2020-10-31', weight: 4.5, shelter_id: 20 },
  { pet_id: 21, name: 'Thumper', breed: 'Holland Lop', birth_date: '2023-08-14', weight: 1.8, shelter_id: 21 },
  { pet_id: 22, name: 'Snowball', breed: 'Lionhead', birth_date: '2025-11-28', weight: 0.9, shelter_id: 22 },
  { pet_id: 23, name: 'Tweety', breed: 'Canary', birth_date: '2024-03-05', weight: 0.02, shelter_id: 23 },
  { pet_id: 24, name: 'Polly', breed: 'Parakeet', birth_date: '2022-01-18', weight: 0.03, shelter_id: 24 },
];

// ─── Helper functions ────────────────────────────────────────────────────────

const DOG_BREEDS = ['Golden Retriever', 'Labrador Mix', 'German Shepherd', 'Bulldog', 'Beagle', 'Rottweiler', 'Poodle Mix', 'Australian Shepherd', 'Corgi', 'Pit Bull Mix'];
const CAT_BREEDS = ['Siamese', 'Persian', 'Tabby', 'Maine Coon', 'British Shorthair', 'Calico', 'Bengal', 'Russian Blue', 'Orange Tabby', 'Black Cat'];
const RABBIT_BREEDS = ['Holland Lop', 'Lionhead'];
const BIRD_BREEDS = ['Canary', 'Parakeet'];

export function getPetType(breed) {
  if (DOG_BREEDS.includes(breed)) return 'dog';
  if (CAT_BREEDS.includes(breed)) return 'cat';
  if (RABBIT_BREEDS.includes(breed)) return 'rabbit';
  if (BIRD_BREEDS.includes(breed)) return 'bird';
  return 'other';
}

export function getPetEmoji(breed) {
  const t = getPetType(breed);
  return { dog: '🐕', cat: '🐱', rabbit: '🐰', bird: '🐦' }[t] ?? '🐾';
}

export function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  const months =
    (today.getFullYear() - birth.getFullYear()) * 12 +
    (today.getMonth() - birth.getMonth());
  if (months < 12) return 'baby';
  if (months < 24) return 'young';
  if (months < 84) return 'adult';
  return 'senior';
}

export function getAgeLabel(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  const months =
    (today.getFullYear() - birth.getFullYear()) * 12 +
    (today.getMonth() - birth.getMonth());
  if (months < 12) return `${months}mo`;
  const years = Math.floor(months / 12);
  return `${years}yr`;
}

export function getPetSize(weight) {
  if (weight < 5) return 'small';
  if (weight < 20) return 'medium';
  return 'large';
}

export function getShelterById(id) {
  return shelters.find((s) => s.shelter_id === id);
}

/** Enrich a raw pet object with derived fields */
export function enrichPet(pet) {
  return {
    ...pet,
    type: getPetType(pet.breed),
    emoji: getPetEmoji(pet.breed),
    ageCategory: calculateAge(pet.birth_date),
    ageLabel: getAgeLabel(pet.birth_date),
    size: getPetSize(pet.weight),
    shelter: getShelterById(pet.shelter_id),
  };
}

export const enrichedPets = pets.map(enrichPet);
