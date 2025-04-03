const year = new Date().getFullYear();

export const languageList = {
  es: 'Español',
  en: 'English',
}

export const ui = {
  es: {
    '404.message': 'Lo sentimos, la página que buscas no existe.',
    '404.button': 'Volver al inicio',

    'afa.work': 'Fotografía AFA',

    'nav.home': 'Inicio',
    'nav.about': 'Info',
    'nav.contact': 'Contacto',  
    'nav.work': 'Trabajo',
    'nav.date': `Ciudad de México ${year}`,
    'about.abstract1': 'Establecida en 2024, AFA es un estudio multidisciplinario que fusiona el diseño experimental con el conocimiento ancestral. -la firma incluye una división arquitectónica, un estudio de diseño de interiores y una ala de dirección artística para abordar el desarrollo de proyectos. Con sede en la Ciudad de México, los creativos asumen una agenda internacional para absorber cultura, artesanía y talento en todo el mundo.',
    'about.abstract2': 'La visión de Alonso sintetiza la percepción antropológica—abarcando el comportamiento humano, los patrones culturales y los marcos sociopolíticos de civilizaciones pasadas—en una metodología de diseño que desafía los paradigmas contemporáneos. Se inspira en la ingeniosidad de las sociedades antiguas, cuyos logros siguen siendo inigualables incluso en una era de avances tecnológicos sin precedentes. Su investigación busca la trascendencia y se traduce en una práctica espacial que redefine estrategias programáticas, escala, materialidad e iluminación, creando entornos que moldean la experiencia humana de manera sutil pero profunda. A través de su trabajo, invita a los usuarios a detenerse, reflexionar e interactuar con su memoria y su entorno de una manera tanto intuitiva como transformadora.',
    
    'contact.legend': 'Si deseas contactarnos, por favor déjanos tu mensaje',
    'contact.name': 'Nombre completo',
    'contact.email': 'Correo electrónico',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',

    'timeline.description1': 'AFA y el estudio con sede en Italia, MORQ Architecture, colaboran en The Palm Dubai - Hospitality (en desarrollo), un plan maestro de hospitalidad que abarca un club de playa, residencias, bazar y centro de bienestar, armonizando con el paisaje árido del desierto emiratí. Este proyecto encarna el lujo a través de una propuesta de diseño reciliente y sostenible, integrándose perfectamente con los enfoques arquitectónicos audaces característicos de Dubái.',
    'timeline.description2': 'Un entorno privilegiado, el Golfo de Baja California está rodeado por tres océanos y un ecosistema árido. En la década de 1960, se construyó un nuevo hotel destinado al "jet set" en un terreno a una hora de La Paz, conocido como "Punta Colorada". Posteriormente, el hotel cerró y quedó a merced de la sal. Hoy en día, este proyecto tiene como objetivo desarrollar un Plan Maestro con 6 residencias y amenidades, fiel a su compromiso con la tierra. Este enfoque busca impactar lo menos posible el suelo, respetar la artesanía y los materiales locales, además de explorar nuevas formas de habitar en un ámbito estático.',
    'timeline.description3': 'Este es un proyecto de interiorismo para un penthouse en el resort SURFOS en Punta Mita, Riviera Nayarit, México. 600 m² con cuatro habitaciones, cada una con vestidor y baño en suite, sala familiar, sala de estar, cocina, áreas de servicio y terrazas en todas las habitaciones. Esta propuesta refleja la paleta de la Riviera, transmitiendo una calma sofisticada.',
    'timeline.description4': 'En el Taller de Arquitectura Mauricio Rocha, he crecido desde ser pasante hasta convertirme en líder de proyectos. Algunos proyectos destacados incluyen el Museo Anahuacalli, Casa Cretas y la Fondation Cartier. Otros proyectos, como la Cineteca Chapultepec III y la Casa Heliotropo, me permitieron demostrar mi capacidad para trabajar en distintas escalas. El Taller ha perfeccionado mis habilidades de gestión de proyectos y diseño. Este recorrido me ha dotado de sólidas competencias en comunicación y liderazgo para enfrentar cualquier desafío arquitectónico.',

    'casacomporta.image': 'Portada Casa Comporta',
    'casacomporta.description1': 'Comporta se fundó a partir de sus actividades pesqueras y, posteriormente, agrícolas. Su arquitectura vernácula, compuesta por pilas de madera, funciona como una premisa y lenguaje fundamental de diseño. Materiales como la madera y la piedra local comunican la ligereza o pesadez del edificio y su programa. El paisaje dicta las orientaciones de los volúmenes.',
    'casacomporta.description2': 'Las plataformas y volúmenes elevados demuestran un enfoque sostenible en respeto a la tierra. Crean una variedad de configuraciones espaciales para programas privados, semi-privados y públicos en una parcela de once acres.',
    'casacomporta.description3': 'El proyecto propone una secuencia de agrupaciones formadas por estrategias programáticas para coexistir con el entorno existente. Plataformas, pabellones y bungalows se convierten en límites del paisaje, volúmenes que se abren hacia el exterior en celebración de la naturaleza. La calma se percibe en la relación entre sus elementos y texturas.',
    'casacomporta.description4': 'La institución de arte y la residencia privada del cliente se ubican en extremos opuestos de la parcela, conectados por un muelle central y senderos naturales. Esta estrategia preserva la privacidad de ambos programas, manteniendo un lenguaje estructural conjunto: madera para los espacios habitacionales y sillares de piedra para las áreas de servicio.',

    'ghostmarfa.image': 'Portada Ghost Marfa',
    'ghostmarfa.description1': '¿Qué sucede cuando una utopía sin fisuras emerge en el desierto?',
    'ghostmarfa.description2': 'El fenómeno de las fisuras formadas por los ciclos de erosión en la tierra, donde lo sólido se contrae y surgen grietas a su alrededor, se extiende por el suelo y crea un patrón irregular compuesto por bifurcaciones.',
    'ghostmarfa.description3': 'Este juego de masas y vacíos nos llevó a contemplar un diseño que logra emular caminos, volúmenes y rutas que se encuentran en una ciudad. Aunque esta ciudad es invisible, busca soluciones urbanas que contribuyan a un entorno silencioso en lugar de transformarlo con monumentalidad.',
    'ghostmarfa.description4': 'La fundación Cinatti define el eje principal y la entrada a la ciudad. Las cajas de concreto de Donald Judd sirven como monumentos en la ciudad, que en su momento permitieron que la imaginación viajara más allá de cuatro paredes y un techo.',
    'ghostmarfa.description5': 'Un juego de misterio y descubrimiento para el usuario despierta el deseo de perderse en el horizonte. Plataformas descansan sobre estas masas, permitiendo que los programas se desarrollen en su interior. La utópica “Ciudad Fantasma” se comprende a partir de los volúmenes emergentes que actúan bajo este límite invisible.',

    'mercadotacubaya.image': 'Portada Mercado Tacubaya',
    'mercadotacubaya.description1': 'Este proyecto fue diseñado y producido durante la pandemia de COVID-19:',
    'mercadotacubaya.description2': 'A través de una perspectiva de salud y bienestar. Pienso en un mundo post-pandemia dentro de una de las ciudades más densas del mundo, que ha sufrido terribles consecuencias desde el brote',
    'mercadotacubaya.description3': '¿Cómo se adaptarán las necesidades programáticas a través de premisas de diseño que puedan sostener una mejor calidad de vida? Como arquitectos, debemos abogar por soluciones.',
    'mercadotacubaya.description4': 'Un análisis del Valle de México identificó a Tacubaya como una región susceptible al caos debido a su densidad, desechos, contaminación, falta de espacios abiertos e infraestructura.',
    'mercadotacubaya.description5': 'El mercado de alimentos se verá afectado y, en consecuencia, evolucionará hacia una metodología más limpia en la cadena de suministro. Visualizo este mercado como un prototipo educativo para que los residentes de Tacubaya adopten prácticas más higiénicas en sus hogares.',
    'mercadotacubaya.description6': 'Los alimentos que llevamos a nuestra mesa afectan nuestro cuerpo, mente y rendimiento. Un espacio que fomente un ambiente amigable y una relación positiva con el comercio de alimentos conducirá naturalmente a una vida más saludable y feliz.',
    'mercadotacubaya.description7': 'Un programa innovador que priorice los espacios abiertos, la circulación de aire y la higiene responderá de manera positiva a esta nueva realidad.',

    'puntacolorada.image': 'Portada Punta Colorada',
    'puntacolorada.decription1': 'Este proyecto arquitectónico, ubicado dentro del desarrollo de Punta Colorada en Baja California Sur, México, se basa en una profunda filosofía que establece paralelismos entre las tradiciones arquitectónicas mesoamericanas y romanas. Su enfoque de diseño se inspira en los periodos clásicos de ambas civilizaciones, reconociendo su énfasis compartido en la simetría, la proporción y la integración armoniosa con la naturaleza.',
    'puntacolorada.decription2': 'En Mesoamérica, los primeros habitantes, como los mexicas o aztecas, utilizaban espacios comunales como plazas y patios, fomentando la participación comunitaria y la conexión con el entorno. De manera similar, los romanos desarrollaron sofisticados acueductos y baños termales, elevando el ocio y la interacción pública a una expresión artística.',
    'puntacolorada.decription3': 'Este proyecto busca sintetizar estos principios ancestrales, adoptando conceptos como la plaza, el atrio y la disposición serena de los espacios, mientras emplea materiales locales como piedra, madera y chukum para crear una interpretación contemporánea de la sabiduría arquitectónica atemporal. Al honrar estas residencias ancestrales y su profundo impacto en la experiencia humana, esta vivienda encarna una narrativa de continuidad y respeto por el pasado, manifestada a través de una visión moderna que respeta el contexto único de Punta Colorada.',

  },
  en: {
    '404.message': 'Sorry, the page you are looking for does not exist.',
    '404.button': 'Go back to home',

    'afa.work': 'AFA Photography',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',  
    'nav.work': 'Work',
    'nav.date': `Mexico City ${year}`,
    'about.abstract1': 'Established in 2024, AFA is a multidisciplinary studio that blends experimental design with ancestral knowledge. -the firm includes an architectural division, interior design studio and an artistic direction wing to approach project development. Based in Mexico City, creatives take on an international agenda so as to absorb culture, craftsmanship and talent around the world.',
    'about.abstract2': 'Alonso’s vision synthesizes anthropological insight—encompassing human behavior, cultural patterns, and the socio-political frameworks of past civilizations—into a design methodology that challenges contemporary paradigms. He draws from the ingenuity of ancient societies, whose achievements remain unparalleled even in an era of unprecedented technological advancement. His research aims for transcendence and translates into a spatial practice that redefines programmatic strategies, scale, materiality, and lighting, fostering environments that subtly yet profoundly shape human experience. Through his work, he invites users to pause, reflect, and engage with their memory and surroundings in a manner that is both intuitive and transformative.',
    
    'contact.legend': 'If you want to contact us, please leave us your message',
    'contact.name': 'Full name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send',

    'timeline.description1': 'AFA and the Italy-based studio, MORQ Architecture, collaborate on The Palm Dubai - Hospitality (Under Development), a hospitality master plan encompassing a beach club, residences, bazaar, and wellness center, harmonizing with the arid landscape of the Emirati desert. This project embodies luxury through a resilient and sustainable design proposal, seamlessly integrating with the bold architectural approaches characteristic of Dubai.',
    'timeline.description2': 'A privileged environment, the Gulf of Baja California is surrounded by three oceans and an arid ecosystem. In the 1960s, a new hotel was built for the "jet set" on land located one hour from La Paz, known as "Punta Colorada." Eventually, the hotel closed and was left at the mercy of the salt. Today, this project aims to develop a Master Plan with six residences and amenities, remaining true to its commitment to the land. This approach seeks to have minimal impact on the ground, respect local craftsmanship and materials, and explore new ways of inhabiting a static environment.',
    'timeline.description3': 'This is an interior design project for a penthouse at the SURFOS resort in Punta Mita, Riviera Nayarit, Mexico. A 600 m² space with four bedrooms, each with a walk-in closet and en-suite bathroom, a family room, living room, kitchen, service areas, and terraces in every room. This proposal reflects the Riviera’s palette, conveying sophisticated calm.',
    'timeline.description4': 'At Mauricio Rocha\'s Architecture Workshop, I have grown from an intern to becoming a project leader. Some key projects include the Anahuacalli Museum, Casa Cretas, and the Fondation Cartier. Other projects, such as the Cineteca Chapultepec III and the Heliotropo House, allowed me to demonstrate my ability to work at different scales. The Workshop has refined my project management and design skills. This journey has equipped me with strong communication and leadership abilities to face any architectural challenge.',

    'casacomporta.image': 'Casa Comporta Front Page',
    'casacomporta.description1': 'Comporta was founded on its fishing activities and later on agriculture. Its vernacular architecture, composed of wooden piles, serves as a fundamental design premise and language. Materials such as wood and local stone communicate the building’s lightness or heaviness and its program. The landscape dictates the orientation of the volumes.',
    'casacomporta.description2': 'Elevated platforms and volumes demonstrate a sustainable approach in respect for the land. They create a variety of spatial configurations for private, semi-private, and public programs within an eleven-acre plot.',
    'casacomporta.description3': 'The project proposes a sequence of groupings formed by programmatic strategies to coexist with the existing environment. Platforms, pavilions, and bungalows become boundaries of the landscape—volumes that open outward in celebration of nature. Calmness is perceived in the relationship between its elements and textures.',
    'casacomporta.description4': 'The art institution and the client’s private residence are located at opposite ends of the plot, connected by a central pier and natural pathways. This strategy preserves the privacy of both programs while maintaining a cohesive structural language: wood for the living spaces and stone blocks for the service areas.',

    'ghostmarfa.image': 'Ghost Marfa Front Page',
    'ghostmarfa.description1': 'What happens when a seamless utopy emerges in the desert?',
    'ghostmarfa.description2': 'The phenomenon of fissures formed by the cycles of erosion on the earth, where the solid contracts and cracks emerge around it, spreads through the ground and creates an irregular pattern composed of bifurcations.',
    'ghostmarfa.description3': 'This interplay of masses and voids led us to contemplate a layout that manages to emulate paths, volumes, and routes found in a city.  Although this city is invissible, it is intended to look for urban solitions that contribute to a silent environment rather than transforming it with monumentality.',
    'ghostmarfa.description4': 'The Cinatti foundation dictates the main axis and entranance for the city. The concrete boxes of Donald Judd serve as monuments on the city that once allowed imagination to travel out of four walls and a roof.',
    'ghostmarfa.description5': 'A game of mystery and discovery for the user, hands the desire to get lost in the horizon. Platforms rest upon these masses, enabling programs to develop on the inside of them. The utopian “Ghost City” is understood from the emerging volumes behaving beneath this invisible boundary.',

    'mercadotacubaya.image': 'Mercado Tacubaya Front Page',
    'mercadotacubaya.description1': 'This project was designed and produced on the covid-19 pandemic:',
    'mercadotacubaya.description2': 'Through a health and well-being perspective. I think of a post-pandemic world on one of the most dense cities in the world, which has suffered terrible consequences since the outbreak.',
    'mercadotacubaya.description3': 'How will programatic necessities adapt through design premises that can sustain a better way of living. As architects we must advocate for solutions.',
    'mercadotacubaya.description4': 'An analysis of the Mexico Valley appointed Tacubaya as a region susceptible to chaos in consequence in of density, waste, pollution, lack of open spaces and infrastructure.',
    'mercadotacubaya.description5': 'The food market will be affected hence evolve towards a cleaner methodology of chain supply. I envision this market as an educational prototype for Tacubaya residents to take a clean practice to their homes.',
    'mercadotacubaya.description6': 'The food we bring to our tables affects our body, mind and performance. A space that demonstrates a friendly environment and a positive relationship with food trade, will naturally lead to a healthier, happier life.',
    'mercadotacubaya.description7': 'A fresh programme that prioritizes open spaces, air circulation and hygene, will respond positively to this new reality.',

    'puntacolorada.image': 'Punta Colorada Front Page',
    'puntacolorada.decription1': 'This architectural project, situated within the Punta Colorada development in Baja California Sur, Mexico, is rooted in a profound philosophy that draws parallels between Mesoamerican and Roman architectural traditions. The design ethos takes inspiration from the classical periods of both civilizations, recognizing their shared emphasis on symmetry, proportion, and harmonious integration with nature.',
    'puntacolorada.decription2': 'In Mesoamerica, early residents such as the Mexica or Aztecs utilized communal spaces like plazas and courtyards, fostering community engagement and connection with the surrounding environment. Similarly, the Romans developed sophisticated aqueducts and thermal baths, elevating leisure and public interaction to an art form.',
    'puntacolorada.decription3': 'This project seeks to synthesize these ancient principles, embracing concepts of plaza, atrium, and serene spatial arrangements, while employing local materials such as stone, wood, and chukum to create a contemporary interpretation of timeless architectural wisdom. By honoring these ancestral residences and their profound impact on human experience, this residence embodies a narrative of continuity and reverence for the past, manifested through a modern lens that respects the unique context of Punta Colorada.',
  },
}