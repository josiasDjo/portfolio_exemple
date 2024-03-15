        // Fonction pour détecter l'ID de la section visible
        function detectVisibleSection() {
            // Récupérer la position de défilement actuelle
            var scrollPosition = window.scrollY || window.pageYOffset;

            // Récupérer toutes les sections de la page
            var sections = document.querySelectorAll('section');
            let aboutme_var = "aboutme";
            let aboutmeVrai_var = "aboutmeVrai";
            let my_portfolio_var = "myportfolio";
            let my_blog_var = "myblog";

            var styles_icon = {
                "background-color": "rgb(234 179 8 / var(--tw-bg-opacity)",
                "border-width": "2px",
                "border-style": "solid",
                "border-color": "rgb(234 179 8 / var(--tw-bg-opacity)",
            }

            // Parcourir les sections pour trouver celle qui est visible
            for (var i = 0; i < sections.length; i++) {
                var section = sections[i];
                var sectionTop = section.offsetTop;
                var sectionBottom = sectionTop + section.offsetHeight;

                // Vérifier si la section est visible
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    // Si la section est visible, obtenir son ID et faire quelque chose avec
                    var sectionId = section.getAttribute('id');
                    console.log('La section visible a l\'ID : ' + sectionId);
                    // Vous pouvez effectuer ici toute action souhaitée avec l'ID de la section
                    if (sectionId == aboutme_var) {
                        var obj = document.getElementById("icon_aboutme");
                        Object.assign(obj, styles_icon);
                    }
                    break; // Sortir de la boucle dès qu'une section est trouvée
                }
            }
        }

        // Ajouter un écouteur d'événement de défilement à la fenêtre
        window.addEventListener('scroll', detectVisibleSection);