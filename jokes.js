const jokes = [
    "Era un príncipe tan pero tan feo, que Cenicienta regresó a las 10:30",


    " Era un niño tan feo, pero tan feo, que cuando la madre dio a luz, el médico en vez de felicitarla la regañó",


    " Era un niño tan pero tan feo que cuando nació, el doctor en lugar de pegarle en el culete para que llorase, le pegó a la madre",


    " Tómense una foto sin flash Y el pobre de Flash se fue sin su foto",


    " Anuncio publicitario: ¡Si tu suegra es una joyita, nosotros tenemos el mejor estuche! Funerarias López",

    " Una señora pecosa se fue a confesar, El padre le pregunta: ¿pecas, hija mía? Sí, padre muchas, hasta en el trasero",


    " Dicen que fumar es malo ¡Y lo metieron a la cárcel!",


    " La droga te quita la memoria y otras cosas que no me acuerdo",


    " Mamá, mamá El bebé se hizo mierda, ¡Caca! se dice caca, No, que se hizo mierda, que se me cayó por la ventana",


    " Mamá, mamá, En la escuela me dicen mentiroso, Anda cállate, si hace un año que acabaste la escuela",


    " Mamá, mamá Que ya no quiero conocer a mi abuelito, Cállate y sigue escarbando",


    " Mamá, mamá Que ya no me gusta mi hermanito, Cállate y sigue comiendo",


    " Ahorro debería escribirse sin h, para economizar una letra",


    " ¿En que mes hablan menos las mujeres? En Febrero, sólo tiene 28 días",


    " ¿Porque los gallegos ponen una escalera en el mar? para que suba la marea",

    " Dice un niño a su padre: Papá, ¿los cuernos se quitan? No, hijo, los cuernos se ponen",


    " Un amigo a otro:  Mi mujer es un objeto sexual ¿A si? Y eso porque Porque cada vez que me apetece hacer el amor, ella objeta algo",


    " Mamá, mamá En la escuela me dicen Rambo, No puede ser, pues voy a ir a hablar con la directora, No mamá ¡Esta es MI guerra!",


    " Mamá, mamá, ¿Me puedo tirar un pedo como el de ayer? No, nene, Espera al menos a que se te cierren los puntos",


    " Mamá, mamá, ¿Cuesta mucho dinero un bote de tinta china ? No hijo mío, es barata, no te preocupes ¡Que bien! Porque se me derramó un bote de tinta sobre tu vestido nuevo",


    " Mamá, mamá, Sácame ya del armario, que tengo calor, Si, claro ¿Estás loco? y que se extienda el fuego",


    " Un desconocido a una desconocida: Quiero hacerle el amor, Señor, no se confunda, Bueno, pues lo podemos hacer sin funda",


    " Mamá, mamá, ¿Qué hay hoy para cenar ? Cállate ya anda, y vuelve a meterte en el horno",


    " Era una vaca tan flaca, pero tan flaca, que en vez de dar leche lo que daba era lástima",

    " Le dice un encendedor a un fósforo: ¿Por qué cada vez que te frotan pierdes la cabeza? El fósforo responde: Suelta la piedra, y pelea como los hombres",


    " Oye Manolo, ¿tu mujer grita mucho cuando hace el amor? Si, bastante, a veces la escucho desde el bar",


    " Un semáforo al otro, ehh!!! No me mires que me estoy cambiando",



    " ¿Cuándo irá la mujer a la luna? Cuando haya que limpiarla",


    " ¿En qué se parecen las mujeres a los delfines?, En que se sospecha que tienen inteligencia pero aún no se ha demostrado",

    " Mamá, mamá, ¿Qué es un trasvertí ? Hijo, tu mamá está en su cuarto",

    " ¿Por qué les gustan tanto los ordenadores a los hombres? Porque es lo único que saben joder a conciencia",


    " ¿En qué se parecen el hombre y el bacalao? Que si les quitas la cola les quitas lo más salao",


    " ¿En qué se diferencia ET de un hombre? ET por lo menos intenta llamar a casa",


    " ¿Por qué hizo Dios antes al hombre que a la mujer? Porque antes de una obra de arte se hace siempre una chapucilla",


    " ¿En qué se parecen los hombres a mi perro? En nada, afortunadamente para mi pobre perro",


    " ¿Por qué se suicidaron 5 marranitos? Porque se enteraron que su mamá era una cerda",

    " ¿Cómo se llaman los hombres operados de vasectomía? Sacarinos, porque endulzan pero no engordan",


    " ¿En que se parecen los hombres a los cepillos de dientes? En que sin el rabo no sirven para nada",


    " ¿Cuál es la diferencia entre pelo y cabello? En que el cabello te lo quitas de la cabeza, y el pelo te lo quitas de la boca",


    " ¿Qué entiende un hombre por ayudar en la limpieza de la casa? Levantar los pies cuando su mujer pasa la aspiradora",


    " ¿Por qué los hombres no pueden coger la enfermedad de las vacas locas? Porque son todos unos cerdos",


    " ¿Que es una hoja partida por la mitad para un hombre? Un puzzle",


    " Era una señora tan chiquita, tan chiquita, que en lugar de dar a luz, daba chispas",


    " Había un país tan pobre, tan pobre, que el arco iris salía en blanco y negro",



    " Mamá, mamá, ¿Me dejas tus pastillas anticonceptivas ? Pero, que dices hija ¿Para qué las quieres ? Es que ya no quiero que los Reyes me traigan más muñecas",


    " ¿En que se parecen los hombres a un ordenador? En que cuando más los necesitas, se les cae el sistema",



    " Había una vez una mujer tan gorda, pero tan gorda, que cuando estaba tomando sol en la playa llegó Green Peace y la devolvió al mar",


    " Se abre el telón y aparece un gitano, Desaparece el telón",


    " Ponte el pantalón de Cuadritos, Y el pobre de Cuadritos quedo en calzoncillos",


    " En una misma fiesta alguien dijo: Bailen con gracia, Y la pobre Gracia bailó toda la noche",




    " Era un hombre tan enano, pero tan enano, que para pasar por debajo de la puerta tenía que subirse a una silla",






    " Un amigo a otro: ¿Tú haces siempre el amor con preservativo? Siempre lo hago con preservativo, pero preferiría hacerlo con una mujer",




    " Dos amigas están en una fiesta y una le dice a la otra: Que aburrida está la fiesta ¿no? Pues si tía, yo cuando encuentre mis bragas me voy a casa",




    " Era tan numerosa esa familia que la cigüeña vivía con ellos",


    " ¿Por qué a los hombres no les entra una cosa por el oído y le sale por el otro? Porque las ondas del sonido no se propagan en el vacío",




    " ¿Qué es para una mujer un pasillo muy largo?, Un laberinto",

    " Mamá, mamá, (Una cerdita a su madre): ¿porqué tenemos una raja abajo? Por que si la tuvieras arriba serías una alcancía",



    " Mamá, mamá, ¿Me vas a comprar la bici ? ¡Ay, nene! Encima de paralítico, eres tonto",



    " Antes de tener relaciones, una joven reza: Virgen María, tú que concebiste sin pecar, haz que yo peque sin concebir",


    " ¡Niñoooooo, sube ahora mismo! No, que me vuelves a tirar",


    " Me comí el helado de menta, y Menta me molió a palos",


    " Mi mamá es una rata, Firma: Mikey Mouse",

    " Era un hombre tan pero tan alto, que se tropezó un viernes y cayó un domingo",


    " En un barco: Tierra a la vista, Y Lavista murió enterrado",
    " Mamá, mamá, ¿El corazón tiene piernas ? Nooo ¿Por qué ? Porque anoche papá estaba encerrado en el cuarto con la criada y decía: Abre las piernas corazón",
    " Jaimito, dime los nombres de tres cuadrúpedos: Un perro, un gato y dos gallinas",



    " Era un hombre tan pequeño, tan pequeño, que no le cabía la menor duda",
    " Se buscan mujeres con la menstruación, firmado Drácula",
    " ¿Qué le dijo un mosquito a otro? Esta noche vamos a asaltar la Cruz Roja",
    " En el restaurante: ¿Y como quiere el señor sus huevos? Tu verás, pues con toda mi alma",


    " ¿En qué se parecen los hombres a los pedos? En que te los tiras cuando quieres",


    " ¿Cuánto tarda un hombre en cambiar un rollo de papel higiénico? No se sabe, nunca lo han hecho",


    " ¿Qué hay detrás de un hombre inteligente? Una mujer sorprendida",


    " Papá, papá, ¿cual es la definición de engreído ? Que bien que preguntaste, porque soy la mejor persona para responderte",


    " Papá, papá, ¿Qué es la crisis ? Es cuando te gustan el champaña y las mujeres pero sólo te queda gaseosa y tu esposa",


    " Era una mujer tan fea, tan fea, que el medico al nacer dijo: Si llora es niña si no, es un tumor",

    " Era un hombre tan tonto, tan tonto, que vendió la tele para comprarse el dvd",

    " Un fotógrafo tan tacaño que sólo retrataba del cuello para abajo, Para que no le salieran caras",


    " Lo que ayer nos unía, hoy no se para",


    " No pasen por los topes, Y los topes no fueron a la fiesta",

    " Mamá, mamá, ¿Puedo ir a una fiesta de 15 años ? No, nene, es demasiado larga",

    " Se pusieron todos contra la pared, y pared perdió el partido",


    " Que me parta un rayo (Un Siamés)",


    " Vamos por partes (Jack el destripador)",


    " Tengo todos mis hijos de apellido distinto (Arturo Distinto Pérez) ",


    " Hasta mañana si yo quiero (Dios)",

    " Oiga, ¿antes no habían unos cuernos detrás de la barra? ¡No, antes había aquí un espejo!",


    " Papá, papá, ¿Sabes dónde están los Pirineos? Pregúntale a tu madre que es la que lo guarda todo",


    " Hace 17 años que estoy casado, y todavía quiero a la misma mujer, ¿No es maravilloso? Si, pero ¡Procure que su esposa no se entere nunca!",


    " Era un hombre tan y tan grande que se tropezó un lunes y cayó un martes",


    " Tienes menos futuro que un enfermo de Parkinson robando panderetas",


    " ¿En que se diferencia un hombre a un camión de basura? En la matrícula",


    " ¿En que se parecen los hombres a las escobas? en que sin el palo no sirven para nada ",


    " ¿En que se parecen los hombres a un peluche? En que solo sirve para adornar la cama",


    " Mi cocinera nueva es un sol, ¿Guisa bien ? No, lo quema todo",


    " Era una mujer tan pero tan bajita que en lugar de dar a luz daba chispas",


    " Era una niña tan fea, tan fea, tan fea, que en lugar de que su mamá diera a luz, dio un apagón",


    " Se le pincha el coche a Drácula y le dice a su ayudante: Tráeme el desarmador, ¡No, el de cruz no! ",


    " Un caníbal va en un avión, y le pregunta la azafata: ¿Le traigo el menú? No, mejor tráigame la lista de los pasajeros",


    " ¿Cómo se escribe? ¿Durmiendo o dormiendo? Pos ninguna de las dos: se escribe despierto",


    " Había una vez una Iglesia tan grande, tan grande, que el cura tenía que repartir la hostia en moto",


    " Un ciempiés mira pasar una ciempiés: Mamacita, qué piernas, qué piernas qué piernas",


    " Era un hombre tan honrado, pero tan honrado, que cuando encontró empleo lo devolvió",

    " En clase de castellano la maestra pregunta: María está disfrutando, a ver, ¿Dónde está el sujeto? Pues encima de ella, maestra",


    " Lo malo de ser mujer esquimal, es que pasas una noche con tu novio y al día siguiente te puedes levantar embarazada de 6 meses",


    " ¿Por qué una mujer no puede ser guapa e inteligente? Porque sería un hombre",


    " ¿Cómo hacer feliz a una mujer el sábado? Contándole un chiste el miércoles",


    " Mamá, mamá, Si Dios nos da de comer, la cigüeña trae los niños de Paris y los Reyes magos los regalos el 6 de enero, ¿Se puede saber para que sirve papá ?",


    " La diferencia entre hacer el amor por un precio y hacer el amor gratis, es que gratis, por lo general, es mucho más caro",


    " ¿Porque son mejores las pilas que los hombres? Al menos las pilas tienen un lado positivo ",


    " Mamá, mamá, ¿Por qué me dicen “El pies grandes” en el barrio ? No sé, nene, es igual ¿Guardaste ya los zapatos en el garaje ?",


    " ¿Como volver a un hombre loco en la cama? Escondiéndole el mando a distancia de la tele",


    " ¿Qué logra ver una mujer si mira a través de la frente de un hombre? La nuca, porque entre la frente y la nuca no tienen nada ",


    " ¿Que pasa si un hombre se come un mosquito? Que tiene más cerebro en el estomago que en la cabeza",


    " ¿Por qué hay mas gays que lesbianas? Porque ni a ellos les gusto ser hombres",

    " ¿En que se parecen los hombres a las pizzas? En que los llamas por teléfono y a los 15 minutos ya los tienes en la puerta de tu casa bien calentitos",


    " ¿En que se parecen los hombres a una pelota de frontón? En que entre mas fuerte les pegues mas rápido regresan",


    " ¿Cuál es la última botella que abre una mujer en una fiesta?  La de Fairy",



    " Hijo, ¿Ha llamado ya algún idiota? No papá, tú eres el primero",


    " Era una familia tan pobre, pero tan pobre, que no tenían ni hambre",


    " ¡Camarero, por favor, quite el dedo de mi filete! Bueno, bueno, pero si sevuelve a caer, no me eche la culpa",


    " Dos amigos en la ópera: Este si que es un cantante de primera fila, Estoy de acuerdo, ¡En la segunda fila no se le oye!",


    " Camarero, ¡Esta sopa tiene gusto a insecticida! Bueno, ¿entonces? ¡Cuando encuentra moscas también se queja!",


    " ¡Camarero, ya le he pedido cien veces un vaso de agua! Si, ahora mismo: ¡Cien vasos de agua para el señor!",


    " ¿Sabes que cada hombre que hace el amor con mi mujer se queda sordo? ¿Que? ",


    "¿Qué es cuando un hombre dice cochinadas a una mujer? Acoso sexual, ¿Y cuando una mujer dice cochinadas a un hombre ? Cincuenta euros 20 minutos",


    " ¿Qué hacen las mujeres después de aparcar?, Darse un paseo hasta la acera",


    " ¿Por qué las mujeres no pueden ser curas?, Por el secreto de confesión",


    " ¿Qué tienen las mujeres una vez al mes y que les dura 3 ó 4 días?, El sueldo del marido",


    " ¿Por qué dicen que algunas mujeres son unas brujas?, Porque levantan cosas sin tocarlas",


    " ¿En qué se parece una mujer a una gasolinera?, En que tienen de cintura para abajo super, de cintura al cuello normal, y de cuello para arriba, sin plomo",


    " ¿En qué se parece una mujer y un clinex?, En que los dos son de usar y tirar",


    " ¿En qué se parecen los pechos de las mujeres y los dibujos animados?, En que están hechos para niños y entretienen a los mayores",


    " Dos amigos de la infancia: Oye, ¿tu te acostaste con tu mujer antes de casarte? Yo no, ¿y tu? Hombre, yo no sabía que te ibas a casar con ella",

    " Por qué los de Lepe, en invierno, ponen las manzanas en la ventana? Porque hace un frío que pela…",


    " ¡Camarero! He encontrado un pelo en la sopa y no es mío, Esta bien, démelo, lo guardaremos por si vienen a reclamarlo",


    " Esto es una madre que abre la nevera y se encuentra a su hijo y le dice: Hijo ¿que haces ahí? !Es que papá me ha dicho que soy la leche!",


    " Un periodista le pregunta a un político: ¿Cómo hace usted para tener la conciencia limpia? No la uso nunca",


    " ¿Qué puedo hacer con mis pecados, señor cura? Ora, Las cuatro y cuarto, pero ¿Qué puedo hacer con mis pecados ?",


    " ¿Qué hacemos los Españoles cuando España gana un mundial? …Pues apagar la PLAY",


    " A una fiesta de puntos llegó una coma, Todos la vieron extrañados y la coma dijo: ¿Tengo el pelo muy largo ?",


    " Padre, he cometido el pecado de la carne, Es grave, hijo mío ¿Cuántas veces? ¡Padre, yo he venido a confesarme no a fanfarronear!",


    " Mamá, mamá, Los fideos se están pegando, Déjalos que se maten",


    " Un señor va a buscar a su hijo al colegio: ¿Papi, de donde vienen los niños? De la escuela, hijito",


    " ¿En qué se parecen los hombres a los caracoles? En que los dos son rastreros, babosos y llevan cuernos",


    " ¿Qué es un grano en el culo de una mujer?, Un tumor cerebral",


    " Mamá, mamá, ¡Que bien! Acabo de tener mi primera experiencia sexual Bueno, ven hijo, siéntate y cuéntamelo todo, Ahora no mamá, todavía me duele el trasero",


    " Mamá, mamá, Me corté un dedito, Ponte una tirita, entonces, ¡Pero si es que no lo encuentro!",


    " Mamá, mamá, ¿Es verdad que descendemos de los monos ? No sé, hijo tu padre nunca quiso presentarme a su familia",


    " Mamá, mamá, ¿Qué significa cuando en tu ordenador me sale “Formateando Disco C”?",


    " Mamá, mamá, ¿Por qué das saltos encima de papá ? Pues… para desinflarlo, Pues no te esfuerces porque después la vecina soplando lo vuelve a inflar",


    " Mamá, tengo un grave problema: no quiero ir a la escuela, Mira hijo, debes ir por tres grandes razones: porque tienes la obligación, porque tienes 45 años y porque eres el director",


    " Mamá, mamá, Mis zapatos nuevos tienen un agujero, ¿Estás loco, cómo van a tener un agujero? Sí, por donde meto el pie",


    " Unos enanos están reunidos en un bar, En eso entra un borracho y dice: ¡Caramba, quien a desmontao el futbolín!",


    " Era un bebe tan feo pero tan feo, que su mamá en vez de darle el pecho, le daba la espalda",


    " ¿Qué le dijo un muslo a otro muslo? Parece que en casa de la peluda hay fiesta porque por ahí va un calvo con dos maracas",


    " Era un hombre tan largo, tan largo, que se comió un yogur y cuando llegó al estómago ya había caducado",


    " ¡Ya me enteré que ha estado haciendo apuestas en la oficina! ¡Le apuesto 100 euros a que no es cierto!",


    " ¡No sé lo que haríamos sin usted en esta empresa, pero vamos a probarlo!",


    " Era un tío tan guarro, tan guarro, que se lavó las manos y se encontró un reloj",


    " Telepizza buenas tardes, Le atiende María Fernandez ¿qué desea ? Magdalenas, ¿Tu que crees ? ",


    " Anuncio Clasificado: Cambio lindo perrito Doberman por mano ortopédica",


    " Este era un niño con la boca tan, pero tan, pero tan chiquita, que para decir tres tenía que decir uno, uno, uno",


    " Horrible: que a tu mujer se la lleve una ola en la playa, Horripilante: que el mar te la devuelva",


    " Un chiste corto y flojo: Un enano con diarrea",


    " Había una vez una mujer tan gorda pero tan gorda, que cuando se caia de la cama, se caía por los dos lados",

    " Era un niño tan feo tan feo que le pregunto a su madre: Mama, mama, ¿me quieres? Su madre: Si, pero solo como amigos ehh!!!",


    " Era un tío tan mufa, pero tan mufa, que se sentó en un pajar y ¡se clavó la aguja!",


    " ¿Porque el hombre no cierra la piernas al sentarse? Porque se le aplasta el cerebro",


    " Era un hombre tan gordo, pero tan gordo, que se tumbaba en la cama y se caía por los dos lados a la vez",


    " ¿Por qué una mujer se conforma con hacer un puzzle en 6 meses? Porque en la caja ponía de dos a tres años",


    " Un grupo de pijos en el zoo, Ven a un grupo de cocodrilos y uno grita: !!Mar un lacaste!!",


    " Mi marido es tocólogo, Pues el mío es meteorólogo, ¡Qué suerte tienen algunas!",


    " El novio a la novia: ¿Sabes lo que estoy pensando cariño? La novia: Pero qué guarro eres…",


    " A la salida de un cine están dos pulgas y una dice a la otra: ¿Nos vamos a pie o esperamos un perro? ",


    " Suena el teléfono:  ¿Hola ? Hola, ¿es aquí donde lavan ropa ? No, Pues si que son guarros",


    " Un amigo a otro:  Pepe, ¿Te gusta eso de hacer tríos ? Pues si, todo es probar Pues corre para tu casa, que ya solo faltas tú",


    " Aviso clasificado: Busco suegra y perro, Recompensa por el perro",


    " Mamá, mamá, ¿Cómo es que tu eres blanca, mi papá es negro y yo soy de piel amarilla ? Ay, hijito, si supieras qué fiesta hubo aquel día, ¡Deberías alegrarte de no ladrar!",


    " ¿En tu colegio existe problema de drogas? Sí, no se encuentran fácil",


    " Antes sufría de amnesia, ahora no me acuerdo",


    " Arrasemos la ciudad sin piedad y Piedad no arraso la ciudad",
]

module.exports = {
    jokes: jokes
};