function playSound(path) {
  const audio = new Audio(path);
  audio.play();
}

console.log("renderer.js loaded");

/* =======================
   SOUNDS
======================= */

const sounds = [
  "Ah shit, here we go again. - Sound Effect [HQ].mp3",
  "Air Horn Sad Violin Full (Free Download in Description).mp3",
  "Air Horn Sad Violin sound effect.mp3",
  "Amogus Screaming - Sound Effect [HQ].mp3",
  "And His Name is JOHN CENA - Sound Effect (HD).mp3",
  "And his name is John Cena sound effect.mp3",
  "Anime wow sound effect.mp3",
  "Applause.mp3",
  "Aughhhhh sound effect.mp3",
  "Ayaya - Oh my god!.mp3",
  "Ayo Wtf.mp3",
  "Benny Hill.mp3",
  "Boom! Headshot! - Sound Effect [HQ].mp3",
  "Bruh - Sound Effect (HD).mp3",
  "Cash Register (Kaching) - Sound Effect (HD).mp3",
  "Crickets (Awkward Silence) - Sound Effect (HD).mp3",
  "Curb Your Enthusiasm Meme (Frolic) - Background Music (HD).mp3",
  "Dial Up Internet - Sound Effect (HD).mp3",
  "Ding - Sound Effect [HQ].mp3",
  "Doge Bonk sound effect.mp3",
  "Dramatic Horns.mp3",
  "Elevator Music (Kevin MacLeod) - Background Music (HD).mp3",
  "Epic Choir Suspense - Sound Effect (HD).mp3",
  "Fail Horn - Sound Effect [HQ].mp3",
  "Fart sound effect.mp3",
  "FBI Open Up - Sound Effect (HD).mp3",
  "Final Fantasy Victory Fanfare - Sound Effect [HQ].mp3",
  "Goat Scream - Sound Effect (HD).mp3",
  "GTA V - Wasted - Sound Effect [HQ].mp3",
  "Heavenly Music - Sound Effect (HD).mp3",
  "Hitman (Kevin McLeod) - Gaming Background Music (HD).mp3",
  "IDubbbzTV - Hey, that's pretty good.mp3",
  "ILLUMINATI CONFIRMED (The X-Files Theme) - Sound Effect (HD).mp3",
  "Illuminati Confirmed sound effect.mp3",
  "It was at this moment - Sound Effect [HQ].mp3",
  "Kids Cheering - Sound Effect (HD).mp3",
  "Look At This Dude - Sound Effect [HQ].mp3",
  "Man Screaming - CEEDAY Sound Effect (HD).mp3",
  "Man ⧸ Dinosaur Scream  - Sound Effect (HD).mp3",
  "Mario Jump - Sound Effect (HD).mp3",
  "metal gear solid sound effect (Alert).mp3",
  "Mission Failed - Sound Effect [HQ].mp3",
  "MLG AIR HORN sound effect.mp3",
  "Number 15： Burger king foot lettuce Sound Effect.mp3",
  "OH BABY A TRIPLE - Sound Effect (HD).mp3",
  "Onii-chan, Onii-chan sound effect.mp3",
  "Overwatch Genji's Ultimate -  Ryūjin no ken wo kurae Sound Effect.mp3",
  "PS2 Startup Screen - Sound Effect (HD).mp3",
  "Quack sound effect.mp3",
  "Roblox death sound effect.mp3",
  "Run Meme - Sound Effect [HQ].mp3",
  "SHOTS FIRED SOUND EFFECT.mp3",
  "Sitcom Laughter Applause - Sound Effect (HD).mp3",
  "Spanish Flea (Herb Albert) - Comedy Background Music (HD).mp3",
  "Spongebob 2000 Years Later - Sound Effect [HQ].mp3",
  "Suspense - Sound Effect (HD).mp3",
  "Taco Bell Bong sound effect.mp3",
  "Tape Rewind - Sound Effect (HD).mp3",
  "The Wilhelm scream sound effect.mp3",
  "They ask you how you are and you just have to say that you're fine Sound Effect.mp3",
  "To Be Continued sound effect.mp3",
  "Vine Boom Sound Effect.mp3",
  "We'll be right back Sound Effect meme.mp3",
  "Why You Always Lying Sound effect.mp3",
  "Wii Music - Gaming Background Music (HD).mp3",
  "Windows XP Shutdown - Sound Effect [HQ].mp3",
  "WOMBO COMBO!!!!.mp3",
  "WTF BOOM (Meme Sound) - Sound Effect for Editing.mp3"
];

/* =======================
   IMAGES
======================= */

const images = [
  "-to-my-dear-stalkerstalk-away-i-have-nothing-to-hide-so-there-is-noth-ing-for-you-to-gain--32150.png",
  "02885f46b2ce57a092572ca322f34097.jpg",
  "12e0800645f92f4621d2901234ab253a.jpg",
  "1616447122820.jpg",
  "2star.jpg",
  "3myl0iffuul51.jpg",
  "54kah9.jpg",
  "80fca6ea232568f5e05630ba446f5ea9.jpg",
  "909e2b65e3f84dd296cec52571bdf430.jpg",
  "a2e668992e160393981ef1783d19b6fb.jpg",
  "a93zcdbiexy31.jpg",
  "artworks-DW1YYdgHCvkmy0Hb-z69Rhw-t500x500.jpg",
  "cursedpatrick.jpg",
  "download.jpg",
  "e81e0a127f8519ce6eeabb7b67591229.jpg",
  "EfoxG6HU0AAfODO.jpg",
  "images (1).jfif",
  "images (1).jpg",
  "images.jfif",
  "images.jpg",
  "images.png",
  "ldz0cqn16n0b1.jpg",
  "maxresdefault (1).jpg",
  "maxresdefault.jpg",
  "mpak2wyekcdq.jpg",
  "original-9043836-3.jpg",
  "school-bus.jpg",
  "Screenshot 2025-12-21 131357.png",
  "spongebob_meme_64.webp",
  "sss.jpg",
  "static-assets-upload5772960293809558543.webp",
  "sus-hehe.gif",
  "youenterthewrongclassroom.jpg",
  "y_tho_meme.png"
];

/* =======================
   RENDER SAFE
======================= */

const soundboard = document.getElementById("soundboard");
const gallery = document.getElementById("gallery");

/* SOUND PAGE */
if (soundboard) {
  sounds.forEach(file => {
    const btn = document.createElement("button");
    btn.className = "sound-btn";

    btn.textContent = file.replace(".mp3", "").slice(0, 40);

    btn.onclick = () => playSound(`sounds/${file}`);

    soundboard.appendChild(btn);
  });
}

/* IMAGE PAGE */
if (gallery) {
  images.forEach(file => {
    const img = document.createElement("img");
    img.src = `images/${file}`;

    img.onclick = () => window.open(img.src);

    gallery.appendChild(img);
  });
}