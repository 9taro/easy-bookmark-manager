(function () {

    var englishTranslations = {
        'user.update': 'update user',
        'user.logout' : 'logout',
        'export.bookmarks' : 'export bookmarks',
        'import.bookmarks' : 'Import bookmarks',
        'new.bookmark' : 'New bookmark',
        'search.bookmark' : 'Refine search',
        'bookmarks.nodata' : 'no data found, try clicking on some filters',
        bookmark : {
            title : 'Title',
            link : 'Link',
            category : 'Category',
            categories : 'Categories',
            save : 'Save',
            create : 'Create',
            update : 'Update',
            saveandclose : 'Save and close',
            delete : 'Delete',
            close : 'Close',
            back : 'Back',
            enable : 'Enable',
            cancel : 'Cancel',
            search : 'Search categories',
            tagsPlaceholder : 'Add tags',
            favourite : 'Favourite',
            tag : 'Tag',
            tags : 'Tags'
        },
        message : {
            error : 'Oh snap!',
            Success : 'Success'
        },
        settings : {
            name : 'Name',
            login : 'Email / Login',
            password : 'New password',
            confirm : 'Re-type new password'
        }
    };

    var frenchTranslations = {
        "user.update": "Paramètres",
        'user.logout' : 'Déconnexion',
        'export.bookmarks' : 'Exporter favoris',
        'import.bookmarks' : 'Importer favoris',
        'new.bookmark' : 'Nouveau favoris',
        'search.bookmark' : 'Chercher parmis les favoris',
        'bookmarks.nodata' : 'Aucun favoris trouvé.',
        bookmark : {
            title : 'Titre',
            link : 'Lien',
            category : 'Catégorie',
            categories : 'Catégories',
            tags : 'Mots clés',
            save : 'Sauver',
            create : 'Créer',
            update : 'Mettre à jour',
            saveandclose : 'Sauver et quitter',
            delete : 'Supprimer',
            close : 'Fermer',
            back : 'Retour',
            enable : 'Activer',
            cancel : 'Annuler',
            search : 'Rechercher une catégorie',
            tagsPlaceholder : 'Ajouter un mot clé',
            favourite : 'Important',
            tag : 'Mot clé',
        },
        message : {
            error : 'Aie ! Une erreur est survenue',
            success : 'Succès'
        },
        settings : {
            name : 'Nom',
            login : 'Email / Identifiant',
            theme : 'Thème',
            password : 'Nouveau mot de passe',
            confirm : 'Confirmation'
        }
    };

    angular.module('bookmarksApp').config(function ($translateProvider) {
        $translateProvider.translations('en', englishTranslations);

        $translateProvider.translations('fr', frenchTranslations);
        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.determinePreferredLanguage();
    })

}());
