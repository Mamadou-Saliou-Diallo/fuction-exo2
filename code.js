document.getElementById('calculer').addEventListener('click', function() {
    // Récupérer la valeur du champ
    const nombre = parseInt(document.getElementById('nombre').value);
    
    // Calculer le modulo par 4
    const reste = nombre % 4;

    // Afficher le résultat
    document.getElementById('resultat').textContent = `Si l'on divise ${nombre} par 4, le reste est : ${reste}.`;
});