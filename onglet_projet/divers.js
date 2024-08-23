try {
    // Envoyer le dossier
    document.getElementById('onglet_trame_folder_send').addEventListener('click', function (e) {
        e.preventDefault();

        // Récupérer le nom du dossier
        let folder_name = document.getElementById('trame_new_folder_name').value;

        // Vérifier si le champ est vide
        if (folder_name.length === 0) {
            alert('Veuillez saisir un nom pour le dossier.');
            return;
        }

        // Récupérer l'adresse email de l'utilisateur connecté
        userEmail = current_user_data.email;

        // Afficher l'avancement du chargement
        document.getElementById('loading').style.display = 'block';

        // Créer un objet FormData
        let formData = new FormData();
        formData.append('folder_name', folder_name);
        formData.append('action', 'create_folder');

        // Envoyer le dossier
        fetch(ajaxurl, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Success:', data.data);
                    //#region Envoi des données du dossier
                    fetch('https://lab.padem.org/wp-json/mo/v1/createProjectFile', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                folder_name: folder_name,
                                folder_link: data.data.url,
                                file_type: 'folder',
                                author_email: userEmail,
                                is_folder: true,
                                is_in_folder: false,
                                is_trame: false,
                                created_at: new Date(Date.now())
                            }),
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            // Masquer l'avancement du chargement
                            document.getElementById('loading').style.display = 'none';
                            // Recharger les trames
                            displayTrames();

                            // Vider les champs du formulaire
                            document.getElementById('trame_new_folder_name').value = '';
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                            // Masquer l'avancement du chargement
                            document.getElementById('loading').style.display = 'none';
                        });
                    //#endregion
                } else {
                    console.log('Error:', data.data);
                    // Masquer l'avancement du chargement
                    document.getElementById('loading').style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Erreur lors de la requête AJAX:', error);
                // Masquer l'avancement du chargement
                document.getElementById('loading').style.display = 'none';
            });
    });
} catch (error) {
    console.error('Erreur lors de l\'ajout de l\'évènement pour envoyer le dossier:', error);
}


try {
    // Envoyer la trame
    document.getElementById('onglet_trame_send').addEventListener('click', function (e) {
        e.preventDefault();

        // Récupérer le premier fichier
        let trame_file = document.getElementById('trame_file_1').files[0];
        let trame_file_name = trame_file.name;
        let trame_file_type = trame_file.type;
        let trame_file_size = trame_file.size;

        // Récupérer l'adresse email de l'utilisateur connecté
        let userEmail = current_user_data.email;

        // Vérifier si les champs sont vides
        if (trame_file.length === 0) {
            alert('Veuillez ajouter un fichier.');
            return;
        }

        // Afficher l'avancement du chargement
        document.getElementById('loading').style.display = 'block';

        // Créer un objet FormData
        let formData = new FormData();
        formData.append('file', trame_file);
        formData.append('action', 'handle_file_upload');

        // Envoyer le fichier
        fetch(ajaxurl, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    //#region Envoi des données de la trame
                    fetch('https://lab.padem.org/wp-json/mo/v1/createProjectFile', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                file_name: ((data.data.url).split('/')).pop(), // Nom du fichier
                                file_type: trame_file_type,
                                file_link: data.data.url, // Lien du fichier
                                file_size: trame_file_size,
                                author_email: userEmail,
                                is_trame: true,
                                created_at: new Date(Date.now()) // Date de création
                            }),
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            // Masquer l'avancement du chargement
                            document.getElementById('loading').style.display = 'none';
                            // Recharger les trames
                            displayTrames();

                            // Vider les champs du formulaire
                            document.getElementById('trame_file_1').value = '';
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                            // Masquer l'avancement du chargement
                            document.getElementById('loading').style.display = 'none';
                        });
                    //#endregion
                } else {
                    console.log('Error:', data.data);
                    // Masquer l'avancement du chargement
                    document.getElementById('loading').style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Masquer l'avancement du chargement
                document.getElementById('loading').style.display = 'none';
            });
    });
} catch (error) {
    console.error('Erreur lors de l\'ajout de l\'évènement pour envoyer la trame:', error);
}