$('#cv-form').on('submit', function (e) {
    e.preventDefault();
    if ($('#name').val() === '') {
        alert('Veuillez entrer votre nom.');
        return;
    }
    if (!$('#email').val().includes('@')) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
      
    }

        //RegExp : EXPRESSIONS REGULIERES pour pouvoir obliger de remplir 
        // le champ d'une certaine maniere confere le site Regex
    
const regex = /[a-zA-Z0-9]+@[a-zA-Z]+.[a-z]+/gm;
        //Syntaxe alternative utilisant le constructeur RegExp
        // const regex = new RegExp('[a-zA-Z0-9]+@[a-zA-Z]+.[a-z]+', 'gm')


const str = document.getElementById('email').value;
        // Réinitialise `lastIndex` si cette expression régulière est définie globalement
        // regex.lastIndex = 0;
             
let emailValidator;
while ((emailValidator = regex.exec(str)) !== null) {
     // Ceci est nécessaire pour éviter les boucles infinies avec des correspondances de largeur nulle

    if (emailValidator.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    // Le résultat est accessible via la variable `m`.

emailValidator.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
    // Ajoutez d'autres validations ici
});

                    // MISE A JOUR DE LA PREVISUALISATION A CHAQUE SAISI
                    
                    $('#name').on('input', function () {
                        $('#preview-name').text($(this).val());
                    });
                    $('#email').on('input', function () {
                        $('#preview-email').text($(this).val());
                    });

                    $('#phone').on('input', function () {
                        $('#preview-phone').text($(this).val());
                    });
                    $('#statut').on('input', function () {
                        $('#preview-statut').text($(this).val());
                    });
                    $('#poste').on('input', function () {
                        $('#preview-poste').text($(this).val());
                    });
                    //LOCAL STORAGE

                    function saveData() {
                        const cvData = {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            poste: $('#poste').val(),
                            phone: $('#phone').val(),
                            statut: $('#statut').val(),
                            address: $('#address').val(),

                            
                            // Ajoutez d'autres champs ici
                        };
                        localStorage.setItem('cvData', JSON.stringify(cvData));
                    }
                    
                    function loadData() {
                        const cvData = JSON.parse(localStorage.getItem('cvData'));
                        if (cvData) {
                            $('#name').val(cvData.name);
                            $('#email').val(cvData.email);
                            $('#phone').val(cvData.phone);
                            $('#poste').val(cvData.poste);
                            $('#statut').val(cvData.statut);
                            $('#address').val(cvData.address);
                           

                            // Chargez d'autres champs ici
                        }
                    }
                    
                    $(document).on('DOMContenLoaded', function () {
                        loadData();
                        $('#cv-form').on('input', saveData);
                    });

                                                                                                        // // CONFIGURATION DU BOUTON EXPORT
                                                                                                        // $('#export-pdf').on('click', function () {
                                                                                                        //     const doc = new jspdf.jsPDF();
                                                                                                        
                                                                                                        //     // Titre du CV
                                                                                                        //     doc.setFontSize(16);
                                                                                                        //     // Photo de profil
                                                                                                        //     const imgData = $('#preview-image').attr('src');
                                                                                                        //     if (imgData && imgData.startsWith('data:image')) {
                                                                                                        //         doc.addImage(imgData, 'JPEG', 10, 10, 30, 30); // Ajustez la taille et la position
                                                                                                        //     }
                                                                                                        // doc.text($('#preview-name').text(), 45, 15);

                                                                                                        //     doc.setFontSize(13);
                                                                                                        //     doc.text($('#preview-poste').text(), 45, 20);
                                                                                                        
                                                                                                        //     // Informations de contact
                                                                                                        //     doc.setFontSize(11)
                                                                                                        //     doc.text(`Téléphone: ${$('#preview-phone').text()}`, 45, 27);
                                                                                                        //     doc.text(`Email: ${$('#preview-email').text()}`, 45, 31);
                                                                                                        //     doc.text(`Statut: ${$('#preview-statut').text()}`, 45, 35);
                                                                                                        //     doc.text(`Adresse: ${$('#preview-address').text()}`, 45, 40);

                                                                                                        
                                                                                                        //     // Expériences professionnelles
                                                                                                        //     doc.setFontSize(16);
                                                                                                        //     doc.text('Expériences professionnelles', 10, 55);
                                                                                                        //     doc.setFontSize(12);
                                                                                                        //     let y = 100;
                                                                                                        //     $('#preview-experiences div').each(function () {
                                                                                                        //         const title = $(this).find('h4').text();
                                                                                                        //         const company = $(this).find('p').eq(0).text();
                                                                                                        //         const description = $(this).find('p').eq(1).text();
                                                                                                        //         doc.text(`${title} - ${company}`, 10, y);
                                                                                                        //         doc.text(description, 15, y + 5);
                                                                                                        //         y += 15;
                                                                                                        //     });
                                                                                                        
                                                                                                        //     // Formations
                                                                                                        //     doc.setFontSize(16);
                                                                                                        //     doc.text('Formations', 10, y + 10);
                                                                                                        //     doc.setFontSize(12);
                                                                                                        //     y += 20;
                                                                                                        //     $('#preview-formations div').each(function () {
                                                                                                        //         const diploma = $(this).find('h4').text();
                                                                                                        //         const school = $(this).find('p').eq(0).text();
                                                                                                        //         doc.text(`${diploma} - ${school}`, 10, y);
                                                                                                        //         y += 10;
                                                                                                        //     });
                                                                                                        
                                                                                                        //     // Langues
                                                                                                        //     doc.setFontSize(16);
                                                                                                        //     doc.text('Langues', 10, y + 10);
                                                                                                        //     doc.setFontSize(12);
                                                                                                        //     y += 20;
                                                                                                        //     $('#preview-languages div').each(function () {
                                                                                                        //         const language = $(this).find('p').text();
                                                                                                        //         doc.text(language, 10, y);
                                                                                                        //         y += 10;
                                                                                                        //     });
                                                                                                        
                                                                                                        //     // Sauvegarder le PDF
                                                                                                        //     doc.save('mon-cv.pdf');
                                                                                                        // });

                                                                                                        // // EXPORTER FIDELEMENT
                                                                                                        // function exportToPDF() {
                                                                                                        //     // Capturer la section de prévisualisation
                                                                                                        //     html2canvas(document.querySelector("#cv-preview"), {
                                                                                                        //         scale: 4, // Augmenter la résolution pour une meilleure qualité
                                                                                                        //         useCORS: true, // Autoriser les images externes (comme la photo de profil)
                                                                                                        //         logging: true, // Activer les logs pour le débogage
                                                                                                        //         allowTaint: true, // Autoriser les images externes
                                                                                                        //     }).then(canvas => {
                                                                                                        //         const imgData = canvas.toDataURL('image/png'); // Convertir en image PNG
                                                                                                        //         const pdf = new jspdf.jsPDF('p', 'mm', 'a4'); // Créer un PDF au format A4
                                                                                                        
                                                                                                        //         // Dimensions de la page A4
                                                                                                        //         const pageWidth = pdf.internal.pageSize.getWidth();
                                                                                                        //         const pageHeight = pdf.internal.pageSize.getHeight();
                                                                                                        
                                                                                                        //         // Calculer le ratio pour ajuster l'image à la page A4
                                                                                                        //         const imgWidth = canvas.width;
                                                                                                        //         const imgHeight = canvas.height;
                                                                                                        //         const ratio = imgHeight / imgWidth;
                                                                                                        //         const pdfHeight = pageWidth * ratio;
                                                                                                        
                                                                                                        //         // Ajouter l'image au PDF
                                                                                                        //         pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pdfHeight);
                                                                                                        
                                                                                                        //         // Sauvegarder le PDF
                                                                                                        //         pdf.save('mon-cv.pdf');
                                                                                                        //     }).catch(error => {
                                                                                                        //         console.error("Erreur lors de la capture de la prévisualisation :", error);
                                                                                                        //     });
                                                                                                        // }
                                                                                                        // function exportToPDF() {
                                                                                                        //     html2canvas(document.querySelector("#cv-preview"), {
                                                                                                        //         scale: 2,
                                                                                                        //         useCORS: true,
                                                                                                        //         logging: true,
                                                                                                        //         allowTaint: true,
                                                                                                        //     }).then(canvas => {
                                                                                                        //         const imgData = canvas.toDataURL('image/png');
                                                                                                        //         const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
                                                                                                        //         const pageWidth = pdf.internal.pageSize.getWidth();
                                                                                                        //         const pageHeight = pdf.internal.pageSize.getHeight();
                                                                                                        //         const imgWidth = canvas.width;
                                                                                                        //         const imgHeight = canvas.height;
                                                                                                        //         const ratio = imgHeight / imgWidth;
                                                                                                        //         const pdfHeight = pageWidth * ratio;
                                                                                                        //         pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pdfHeight);
                                                                                                        //         pdf.save('mon-cv.pdf');
                                                                                                        //     }).catch(error => {
                                                                                                        //         console.error("Erreur lors de la capture de la prévisualisation :", error);
                                                                                                        //     });
                                                                                                        // }
                                                                                                        
                                                                                                        // $('#export-pdf').on('click', exportToPDF);
                                                                                                        
                    //IMAGE PREVIEW
                    // $('#profile_picture').on('change', function (event) {
                    //     const file = event.target.files[0]; // Récupérer le fichier sélectionné
                
                    //     if (file) {
                    //         const reader = new FileReader(); // Créer un FileReader pour lire le fichier
                
                    //         // Lorsque le fichier est lu avec succès
                    //         reader.onload = function (e) {
                    //             $('#preview-profil') // Sélectionner l'élément img
                    //                 .attr('src', e.target.result) // Mettre à jour l'attribut src avec l'URL de l'image
                    //                 .removeClass('hidden'); // Afficher l'élément img
                    //         };
                
                    //         reader.readAsDataURL(file); // Lire le fichier en tant qu'URL de données
                    //     } else {
                    //         $('#preview-profil').addClass('hidden'); // Masquer l'élément img si aucun fichier n'est sélectionné
                    //     }
                    // });
                    $('#profile_picture').on('change', function (e) {
                        const file = e.target.files[0];
                        if (file && file.type.startsWith('image/')) {
                            const reader = new FileReader();
                            reader.onload = function (e) {
                                $('#preview-image').attr('src', e.target.result).removeClass('hidden');
                            };
                            reader.readAsDataURL(file);
                        } else {
                            $('#image-error').removeClass('hidden');
                        }
                    });
                    
                    // AJOUTER FORMATION
                    $('#add-formation').on('click', function (e) {
                        e.preventDefault();
                        const newFormation = `
                            <div class="formation mb-4">
                                <input type="text" placeholder="Diplôme" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                                <input type="text" placeholder="Établissement" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                                <input type="text" placeholder="Année" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                        `;
                        $('#formations-container').append(newFormation);
                    });
                    
                    // MISE A JOUR PREVIEW FORMATION
                    function updatePreviewFormations() {
                        $('#preview-formations').empty();
                        $('.formation').each(function () {
                            const diploma = $(this).find('input[type="text"]').eq(0).val();
                            const school = $(this).find('input[type="text"]').eq(1).val();
                            const year = $(this).find('input[type="text"]').eq(2).val();
                    
                            if (diploma || school || year) {
                                const formationHtml = `
                                    <div class="mb-4">
                                        <h4 class="font-bold">${diploma}</h4>
                                        <p class="text-gray-600">${school} | ${year}</p>
                                    </div>
                                `;
                                $('#preview-formations').append(formationHtml);
                            }
                        });
                    }
                    
                    $('#cv-form').on('input', updatePreviewFormations);

                    // AJOUTER EXPERIENCE PRO 
                    $('#add-experience').on('click', function (e) {
                        e.preventDefault();
                        const newExperience = `
                            <div class="experience mb-4">
                                <input type="text" placeholder="Titre du poste" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                                <input type="text" placeholder="Entreprise" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                                <input type="text" placeholder="Durée (ex: 2020-2023)" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                                <textarea placeholder="Description" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                        `;
                        $('#experiences-container').append(newExperience);
                    });
                     
                    // MISE A JOUR PREVIEW EXPERIENCE PRO
                    function updatePreviewExperiences() {
                        $('#preview-experiences').empty();
                        $('.experience').each(function () {
                            const title = $(this).find('input[type="text"]').eq(0).val();
                            const company = $(this).find('input[type="text"]').eq(1).val();
                            const duration = $(this).find('input[type="text"]').eq(2).val();
                            const description = $(this).find('textarea').val();
                    
                            if (title || company || duration || description) {
                                const experienceHtml = `
                                    <div class="mb-4">
                                        <h4 class="font-bold">${title}</h4>
                                        <p class="text-gray-600">${company} | ${duration}</p>
                                        <p class="text-gray-700">${description}</p>
                                    </div>
                                `;
                                $('#preview-experiences').append(experienceHtml);
                            }
                        });
                    }
                    
                    $('#cv-form').on('input', updatePreviewExperiences);



                    // BOUTON NEW LANGUAGE

                    $('#add-language').on('click', function (e) {
                        e.preventDefault();
                        const newLanguage = `
                            <div class="language mb-4">
                                <input type="text" placeholder="Langue" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                                <input type="text" placeholder="Niveau (ex: Courant, Débutant)" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                        `;
                        $('#languages-container').append(newLanguage);
                    });


                    function updatePreviewLanguages() {
                        $('#preview-languages').empty();
                        $('.language').each(function () {
                            const language = $(this).find('input[type="text"]').eq(0).val();
                            const level = $(this).find('input[type="text"]').eq(1).val();
                    
                            if (language || level) {
                                const languageHtml = `
                                    <div class="mb-4">
                                        <p class="text-gray-700">${language} - ${level}</p>
                                    </div>
                                `;
                                $('#preview-languages').append(languageHtml);
                            }
                        });
                    }

                    
                    // BOUTON NEW COMPETENCES

                    $('#add-competence').on('click', function (e) {
                        e.preventDefault();
                        const newCompetence = `
                            <div class="competence mb-4">
                                <input type="text" placeholder="competence" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                                <input type="text" placeholder="Niveau (ex: Débutant, Intermédiaire, professionnel)" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                        `;
                        $('#competences-container').append(newCompetence);
                    });


                    function updatePreviewCompetences() {
                        $('#preview-competences').empty();
                        $('.competence').each(function () {
                            const competence = $(this).find('input[type="text"]').eq(0).val();
                            const level = $(this).find('input[type="text"]').eq(1).val();
                    
                            if (competence || level) {
                                const competenceHtml = `
                                    <div class="mb-4">
                                        <p class="text-gray-700">${competence} - ${level}</p>
                                    </div>
                                `;
                                $('#preview-competences').append(competenceHtml);
                            }
                        });
                    }
                    
                  

// FONCTION POUR SAUVEGARDER LES DONNES DANS LE LOCAL STORAGE
function saveData() {
    const cvData = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        address: $('#address').val(),
        statut: $('#statut').val(),
        poste: $('#poste').val(),
        profilepicture: $('#profile_picture').attr('src'),
        formations: [],
        experiences: [],
        languages: [],
        competences: [],
    };

    // Sauvegarder les formations
    $('.formation').each(function () {
        const diploma = $(this).find('input[type="text"]').eq(0).val();
        const school = $(this).find('input[type="text"]').eq(1).val();
        const year = $(this).find('input[type="text"]').eq(2).val();
        if (diploma || school || year) {
            cvData.formations.push({ diploma, school, year });
        }
    });

    // Sauvegarder les expériences
    $('.experience').each(function () {
        const title = $(this).find('input[type="text"]').eq(0).val();
        const company = $(this).find('input[type="text"]').eq(1).val();
        const duration = $(this).find('input[type="text"]').eq(2).val();
        const description = $(this).find('textarea').val();
        if (title || company || duration || description) {
            cvData.experiences.push({ title, company, duration, description });
        }
    });

    // Sauvegarder les langues
    $('.language').each(function () {
        const language = $(this).find('input[type="text"]').eq(0).val();
        const level = $(this).find('input[type="text"]').eq(1).val();
        if (language || level) {
            cvData.languages.push({ language, level });
        }
    });

     // Sauvegarder les competences
     $('.competence').each(function () {
        const competence = $(this).find('input[type="text"]').eq(0).val();
        const level = $(this).find('input[type="text"]').eq(1).val();
        if (competence || level) {
            cvData.competences.push({ competence, level });
        }
    });
    // Enregistrer dans le localStorage
    localStorage.setItem('cvData', JSON.stringify(cvData));
}

// Fonction pour charger les données du localStorage
function loadData() {
    const cvData = JSON.parse(localStorage.getItem('cvData'));
    if (cvData) {
        // Remplir les champs de base
        $('#name').val(cvData.name);
        $('#email').val(cvData.email);
        $('#address').val(cvData.address);
        $('#statut').val(cvData.statut);
        $('#phone').val(cvData.phone);
        $('#poste').val(cvData.poste);

        if (cvData.profile_picture) {
            $('#profile_picture').attr('src', cvData.profile_picture).removeClass('hidden');
        }

        // Remplir les formations
        cvData.formations.forEach(formation => {
            const newFormation = `
                <div class="formation mb-4">
                    <input type="text" placeholder="Diplôme" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" value="${formation.diploma}">
                    <input type="text" placeholder="Établissement" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" value="${formation.school}">
                    <input type="text" placeholder="Année" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value="${formation.year}">
                </div>
            `;
            $('#formations-container').append(newFormation);
        });

        // Remplir les expériences
        cvData.experiences.forEach(experience => {
            const newExperience = `
                <div class="experience mb-4">
                    <input type="text" placeholder="Titre du poste" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" value="${experience.title}">
                    <input type="text" placeholder="Entreprise" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" value="${experience.company}">
                    <input type="text" placeholder="Durée (ex: 2020-2023)" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" value="${experience.duration}">
                    <textarea placeholder="Description" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">${experience.description}</textarea>
                </div>
            `;
            $('#experiences-container').append(newExperience);
        });

        // Remplir les langues
        cvData.languages.forEach(language => {
            const newLanguage = `
                <div class="language mb-4">
                    <input type="text" placeholder="Langue" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" value="${language.language}">
                    <input type="text" placeholder="Niveau (ex: Courant, Débutant)" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value="${language.level}">
                </div>
            `;
            $('#languages-container').append(newLanguage);
        });
 // Remplir les competences
 cvData.competences.forEach(competence => {
    const newCompetence = `
        <div class="competence mb-4">
            <input type="text" placeholder="competence" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" value="${competence.competence}">
            <input type="text" placeholder="Niveau (ex: Débutant, Intermédiaire, professionnel)" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value="${competence.level}">
        </div>
    `;
    $('#competences-container').append(newCompetence);
});

        // Mettre à jour la prévisualisation
        updatePreview();
    }
}

// CHARGER LES DONNES AU DEMMARAGE
$(document).ready(function () {
    loadData();
});

// Sauvegarder les données à chaque modification
$('#cv-form').on('input', saveData);


//// Fonction pour vider les champs
function clearFields() {
    // Vider les champs du formulaire
    $('#cv-form')[0].reset();
    $('#preview-image').attr('src', '#').addClass('hidden');
    $('#preview-name, #preview-email, #preview-phone, #preview-address, #preview-poste, #preview-statut').text('');
    $('#preview-formations, #preview-experiences, #preview-languages, #preview-competences').empty();

    // Vider le localStorage
    localStorage.removeItem('cvData');
}

// Lier la fonction au bouton
$('#clear-fields').on('click', clearFields);



//FAIRE RESTER LA PREVIEW DANS LE LOCAL STORAGE
function updatePreview() {
    // Mettre à jour les informations personnelles
    $('#preview-name').text($('#name').val());
    $('#preview-email').text($('#email').val());
    $('#preview-phone').text($('#phone').val());
    $('#preview-address').text($('#address').val());
    $('#preview-statut').text($('#statut').val());
    $('#preview-poste').text($('#poste').val());
    $('#preview-image').attr('src');
    

    // Mettre à jour les formations
    $('#preview-formations').empty();
    $('.formation').each(function () {
        const diploma = $(this).find('input[type="text"]').eq(0).val();
        const school = $(this).find('input[type="text"]').eq(1).val();
        const year = $(this).find('input[type="text"]').eq(2).val();
        if (diploma || school || year) {
            const formationHtml = `
                <div class="mb-4">
                    <h4 class="font-bold">${diploma}</h4>
                    <p class="text-gray-600">${school} | ${year}</p>
                </div>
            `;
            $('#preview-formations').append(formationHtml);
        }
    });

    // Mettre à jour les expériences
    $('#preview-experiences').empty();
    $('.experience').each(function () {
        const title = $(this).find('input[type="text"]').eq(0).val();
        const company = $(this).find('input[type="text"]').eq(1).val();
        const duration = $(this).find('input[type="text"]').eq(2).val();
        const description = $(this).find('textarea').val();
        if (title || company || duration || description) {
            const experienceHtml = `
                <div class="mb-4">
                    <h4 class="font-bold">${title}</h4>
                    <p class="text-gray-600">${company} | ${duration}</p>
                    <p class="text-gray-700">${description}</p>
                </div>
            `;
            $('#preview-experiences').append(experienceHtml);
        }
    });

    // Mettre à jour les langues
    $('#preview-languages').empty();
    $('.language').each(function () {
        const language = $(this).find('input[type="text"]').eq(0).val();
        const level = $(this).find('input[type="text"]').eq(1).val();
        if (language || level) {
            const languageHtml = `
                <div class="mb-4 ">
                    <p class="text-gray-700">${language} - ${level}</p>
                </div>
            `;
            $('#preview-languages').append(languageHtml);
        }
    });


    // Mettre à jour les competences
$('#preview-competences').empty();
$('.competence').each(function () {
    const competence = $(this).find('input[type="text"]').eq(0).val();
    const level = $(this).find('input[type="text"]').eq(1).val();
    if (competence || level) {
        const competenceHtml = `
            <div class="mb-4">
                <p class="text-gray-700">${competence} - ${level}</p>
            </div>
        `;
        $('#preview-competences').append(competenceHtml);
    }
});
}

// Mettre à jour la prévisualisation à chaque modification
$('#cv-form').on('input', updatePreview);
// jsPDF pour générer un PDF à partir du contenu de la prévisualisation du CV
function previewPDF() {
    const $element = $('#cv-preview');0
    const options = {
        margin: 10,
        filename: 'mon-cv.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 4, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from($element[0]).outputPdf('bloburl').then((pdfUrl) => {
        window.open(pdfUrl, '_blank');
    });
}
$('#theme').on('change', function () {
    const theme = $(this).val();
    $('#cv-preview').removeClass().addClass(`cv-preview theme-${theme}`);
});