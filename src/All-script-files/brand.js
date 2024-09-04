 // anchor tag targeted
 let All = document.getElementById('All');
 let Rings = document.getElementById('Rings');
 let Bracelets = document.getElementById('Bracelets');
 let Necklaces = document.getElementById("Neckles");
 let Anklets = document.getElementById("Anklets");
 let Earrings = document.getElementById("Earrings");
 // section ids targeted
 let Rings_sec = document.getElementById("rings-sec");
 let Bracelets_sec = document.getElementById('Bracelets-sec');
 let Necklaces_sec = document.getElementById('Neckles-sec');
 let Anklets_sec = document.getElementById('Anklets-sec');
 let Earrings_sec = document.getElementById('Earrings-sec');


 // ✌✌ //
 All.addEventListener('click', () => {
     Rings_sec.classList.remove('hidden');
     Bracelets_sec.classList.remove('hidden');
     Necklaces_sec.classList.remove('hidden')
     Earrings_sec.classList.remove('hidden')
     Anklets_sec.classList.remove('hidden')

 });
 Rings.addEventListener('click', () => {
    Rings_sec.classList.remove('hidden')
    Bracelets_sec.classList.add('hidden')
    Necklaces_sec.classList.add('hidden')
    Earrings_sec.classList.add('hidden')
    Anklets_sec.classList.add('hidden')
     
 });
 Bracelets.addEventListener('click', () => {
     Bracelets_sec.classList.remove('hidden')
     Rings_sec.classList.add('hidden')
     Necklaces_sec.classList.add('hidden')
     Earrings_sec.classList.add('hidden')
     Anklets_sec.classList.add('hidden')

 });
 Necklaces.addEventListener('click', () => {
     Necklaces_sec.classList.remove('hidden')
     Rings_sec.classList.add('hidden')
     Bracelets_sec.classList.add('hidden')
     Earrings_sec.classList.add('hidden')
     Anklets_sec.classList.add('hidden')

 });
 Earrings.addEventListener('click', () => {
     Earrings_sec.classList.remove('hidden')
     Bracelets_sec.classList.add('hidden')
     Necklaces_sec.classList.add('hidden')
     Rings_sec.classList.add('hidden')
     Anklets_sec.classList.add('hidden')
     
    });
    Anklets.addEventListener('click', () => {
        Anklets_sec.classList.remove('hidden')
        Necklaces_sec.classList.add('hidden')
        Rings_sec.classList.add('hidden')
        Bracelets_sec.classList.add('hidden')
        Earrings_sec.classList.add('hidden')
   
    });