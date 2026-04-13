const citations = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
    "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. - Albert Schweitzer",
    "L'important n'est pas de réussir, mais de progresser. - Winston Churchill",
    "La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
    "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions. - Dalaï Lama",
    "La vie est ce qui arrive quand vous êtes occupé à faire d'autres projets. - John Lennon",
    "Le plus grand risque est de ne prendre aucun risque. - Mark Zuckerberg",
    "Le succès est la somme de petits efforts répétés jour après jour. - Robert Collier",
    "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui. - Franklin D. Roosevelt",
    "Ne jugez pas chaque jour à la récolte que vous faites, mais aux graines que vous plantez. - Robert Louis Stevenson",
    "Le bonheur est une direction, pas une destination. - Inconnu",
    "La vie est courte, mais elle est large. - Tennessee Williams",
    "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte. - Winston Churchill",
    "Le bonheur est une habitude à cultiver, pas une destination à atteindre. - Inconnu",
    "La vie est un défi, relève-le ! - Mère Teresa",
    "Le succès est la capacité de passer d'un échec à l'autre sans perdre son enthousiasme. - Winston Churchill",
    "Le bonheur est une décision que nous prenons chaque jour. - Inconnu",
    "La vie est un cadeau, appréciez-le. - Inconnu",
    "Le succès n'est pas la clé du bonheur, mais le bonheur est la clé du succès. - Albert Schweitzer",
    "si vous voulez vivre une vie heureuse, attachez-la à un but, pas à des personnes ou des choses. - Albert Einstein",
    "seulement ceux qui prennent le risque d'aller trop loin peuvent découvrir jusqu'où ils peuvent aller. - T.S. Eliot",
    "le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions. - Dalaï Lama",
    "la vie est ce qui arrive quand vous êtes occupé à faire d'autres projets. - John Lennon",
    "n'ayez pas peur de renoncer au bon pour aller vers le meilleur. - John D. Rockefeller",
    "n'abandonnez jamais un rêve à cause du temps que cela prendra pour le réaliser. Le temps passera de toute façon. - Earl Nightingale",
];
let button = document.getElementById("afficherCitation");
button.addEventListener("click", afficherCitation);
function afficherCitation() {
    let citationElement = document.getElementById("citation");
    let randomIndex = Math.floor(Math.random() * citations.length);
    citationElement.textContent = citations[randomIndex];
    citationElement.classList.add( "mt-4", "bg-gray-200", "p-4", "rounded-lg", "shadow-md", "text-red-500", "font-semibold");
}   