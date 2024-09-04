
        let menu = document.getElementById('menu');
        let nav =  document.getElementById('navbar')
        function bye(){
            nav.classList.toggle('side')
        };
        menu.addEventListener('click', () => {
            document.getElementById('navbar').classList.toggle('side')

        });
        let btn_primary = document.getElementById('sidebar');
        function sidebar() {
            btn_primary.classList.toggle('block')
        };
        let absolute = document.querySelector('.absolute');
        absolute.addEventListener('click', () => {
            btn_primary.classList.remove('block')
        });

       