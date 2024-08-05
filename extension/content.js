const fishJokes = [
  "Why don't fish play basketball? Because they're afraid of the net!",
  "What do you call a fish with no eyes? Fsh!",
  "Why did the fish blush? Because it saw the ocean's bottom!",
  "What do you get when you cross a fish and an elephant? Swimming trunks!",
  "Why are fish so smart? Because they live in schools!",
  "What do you call a fish that practices medicine? A sturgeon!",
  "Why did the fish cross the road? To get to the other tide!",
  "What do you call a fish that can play the piano? A piano tuna!",
  "How do fish get high? Seaweed!",
  "What do you call a fish that needs help with its singing? Auto-tuna!",
  "Why don't fish like computers? Because they're afraid of the net!",
  "What do you call a fish that tells time? A clockfish!",
  "Why did the fish go to Hollywood? It wanted to be a starfish!",
  "What do you call a fish that loves to dance? A sole dancer!",
  "Why did the fish get bad grades? Because it was below sea level!",
  "What do you call a fish that loves to play guitar? A bass player!",
  "Why did the fish join a band? Because it had the scales!",
  "What do you call a fish that loves to party? A party fish!",
  "Why did the fish go to school? To improve its fish-cation!",
  "What do you call a fish that loves to cook? A chef-fish!",
  "Why did the fish get a job? Because it wanted to make some clams!",
  "What do you call a fish that loves to read? A bookfish!",
  "Why did the fish go to the doctor? Because it had a bad case of the gills!",
  "What do you call a fish that loves to travel? A globe-fish!",
  "Why did the fish go to the gym? To work on its mussels!",
  "What do you call a fish that loves to paint? An artist-fish!",
  "Why did the fish go to the library? To find some good fish tales!",
  "What do you call a fish that loves to garden? A greenfish!",
  "Why did the fish go to the beach? To catch some rays!",
  "What do you call a fish that loves to play soccer? A goalfish!",
  "Why did the fish go to the circus? To see the clownfish!",
  "What do you call a fish that loves to play cards? A card shark!",
  "Why did the fish get a computer? To surf the net!",
  "What do you call a fish that loves to sing? A tuna-fish!",
  "Why did the fish go to the party? Because it was a fancy fish-ion show!",
  "What do you call a fish that loves to play basketball? A dunkin' fish!",
  "Why did the fish go to the spa? To get a seaweed wrap!",
  "What do you call a fish that loves to play video games? A gamefish!",
  "Why did the fish go to the concert? To hear the bass drop!",
  "What do you call a fish that loves to write? An authorfish!",
  "Why did the fish go to the art gallery? To see the starfish exhibit!",
  "What do you call a fish that loves to play chess? A checkmate fish!",
  "Why did the fish go to the bakery? To get some fish sticks!",
  "What do you call a fish that loves to play tennis? A netfish!",
  "Why did the fish go to the zoo? To see the sea lions!",
  "What do you call a fish that loves to play golf? A hole-in-one fish!",
  "Why did the fish go to the theater? To see the fish-ical!",
  "What do you call a fish that loves to play baseball? A catchfish!",
  "Why did the fish go to the farm? To see the barnacles!",
  "What do you call a fish that loves to play hockey? A puckfish!",
  "Why did the fish go to the museum? To see the fish fossils!",
  "What do you call a fish that loves to play football? A tacklefish!",
  "Why did the fish go to the aquarium? To see the fish tank!",
  "What do you call a fish that loves to play rugby? A scrumfish!",
  "Why did the fish go to the carnival? To ride the fish wheel!",
  "What do you call a fish that loves to play volleyball? A spikefish!",
  "Why did the fish go to the library? To check out some fish books!",
  "What do you call a fish that loves to play lacrosse? A stickfish!",
  "Why did the fish go to the park? To play on the fish swings!",
  "What do you call a fish that loves to play cricket? A batfish!",
];

function displayRandomJoke() {
  const randomIndex = Math.floor(Math.random() * fishJokes.length);

  document.getElementById("yoker").textContent = fishJokes[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("jokeButton")
    .addEventListener("click", displayRandomJoke);
});
