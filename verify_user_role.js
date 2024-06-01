// Vérifier si l'utilisateur connecté est un administrateur
function checkIfUserIsAdmin() {
    // Vérifier si l'utilisateur connecté est un administrateur
    fetch(users_list.urls.Administrateur, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Récupérer les emails des administrateurs
                var data_emails = [];
                data.forEach(item => {
                    data_emails.push(item.chief_email);
                });
                // Vérifier si l'utilisateur connecté est un administrateur
                if (data_emails.includes(userEmail)) {
                    userRole = 'Administrateur';
                    document.getElementById('userRoleToDispaly').innerHTML = userRole;
                    document.getElementById('userRoleToDispaly').style.backgroundColor = users_list.bacground_colors.Administrateur;
                    document.getElementById('userRoleToDispaly').style.display = 'block';
                    // Masquer le spinner de chargement
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('add_member').style.display = 'block';
                } else {
                    // Vérifier si l'utilisateur connecté est un coordinateur
                    checkIfUserIsCoordinator();
                }
            } else {
                checkIfUserIsCoordinator();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Vérifier si l'utilisateur connecté est un coordinateur 
function checkIfUserIsCoordinator() {
    // Vérifier si l'utilisateur connecté est un coordinateur
    fetch(users_list.urls.Coordinateur, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Récupérer les emails des coordinateurs
                var data_emails = [];
                data.forEach(item => {
                    data_emails.push(item.coordinator_email);
                });
                // Vérifier si l'utilisateur connecté est un coordinateur
                if (data_emails.includes(userEmail)) {
                    userRole = 'Coordinateur';
                    document.getElementById('userRoleToDispaly').innerText = userRole;
                    document.getElementById('userRoleToDispaly').style.backgroundColor = users_list.bacground_colors.Coordinateur;
                    document.getElementById('userRoleToDispaly').style.display = 'block';
                    // Masquer le spinner de chargement
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('add_member').style.display = 'block';
                } else {
                    // Vérifier si l'utilisateur connecté est un chef de projet
                    checkIfUserIsProjectChief();
                }
            } else {
                checkIfUserIsProjectChief();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Vérifier si l'utilisateur connecté est un chef de projet
function checkIfUserIsProjectChief() {
    // Vérifier si l'utilisateur connecté est un chef de projet
    fetch(users_list.urls.chef_de_projet, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Récupérer les emails des chefs de projet
                var data_emails = [];
                data.forEach(item => {
                    data_emails.push(item.chief_email);
                });
                // Vérifier si l'utilisateur connecté est un chef de projet
                if (data_emails.includes(userEmail)) {
                    userRole = 'Chef de projet';
                    document.getElementById('userRoleToDispaly').innerText = userRole;
                    document.getElementById('userRoleToDispaly').style.backgroundColor = users_list.bacground_colors.chef_de_projet;
                    document.getElementById('userRoleToDispaly').style.display = 'block';
                    // Masquer le spinner de chargement
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('add_member').style.display = 'block';
                } else {
                    // Vérifier si l'utilisateur connecté est un partenaire
                    checkIfUserIsPartner();
                }
            } else {
                checkIfUserIsPartner();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Vérifier si l'utilisateur connecté est un partenaire
function checkIfUserIsPartner() {
    // Vérifier si l'utilisateur connecté est un partenaire
    fetch(users_list.urls.partenaire, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Récupérer les emails des partenaires
                var data_emails = [];
                data.forEach(item => {
                    data_emails.push(item.partner_email);
                });
                // Vérifier si l'utilisateur connecté est un partenaire
                if (data_emails.includes(userEmail)) {
                    userRole = 'Partenaire';
                    document.getElementById('userRoleToDispaly').innerText = userRole;
                    document.getElementById('userRoleToDispaly').style.backgroundColor = users_list.bacground_colors.partenaire;
                    document.getElementById('userRoleToDispaly').style.display = 'block';
                    // Masquer le spinner de chargement
                    document.getElementById('loading').style.display = 'none';
                } else {
                    // Vérifier si l'utilisateur connecté est un comptable
                    checkIfUserIsAccountant();
                }
            } else {
                checkIfUserIsAccountant();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Vérifier si l'utilisateur connecté est un comptable
function checkIfUserIsAccountant() {
    // Vérifier si l'utilisateur connecté est un comptable
    fetch(users_list.urls.comptable, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Récupérer les emails des comptables
                var data_emails = [];
                data.forEach(item => {
                    data_emails.push(item.accountant_email);
                });
                // Vérifier si l'utilisateur connecté est un comptable
                if (data_emails.includes(userEmail)) {
                    userRole = 'Comptable';
                    document.getElementById('userRoleToDispaly').innerText = userRole;
                    document.getElementById('userRoleToDispaly').style.backgroundColor = users_list.bacground_colors.comptable;
                    document.getElementById('userRoleToDispaly').style.display = 'block';
                    // Masquer le spinner de chargement
                    document.getElementById('loading').style.display = 'none';
                } else {
                    // Vérifier si l'utilisateur connecté est un consultant
                    checkIfUserIsConsultant();
                }
            } else {
                checkIfUserIsConsultant();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Vérifier si l'utilisateur connecté est un consultant
function checkIfUserIsConsultant() {
    // Vérifier si l'utilisateur connecté est un consultant
    fetch(users_list.urls.consultant, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Récupérer les emails des consultants
                var data_emails = [];
                data.forEach(item => {
                    data_emails.push(item.consultant_email);
                });
                // Vérifier si l'utilisateur connecté est un consultant
                if (data_emails.includes(userEmail)) {
                    userRole = 'Consultant';
                    document.getElementById('userRoleToDispaly').innerText = userRole;
                    document.getElementById('userRoleToDispaly').style.backgroundColor = users_list.bacground_colors.consultant;
                    document.getElementById('userRoleToDispaly').style.display = 'block';
                    // Masquer le spinner de chargement
                    document.getElementById('loading').style.display = 'none';
                } else {
                    userRole = 'Utilisateur';
                    document.getElementById('userRoleToDispaly').innerText = userRole;
                    document.getElementById('userRoleToDispaly').style.backgroundColor = users_list.bacground_colors.Utilisateur;
                    document.getElementById('userRoleToDispaly').style.display = 'block';
                    document.getElementById('loading').style.display = 'none';
                }
            } else {
                // Masquer le spinner de chargement
                document.getElementById('loading').style.display = 'none';
                userRole = 'Chef de projet';
                document.getElementById('userRoleToDispaly').innerText = userRole;
                document.getElementById('userRoleToDispaly').style.backgroundColor = users_list.bacground_colors.chef_de_projet;
                document.getElementById('add_member').style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}