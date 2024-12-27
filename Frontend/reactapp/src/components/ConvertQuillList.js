export function ConvertQuillList(html) {
    if (!html) return ""; // Retourner un contenu vide si le HTML est inexistant
  
    const container = document.createElement("div");
    container.innerHTML = html; // Charger le contenu HTML
  
    const items = Array.from(container.querySelectorAll("li"));
    if (items.length === 0) return html; // Retourner le HTML d'origine si aucune liste n'est trouvée
  
    const stack = []; // Utilisé pour gérer les niveaux imbriqués
    let currentList = container; // Initialiser avec la liste principale
  
    items.forEach((item) => {
      const level = parseInt(item.className.match(/ql-indent-(\d+)/)?.[1] || "0", 10);
  
      // Si le niveau actuel est inférieur au précédent, on remonte dans la pile
      while (stack.length > level) {
        stack.pop();
      }
  
      // Si on descend dans un niveau, on crée une nouvelle sous-liste
      if (stack.length < level) {
        const sublist = document.createElement("ol");
        currentList.appendChild(sublist);
        stack.push(sublist); // Ajouter la nouvelle sous-liste à la pile
        currentList = sublist; // Mettre à jour la liste courante
      }
  
      // Ajouter l'élément à la bonne liste
      stack[stack.length - 1].appendChild(item.cloneNode(true));
  
      // Remettre currentList à la liste parente si le niveau remonte
      if (stack.length > level) {
        currentList = stack[stack.length - 1];
      }
    });
  
    return container.innerHTML; // Retourner le HTML final transformé
  }
  