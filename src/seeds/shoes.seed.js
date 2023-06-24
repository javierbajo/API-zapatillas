
mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Shoe = require("../api/models/shoe.model.js");


/* 
-Dulces: banano, sandía, cereza, higo, melón, manzana roja. 
-Semidulces: papaya, mango, pera, uva, guanábana. -Ácidas: guayaba, fresa, frambuesa, limón, mora, piña, toronja, maracuyá, naranja, arándano rojo. 
-Semi ácidas: ciruelas, tomate, mandarina, granada, manzana verde, durazno.
*/

const arrayShoes = [
    {
        shoeName: 'NB 574 Classic',
        type: 'casual',
        price: 85.75,
        origin: 'USA',
        image: 'https://res.cloudinary.com/dcazjgsgo/image/upload/v1687601405/zapatillasFotos/nb574_v2_dsgbgv.jpg',
        description: 'Creadas en el año 1988 mediante la combinación de otras dos sneakers de la firma norteamericana, este modelo de New Balance 574 se ha convertido en todo un referente y un icono dentro del mundo de la moda, gracias a su clásico diseño que combina a la perfección con un gran abanico de estilos a la hora de vestir.Además cuenta con una extensa gama de colores.',
      },
      {
        shoeName: 'Reebok Navi Prince',
        type: 'sneakers',
        price: 120.65,
        origin: 'USA',
        image: 'https://res.cloudinary.com/dcazjgsgo/image/upload/v1687601442/zapatillasFotos/reebokNaviPrince_eeerzd.jpg',
        description: 'La elegancia sin esfuerzo o effortless elegance es algo que difícilmente se puede aplicar al mundo de las zapatillas de colaboración, tan dado a la exageración. Pero si juntas a dos marcas tan sobrias como Prince y Reebok Classic, el resultado tiene que ser sí o sí el de unas sneakers elegantes, sin estridencias y de lo más atractivas. Sí, por fin unas zapas con effortless elegance. ',
      },
      {
        shoeName: 'Nike Air California',
        type: 'sneakers',
        price: 150.00,
        origin: 'USA',
        image: 'https://res.cloudinary.com/dcazjgsgo/image/upload/v1687601431/zapatillasFotos/NikeAir_nlfrov.jpg',
        description: 'Cuando hablamos de las Nike Air California hablamos de palabras mayores dentro de las Sneakers. Una de las siluetas más conocidas de todos los tiempos. Reedición de sus combinaciones originales para dotarlas de un gran estilo vintage.',
      },
      {
        shoeName: 'Puma RS-X',
        type: 'casual-running',
        price: 65.75,
        origin: 'Alemania',
        image: 'https://res.cloudinary.com/dcazjgsgo/image/upload/v1687601440/zapatillasFotos/PumaRS-X_hblpvg.jpg',
        description: 'Fusionan tecnología, tendencia y diseño. Sorprende su calidad, al nivel de las marcas más presitgiosas, por la mitad de precio que unas Nike Air o unas Jordan. Grandes prestaciones running con un estilo llamativo que permite usarlas combinadas con prendas casual. En definitiva, una elección inteligente para gente exigente sin necesidad de rascarse el bolsillo',
      },
      {
        shoeName: 'Mizuno Wave Rider',
        type: 'running',
        price: 145.50,
        origin: 'Japón',
        image: 'https://res.cloudinary.com/dcazjgsgo/image/upload/v1687601343/zapatillasFotos/MizunoWaveRider_xrgk6j.jpg',
        description: 'La Rider es seguramente una de las históricas en el sector y estamos convencidos de que más de uno de vosotros, las ha utilizado alguna vez en sus vidas.La nueva Mizuno Wave Rider 26, contrariamente a lo que esperábamos, mantiene el ADN de siempre. Este es probablemente uno de los grandes alicientes de esta última versión del clásico modelo de entrenamiento japonés. ',
      },
      {
        shoeName: 'Asics GEL Venture',
        type: 'running',
        price: 155.20,
        origin: 'Japón',
        image: 'https://res.cloudinary.com/dcazjgsgo/image/upload/v1687601335/zapatillasFotos/AsicsGelVenture_zsxp9b.jpg',
        description: 'Las zapatillas GEL-VENTURE™ 9 han sido modificadas para proporcionar una mayor amortiguación. Su funcionalidad ha sido diseñada estratégicamente para cuando cambias del entorno natural a las calles de la ciudad. La entresuela ha sido modificada con amortiguación AMPLIFOAM™ y una mayor altura de la suela. En combinación con la tecnología GEL™ en la parte posterior del pie, estas características ayudan a crear una mayor sensación de comodidad y suavidad bajo los pies.​'
      },
      {
        shoeName: 'Adidas Galaxi',
        type: 'running',
        price: 155.20,
        origin: 'Japón',
        image: 'https://res.cloudinary.com/dcazjgsgo/image/upload/v1687601328/zapatillasFotos/adidasGalaxy_krxhrw.jpg',
        description: 'Era verdad entonces, y es verdad ahora. Adidas diseña zapatos pensando en los atletas. Estos zapatos para correr se pueden usar en cualquier momento, pero aún están equipados con tecnología innovadora. La parte superior de malla liviana permite que fluya el aire y la entresuela Cloudfoam brinda una sensación de amortiguación y elasticidad. Una plantilla suave mantiene los pies sintiéndose apoyados, sin importar la frecuencia con la que los hagas caminar o hacer ejercicio.​'
      },
    ];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allShoes = await Shoe.find();
    if(allShoes.length > 0){
        await Shoe.collection.drop();
        console.log("zapatillas borradas");
    }
})
.catch((error) => console.log("Error borrando zapatillas"))
.then(async() => {
    const shoesMap = arrayShoes.map(shoe => new Shoe(shoe));
    await Shoe.insertMany(shoesMap);
    console.log("Zapatillas insertadas");
})
.catch((error) => console.log(`Error insertando zapatillas: $:{error}`))
.finally(() => mongoose.disconnect());



