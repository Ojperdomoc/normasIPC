// Contenido didáctico basado en IPC-A-600H (abril 2010). Páginas = numeración impresa del documento.
// Códigos de veredicto de figuras: T = Condición objetivo, A = Aceptable, N = No conforme, P = Indicador de proceso, I = Ilustración
const LEVELS = [
/* =========================== NIVEL 1 =========================== */
{
  id: 1, title: "Fundamentos de la norma", icon: "📘", color: "#3b82f6",
  intro: "Conoce qué es la IPC-A-600, cómo se clasifican los productos, qué significa cada nivel de aceptación y cómo debe realizarse la inspección.",
  topics: [
    { id: "1a", sec: "1.1 – 1.3", page: 1, title: "Alcance y propósito",
      def: "La IPC-A-600 describe las condiciones <b>preferidas, aceptables y no conformes</b> que se observan externa o internamente en tarjetas impresas (PCB). Es la interpretación visual de los requisitos mínimos de especificaciones como la serie IPC-6010 y J-STD-003.",
      rules: [
        { k: "I", h: "Externamente observable (Sección 2)", t: ["Rasgos o imperfecciones que se ven y evalúan desde la superficie exterior (rebabas, muescas, máscara, marcado…)."] },
        { k: "I", h: "Internamente observable (Sección 3)", t: ["Requieren microsección u otro acondicionamiento para detectarse (grietas en el cobre, vacíos de chapado, etchback…)."] },
        { k: "I", h: "Qué NO es", t: ["No es una especificación de desempeño para fabricar o comprar PCB: es un documento complementario de la serie IPC-6010.", "Atributos no cubiertos por la norma se resuelven AABUS (según lo acordado entre usuario y proveedor)."] }
      ],
      tip: "Ilumina el espécimen sin sombras sobre el área de interés; en materiales muy reflectivos usa luz polarizada o de campo oscuro.", figs: [] },
    { id: "1b", sec: "1.4", page: 1, title: "Clases de producto",
      def: "La norma establece tres clases según el uso final. El <b>cliente</b> es responsable de definir la clase en la documentación de compra. <b>El inspector nunca elige la clase</b>.",
      rules: [
        { k: "A", h: "Clase 1 – Productos generales", t: ["Vida limitada; el requisito principal es que el producto terminado funcione."] },
        { k: "A", h: "Clase 2 – Servicio dedicado", t: ["Se requiere desempeño continuo y vida extendida; el servicio ininterrumpido es deseable pero no crítico."] },
        { k: "A", h: "Clase 3 – Alto desempeño", t: ["El desempeño continuo o bajo demanda es crítico, no se tolera tiempo de inactividad y el producto debe funcionar cuando se requiera (p. ej. médico, aeroespacial)."] }
      ],
      tip: "Usar una clase para una característica no obliga a que todas las demás características cumplan la misma clase.", figs: [] },
    { id: "1c", sec: "1.5 y 1.8.1", page: 2, title: "Criterios de aceptación",
      def: "La mayoría de las ilustraciones representan tres niveles de calidad: Condición objetivo, Aceptable y No conforme. Además existe el <b>Indicador de proceso</b>.",
      rules: [
        { k: "T", h: "Condición objetivo", t: ["Casi perfecta. Es la deseada, pero no siempre alcanzable ni necesaria para garantizar confiabilidad."] },
        { k: "A", h: "Aceptable", t: ["No necesariamente perfecta, pero mantiene la integridad y confiabilidad de la tarjeta en su entorno de servicio."] },
        { k: "N", h: "No conforme", t: ["Puede ser insuficiente para garantizar la confiabilidad. No conforme en Clase 1 implica no conforme en Clases 2 y 3; no conforme en Clase 2 implica no conforme en Clase 3."] },
        { k: "P", h: "Indicador de proceso", t: ["Anomalía detectable, que NO es un defecto, reflejo de variación en material, equipo, personal o proceso. Se permite y es entregable, pero debe motivar revisión del proceso."] }
      ],
      tip: "Cuando una fotografía no coincide con el texto, <b>prevalece el texto escrito</b>. Y la primera inferencia de no conformidad implica que las condiciones de menor magnitud son aceptables.", figs: [] },
    { id: "1d", sec: "1.5", page: 2, title: "Orden de precedencia de documentos",
      def: "En caso de conflicto entre documentos se aplica el siguiente orden:",
      rules: [
        { k: "I", h: "Orden (de mayor a menor)", t: ["1. Orden de compra (incluidas excepciones al plano maestro).", "2. Documentación de adquisición con requisitos del cliente (plano maestro).", "3. Otros documentos especificados por el cliente.", "4. Especificación de desempeño (serie IPC-6010) cuando la invoca el cliente.", "5. IPC-A-600 (este documento de aceptabilidad)."] }
      ],
      tip: "La IPC-A-600 está al final de la cadena: sirve de apoyo pictórico, no reemplaza lo pactado con el cliente.", figs: [] },
    { id: "1e", sec: "1.5 y 1.10", page: 2, title: "Aumentos de inspección y mano de obra",
      def: "La inspección debe hacerse con los aumentos definidos por la norma, salvo que el contrato indique otros.",
      rules: [
        { k: "I", h: "Aumentos", t: ["Inspección visual: 3 dioptrías (≈1.75X).", "Si la condición no es evidente: aumentos progresivos hasta 40X para confirmar.", "Microsección de PTH (integridad de lámina y chapado): 100X. Arbitraje (referee): 200X.", "Marcado: a no más de 2X."] },
        { k: "I", h: "Mano de obra (1.10)", t: ["Las tarjetas deben estar libres de suciedad, materia extraña, aceite, huellas dactilares, residuos de fundente u otros contaminantes que afecten su vida o servicio."] }
      ],
      tip: "Las mediciones dimensionales (ancho y espaciado) pueden requerir retículas o instrumentos con escala.", figs: [] }
  ],
  questions: [
    { t: "mc", q: "¿Quién es responsable de definir la clase (1, 2 o 3) con la que se evalúa una tarjeta?", o: ["El inspector de calidad", "El cliente (usuario), en la documentación de compra", "El fabricante de la tarjeta", "IPC, según el tipo de producto"], a: 1, e: "El cliente tiene la responsabilidad final de identificar la clase. El inspector NO debe seleccionar la clase de la pieza que inspecciona.", r: "§1.4–1.5, pág. 1-2" },
    { t: "mc", q: "Un producto donde no se tolera tiempo de inactividad y debe funcionar siempre que se requiera pertenece a:", o: ["Clase 1", "Clase 2", "Clase 3", "Clase 3A exclusivamente"], a: 2, e: "La Clase 3 (alto desempeño) incluye productos donde el desempeño continuo o bajo demanda es crítico y el tiempo muerto no se tolera.", r: "§1.4, pág. 1" },
    { t: "tf", q: "Un «indicador de proceso» es un defecto que obliga a rechazar la tarjeta.", o: ["Verdadero", "Falso"], a: 1, e: "Falso. Un indicador de proceso es una anomalía que NO es un defecto; refleja variación del proceso. Es permitido y entregable, aunque conviene revisarlo.", r: "§1.4 y 1.8.1, pág. 1 y 3" },
    { t: "mc", q: "¿Con qué aumento se realiza la inspección visual de atributos según la norma?", o: ["3 dioptrías (≈1.75X)", "10X", "40X", "100X"], a: 0, e: "La inspección visual se hace a 3 dioptrías (≈1.75X). Si la condición no es evidente, se verifica con aumentos progresivos hasta 40X.", r: "§1.5, pág. 2" },
    { t: "mc", q: "Los agujeros metalizados (PTH) se examinan internamente para verificar integridad de lámina y chapado a:", o: ["40X, arbitraje a 100X", "100X, arbitraje a 200X", "200X, arbitraje a 400X", "10X, arbitraje a 40X"], a: 1, e: "Las PTH se examinan a 100X; los exámenes de arbitraje (referee) se hacen a 200X.", r: "§1.5, pág. 3" },
    { t: "mc", q: "Si hay conflicto entre documentos, ¿cuál tiene la MAYOR precedencia?", o: ["IPC-A-600", "Serie IPC-6010", "La orden de compra", "El plano maestro"], a: 2, e: "El orden es: 1) orden de compra, 2) documentación de adquisición/plano maestro, 3) otros documentos del cliente, 4) IPC-6010, 5) IPC-A-600.", r: "§1.5, pág. 2" },
    { t: "tf", q: "Si una fotografía de la norma contradice el texto, debe seguirse la fotografía.", o: ["Verdadero", "Falso"], a: 1, e: "Falso. Cuando las fotos o ilustraciones no son consistentes con el texto, el texto escrito tiene precedencia.", r: "§1.5, pág. 2" },
    { t: "mc", q: "Una condición declarada NO CONFORME para Clase 2 es, automáticamente:", o: ["No conforme también para Clase 3", "No conforme también para Clase 1", "Aceptable para Clase 3", "Un indicador de proceso en Clase 3"], a: 0, e: "La no conformidad se hereda hacia clases más exigentes: no conforme en Clase 2 ⇒ no conforme en Clase 3. No necesariamente lo es en Clase 1.", r: "§1.5, pág. 2" },
    { t: "mc", q: "¿Qué significa la sigla AABUS?", o: ["Aprobado Automáticamente Bajo Uso Seguro", "Según lo acordado entre usuario y proveedor", "Aceptable en Ambas Bases de Uso", "Auditoría Anual Basada en Uso"], a: 1, e: "AABUS = As Agreed Between User and Supplier: criterios acordados entre usuario y proveedor, usados cuando la norma no cubre un atributo.", r: "§1.2, pág. 1" }
  ]
},
/* =========================== NIVEL 2 =========================== */
{
  id: 2, title: "Bordes de la tarjeta", icon: "✂️", color: "#0ea5e9",
  intro: "Rebabas, muescas y haloing en los bordes producidos por procesos de mecanizado (fresado, taladrado, punzonado).",
  topics: [
    { id: "2a", sec: "2.1.1.1", page: 5, title: "Rebabas no metálicas",
      def: "Las rebabas son pequeños grumos o masas de forma irregular, convexas a la superficie, resultado de un proceso de máquina como taladrado o fresado.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Bordes lisos, sin rebabas."] },
        { k: "A", h: "Aceptable – Clase 1, 2, 3", t: ["Bordes rugosos pero no deshilachados.", "Rebabas sueltas que no afectan el ajuste ni la función."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["Defectos que no cumplen o exceden los criterios anteriores."] }
      ],
      figs: [["2111a","T","Clase 1, 2, 3","Borde liso, sin rebabas."],["2111b","A","Clase 1, 2, 3","Borde rugoso pero no deshilachado."],["2111c","N","Clase 1, 2, 3","Borde deshilachado con fibras sueltas."]] },
    { id: "2b", sec: "2.1.1.2", page: 6, title: "Rebabas metálicas",
      def: "Restos de cobre u otro metal en el borde tras el corte.",
      rules: [
        { k: "T", h: "Objetivo / Aceptable – Clase 1, 2, 3", t: ["Los bordes deben estar cortados limpiamente y SIN rebabas metálicas."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["Cualquier rebaba metálica en el borde."] }
      ],
      tip: "A diferencia de las no metálicas, ninguna rebaba metálica es tolerada: puede desprenderse y causar cortocircuitos.",
      figs: [["2112a","T","Clase 1, 2, 3","Borde cortado limpio, sin rebabas metálicas."],["2112b","N","Clase 1, 2, 3","Rebabas metálicas en el borde del cobre."]] },
    { id: "2c", sec: "2.1.2", page: 7, title: "Muescas (nicks)",
      def: "Pequeños cortes o entalladuras en el borde de la tarjeta.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Borde liso, sin muescas."] },
        { k: "A", h: "Aceptable – Clase 1, 2, 3", t: ["Bordes rugosos pero no deshilachados.", "Las muescas no exceden el <b>50%</b> de la distancia del borde al conductor más cercano, <b>o 2.5 mm</b>, lo que sea MENOR."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["Muescas que superan los límites anteriores."] }
      ],
      tip: "Calcula siempre ambos valores (50% de la distancia y 2.5 mm) y quédate con el menor.",
      figs: [["212a","T","Clase 1, 2, 3","Borde sin muescas."],["212b","A","Clase 1, 2, 3","Muesca pequeña, lejos del conductor."],["212c","N","Clase 1, 2, 3","Muesca que invade más allá del límite hacia el conductor."]] },
    { id: "2d", sec: "2.1.3", page: 8, title: "Haloing (halo)",
      def: "Fractura o deslaminación inducida mecánicamente, en o bajo la superficie del material base; se observa como una zona clara alrededor de agujeros, bordes u otras áreas mecanizadas.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Sin haloing."] },
        { k: "A", h: "Aceptable – Clase 1, 2, 3", t: ["La distancia entre la penetración del halo y el rasgo conductor más cercano no es menor que el espaciado lateral mínimo de conductores, o <b>100 µm</b> si no se especifica."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["El halo se acerca al conductor más allá de ese límite."] }
      ],
      figs: [["213a","T","Clase 1, 2, 3","Borde sin halo."],["213b","A","Clase 1, 2, 3","Halo leve, lejos de los conductores."],["213c","N","Clase 1, 2, 3","Halo que penetra hasta cerca de los conductores."]] }
  ],
  questions: [
    { t: "img", img: "2112b", q: "Observas esta condición en el borde de una tarjeta Clase 1. ¿Cuál es la disposición correcta?", o: ["Aceptable: las rebabas no afectan el ajuste", "No conforme: hay rebabas metálicas", "Indicador de proceso", "Aceptable solo si no afecta la función"], a: 1, e: "Para rebabas metálicas, el criterio en las tres clases es: bordes limpios y SIN rebabas metálicas. Cualquier rebaba metálica es no conforme.", r: "§2.1.1.2, pág. 6" },
    { t: "mc", q: "La distancia del borde al conductor más cercano es 4.0 mm. ¿Cuál es la profundidad MÁXIMA aceptable de una muesca?", o: ["1.0 mm", "2.0 mm", "2.5 mm", "4.0 mm"], a: 1, e: "50% de 4.0 mm = 2.0 mm; el otro límite es 2.5 mm. Se toma el MENOR: 2.0 mm.", r: "§2.1.2, pág. 7" },
    { t: "mc", q: "La distancia del borde al conductor más cercano es 8.0 mm. ¿Cuál es la profundidad MÁXIMA aceptable de una muesca?", o: ["4.0 mm", "2.0 mm", "2.5 mm", "8.0 mm"], a: 2, e: "50% de 8.0 mm = 4.0 mm, pero el límite absoluto es 2.5 mm. Se toma el menor: 2.5 mm.", r: "§2.1.2, pág. 7" },
    { t: "img", img: "2111b", q: "Borde rugoso pero no deshilachado, en tarjeta Clase 3. ¿Disposición?", o: ["Aceptable en Clases 1, 2 y 3", "Aceptable solo en Clase 1", "No conforme en Clase 3", "Condición objetivo"], a: 0, e: "Para rebabas no metálicas, un borde rugoso pero no deshilachado es aceptable en las tres clases. El objetivo sería un borde liso.", r: "§2.1.1.1, pág. 5" },
    { t: "tf", q: "Las rebabas no metálicas sueltas que no afectan el ajuste ni la función son aceptables en las tres clases.", o: ["Verdadero", "Falso"], a: 0, e: "Verdadero. Es uno de los criterios de aceptación para Clase 1, 2 y 3.", r: "§2.1.1.1, pág. 5" },
    { t: "img", img: "213c", q: "El halo penetra hasta casi tocar los conductores, violando el espaciado mínimo. ¿Disposición?", o: ["Aceptable si la tarjeta funciona", "Indicador de proceso", "No conforme en todas las clases", "Aceptable solo en Clase 1"], a: 2, e: "El halo debe quedar a una distancia del conductor no menor que el espaciado lateral mínimo (o 100 µm). Si lo viola, es no conforme en todas las clases.", r: "§2.1.3, pág. 8" },
    { t: "mc", q: "Si el espaciado lateral mínimo no está especificado, ¿qué distancia mínima debe quedar entre el halo y el conductor más cercano?", o: ["50 µm", "100 µm", "0.8 mm", "2.5 mm"], a: 1, e: "Cuando no se especifica, el valor es 100 µm [3,937 µin].", r: "§2.1.3, pág. 8" },
    { t: "mc", q: "El haloing se origina principalmente por:", o: ["Estrés térmico durante la soldadura", "Humedad absorbida por el laminado", "Esfuerzo mecánico durante el mecanizado", "Contaminación iónica"], a: 2, e: "El haloing es una fractura o deslaminación inducida mecánicamente (taladrado, fresado, punzonado).", r: "§2.6.1, pág. 34" }
  ]
},
/* =========================== NIVEL 3 =========================== */
{
  id: 3, title: "Superficie del material base", icon: "🧵", color: "#14b8a6",
  intro: "Exposición y textura del tejido, fibras expuestas, picaduras y huecos en la superficie del laminado.",
  topics: [
    { id: "3a", sec: "2.2.1", page: 10, title: "Exposición del tejido (weave exposure)",
      def: "Condición superficial en la que las fibras NO rotas del tejido de vidrio no están completamente cubiertas por resina.",
      rules: [
        { k: "A", h: "Aceptable – Clase 3", t: ["Sin exposición del tejido."] },
        { k: "A", h: "Aceptable – Clase 1, 2", t: ["Excluyendo las áreas con exposición, el espacio restante entre conductores cumple el espaciado mínimo."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["No cumple lo anterior."] }
      ],
      figs: [["221a","I","Ilustración","Esquema: fibras del tejido no cubiertas por resina."],["221b","N","Clase 1, 2, 3","Exposición del tejido entre conductores."]] },
    { id: "3b", sec: "2.2.2", page: 11, title: "Textura del tejido (weave texture)",
      def: "El patrón del tejido es visible, pero las fibras están COMPLETAMENTE cubiertas por resina.",
      rules: [
        { k: "A", h: "Aceptable – Clase 1, 2, 3", t: ["Es aceptable en todas las clases.", "Se confunde a menudo con la exposición del tejido; se diferencian con iluminación oblicua al microscopio (no destructivo) o con microsección."] }
      ],
      figs: [["222a","I","Ilustración","Esquema: tejido visible pero cubierto de resina (aceptable)."]] },
    { id: "3c", sec: "2.2.3", page: 12, title: "Fibras expuestas o rotas",
      def: "Fibras del refuerzo cortadas o alteradas en la superficie.",
      rules: [
        { k: "A", h: "Aceptable – Clase 1, 2, 3", t: ["No puentean conductores y no reducen el espaciado por debajo del mínimo."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["Fibras que puentean conductores o reducen el espaciado."] }
      ],
      figs: [["223a","A","Clase 1, 2, 3","Fibras expuestas que no puentean conductores."],["223b","N","Clase 1, 2, 3","Fibras alteradas que puentean conductores."]] },
    { id: "3d", sec: "2.2.4", page: 13, title: "Picaduras y huecos (pits & voids)",
      def: "Cavidades en la superficie del material base.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Sin picaduras ni huecos."] },
        { k: "A", h: "Aceptable – Clase 1, 2, 3", t: ["No exceden <b>0.8 mm</b>.", "El área total afectada es menor al <b>5% por lado</b>.", "No puentean conductores."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["Excede cualquiera de los criterios anteriores."] }
      ],
      figs: [["224a","T","Clase 1, 2, 3","Superficie sin picaduras."],["224b","A","Clase 1, 2, 3","Picadura pequeña dentro de límites."],["224c","N","Clase 1, 2, 3","Hueco que excede los criterios."]] }
  ],
  questions: [
    { t: "tf", q: "La textura del tejido (weave texture) es aceptable en las tres clases.", o: ["Verdadero", "Falso"], a: 0, e: "Verdadero. En la textura del tejido las fibras están totalmente cubiertas de resina; es aceptable en Clase 1, 2 y 3.", r: "§2.2.2, pág. 11" },
    { t: "mc", q: "¿Cuál es el criterio de aceptación para la exposición del tejido en Clase 3?", o: ["Hasta 5% del área", "Sin exposición del tejido", "Aceptable si se cumple el espaciado mínimo", "Indicador de proceso"], a: 1, e: "Para Clase 3 no se permite exposición del tejido. En Clase 1 y 2 es aceptable si el espacio restante cumple el espaciado mínimo.", r: "§2.2.1, pág. 10" },
    { t: "mc", q: "¿Cuál es el tamaño máximo aceptable de una picadura o hueco en la superficie?", o: ["0.25 mm", "0.5 mm", "0.8 mm", "2.5 mm"], a: 2, e: "Las picaduras o huecos no deben exceder 0.8 mm [0.031 in].", r: "§2.2.4, pág. 13" },
    { t: "mc", q: "El área total afectada por picaduras y huecos debe ser:", o: ["Menor al 1% por lado", "Menor al 5% por lado", "Menor al 10% total", "Menor al 25% por lado"], a: 1, e: "El área total afectada debe ser menor al 5% por cada lado de la tarjeta.", r: "§2.2.4, pág. 13" },
    { t: "img", img: "223b", q: "Fibras expuestas que forman un puente entre dos conductores. ¿Disposición?", o: ["Aceptable en todas las clases", "Aceptable solo en Clase 1", "No conforme en todas las clases", "Condición objetivo"], a: 2, e: "Las fibras expuestas solo son aceptables si NO puentean conductores ni reducen el espaciado mínimo.", r: "§2.2.3, pág. 12" },
    { t: "mc", q: "¿Cómo se distingue la textura del tejido de la exposición del tejido?", o: ["Por el color de la máscara", "Con iluminación oblicua al microscopio o microsección", "Con prueba de cinta", "Midiendo el espesor de la tarjeta"], a: 1, e: "La diferencia se discierne con pruebas no destructivas (iluminación oblicua con microscopio) o con microsección.", r: "§2.2.2, pág. 11" },
    { t: "mc", q: "En una tarjeta Clase 2 hay un hueco superficial de 1.2 mm que no toca conductores. ¿Disposición?", o: ["Aceptable, no puentea conductores", "No conforme: excede 0.8 mm", "Indicador de proceso", "Aceptable si el área < 5%"], a: 1, e: "Los tres criterios deben cumplirse simultáneamente. Al superar 0.8 mm, el hueco es no conforme aunque no puentee conductores.", r: "§2.2.4, pág. 13" },
    { t: "img", img: "224b", q: "Picadura pequeña (menor a 0.8 mm), alejada de conductores y con área afectada muy inferior al 5%. ¿Disposición?", o: ["Aceptable en Clases 1, 2, 3", "No conforme", "Solo aceptable en Clase 1", "Requiere microsección obligatoria"], a: 0, e: "Cumple los tres criterios (tamaño ≤ 0.8 mm, área < 5% por lado, no puentea conductores): aceptable en todas las clases.", r: "§2.2.4, pág. 13" }
  ]
},
/* =========================== NIVEL 4 =========================== */
{
  id: 4, title: "Subsuperficie del material base", icon: "🔬", color: "#22c55e",
  intro: "Measling, crazing, delaminación, ampollas e inclusiones extrañas vistas a través del laminado.",
  topics: [
    { id: "4a", sec: "2.3.1", page: 17, title: "Measling (sarampión)",
      def: "Manchas blancas discretas o «cruces» bajo la superficie, por separación de los haces de fibra en las intersecciones del tejido. Suele estar relacionado con <b>estrés térmico</b> (p. ej. humedad > 0.3% en peso que se vaporiza al soldar).",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Sin evidencia de measling."] },
        { k: "A", h: "Aceptable – Clase 1, 2", t: ["El criterio es que la tarjeta sea funcional."] },
        { k: "P", h: "Indicador de proceso – Clase 3", t: ["Áreas con measling que superan el 50% del espaciado físico entre conductores no comunes."] }
      ],
      tip: "El measling no se propaga con pruebas térmicas y no se ha demostrado que sea catalizador de CAF. Solo IPC-6012 Clase 3A no permite measles.",
      figs: [["231c","A","Clase 1, 2 (funcional)","Measling: cruces blancas discretas bajo la superficie."],["231d","P","Indicador de proceso Clase 3","Measling extenso bajo zonas conductoras."]] },
    { id: "4b", sec: "2.3.2", page: 18, title: "Crazing (agrietamiento)",
      def: "Separación de las fibras dentro del hilo, en intersecciones o a lo largo del hilo; aparece como manchas blancas <b>conectadas</b>. Suele estar relacionado con <b>estrés mecánico</b>.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Sin evidencia de crazing."] },
        { k: "A", h: "Aceptable – Clase 2, 3", t: ["No reduce el espaciado por debajo del mínimo.", "No abarca más del <b>50%</b> de la distancia entre patrones no comunes.", "No se propaga tras pruebas térmicas.", "En el borde no reduce la distancia mínima borde-conductor, o 2.5 mm si no se especifica."] },
        { k: "A", h: "Aceptable – Clase 1", t: ["Iguales criterios, pero sin el límite del 50%."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["No cumple los criterios."] }
      ],
      figs: [["232c","T","Clase 1, 2, 3","Laminado sin crazing."],["232d","A","Clase 2, 3","Crazing localizado que no viola el espaciado."],["232e","N","Clase 1, 2, 3","Crazing que excede los criterios."]] },
    { id: "4c", sec: "2.3.3", page: 20, title: "Delaminación y ampollas",
      def: "<b>Delaminación:</b> separación entre capas del material base o entre material y lámina conductora. <b>Ampolla:</b> delaminación en forma de hinchamiento localizado.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Sin ampollas ni delaminación."] },
        { k: "A", h: "Aceptable – Clase 2, 3", t: ["Área afectada ≤ <b>1%</b> del área de la tarjeta por lado.", "No reduce el espaciado por debajo del mínimo.", "No abarca más del <b>25%</b> de la distancia entre patrones adyacentes.", "No se propaga tras pruebas térmicas.", "Respeta la distancia mínima al borde, o 2.5 mm."] },
        { k: "A", h: "Aceptable – Clase 1", t: ["Área ≤ 1% por lado.", "Puede abarcar más del 25% entre conductores, pero sin reducir el espaciado mínimo."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["No cumple los criterios."] }
      ],
      tip: "El área afectada se calcula sumando todas las imperfecciones y dividiendo entre el área total, por separado para cada lado.",
      figs: [["233a","I","Ilustración","Esquema: delaminación vs. ampolla."],["233b","T","Clase 1, 2, 3","Sin ampollas ni delaminación."],["233c","A","Clase 2, 3","Ampolla pequeña, dentro de límites."],["233d","A","Clase 1","Ampolla > 25% entre conductores sin violar espaciado."],["233e","N","Clase 1, 2, 3","Ampolla/delaminación que excede criterios."]] },
    { id: "4d", sec: "2.3.4", page: 22, title: "Inclusiones extrañas",
      def: "Partículas metálicas o no metálicas atrapadas en el material aislante.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Sin inclusiones."] },
        { k: "A", h: "Aceptable – Clase 1, 2, 3", t: ["Partículas translúcidas atrapadas.", "Partículas opacas que no reducen el espaciado entre conductores bajo el mínimo.", "Parámetros eléctricos no afectados."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["No cumple lo anterior."] }
      ],
      figs: [["234a","T","Clase 1, 2, 3","Sin inclusiones."],["234b","A","Clase 1, 2, 3","Inclusión que no afecta el espaciado."],["234c","N","Clase 1, 2, 3","Inclusión que reduce el espaciado entre conductores."]] }
  ],
  questions: [
    { t: "mc", q: "¿Cuál es la diferencia de origen entre measling y crazing?", o: ["Measling: estrés mecánico; crazing: estrés térmico", "Measling: estrés térmico; crazing: estrés mecánico", "Ambos son por contaminación iónica", "Ambos son por mal grabado"], a: 1, e: "El measling suele estar relacionado con estrés térmico; el crazing con estrés mecánico.", r: "§2.3.1–2.3.2, pág. 17-18" },
    { t: "mc", q: "Una tarjeta Clase 2 presenta measling pero es completamente funcional. ¿Disposición?", o: ["No conforme", "Aceptable", "Indicador de proceso obligatorio de rechazo", "Requiere AABUS"], a: 1, e: "Para Clase 1 y 2 el criterio de measling es que la tarjeta sea funcional.", r: "§2.3.1, pág. 17" },
    { t: "mc", q: "En Clase 3, un measling que supera el 50% del espaciado entre conductores no comunes se considera:", o: ["No conforme", "Aceptable sin observaciones", "Indicador de proceso", "Condición objetivo"], a: 2, e: "En Clase 3, el measling mayor al 50% del espaciado entre conductores no comunes es un indicador de proceso (no es defecto).", r: "§2.3.1, pág. 17" },
    { t: "mc", q: "En Clase 3, el área máxima afectada por delaminación/ampollas es:", o: ["0.5% por lado", "1% por lado", "5% por lado", "25% por lado"], a: 1, e: "El área afectada no debe exceder el 1% del área de la tarjeta en cada lado.", r: "§2.3.3, pág. 20" },
    { t: "mc", q: "En Clase 2, una ampolla NO debe abarcar más de ____ de la distancia entre patrones conductores adyacentes.", o: ["10%", "25%", "50%", "75%"], a: 1, e: "Para Clase 2 y 3 el límite es 25%. En Clase 1 puede superar el 25% siempre que no reduzca el espaciado mínimo.", r: "§2.3.3, pág. 20-21" },
    { t: "mc", q: "En Clase 2, el crazing NO debe abarcar más de ____ de la distancia entre patrones no comunes.", o: ["25%", "50%", "75%", "No tiene límite"], a: 1, e: "Para Clase 2 y 3, el crazing no debe abarcar más del 50% de la distancia entre patrones conductores no comunes eléctricamente.", r: "§2.3.2, pág. 18" },
    { t: "tf", q: "Una partícula translúcida atrapada dentro de la tarjeta es aceptable en las tres clases.", o: ["Verdadero", "Falso"], a: 0, e: "Verdadero. Las partículas translúcidas son aceptables; las opacas lo son si no reducen el espaciado bajo el mínimo.", r: "§2.3.4, pág. 22" },
    { t: "img", img: "233e", q: "Se observa una ampolla grande en esta zona de la tarjeta, que excede los criterios de área y espaciado. ¿Disposición?", o: ["Aceptable Clase 1", "Indicador de proceso", "No conforme en todas las clases", "Aceptable si no se propaga"], a: 2, e: "Si el área supera el 1% por lado o se reduce el espaciado mínimo, la ampolla es no conforme en todas las clases.", r: "§2.3.3, pág. 21" },
    { t: "tf", q: "Está demostrado que el measling se propaga con pruebas térmicas y cataliza el crecimiento de CAF.", o: ["Verdadero", "Falso"], a: 1, e: "Falso. El measling no se propaga con pruebas térmicas y no se ha demostrado de forma concluyente que catalice CAF. La delaminación, en cambio, sí puede propagarse.", r: "§2.3.1, pág. 17" }
  ]
},
/* =========================== NIVEL 5 =========================== */
{
  id: 5, title: "Recubrimientos de soldadura y agujeros", icon: "🕳️", color: "#84cc16",
  intro: "No mojado, desmojado, nódulos, pink ring, vacíos en agujeros metalizados, lands levantados y halo en agujeros sin soporte.",
  topics: [
    { id: "5a", sec: "2.4.1", page: 24, title: "No mojado (nonwetting)",
      def: "Incapacidad de la soldadura fundida para formar un enlace metálico con el metal base: el metal base queda EXPUESTO.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Sin no mojado."] },
        { k: "A", h: "Aceptable – Clase 1, 2, 3", t: ["Mojado completo en todas las superficies conductoras donde la soldadura no esté excluida por máscara u otro acabado.", "Los lados verticales (conductor y land) pueden no estar cubiertos."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["Áreas sin mojar."] }
      ],
      figs: [["241a","I","Ilustración","Esquema del no mojado: metal base expuesto."],["241b","T","Clase 1, 2, 3","Pads completamente mojados."],["241c","N","Clase 1, 2, 3","Pad con no mojado."]] },
    { id: "5b", sec: "2.4.2", page: 25, title: "Desmojado (dewetting)",
      def: "La soldadura cubre la superficie y luego se retira, dejando montículos irregulares separados por una película delgada; el metal base NO queda expuesto.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Sin desmojado."] },
        { k: "A", h: "Aceptable – Clase 2, 3", t: ["En conductores y planos de tierra/voltaje.", "En <b>5% o menos</b> de cada land para conexión de soldadura."] },
        { k: "A", h: "Aceptable – Clase 1", t: ["En conductores y planos.", "En <b>15% o menos</b> de cada land."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["Excede lo anterior."] }
      ],
      figs: [["242a","I","Ilustración","Esquema del desmojado."],["242b","T","Clase 1, 2, 3","Sin desmojado."],["242c","A","Clase 2, 3","Desmojado leve (≤5% del land)."],["242d","N","Clase 1, 2, 3","Desmojado extenso en los lands."]] },
    { id: "5c", sec: "2.5.1 – 2.5.2", page: 27, title: "Nódulos, rebabas y pink ring en PTH",
      def: "Protuberancias dentro del agujero metalizado y anillo rosado alrededor del agujero en capas internas.",
      rules: [
        { k: "A", h: "Nódulos/rebabas – Aceptable Clase 1, 2, 3", t: ["Permitidos si se cumple el diámetro mínimo del agujero terminado."] },
        { k: "P", h: "Pink ring – Clase 1, 2, 3", t: ["No hay evidencia de que afecte la funcionalidad. Puede considerarse indicador de proceso pero NO es no conforme.", "Revisar la calidad de la unión de laminación y la limpieza/acondicionamiento del agujero."] }
      ],
      figs: [["251a","T","Clase 1, 2, 3","Agujeros sin nódulos ni rebabas."],["251b","A","Clase 1, 2, 3","Nódulos que no afectan el diámetro mínimo."],["251c","N","Clase 1, 2, 3","Nódulos que reducen el diámetro."],["252a","P","Clase 1, 2, 3","Pink ring: indicador de proceso."]] },
    { id: "5d", sec: "2.5.3", page: 29, title: "Vacíos en el cobre del agujero",
      def: "Huecos en el chapado de cobre de las paredes de los agujeros metalizados.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Sin vacíos."] },
        { k: "A", h: "Aceptable – Clase 3", t: ["Sin evidencia de vacíos en el agujero."] },
        { k: "A", h: "Aceptable – Clase 2", t: ["Máximo <b>1</b> vacío por agujero.", "No más del 5% de los agujeros con vacíos.", "Cada vacío ≤ 5% de la longitud del agujero.", "Menor a 90° de la circunferencia."] },
        { k: "A", h: "Aceptable – Clase 1", t: ["Máximo <b>3</b> vacíos por agujero.", "No más del 10% de los agujeros.", "Cada vacío ≤ 10% de la longitud.", "Menor a 90° de la circunferencia."] },
        { k: "N", h: "No conforme – Clase 1, 2, 3", t: ["Excede lo anterior."] }
      ],
      tip: "Para el acabado final (2.5.4) los límites son más amplios: Clase 3 → 1 vacío, Clase 2 → 3 vacíos, Clase 1 → 5 vacíos (15% de agujeros).",
      figs: [["253a","T","Clase 1, 2, 3","Agujero sin vacíos."],["253b","A","Clase 2","Un vacío pequeño."],["253c","A","Clase 1","Hasta tres vacíos."],["253d","N","Clase 1, 2, 3","Vacíos excesivos."]] },
    { id: "5e", sec: "2.5.5 y 2.6.1", page: 31, title: "Lands levantados y halo en agujeros sin soporte",
      def: "Land levantado: el pad se separa del material base. Halo en agujero sin soporte: fractura mecánica alrededor del agujero.",
      rules: [
        { k: "T", h: "Lands levantados – Objetivo/Aceptable Clase 1, 2, 3", t: ["Sin levantamiento de lands (en inspección visual de la tarjeta tal como se recibe)."] },
        { k: "N", h: "Lands levantados – No conforme", t: ["Cualquier land levantado visible."] },
        { k: "A", h: "Halo – Aceptable Clase 1, 2, 3", t: ["Distancia halo-conductor ≥ espaciado lateral mínimo, o 100 µm si no se especifica."] }
      ],
      figs: [["255a","T","Clase 1, 2, 3","Land firmemente adherido."],["255b","N","Clase 1, 2, 3","Land levantado."],["261a","T","Clase 1, 2, 3","Agujero sin soporte, sin halo."],["261b","A","Clase 1, 2, 3","Halo leve alejado de conductores."],["261c","N","Clase 1, 2, 3","Halo que se acerca a los conductores."]] }
  ],
  questions: [
    { t: "mc", q: "¿Cuál es la diferencia clave entre no mojado (nonwetting) y desmojado (dewetting)?", o: ["En el desmojado el metal base queda expuesto", "En el no mojado el metal base queda expuesto; en el desmojado no", "Son el mismo defecto", "El desmojado solo ocurre en PTH"], a: 1, e: "No mojado: la soldadura no forma enlace y el metal base queda expuesto. Desmojado: la soldadura se retira dejando montículos y una película delgada; el metal base no queda expuesto.", r: "§2.4.1–2.4.2, pág. 24-25" },
    { t: "mc", q: "En Clase 3, el desmojado se acepta en lands para conexión de soldadura hasta:", o: ["0%", "5% de cada land", "15% de cada land", "25% de cada land"], a: 1, e: "Clase 2 y 3: 5% o menos de cada land. Clase 1: 15% o menos.", r: "§2.4.2, pág. 25" },
    { t: "mc", q: "En Clase 1, el desmojado se acepta en lands para conexión de soldadura hasta:", o: ["5%", "10%", "15%", "30%"], a: 2, e: "Para Clase 1 el límite es 15% o menos de cada land.", r: "§2.4.2, pág. 25" },
    { t: "tf", q: "El pink ring es una condición no conforme en Clase 3.", o: ["Verdadero", "Falso"], a: 1, e: "Falso. No hay evidencia de que el pink ring afecte la funcionalidad; puede ser indicador de proceso, pero no es no conforme en ninguna clase.", r: "§2.5.2, pág. 28" },
    { t: "img", img: "253b", q: "Un agujero metalizado presenta UN vacío pequeño (menos del 5% de la longitud y menos de 90°). La tarjeta es Clase 3. ¿Disposición?", o: ["Aceptable", "No conforme", "Indicador de proceso", "Aceptable si < 5% de agujeros"], a: 1, e: "En Clase 3 no se permite evidencia de vacíos en el cobre del agujero. Esta condición solo sería aceptable en Clase 2 (o 1).", r: "§2.5.3, pág. 29" },
    { t: "mc", q: "En Clase 2, ¿cuántos vacíos de cobre se permiten como máximo por agujero?", o: ["Ninguno", "1", "3", "5"], a: 1, e: "Clase 2: no más de un vacío por agujero (y ≤5% de agujeros con vacíos).", r: "§2.5.3, pág. 29" },
    { t: "img", img: "255b", q: "Se detecta visualmente este land levantado en una tarjeta Clase 1. ¿Disposición?", o: ["Aceptable en Clase 1", "No conforme en todas las clases", "Indicador de proceso", "Aceptable tras estrés térmico"], a: 1, e: "En la inspección visual (2.5.5) no se permite levantamiento de lands en ninguna clase. (Solo en microsección tras estrés térmico o simulación de retrabajo se aceptan, §3.3.2.)", r: "§2.5.5, pág. 31" },
    { t: "mc", q: "Los nódulos o rebabas dentro de un PTH son aceptables si:", o: ["No superan 3 por agujero", "Se cumple el diámetro mínimo del agujero terminado", "Son de color uniforme", "Nunca son aceptables"], a: 1, e: "Nódulos/rebabas se permiten si se cumple el diámetro mínimo del agujero terminado.", r: "§2.5.1, pág. 27" },
    { t: "img", img: "241c", q: "El pad muestra una zona donde la soldadura no se adhirió y el metal base es visible. ¿Disposición?", o: ["Aceptable Clase 1", "Desmojado aceptable ≤15%", "No conforme: no mojado", "Condición objetivo"], a: 2, e: "Se requiere mojado completo en todas las superficies conductoras no excluidas por máscara. El no mojado es no conforme.", r: "§2.4.1, pág. 24" }
  ]
},
/* =========================== NIVEL 6 =========================== */
{
  id: 6, title: "Contactos impresos y marcado", icon: "🔤", color: "#eab308",
  intro: "Contactos de borde (gold fingers), pads de wire bond, adhesión del chapado y criterios de legibilidad del marcado.",
  topics: [
    { id: "6a", sec: "2.7.1", page: 35, title: "Chapado superficial de contactos",
      def: "Criterios para contactos impresos (p. ej. conectores de borde). Se distinguen el <b>área crítica de contacto</b> y la zona de <b>gap/solapamiento</b>.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Contactos sin picaduras, poros ni nódulos.", "Sin cobre expuesto ni solapamiento entre acabado de soldadura/máscara y acabado de la punta."] },
        { k: "A", h: "Aceptable – Área crítica (Clase 1, 2, 3)", t: ["Los defectos no exponen el metal subyacente.", "Sin salpicaduras de soldadura ni estaño-plomo.", "Sin nódulos ni protuberancias metálicas.", "Picaduras ≤ <b>0.15 mm</b>, máx. <b>3 por contacto</b>, en no más del <b>30%</b> de los contactos."] },
        { k: "A", h: "Aceptable – Gap/solapamiento", t: ["Clase 3: cobre expuesto o solapamiento ≤ <b>0.8 mm</b>.", "Clase 2: ≤ <b>1.25 mm</b>.", "Clase 1: ≤ <b>2.5 mm</b>."] }
      ],
      tip: "Se permite decoloración en la zona de solapamiento. Los criterios del área crítica no aplican a una banda de 0.15 mm en la periferia del contacto.",
      figs: [["271a","T","Clase 1, 2, 3","Contactos limpios, sin defectos."],["271b","A","Clase 1, 2, 3","Defectos menores fuera de límite crítico."],["271c","N","Clase 1, 2, 3","Contactos con defectos que exponen metal."]] },
    { id: "6b", sec: "2.7.1.1 y 2.7.2", page: 37, title: "Wire bond pads y rebabas en contactos de borde",
      def: "Pads para unión por alambre y bordes biselados de contactos.",
      rules: [
        { k: "T", h: "Wire bond – Objetivo", t: ["Sin nódulos, rugosidad, marcas de prueba o rayones que superen 0.8 µm RMS en el <b>área prístina</b> (80% del ancho × 80% del largo, centrada)."] },
        { k: "A", h: "Contactos de borde – Aceptable Clase 1, 2, 3", t: ["Borde liso, sin rebabas, sin chapado levantado, sin deslaminación del contacto y sin fibras sueltas en el bisel.", "El cobre expuesto en el extremo del contacto es esperado y permitido."] }
      ],
      figs: [["2711b","I","Ilustración","Área prístina: 80% ancho × 80% largo."],["2711a","T","Clase 1, 2, 3","Pads de wire bond limpios."],["2711c","N","Clase 1, 2, 3","Pads con daño/rugosidad."],["272a","T","Clase 1, 2, 3","Bisel liso."],["272b","A","Clase 1, 2, 3","Cobre expuesto en el extremo (permitido)."],["272c","N","Clase 1, 2, 3","Contacto con rebabas / levantado."]] },
    { id: "6c", sec: "2.7.3", page: 40, title: "Adhesión del sobre-chapado",
      def: "Se verifica con la <b>prueba de cinta</b> (IPC-TM-650, Método 2.4.1): cinta sensible a presión aplicada y retirada perpendicularmente.",
      rules: [
        { k: "A", h: "Objetivo/Aceptable – Clase 1, 2, 3", t: ["Sin chapado removido por la cinta.", "Si se desprende metal en voladizo (overhang o slivers), evidencia overhang, NO falla de adhesión."] },
        { k: "N", h: "No conforme", t: ["Chapado adherido a la cinta."] }
      ],
      figs: [["273a","A","Clase 1, 2, 3","Cinta sin chapado removido."],["273c","N","Clase 1, 2, 3","Chapado adherido a la cinta."]] },
    { id: "6d", sec: "2.8", page: 41, title: "Marcado grabado y serigrafiado",
      def: "El marcado permite identificación y ayuda al ensamble. Debe ser permanente, legible y soportar pruebas y limpieza. Se inspecciona a <b>no más de 2X</b>.",
      rules: [
        { k: "A", h: "Grabado (2.8.1)", t: ["Clase 3: legible; bordes de línea ligeramente irregulares.", "Clase 2: el ancho de línea puede reducirse hasta 50% si sigue legible.", "Clase 1: formas irregulares pero intención legible.", "En todas: no viola la separación eléctrica mínima."] },
        { k: "A", h: "Serigrafía / tinta (2.8.2)", t: ["Caracteres legibles.", "La tinta no entra al agujero de montaje ni reduce el anillo anular mínimo.", "No invade contactos de borde ni puntos de prueba.", "Pads SMD con pitch ≥ 1.25 mm: invasión en un solo lado ≤ 0.05 mm; pitch < 1.25 mm: ≤ 0.025 mm.", "Clase 1: se permite borroso o imagen doble si es legible."] },
        { k: "N", h: "No conforme", t: ["Marcado ilegible o que viola separaciones."] }
      ],
      tip: "Las marcas por estampado de impresión (que cortan el laminado) no se permiten en tarjetas terminadas; se tratan como rayones.",
      figs: [["281a","T","Clase 1, 2, 3","Marcado grabado legible y nítido."],["281b","A","Clase 3","Bordes ligeramente irregulares."],["281c","A","Clase 1","Caracteres irregulares pero legibles."],["281d","N","Clase 1, 2, 3","Carácter incompleto / ilegible."],["282a","T","Clase 1, 2, 3","Tinta uniforme, sin imagen doble."],["282d","A","Clase 1","Borroso pero legible."]] }
  ],
  questions: [
    { t: "mc", q: "En Clase 3, ¿cuál es el máximo de cobre expuesto o solapamiento en la zona gap/overlap de un contacto?", o: ["0.15 mm", "0.8 mm", "1.25 mm", "2.5 mm"], a: 1, e: "Clase 3: ≤ 0.8 mm; Clase 2: ≤ 1.25 mm; Clase 1: ≤ 2.5 mm.", r: "§2.7.1, pág. 35" },
    { t: "mc", q: "En el área crítica de contacto, las picaduras se aceptan si:", o: ["≤ 0.8 mm y máx. 5 por contacto", "≤ 0.15 mm, máx. 3 por contacto y en ≤ 30% de los contactos", "≤ 0.25 mm en cualquier cantidad", "Nunca se aceptan picaduras"], a: 1, e: "Picaduras, abolladuras o depresiones: ≤ 0.15 mm en su dimensión mayor, no más de 3 por contacto y en no más del 30% de los contactos.", r: "§2.7.1, pág. 35" },
    { t: "tf", q: "El cobre expuesto en el extremo de un contacto de borde biselado es esperado y permitido.", o: ["Verdadero", "Falso"], a: 0, e: "Verdadero. La norma lo indica explícitamente como condición esperada y permisible.", r: "§2.7.2, pág. 39" },
    { t: "img", img: "281d", q: "Uno de los caracteres del marcado está incompleto y no puede leerse. ¿Disposición?", o: ["Aceptable Clase 1", "Aceptable Clase 2 (reducción ≤50%)", "No conforme", "Indicador de proceso"], a: 2, e: "En todas las clases el requisito esencial es que el marcado sea legible. Un carácter ilegible es no conforme.", r: "§2.8.1, pág. 43" },
    { t: "mc", q: "En Clase 2, ¿cuánto puede reducirse el ancho de las líneas de un marcado grabado?", o: ["Hasta 20%", "Hasta 30%", "Hasta 50%, si sigue legible", "No se permite reducción"], a: 2, e: "Clase 2: el ancho de las líneas puede reducirse hasta 50% siempre que siga legible.", r: "§2.8.1, pág. 42" },
    { t: "mc", q: "Pads SMD con pitch de 0.8 mm. ¿Cuál es la invasión máxima de tinta de marcado permitida?", o: ["0.05 mm en ambos lados", "0.025 mm en un solo lado", "0.05 mm en un solo lado", "No se permite ninguna"], a: 1, e: "Con pitch < 1.25 mm, la invasión debe ser en un solo lado y ≤ 0.025 mm. Con pitch ≥ 1.25 mm, ≤ 0.05 mm.", r: "§2.8.2, pág. 44" },
    { t: "mc", q: "En la prueba de cinta se desprende metal en voladizo (overhang). ¿Cómo se interpreta?", o: ["Falla de adhesión: no conforme", "Evidencia de overhang/slivers, no falla de adhesión", "Indicador de proceso", "Debe repetirse con otra cinta"], a: 1, e: "Si el metal en voladizo se rompe y se adhiere a la cinta, es evidencia de overhang o slivers, pero no de falla de adhesión del chapado.", r: "§2.7.3, pág. 40" },
    { t: "img", img: "272c", q: "Contacto de borde con rebabas y chapado levantado en el bisel. ¿Disposición?", o: ["Aceptable: el cobre expuesto es permitido", "No conforme en todas las clases", "Aceptable en Clase 1", "Indicador de proceso"], a: 1, e: "El borde debe estar liso, sin rebabas, sin chapado levantado, sin deslaminación y sin fibras sueltas. Solo el cobre expuesto en el extremo es permitido.", r: "§2.7.2, pág. 39" },
    { t: "mc", q: "¿Con qué aumento máximo se inspecciona el marcado de las tarjetas?", o: ["1.75X", "2X", "10X", "40X"], a: 1, e: "La tarjeta debe inspeccionarse a no más de 2X para evaluar el marcado.", r: "§2.8, pág. 41" }
  ]
},
/* =========================== NIVEL 7 =========================== */
{
  id: 7, title: "Máscara antisoldante", icon: "🟩", color: "#f59e0b",
  intro: "Cobertura, registro, ampollas, adhesión, arrugas, tenting de vías y soda strawing de la máscara (solder mask).",
  topics: [
    { id: "7a", sec: "2.9.1", page: 47, title: "Cobertura sobre conductores (skip)",
      def: "La máscara limita la soldadura a áreas seleccionadas y protege contra contaminación. <b>No sustituye</b> un recubrimiento conformal.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["Apariencia uniforme, firmemente adherida, sin saltos ni vacíos."] },
        { k: "A", h: "Aceptable – Clase 2, 3", t: ["En conductores paralelos, los adyacentes no quedan expuestos por falta de máscara (salvo donde se diseñó así).", "Retoque con material compatible y de igual resistencia."] },
        { k: "A", h: "Aceptable – Clase 1", t: ["La máscara faltante no reduce el espaciado bajo el mínimo.", "Se permiten saltos a lo largo de los lados de los conductores."] }
      ],
      figs: [["291a","T","Clase 1, 2, 3","Cobertura uniforme."],["291b","A","Clase 2, 3","Sin conductores adyacentes expuestos."],["291c","N","Clase 1, 2, 3","Falta de máscara que expone conductores."]] },
    { id: "7b", sec: "2.9.2 – 2.9.3", page: 48, title: "Registro de la máscara",
      def: "Alineación de las aberturas de la máscara con agujeros, pads y patrones.",
      rules: [
        { k: "A", h: "A agujeros – Clase 1, 2, 3", t: ["El desregistro no viola el anillo anular mínimo.", "Sin máscara en PTH, excepto las no destinadas a soldadura.", "No expone lands o conductores aislados adyacentes."] },
        { k: "A", h: "A otros patrones – Clase 1, 2, 3", t: ["Sin invasión en contactos de borde ni puntos de prueba.", "SMD pitch ≥ 1.25 mm: invasión en un lado ≤ 0.05 mm; pitch < 1.25 mm: ≤ 0.025 mm."] },
        { k: "A", h: "BGA", t: ["Lands definidos por máscara: breakout de la máscara ≤ <b>90°</b>.", "Lands definidos por cobre: la máscara no invade el land, excepto en la unión con el conductor.", "Dique de soldadura (solder dam): si se especifica, permanece en su lugar cubriendo el cobre."] }
      ],
      figs: [["293a","T","Clase 1, 2, 3","Máscara bien registrada."],["293b","A","Clase 1, 2, 3","Desregistro leve sin exponer patrones aislados."],["293c","N","Clase 1, 2, 3","Máscara invadiendo el pad."]] },
    { id: "7c", sec: "2.9.4 – 2.9.6", page: 53, title: "Ampollas, adhesión y arrugas",
      def: "Defectos de unión de la máscara con la tarjeta.",
      rules: [
        { k: "A", h: "Ampollas – Clase 2, 3", t: ["Máximo <b>dos por lado</b>, de no más de <b>0.25 mm</b> en su mayor dimensión.", "Reducción del espaciado eléctrico ≤ 25% o el mínimo."] },
        { k: "A", h: "Ampollas – Clase 1", t: ["No puentean conductores."] },
        { k: "A", h: "Adhesión (2.9.5)", t: ["Clase 2, 3: sin levantamiento antes de pruebas; tras cinta (IPC-TM-650 2.4.28.1) dentro de límites de IPC-6010.", "Clase 1: se permite descascarado si lo restante está firme y no expone conductores adyacentes."] },
        { k: "A", h: "Ondas/arrugas (2.9.6) – Clase 1, 2, 3", t: ["Las ondas no reducen el espesor bajo el mínimo.", "Las arrugas no puentean patrones y pasan la prueba de cinta."] }
      ],
      tip: "El espesor de la máscara NO puede determinarse visualmente: requiere microsección (§3.3.12).",
      figs: [["294a","T","Clase 1, 2, 3","Sin ampollas."],["294b","A","Clase 2, 3","Ampolla pequeña aislada."],["294d","N","Clase 1, 2, 3","Ampollas múltiples."],["295a","T","Clase 1, 2, 3","Máscara firmemente adherida."],["295b","A","Clase 1","Descascarado sin exponer conductores adyacentes."],["295c","N","Clase 1, 2, 3","Máscara desprendida."],["296a","T","Clase 1, 2, 3","Sin ondas ni arrugas."],["296b","A","Clase 1, 2, 3","Ondas leves."],["296c","N","Clase 1, 2, 3","Arrugas que puentean patrones."]] },
    { id: "7d", sec: "2.9.7 – 2.9.8", page: 57, title: "Tenting de vías y soda strawing",
      def: "<b>Tenting:</b> máscara que cubre la vía sin material dentro del agujero. <b>Soda strawing:</b> vacío tubular a lo largo de los bordes de los conductores donde la máscara no está adherida (puede atrapar fundentes o químicos).",
      rules: [
        { k: "A", h: "Tenting – Clase 1, 2, 3", t: ["Todos los agujeros que requieren tenting están cubiertos. El tenting por un solo lado no se recomienda."] },
        { k: "A", h: "Soda strawing – Clase 3", t: ["Sin evidencia de soda strawing."] },
        { k: "A", h: "Soda strawing – Clase 1, 2", t: ["No reduce el espaciado bajo el mínimo.", "Completamente sellado del ambiente externo."] }
      ],
      figs: [["297b","T","Clase 1, 2, 3","Vías completamente cubiertas."],["297c","N","Clase 1, 2, 3","Vías que debían cubrirse, abiertas."],["298a","T","Clase 1, 2, 3","Sin soda strawing."],["298c","A","Clase 1, 2","Soda strawing sellado."],["298e","N","Clase 1, 2, 3","Soda strawing que excede criterios."]] }
  ],
  questions: [
    { t: "mc", q: "En Clase 3, ¿cuántas ampollas de máscara se aceptan y de qué tamaño?", o: ["Ninguna", "Dos por lado, ≤ 0.25 mm", "Cinco por lado, ≤ 0.8 mm", "Ilimitadas si no puentean"], a: 1, e: "Clase 2 y 3: dos por lado, no mayores de 0.25 mm en su mayor dimensión, y reducción del espaciado ≤ 25%.", r: "§2.9.4, pág. 53" },
    { t: "mc", q: "¿Cuál es el criterio de soda strawing para Clase 3?", o: ["Se permite si está sellado", "Sin evidencia de soda strawing", "Hasta 25% del espaciado", "Indicador de proceso"], a: 1, e: "Clase 3 no permite soda strawing. En Clase 1 y 2 se acepta si no reduce el espaciado y está completamente sellado.", r: "§2.9.8, pág. 58" },
    { t: "tf", q: "En Clase 2, el soda strawing es aceptable si está completamente sellado del ambiente y no reduce el espaciado mínimo.", o: ["Verdadero", "Falso"], a: 0, e: "Verdadero. Esos son los criterios de aceptación para Clase 1 y 2.", r: "§2.9.8, pág. 58" },
    { t: "mc", q: "En BGA con lands definidos por máscara, ¿cuál es el breakout máximo aceptable de la máscara sobre el land?", o: ["45°", "90°", "180°", "270°"], a: 1, e: "El desregistro puede crear breakout de la máscara sobre el land de no más de 90°.", r: "§2.9.3.1, pág. 50" },
    { t: "img", img: "295c", q: "La máscara se ha desprendido exponiendo conductores adyacentes. ¿Disposición?", o: ["Aceptable en Clase 1", "No conforme en todas las clases", "Indicador de proceso", "Aceptable tras retoque en Clase 3"], a: 1, e: "Incluso en Clase 1, la máscara faltante no debe exponer patrones conductores adyacentes. Esta condición es no conforme.", r: "§2.9.5, pág. 55" },
    { t: "tf", q: "El espesor de la máscara antisoldante puede evaluarse visualmente.", o: ["Verdadero", "Falso"], a: 1, e: "Falso. El espesor de la máscara no se puede determinar visualmente; si está especificado, requiere microsección (§3.3.12).", r: "§2.9, pág. 46" },
    { t: "img", img: "297c", q: "El plano exige tenting en estas vías, pero algunas quedaron abiertas. ¿Disposición?", o: ["Aceptable si están parcialmente cubiertas", "No conforme", "Aceptable en Clase 1", "Indicador de proceso"], a: 1, e: "Todos los agujeros requeridos a cubrir (tented) deben estar cubiertos por la máscara en todas las clases.", r: "§2.9.7, pág. 57" },
    { t: "mc", q: "En Clase 1, ¿cuál es el criterio de aceptación para ampollas en la máscara?", o: ["Dos por lado ≤ 0.25 mm", "No puentean conductores", "No se permiten", "≤ 1% del área"], a: 1, e: "Para Clase 1, las ampollas, burbujas o deslaminación no deben puentear conductores.", r: "§2.9.4, pág. 53" },
    { t: "mc", q: "Respecto a la máscara dentro de agujeros metalizados (PTH):", o: ["Se permite en todos", "No se permite, excepto en los no destinados a soldadura", "Se permite hasta 25% del barril", "Solo en Clase 1"], a: 1, e: "No debe haber máscara en PTH, excepto en aquellos no destinados a soldadura.", r: "§2.9.2, pág. 48" }
  ]
},
/* =========================== NIVEL 8 =========================== */
{
  id: 8, title: "Definición del patrón y dimensional", icon: "📏", color: "#f97316",
  intro: "Ancho y espaciado de conductores, anillo anular externo y planitud (bow & twist).",
  topics: [
    { id: "8a", sec: "2.10.1.1", page: 61, title: "Ancho del conductor",
      def: "Mide qué tan bien el proceso reproduce la imagen maestra. Defectos: rugosidad de borde, muescas, poros y rayones que exponen material base.",
      rules: [
        { k: "T", h: "Objetivo – Clase 1, 2, 3", t: ["El ancho cumple los requisitos del arte o documentación."] },
        { k: "A", h: "Aceptable – Clase 2, 3", t: ["La combinación de defectos aislados reduce el ancho en ≤ <b>20%</b> del valor mínimo.", "Ninguna ocurrencia > 10% de la longitud del conductor o 13 mm, lo que sea menor."] },
        { k: "A", h: "Aceptable – Clase 1", t: ["Reducción ≤ <b>30%</b> del mínimo.", "Ninguna ocurrencia > 10% de la longitud o 25 mm, lo que sea menor."] }
      ],
      figs: [["21011a","T","Clase 1, 2, 3","Conductores de ancho uniforme."],["21011b","A","Clase 2, 3","Reducción ≤ 20%."],["21011c","A","Clase 1","Reducción ≤ 30%."],["21011d","N","Clase 1, 2, 3","Reducción excesiva del ancho."]] },
    { id: "8b", sec: "2.10.1.2", page: 62, title: "Espaciado entre conductores",
      def: "Distancia entre conductores adyacentes; puede reducirse por rugosidad o picos de cobre.",
      rules: [
        { k: "A", h: "Aceptable – Clase 3", t: ["Reducción del espaciado mínimo ≤ <b>20%</b> en áreas aisladas."] },
        { k: "A", h: "Aceptable – Clase 1, 2", t: ["Reducción ≤ <b>30%</b> en áreas aisladas."] }
      ],
      figs: [["21012a","T","Clase 1, 2, 3","Espaciado según plano."],["21012b","A","Clase 3","Reducción ≤ 20%."],["21012c","A","Clase 1, 2","Reducción ≤ 30%."],["21012d","N","Clase 1, 2, 3","Pico de cobre que reduce en exceso el espaciado."]] },
    { id: "8c", sec: "2.10.2 – 2.10.4", page: 63, title: "Anillo anular externo",
      def: "Cantidad mínima de cobre (en el punto más estrecho) entre el borde del agujero y el borde del land. <b>Breakout:</b> el agujero no queda completamente rodeado por el land.",
      rules: [
        { k: "A", h: "Agujeros con soporte (PTH) – Clase 3", t: ["Anillo ≥ <b>0.050 mm</b>; se permite 20% de reducción por picaduras, abolladuras, muescas, etc."] },
        { k: "A", h: "PTH – Clase 2", t: ["Breakout ≤ <b>90°</b>. En la unión conductor-land, reducción ≤ 20% del ancho mínimo (nunca < 0.050 mm o el ancho mínimo)."] },
        { k: "A", h: "PTH – Clase 1", t: ["Breakout ≤ <b>180°</b>. Reducción en la unión ≤ 30%."] },
        { k: "A", h: "Agujeros sin soporte", t: ["Clase 3: anillo ≥ <b>0.15 mm</b>.", "Clase 2 y 1: breakout de 90° permitido (reducción en la unión ≤ 20% / 30%)."] }
      ],
      figs: [["2102a","I","Ilustración","Medición del anillo anular externo."],["2103d","I","Ilustración","Breakout de 90° (Clase 2) y 180° (Clase 1)."],["2104c","A","Clase 1","Agujero sin soporte con breakout de 90°."]] },
    { id: "8d", sec: "2.11", page: 67, title: "Planitud: arqueo y torsión",
      def: "<b>Arqueo (bow):</b> curvatura cilíndrica o esférica con las cuatro esquinas en un mismo plano. <b>Torsión (twist):</b> deformación paralela a la diagonal; una esquina fuera del plano de las otras tres. Se mide según IPC-TM-650 2.4.22.",
      rules: [
        { k: "A", h: "Aceptable – Clase 1, 2, 3", t: ["Tarjetas con componentes de montaje superficial (SMT): ≤ <b>0.75%</b>.", "Todas las demás tarjetas: ≤ <b>1.50%</b>."] }
      ],
      tip: "Porcentaje = (deflexión / longitud medida) × 100. Se evalúa el producto en su forma de entrega.",
      figs: [["211a","I","Ilustración","Arqueo (bow)."],["211b","I","Ilustración","Torsión (twist)."]] }
  ],
  questions: [
    { t: "mc", q: "Un conductor tiene un ancho mínimo especificado de 0.20 mm. En Clase 3, ¿cuál es el ancho remanente mínimo aceptable en un defecto aislado?", o: ["0.14 mm", "0.16 mm", "0.18 mm", "0.10 mm"], a: 1, e: "Clase 2/3 permiten una reducción de hasta 20%: 0.20 × 0.80 = 0.16 mm.", r: "§2.10.1.1, pág. 61" },
    { t: "mc", q: "Conductor con ancho mínimo de 0.25 mm en Clase 1. ¿Ancho remanente mínimo aceptable?", o: ["0.200 mm", "0.175 mm", "0.125 mm", "0.225 mm"], a: 1, e: "Clase 1 permite reducción de hasta 30%: 0.25 × 0.70 = 0.175 mm.", r: "§2.10.1.1, pág. 61" },
    { t: "mc", q: "En Clase 3, ¿cuánto puede reducirse el espaciado mínimo especificado en áreas aisladas?", o: ["10%", "20%", "30%", "50%"], a: 1, e: "Clase 3: ≤ 20%. Clase 1 y 2: ≤ 30%.", r: "§2.10.1.2, pág. 62" },
    { t: "mc", q: "Anillo anular externo mínimo en PTH para Clase 3:", o: ["0.025 mm", "0.050 mm", "0.15 mm", "Breakout de 90°"], a: 1, e: "Clase 3: el anillo anular externo debe medir 0.050 mm o más.", r: "§2.10.3, pág. 64" },
    { t: "mc", q: "¿Qué breakout máximo se acepta en el anillo anular externo de PTH en Clase 1?", o: ["0° (sin breakout)", "90°", "180°", "270°"], a: 2, e: "Clase 1: breakout ≤ 180°. Clase 2: ≤ 90°. Clase 3: sin breakout (≥ 0.050 mm).", r: "§2.10.3, pág. 65" },
    { t: "mc", q: "Límite de arqueo y torsión para una tarjeta con componentes SMT:", o: ["0.50%", "0.75%", "1.00%", "1.50%"], a: 1, e: "Con componentes de montaje superficial: ≤ 0.75%. Otras tarjetas: ≤ 1.50%.", r: "§2.11, pág. 68" },
    { t: "mc", q: "Tarjeta SMT de 150 mm de largo con una deflexión (arqueo) de 1.5 mm. ¿Disposición?", o: ["Aceptable (0.75%)", "Aceptable (1.0% < 1.5%)", "No conforme (1.0% > 0.75%)", "No conforme (10%)"], a: 2, e: "1.5 / 150 × 100 = 1.0%. Para tarjetas SMT el límite es 0.75%, por lo que es no conforme.", r: "§2.11, pág. 68" },
    { t: "img", img: "21011d", q: "El conductor muestra una reducción de ancho muy superior al 30% del mínimo. ¿Disposición?", o: ["Aceptable Clase 1", "Aceptable Clase 2", "No conforme en todas las clases", "Indicador de proceso"], a: 2, e: "Si la reducción supera 30% (límite de Clase 1), la condición es no conforme en todas las clases.", r: "§2.10.1.1, pág. 61" },
    { t: "mc", q: "Anillo anular mínimo para agujeros SIN soporte (no metalizados) en Clase 3:", o: ["0.050 mm", "0.10 mm", "0.15 mm", "0.25 mm"], a: 2, e: "En agujeros sin soporte, Clase 3 requiere un anillo anular ≥ 0.15 mm en cualquier dirección.", r: "§2.10.4, pág. 66" }
  ]
},
/* =========================== NIVEL 9 =========================== */
{
  id: 9, title: "Características internas (microsección)", icon: "🧪", color: "#ef4444",
  intro: "Evaluación por microsección: vacíos del laminado, etchback, anillo anular interno, grietas, vacíos de chapado, wicking y separación de capa interna.",
  topics: [
    { id: "9a", sec: "3.1.1 – 3.1.4", page: 70, title: "Dieléctrico: vacíos, grietas y delaminación",
      def: "Los materiales dieléctricos se evalúan tras estrés térmico. La <b>zona térmica (Zona A)</b> se extiende 0.08 mm más allá del extremo del land; lo que queda totalmente en Zona A no se evalúa para vacíos/grietas.",
      rules: [
        { k: "A", h: "Vacíos/grietas – Clase 2, 3", t: ["≤ <b>0.08 mm</b> y sin violar el espaciado dieléctrico mínimo."] },
        { k: "A", h: "Vacíos/grietas – Clase 1", t: ["≤ <b>0.15 mm</b> y sin violar el espaciado dieléctrico mínimo."] },
        { k: "A", h: "Delaminación interna (3.1.4)", t: ["Clase 2, 3: sin evidencia de delaminación o ampollas.", "Clase 1: si hay, evaluar la tarjeta completa según 2.3.3."] },
        { k: "A", h: "Espaciado entre capas (3.1.8)", t: ["Si no se especifica: mínimo 0.09 mm."] }
      ],
      figs: [["311c","A","Clase 2, 3","Vacío pequeño en el laminado."],["311d","N","Clase 1, 2, 3","Vacíos de laminado excesivos."],["314a","T","Clase 1, 2, 3","Sin delaminación."],["314c","N","Clase 1, 2, 3","Delaminación entre PTH."]] },
    { id: "9b", sec: "3.1.5 – 3.1.6", page: 75, title: "Etchback y remoción de smear",
      def: "El <b>etchback</b> (positivo) remueve dieléctrico para crear una unión de tres vías entre el cobre del PTH y la lámina interna. El <b>etchback negativo</b> remueve cobre interno. El <b>smear</b> es resina residual del taladrado.",
      rules: [
        { k: "T", h: "Etchback – Objetivo", t: ["Uniforme, profundidad preferida 0.013 mm."] },
        { k: "A", h: "Etchback – Aceptable Clase 1, 2, 3", t: ["Entre <b>0.005 mm y 0.08 mm</b>.", "Sombreado (shadowing) permitido en un solo lado de cada land."] },
        { k: "A", h: "Etchback negativo", t: ["Objetivo: 0.0025 mm.", "Clase 3: < 0.013 mm.", "Clase 1, 2: < 0.025 mm."] },
        { k: "A", h: "Remoción de smear", t: ["No se graba más de 0.025 mm."] }
      ],
      figs: [["3151a","T","Clase 1, 2, 3","Etchback uniforme."],["3151b","A","Clase 1, 2, 3","Etchback dentro de 0.005–0.08 mm."],["3151c","N","Clase 1, 2, 3","Etchback excesivo."],["3152b","A","Clase 3","Etchback negativo < 0.013 mm."],["3152c","N","Clase 1, 2, 3","Etchback negativo excesivo."]] },
    { id: "9c", sec: "3.3.1 – 3.3.7", page: 93, title: "Anillo interno, grietas y nódulos",
      def: "Integridad del agujero metalizado evaluada en microsección a 100X.",
      rules: [
        { k: "A", h: "Anillo anular interno", t: ["Clase 3: ≥ 0.025 mm.", "Clase 2: breakout de 90° permitido.", "Clase 1: breakout permitido (respetando reducción del conductor y espaciado)."] },
        { k: "A", h: "Grieta en lámina interna «C»", t: ["Clase 2, 3: sin grietas.", "Clase 1: en un solo lado del agujero y sin atravesar el espesor de la lámina."] },
        { k: "N", h: "Grietas de barril «E» y de esquina «F»", t: ["NO se permiten en ninguna clase."] },
        { k: "A", h: "Nódulos (3.3.7)", t: ["No reducen el espesor de chapado ni el diámetro del agujero bajo el mínimo."] }
      ],
      figs: [["331b","T","Clase 1, 2, 3","Agujero centrado en los lands."],["331c","A","Clase 3","Anillo interno ≥ 0.025 mm."],["331d","N","Clase 1, 2, 3","Breakout excesivo."],["333a","T","Clase 1, 2, 3","Sin grietas en la lámina."],["333b","A","Clase 1","Grieta C parcial."],["333c","N","Clase 1, 2, 3","Grieta C que atraviesa la lámina."],["336a","T","Clase 1, 2, 3","Esquina sin grietas."],["336b","N","Clase 1, 2, 3","Grieta de esquina F."]] },
    { id: "9d", sec: "3.3.10 – 3.3.16", page: 104, title: "Vacíos de chapado, wicking, separación y relleno",
      def: "Otros requisitos del barril del PTH.",
      rules: [
        { k: "A", h: "Vacíos de chapado (3.3.10)", t: ["Clase 2, 3: máx. 1 vacío por cupón; ninguno > 5% del espesor; ninguno en la interfaz con capa interna; ≤ 90° de circunferencia.", "Clase 1: máx. 3 vacíos por cupón (resto igual)."] },
        { k: "A", h: "Wicking (3.3.13)", t: ["Clase 3: ≤ <b>80 µm</b>.", "Clase 2: ≤ <b>100 µm</b>.", "Clase 1: ≤ <b>125 µm</b>."] },
        { k: "A", h: "Separación de capa interna (3.3.14)", t: ["Clase 2, 3: sin separación.", "Clase 1: parcial en un solo lado, ≤ 20% de cada land."] },
        { k: "A", h: "Relleno de vías (3.3.16) y wrap (3.3.9)", t: ["Vías enterradas: relleno ≥ 60% (Clase 1 permite vacías).", "Wrap plating Clase 3: ≥ 12 µm (vías pasantes/ciegas/enterradas); Clase 1, 2: ≥ 5 µm."] }
      ],
      figs: [["3310a","T","Clase 1, 2, 3","Barril sin vacíos."],["3310b","A","Clase 2, 3","Un vacío por cupón."],["3310c","N","Clase 1, 2, 3","Múltiples vacíos."],["3313a","T","Clase 1, 2, 3","Sin wicking."],["3313b","A","Clase 3","Wicking ≤ 80 µm."],["3313c","N","Clase 1, 2, 3","Wicking excesivo."],["3314a","T","Clase 1, 2, 3","Unión directa cobre-lámina."],["3314b","A","Clase 1","Separación parcial en un lado."],["3314c","N","Clase 1, 2, 3","Separación de capa interna."]] }
  ],
  questions: [
    { t: "mc", q: "¿Cuál es el límite de wicking para Clase 3?", o: ["50 µm", "80 µm", "100 µm", "125 µm"], a: 1, e: "Clase 3: ≤ 80 µm; Clase 2: ≤ 100 µm; Clase 1: ≤ 125 µm. Se mide desde el borde del laminado excluyendo el chapado.", r: "§3.3.13, pág. 107" },
    { t: "mc", q: "En una tarjeta Clase 2 se mide un wicking de 110 µm. ¿Disposición?", o: ["Aceptable", "No conforme (máx. 100 µm)", "Indicador de proceso", "Aceptable si no reduce espaciado"], a: 1, e: "El límite de Clase 2 es 100 µm; 110 µm lo excede. Solo sería aceptable en Clase 1 (≤ 125 µm).", r: "§3.3.13, pág. 107" },
    { t: "mc", q: "Rango aceptable de etchback (positivo) para las tres clases:", o: ["0.0025 – 0.013 mm", "0.005 – 0.08 mm", "0.013 – 0.15 mm", "0.025 – 0.10 mm"], a: 1, e: "Etchback aceptable entre 0.005 mm y 0.08 mm; la profundidad preferida (objetivo) es 0.013 mm.", r: "§3.1.5.1, pág. 76" },
    { t: "tf", q: "Una grieta de barril tipo «E» es aceptable en Clase 1.", o: ["Verdadero", "Falso"], a: 1, e: "Falso. Las grietas de chapado en el barril (E) y en la esquina (F) no se permiten en ninguna clase.", r: "§3.3.5, pág. 98" },
    { t: "img", img: "336b", q: "Microsección que muestra una grieta en la esquina del chapado (tipo F). ¿Disposición?", o: ["Aceptable Clase 1", "Aceptable si no atraviesa", "No conforme en todas las clases", "Indicador de proceso"], a: 2, e: "La grieta de esquina «F» no está permitida en ninguna clase.", r: "§3.3.6, pág. 99" },
    { t: "mc", q: "Tamaño máximo de un vacío/grieta del laminado (fuera de la zona térmica) en Clase 3:", o: ["0.05 mm", "0.08 mm", "0.15 mm", "0.5 mm"], a: 1, e: "Clase 2 y 3: ≤ 0.08 mm; Clase 1: ≤ 0.15 mm, sin violar el espaciado dieléctrico mínimo.", r: "§3.1.1, pág. 71" },
    { t: "mc", q: "¿Qué se acepta en separación de capa interna (innerlayer separation) para Clase 2?", o: ["Hasta 20% de cada land", "Parcial en un solo lado", "Sin separación evidente", "Hasta 90° de la circunferencia"], a: 2, e: "Clase 2 y 3: no debe haber separación. Clase 1 permite separación parcial en un lado, ≤ 20% de cada land.", r: "§3.3.14, pág. 109" },
    { t: "mc", q: "Anillo anular interno mínimo para Clase 3:", o: ["0.025 mm", "0.050 mm", "0.15 mm", "Breakout 90° permitido"], a: 0, e: "El anillo anular interno para Clase 3 debe medir 0.025 mm o más.", r: "§3.3.1, pág. 94" },
    { t: "img", img: "3310c", q: "El cupón presenta múltiples vacíos en el chapado del barril, incluidos algunos en la interfaz con capas internas. ¿Disposición?", o: ["Aceptable Clase 1 (máx. 3)", "No conforme", "Aceptable si < 90°", "Indicador de proceso"], a: 1, e: "No se permiten vacíos en la interfaz de una capa interna con la pared del agujero en ninguna clase; además supera el número permitido.", r: "§3.3.10, pág. 104" },
    { t: "mc", q: "Relleno mínimo de una vía enterrada (buried via) para Clase 2 y 3:", o: ["25%", "50%", "60%", "100%"], a: 2, e: "Se requiere al menos 60% de relleno con resina de laminación o material similar. Clase 1 acepta vías enterradas sin relleno.", r: "§3.3.16, pág. 111" }
  ]
},
/* =========================== NIVEL 10 =========================== */
{
  id: 10, title: "Flex, núcleo metálico, limpieza y soldabilidad", icon: "🏆", color: "#a855f7",
  intro: "Tarjetas flexibles y rígido-flexibles, tarjetas con núcleo metálico, tarjetas flush, limpieza y soldabilidad.",
  topics: [
    { id: "10a", sec: "4.1", page: 122, title: "Tipos de tarjetas flexibles y coverlay",
      def: "Tipos: <b>1</b> flex de una cara; <b>2</b> flex doble cara con PTH; <b>3</b> flex multicapa (≥3 capas) con PTH; <b>4</b> rígido-flex multicapa (≥3 capas) con PTH; <b>5</b> flex o rígido-flex de ≥2 capas sin PTH.",
      rules: [
        { k: "A", h: "Separaciones del coverfilm (4.1.1) – Clase 1, 2, 3", t: ["Cada separación ≤ <b>0.80 × 0.80 mm</b>, lejos de conductores y a más de 1.0 mm del borde o de la apertura.", "Máx. <b>3</b> separaciones por cada 25 × 25 mm.", "No más del 25% del espacio entre conductores adyacentes.", "Sin no-laminación en los bordes externos."] },
        { k: "A", h: "Adhesivo sobre land (4.1.2.1)", t: ["Clase 3: anillo soldable de 0.05 mm en 360°.", "Clase 2: 0.05 mm en al menos 270°.", "Clase 1: anillo soldable en al menos 270°."] },
        { k: "A", h: "Penetración de soldadura bajo coverlay (4.1.7)", t: ["Clase 3: ≤ 0.1 mm · Clase 2: ≤ 0.3 mm · Clase 1: ≤ 0.5 mm.", "No debe llegar a la zona de doblez o transición."] }
      ],
      figs: [["411c","N","Clase 1, 2, 3","Separación del coverfilm excesiva."],["417a","T","Clase 1, 2, 3","Soldadura se detiene en el coverlay."],["417b","A","Clase 3","Penetración ≤ 0.1 mm."],["417c","A","Clase 1","Penetración ≤ 0.5 mm."]] },
    { id: "10b", sec: "4.1.5 – 4.1.13", page: 128, title: "Rigidizadores, bordes, pliegues y película de plata",
      def: "Otros criterios específicos para flex.",
      rules: [
        { k: "A", h: "Rigidizador (4.1.5)", t: ["Vacíos de adhesivo: Clase 3 ≤ 10%, Clase 2 ≤ 20%, Clase 1 ≤ 30% del área; cada vacío ≤ 2.5 mm.", "Pelado mínimo: 1.4 kg/25 mm (adhesivo termoestable)."] },
        { k: "A", h: "Bordes recortados (4.1.11)", t: ["Sin desgarres en la porción flexible; muescas/deslaminación dentro de lo especificado."] },
        { k: "A", h: "Marcas de pliegue (4.1.12)", t: ["No hay marcas de pliegue a lo largo del patrón conductor, ni grietas ni aperturas del conductor. Las marcas de doblez (bend) son aceptables."] },
        { k: "A", h: "Película de plata (4.1.13)", t: ["≤ 5 ubicaciones por lado; no exponen metal; vacíos < 3 × 3 mm; rayones ≤ 1.5 mm de ancho y ≤ 50% de la longitud."] }
      ],
      figs: [["4111a","T","Clase 1, 2, 3","Borde recortado sin defectos."],["4111c","A","Clase 1, 2, 3","Borde dentro de lo especificado."],["4111e","N","Clase 1, 2, 3","Desgarre / deslaminación del borde."],["4112a","A","Clase 1, 2, 3","Marca de doblez aceptable."],["4112b","N","Clase 1, 2, 3","Pliegue sobre los conductores."],["4113a","A","Clase 1, 2, 3","Defectos menores en película de plata."],["4113c","N","Clase 1, 2, 3","Daño que excede los criterios."]] },
    { id: "10c", sec: "4.2 – 4.3", page: 141, title: "Núcleo metálico y tarjetas flush",
      def: "Tarjetas con núcleo de aluminio, cobre, invar o molibdeno que actúa como disipador, plano de tierra o control de CTE.",
      rules: [
        { k: "A", h: "Espaciado (4.2.2)", t: ["Espaciado entre núcleo metálico y superficies conductoras/PTH > <b>0.1 mm</b>."] },
        { k: "A", h: "Grietas en el relleno (4.2.5)", t: ["No reducen el espaciado eléctrico a menos de 100 µm.", "Wicking/grietas radiales ≤ 75 µm desde el borde del PTH."] },
        { k: "A", h: "Unión núcleo-PTH (4.2.6)", t: ["Separación ≤ 50% del espesor del núcleo no cobre; sin separación en la porción de cobre."] },
        { k: "A", h: "Flush (4.3.1)", t: ["Objetivo: conductor al ras del material base. Aceptable: no al ras pero cumple requisitos mínimos."] }
      ],
      figs: [["426a","T","Clase 1, 2, 3","Unión completa núcleo-PTH."],["426b","A","Clase 1, 2, 3","Separación parcial ≤ 50%."],["426c","N","Clase 1, 2, 3","Separación excesiva."],["431a","T","Clase 1, 2, 3","Conductor al ras."],["431b","A","Clase 1, 2, 3","No al ras, dentro de requisitos."],["431c","N","Clase 1, 2, 3","Desnivel excesivo."]] },
    { id: "10d", sec: "5", page: 149, title: "Limpieza y soldabilidad",
      def: "Buenas prácticas de manipulación y pruebas de soldabilidad según J-STD-003.",
      rules: [
        { k: "I", h: "Manipulación", t: ["Estaciones limpias; no comer, beber ni fumar.", "No usar lociones con silicona.", "Tomar las tarjetas por los bordes y usar guantes sin pelusa.", "Contaminantes típicos: residuos de fundente, partículas, sales químicas, huellas, óxidos y residuos blancos."] },
        { k: "I", h: "Durabilidad del recubrimiento", t: ["Categoría 1: soldadas dentro de 30 días.", "Categoría 2: almacenamiento hasta 6 meses.", "Categoría 3: almacenamiento > 6 meses y procesos térmicos severos."] },
        { k: "A", h: "Soldabilidad de PTH (5.1.1)", t: ["Clase 3: la soldadura sube en todos los agujeros y moja completamente las paredes.", "Clase 1, 2: moja completamente las paredes; no es necesario el llenado completo."] }
      ],
      figs: [] }
  ],
  questions: [
    { t: "mc", q: "Una tarjeta rígido-flex multicapa con 3 o más capas y PTH corresponde al:", o: ["Tipo 2", "Tipo 3", "Tipo 4", "Tipo 5"], a: 2, e: "Tipo 4: combinaciones multicapa rígidas y flexibles con tres o más capas y PTH. Tipo 3 es flex multicapa (sin rígido).", r: "§4.1, pág. 122" },
    { t: "mc", q: "Penetración máxima de soldadura bajo el coverlay en Clase 2:", o: ["0.1 mm", "0.3 mm", "0.5 mm", "1.0 mm"], a: 1, e: "Clase 3: ≤ 0.1 mm; Clase 2: ≤ 0.3 mm; Clase 1: ≤ 0.5 mm.", r: "§4.1.7, pág. 130" },
    { t: "mc", q: "Tamaño máximo de cada separación del coverfilm:", o: ["0.25 × 0.25 mm", "0.50 × 0.50 mm", "0.80 × 0.80 mm", "1.0 × 1.0 mm"], a: 2, e: "Cada separación no debe superar 0.80 × 0.80 mm y no puede estar a menos de 1.0 mm del borde o apertura del coverfilm.", r: "§4.1.1, pág. 123" },
    { t: "mc", q: "Área máxima de vacíos en el adhesivo de un rigidizador para Clase 3:", o: ["5%", "10%", "20%", "30%"], a: 1, e: "Clase 3: ≤ 10%; Clase 2: ≤ 20%; Clase 1: ≤ 30%; cada vacío ≤ 2.5 mm.", r: "§4.1.5, pág. 128" },
    { t: "mc", q: "Espaciado mínimo entre el núcleo metálico y superficies conductoras adyacentes:", o: ["Mayor a 0.05 mm", "Mayor a 0.1 mm", "Mayor a 0.25 mm", "Mayor a 1.0 mm"], a: 1, e: "El espaciado entre el núcleo metálico y el PTH o superficies conductoras debe ser mayor a 0.1 mm.", r: "§4.2.2, pág. 143" },
    { t: "img", img: "4112b", q: "Se observa una marca de pliegue agudo a lo largo del patrón conductor de un flex. ¿Disposición?", o: ["Aceptable: es una marca de doblez", "No conforme", "Indicador de proceso", "Aceptable en Clase 1"], a: 1, e: "No se permiten marcas de pliegue a lo largo del patrón conductor. Solo las marcas de doblez (bend, radio obtuso) son aceptables.", r: "§4.1.12, pág. 138" },
    { t: "mc", q: "Tarjetas que se almacenarán más de 6 meses antes de soldarse requieren durabilidad de recubrimiento:", o: ["Categoría 1", "Categoría 2", "Categoría 3", "Clase 3"], a: 2, e: "Categoría 3 (máxima durabilidad): almacenamiento largo (> 6 meses) y procesos térmicos severos. Ojo: categorías de durabilidad ≠ clases de producto.", r: "§5.1, pág. 150" },
    { t: "tf", q: "Se recomienda usar cremas con silicona para proteger las manos al manipular tarjetas desnudas.", o: ["Verdadero", "Falso"], a: 1, e: "Falso. Las lociones con silicona pueden causar problemas de soldabilidad. Se deben usar guantes sin pelusa y tomar las tarjetas por los bordes.", r: "§5, pág. 149" },
    { t: "img", img: "426c", q: "Microsección de tarjeta con núcleo metálico: la separación entre el núcleo y la pared del PTH es mayor al 50% del espesor del núcleo. ¿Disposición?", o: ["Aceptable", "No conforme", "Indicador de proceso", "Condición objetivo"], a: 1, e: "Se acepta una separación de la interconexión de no más del 50% del espesor del núcleo no cobre. Si lo supera, es no conforme.", r: "§4.2.6, pág. 147" }
  ]
}
];
