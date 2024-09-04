        let All = document.getElementById("All");
        let Gold = document.getElementById("Gold");
        let Diamond = document.getElementById("Diamond");
        let Artificial = document.getElementById("Artificial");

        let section_1 = document.getElementById("section-1")
        let section_2 = document.getElementById("section-2")
        let section_3 = document.getElementById("section-3")
        All.addEventListener('click', ()=>{
            section_1.classList.remove('hidden')
            section_2.classList.remove('hidden')
            section_3.classList.remove('hidden')
        });
        Gold.addEventListener('click', ()=>{
            section_1.classList.remove('hidden')
            section_2.classList.add('hidden')
            section_3.classList.add('hidden')
        });
        Diamond.addEventListener('click', ()=>{
            section_2.classList.remove('hidden')
            section_1.classList.add('hidden')
            section_3.classList.add('hidden')
        });
        Artificial.addEventListener('click', ()=>{
            section_1.classList.add('hidden')
            section_2.classList.add('hidden')
            section_3.classList.remove('hidden')
        });