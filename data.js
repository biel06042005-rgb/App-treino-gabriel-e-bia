/* ============================================================
   DR. RAFAEL ANDRADE — APP DE TREINO
   Banco de dados de exercícios e treinos (Gabriel & Beatriz)
   ============================================================ */

const EXERCISES = {
  "supino-reto-barra": {
    nome: "Supino Reto com Barra",
    grupo: "Peito",
    video: { id: "8UiTPNj66AU", titulo: "Supino Reto com Barra — o jeito certo de fazer", canal: "Treino Mestre" },
    tecnica: [
      "Deite no banco com os pés firmes no chão e escápulas retraídas (peito estufado).",
      "Pegada um pouco mais aberta que a largura dos ombros; retire a barra do suporte.",
      "Desça a barra controlada até tocar levemente o peito, cotovelos a ~45° do tronco.",
      "Empurre a barra de volta em linha reta até a extensão quase completa dos cotovelos."
    ],
    musculos: ["Peitoral maior", "Tríceps", "Deltoide anterior"],
    erros: ["Arquear excessivamente a lombar", "Deixar a barra 'quicar' no peito", "Abrir demais os cotovelos (90°) sobrecarregando o ombro"]
  },
  "supino-inclinado-halteres": {
    nome: "Supino Inclinado com Halteres",
    grupo: "Peito",
    video: { id: "G-i3jMIbDmo", titulo: "Supino Inclinado com Halteres: Execução correta e músculos solicitados", canal: "YouTube" },
    tecnica: [
      "Banco inclinado entre 30-45°; halteres apoiados nas coxas para iniciar.",
      "Suba os halteres até a altura do peito usando os joelhos para dar impulso inicial.",
      "Empurre os halteres para cima, levemente inclinados um em direção ao outro no topo.",
      "Desça controlado até sentir alongamento no peito, sem travar o ombro."
    ],
    musculos: ["Peitoral superior", "Deltoide anterior", "Tríceps"],
    erros: ["Inclinação do banco muito alta (vira exercício de ombro)", "Descer rápido demais e perder controle", "Bater os halteres com força no topo"]
  },
  "crucifixo-peckdeck": {
    nome: "Crucifixo Inclinado / Peck Deck (Voador)",
    grupo: "Peito",
    video: { id: "mwBoC7qqXpc", titulo: "Peck Deck | Voador | Crucifixo na Máquina", canal: "Academia Fitness" },
    tecnica: [
      "Ajuste o banco/máquina para que os braços fiquem alinhados aos ombros.",
      "Cotovelos levemente flexionados e fixos durante todo o movimento.",
      "Aproxime os braços à frente do peito, sentindo a contração no centro do tórax.",
      "Retorne controlado até sentir alongamento leve, sem forçar o ombro para trás."
    ],
    musculos: ["Peitoral (fibras internas)", "Deltoide anterior"],
    erros: ["Usar os cotovelos para 'empurrar' como se fosse supino", "Amplitude exagerada forçando o ombro", "Carga alta demais comprometendo a execução"]
  },
  "crossover-cabo": {
    nome: "Crossover no Cabo",
    grupo: "Peito",
    video: { id: "E3aha5zhlc0", titulo: "Crossover Polia Alta — o jeito certo de fazer", canal: "Treino Mestre" },
    tecnica: [
      "Polias ajustadas na altura desejada (alta, média ou baixa), um pé à frente para estabilidade.",
      "Cotovelos levemente flexionados, tronco levemente inclinado à frente.",
      "Traga os cabos em direção ao centro do corpo contraindo o peitoral.",
      "Retorne controlado até sentir o alongamento, sem perder a tensão no cabo."
    ],
    musculos: ["Peitoral (fibras internas e inferiores)", "Deltoide anterior"],
    erros: ["Usar impulso do tronco em vez do peitoral", "Cotovelos totalmente travados (vira exercício de tríceps)", "Amplitude curta demais"]
  },
  "elevacao-frontal": {
    nome: "Elevação Frontal de Ombro",
    grupo: "Ombro (anterior)",
    video: { id: "jhxLYSm_P-k", titulo: "Elevação Frontal com Halteres (Ombros)", canal: "My Training Pro" },
    tecnica: [
      "Halteres à frente das coxas, pegada pronada, leve flexão de cotovelo.",
      "Eleve um braço (ou os dois) até a altura dos ombros, sem balançar o tronco.",
      "Pausa breve no topo, sentindo a contração do deltoide anterior.",
      "Desça controlado até a posição inicial."
    ],
    musculos: ["Deltoide anterior"],
    erros: ["Usar impulso do quadril/lombar (roubar carga)", "Subir acima da linha dos ombros", "Carga excessiva prejudicando a execução"]
  },
  "triceps-corda": {
    nome: "Tríceps Corda na Polia",
    grupo: "Tríceps",
    video: { id: "7le1JRUUagM", titulo: "Tríceps na Polia Alta com Corda — execução e postura", canal: "Treino Mestre" },
    tecnica: [
      "Cotovelos colados ao tronco, pegada na corda com as mãos em pronação leve.",
      "Empurre a corda para baixo, estendendo totalmente o cotovelo.",
      "No fim do movimento, abra levemente as mãos separando a corda.",
      "Retorne controlado sem deixar os cotovelos se afastarem do corpo."
    ],
    musculos: ["Tríceps braquial (as 3 cabeças)"],
    erros: ["Deixar os cotovelos 'voarem' para frente", "Usar o tronco para empurrar", "Não estender totalmente o cotovelo"]
  },
  "triceps-testa": {
    nome: "Tríceps Testa com Barra EZ",
    grupo: "Tríceps",
    video: { id: "LLpDSU-28FE", titulo: "Tríceps Testa Barra EZ", canal: "My Training Pro" },
    tecnica: [
      "Deitado no banco, barra EZ acima do peito com os braços estendidos.",
      "Flexione apenas o cotovelo, descendo a barra em direção à testa/atrás da cabeça.",
      "Cotovelos fixos, apontando para o teto durante todo o movimento.",
      "Estenda de volta usando apenas a força do tríceps."
    ],
    musculos: ["Tríceps braquial (cabeça longa)"],
    erros: ["Deixar os cotovelos se abrirem para os lados", "Descer a barra rápido demais (risco de bater na cabeça)", "Movimentar o ombro em vez do cotovelo"]
  },
  "triceps-mergulho": {
    nome: "Tríceps no Banco / Mergulho",
    grupo: "Tríceps",
    video: { id: "dZTn_ZlDrEQ", titulo: "Mergulho no Banco (Bench Dip)", canal: "Leandro Twin" },
    tecnica: [
      "Mãos apoiadas na borda do banco, pernas estendidas à frente (ou flexionadas para facilitar).",
      "Desça o corpo flexionando os cotovelos até 90°, mantendo-os apontando para trás.",
      "Empurre de volta estendendo os cotovelos, sem travar com força total.",
      "Mantenha o quadril próximo ao banco durante todo o movimento."
    ],
    musculos: ["Tríceps braquial", "Deltoide anterior (secundário)"],
    erros: ["Descer demais e forçar o ombro", "Afastar o quadril do banco", "Cotovelos abrindo para os lados"]
  },
  "puxada-frente": {
    nome: "Puxada Frente (Pulldown) na Polia",
    grupo: "Costas",
    video: { id: "V-Z_RntYhZg", titulo: "Pulldown Polia — aprenda como fazer", canal: "Treino Mestre" },
    tecnica: [
      "Pegada um pouco mais aberta que os ombros, tronco levemente inclinado para trás.",
      "Puxe a barra em direção à parte superior do peito, levando os cotovelos para baixo e para trás.",
      "Contraia as escápulas no fim do movimento, sem usar impulso do corpo.",
      "Retorne controlado até a extensão quase completa dos braços."
    ],
    musculos: ["Latíssimo do dorso", "Bíceps (secundário)", "Trapézio médio"],
    erros: ["Puxar a barra atrás da nuca (risco de ombro)", "Usar o corpo para 'balançar' e puxar", "Não retrair as escápulas"]
  },
  "remada-curvada-barra": {
    nome: "Remada Curvada com Barra",
    grupo: "Costas",
    video: { id: "_vO2dAnz__c", titulo: "Remada Curvada com Barra — execução correta", canal: "Via Brasil Club" },
    tecnica: [
      "Tronco inclinado a ~45°, joelhos levemente flexionados, coluna neutra.",
      "Barra próxima às canelas, pegada pronada um pouco mais aberta que os ombros.",
      "Puxe a barra em direção ao abdômen/parte baixa do peito, cotovelos próximos ao corpo.",
      "Desça controlado sem perder a postura da coluna."
    ],
    musculos: ["Latíssimo do dorso", "Trapézio", "Romboides", "Bíceps (secundário)"],
    erros: ["Arredondar a lombar (risco de lesão)", "Usar impulso do corpo (remada 'bandida')", "Puxar até muito alto no tronco"]
  },
  "remada-unilateral-halter": {
    nome: "Remada Unilateral com Halter (Serrote)",
    grupo: "Costas",
    video: { id: "_k77ro-7uW4", titulo: "Remada Curvada Unilateral com Halter (Serrote)", canal: "Fitness Brasil" },
    tecnica: [
      "Um joelho e uma mão apoiados no banco, coluna neutra e paralela ao chão.",
      "Halter na mão livre, braço estendido a partir do ombro.",
      "Puxe o halter em direção ao quadril, cotovelo passando próximo ao corpo.",
      "Desça controlado até a extensão completa do braço."
    ],
    musculos: ["Latíssimo do dorso", "Romboides", "Bíceps (secundário)"],
    erros: ["Girar o tronco durante a puxada", "Puxar em direção ao ombro em vez do quadril", "Usar impulso das pernas/tronco"]
  },
  "remada-cavalinho": {
    nome: "Remada Cavalinho (T-Bar Row)",
    grupo: "Costas",
    video: { id: "Z3ci7lGudok", titulo: "Remada Cavalinho (T-Bar Row)", canal: "Treino Mestre" },
    tecnica: [
      "Tronco inclinado a ~45°, pegada firme na barra em V ou aberta.",
      "Peito estufado, coluna neutra durante todo o movimento.",
      "Puxe a barra em direção ao abdômen, cotovelos próximos ao corpo.",
      "Desça controlado sem perder a postura da coluna."
    ],
    musculos: ["Latíssimo do dorso", "Trapézio médio", "Romboides"],
    erros: ["Arredondar as costas", "Usar impulso das pernas para 'jogar' o peso", "Amplitude incompleta"]
  },
  "remada-baixa-cabo": {
    nome: "Remada Baixa no Cabo (Sentada)",
    grupo: "Costas",
    video: { id: "5zvxMuf378g", titulo: "Remada Baixa no Cabo (Seated Cable Row) — execução técnica", canal: "VKN Trainer" },
    tecnica: [
      "Sentado, joelhos levemente flexionados, tronco ereto, pés apoiados na plataforma.",
      "Segure o triângulo/barra com os braços estendidos à frente.",
      "Puxe em direção ao abdômen, mantendo o tronco estável (sem balançar).",
      "Retorne controlado até o alongamento completo, sem arredondar a coluna."
    ],
    musculos: ["Latíssimo do dorso", "Trapézio médio", "Romboides", "Bíceps (secundário)"],
    erros: ["Balançar o tronco para trás e para frente", "Encolher os ombros durante a puxada", "Amplitude curta demais"]
  },
  "extensao-lombar": {
    nome: "Extensão Lombar no Banco Romano (Hiperextensão)",
    grupo: "Lombar",
    video: { id: "6Bg5woPBEA8", titulo: "Hiperextensão Lombar no Banco Romano — execução perfeita", canal: "Treino Mestre" },
    tecnica: [
      "Quadril apoiado na almofada, pernas travadas, tronco alinhado com as pernas no início.",
      "Desça o tronco controlado, flexionando o quadril (não arredondando a lombar).",
      "Suba até formar uma linha reta entre tronco e pernas — sem hiperestender além disso.",
      "Movimento controlado, sem 'jogar' o tronco para cima."
    ],
    musculos: ["Eretores da espinha (lombar)", "Glúteo", "Isquiotibiais (secundário)"],
    erros: ["Hiperestender demais no topo (arquear excessivamente)", "Fazer o movimento rápido e com impulso", "Arredondar a lombar na descida"]
  },
  "elevacao-lateral": {
    nome: "Elevação Lateral de Ombro",
    grupo: "Ombro (lateral)",
    video: { id: "JUp6eoHwl0I", titulo: "Elevação Lateral de Ombro com Halteres", canal: "YouTube" },
    tecnica: [
      "Halteres ao lado do corpo, leve flexão de cotovelo, tronco ereto.",
      "Eleve os braços lateralmente até a altura dos ombros, cotovelos levemente à frente das mãos.",
      "Pausa breve no topo, sentindo a contração no deltoide lateral.",
      "Desça controlado, sem deixar o peso 'cair' rápido."
    ],
    musculos: ["Deltoide lateral (medial)"],
    erros: ["Usar impulso do tronco (balançar)", "Subir acima da linha dos ombros", "Carga excessiva prejudicando a amplitude"]
  },
  "face-pull": {
    nome: "Face Pull na Polia",
    grupo: "Ombro (posterior)",
    video: { id: "YxQivR_kljk", titulo: "Face Pull Corda na Polia", canal: "Treino Mestre" },
    tecnica: [
      "Polia na altura do rosto, corda com pegada neutra.",
      "Puxe a corda em direção ao rosto, separando as mãos e levando os cotovelos para trás e para cima.",
      "Contraia a parte posterior do ombro e as escápulas no fim do movimento.",
      "Retorne controlado até a extensão dos braços."
    ],
    musculos: ["Deltoide posterior", "Trapézio", "Romboides", "Manguito rotador"],
    erros: ["Puxar com os braços em vez do ombro/escápula", "Usar carga alta demais e perder a técnica", "Não separar bem as mãos no fim do movimento"]
  },
  "rosca-direta": {
    nome: "Rosca Direta com Barra",
    grupo: "Bíceps",
    video: { id: "Et1wgGMGW8w", titulo: "Rosca Direta com Barra — como fazer corretamente", canal: "Treino Mestre" },
    tecnica: [
      "Em pé, pegada supinada na largura dos ombros, cotovelos colados ao tronco.",
      "Flexione os cotovelos elevando a barra, sem mover o ombro/tronco.",
      "Contraia o bíceps no topo do movimento.",
      "Desça controlado até a extensão quase completa do braço."
    ],
    musculos: ["Bíceps braquial", "Braquial anterior"],
    erros: ["Balançar o tronco para 'ajudar' a subir a barra", "Cotovelos se afastando do corpo", "Não descer até quase a extensão completa"]
  },
  "rosca-martelo": {
    nome: "Rosca Martelo com Halteres",
    grupo: "Bíceps",
    video: { id: "5vPGH1uTtbs", titulo: "Rosca Martelo com Halteres - Exercício para Bíceps", canal: "YouTube" },
    tecnica: [
      "Halteres ao lado do corpo, pegada neutra (palmas voltadas uma para a outra).",
      "Flexione os cotovelos elevando os halteres, mantendo a pegada neutra durante todo o movimento.",
      "Contraia no topo, sem girar o punho.",
      "Desça controlado até a extensão do braço."
    ],
    musculos: ["Braquiorradial", "Bíceps braquial", "Braquial anterior"],
    erros: ["Balançar o tronco/ombro para impulsionar", "Girar o punho durante o movimento", "Cotovelos se afastando do corpo"]
  },
  "agachamento-livre": {
    nome: "Agachamento Livre com Barra",
    grupo: "Quadríceps",
    video: { id: "kOgcM3NCYA0", titulo: "Tudo sobre Agachamento Livre com Barra — guia passo a passo", canal: "Treino Mestre" },
    tecnica: [
      "Barra apoiada no trapézio, pés na largura dos ombros, ponta dos pés levemente para fora.",
      "Desça flexionando quadril e joelho ao mesmo tempo, mantendo o peito erguido e a coluna neutra.",
      "Desça até no mínimo 90° de flexão de joelho (ou mais, conforme mobilidade).",
      "Suba empurrando o chão com os pés, estendendo quadril e joelho juntos."
    ],
    musculos: ["Quadríceps", "Glúteo", "Isquiotibiais (estabilização)", "Core"],
    erros: ["Joelhos colapsando para dentro", "Arredondar a lombar na descida", "Calcanhar levantando do chão"]
  },
  "leg-press": {
    nome: "Leg Press 45°",
    grupo: "Quadríceps",
    video: { id: "78mCZPObzug", titulo: "Leg Press 45° — a melhor posição dos pés", canal: "Fisiculturismo.com" },
    tecnica: [
      "Pés na plataforma na largura dos ombros, lombar apoiada no encosto.",
      "Destrave e desça controlado até formar ~90° (ou o quanto a mobilidade permitir) sem tirar a lombar do banco.",
      "Empurre a plataforma de volta sem travar totalmente os joelhos no topo.",
      "Mantenha os joelhos alinhados com os pés durante todo o movimento."
    ],
    musculos: ["Quadríceps", "Glúteo", "Isquiotibiais (secundário)"],
    erros: ["Descer demais e tirar a lombar do encosto", "Travar os joelhos com força no topo", "Pés muito baixos na plataforma (sobrecarrega o joelho)"]
  },
  "cadeira-extensora": {
    nome: "Cadeira Extensora",
    grupo: "Quadríceps",
    video: { id: "el3oHblB5DM", titulo: "Como fazer Cadeira Extensora", canal: "Leandro Twin" },
    tecnica: [
      "Costas apoiadas no encosto, joelhos alinhados com o eixo da máquina.",
      "Estenda os joelhos elevando o peso, sem tirar as costas do encosto.",
      "Pausa breve no topo contraindo o quadríceps.",
      "Desça controlado, sem deixar o peso 'bater' na pilha."
    ],
    musculos: ["Quadríceps"],
    erros: ["Usar impulso do tronco", "Descer o peso rápido demais", "Amplitude incompleta"]
  },
  "hack-squat": {
    nome: "Agachamento no Hack (Hack Squat)",
    grupo: "Quadríceps",
    video: { id: "gEYYCvNI6hI", titulo: "Como fazer o Agachamento Hack — técnica correta", canal: "JFIT Training" },
    tecnica: [
      "Ombros e costas apoiados no encosto, pés na largura dos ombros um pouco à frente do quadril.",
      "Desça controlado flexionando os joelhos até ~90°, mantendo os joelhos alinhados com os pés.",
      "Suba empurrando pelos calcanhares e meio do pé.",
      "Evite travar totalmente os joelhos no topo."
    ],
    musculos: ["Quadríceps", "Glúteo"],
    erros: ["Deixar os joelhos colapsarem para dentro", "Descer além da mobilidade confortável", "Tirar os calcanhares da plataforma"]
  },
  "stiff-barra": {
    nome: "Stiff com Barra (Levantamento Terra Romeno)",
    grupo: "Posterior de Coxa",
    video: { id: "Xgql23RkpBk", titulo: "Stiff barra - execução exercício", canal: "YouTube" },
    tecnica: [
      "Barra à frente das coxas, pés na largura do quadril, leve flexão de joelho fixa.",
      "Empurre o quadril para trás (dobradiça de quadril), descendo a barra rente às pernas.",
      "Desça até sentir alongamento forte no posterior de coxa, mantendo a coluna neutra.",
      "Suba estendendo o quadril, contraindo glúteo e posterior de coxa."
    ],
    musculos: ["Isquiotibiais (posterior de coxa)", "Glúteo", "Eretores da espinha"],
    erros: ["Arredondar a coluna durante a descida", "Flexionar demais o joelho (vira agachamento)", "Afastar a barra do corpo"]
  },
  "stiff-halteres": {
    nome: "Stiff com Halteres",
    grupo: "Posterior de Coxa",
    video: { id: "601YoPL6y6E", titulo: "Stiff com Halteres", canal: "Treino Mestre" },
    tecnica: [
      "Halteres à frente das coxas, pés na largura do quadril, leve flexão de joelho fixa.",
      "Empurre o quadril para trás, descendo os halteres rente às pernas.",
      "Desça até sentir alongamento forte no posterior de coxa, coluna neutra.",
      "Suba estendendo o quadril, contraindo glúteo e posterior de coxa."
    ],
    musculos: ["Isquiotibiais (posterior de coxa)", "Glúteo", "Eretores da espinha"],
    erros: ["Arredondar a coluna", "Afastar os halteres do corpo", "Flexionar demais o joelho"]
  },
  "cadeira-flexora": {
    nome: "Cadeira Flexora (Mesa Flexora)",
    grupo: "Posterior de Coxa",
    video: { id: "uv3urTpBku0", titulo: "Como executar mesa flexora e cadeira flexora corretamente", canal: "Prof. Felipe Augusto" },
    tecnica: [
      "Ajuste o apoio para que o eixo do joelho fique alinhado ao eixo da máquina.",
      "Flexione os joelhos trazendo o peso em direção aos glúteos.",
      "Pausa breve contraindo o posterior de coxa.",
      "Retorne controlado, sem deixar o peso 'bater' na pilha."
    ],
    musculos: ["Isquiotibiais (posterior de coxa)"],
    erros: ["Levantar o quadril durante o movimento", "Usar impulso em vez de controle", "Amplitude incompleta"]
  },
  "hip-thrust": {
    nome: "Hip Thrust com Barra",
    grupo: "Glúteo",
    video: { id: "3mnHo-F-U4Q", titulo: "Hip Thrust com Barra — correções e execução segura", canal: "Prof. Felipe Augusto" },
    tecnica: [
      "Costas apoiadas no banco (altura da escápula), barra sobre o quadril (use almofada de proteção).",
      "Pés apoiados no chão, joelhos a 90° no topo do movimento.",
      "Empurre o quadril para cima, contraindo forte o glúteo, sem hiperestender a lombar.",
      "Desça controlado até quase tocar o chão com o quadril, sem soltar a tensão do glúteo."
    ],
    musculos: ["Glúteo máximo", "Isquiotibiais (secundário)"],
    erros: ["Hiperestender a lombar no topo em vez de usar o glúteo", "Pés muito longe ou muito perto do corpo", "Amplitude incompleta"]
  },
  "cadeira-abdutora": {
    nome: "Cadeira Abdutora (Abdução de Quadril)",
    grupo: "Glúteo",
    video: { id: "50qHGus1TZk", titulo: "Cadeira Abdutora: Como fazer e Postura correta", canal: "YouTube" },
    tecnica: [
      "Sentado, costas apoiadas, joelhos alinhados com o eixo da máquina.",
      "Empurre as pernas para fora (abertura), contraindo o glúteo médio.",
      "Pausa breve na abertura máxima confortável.",
      "Retorne controlado, sem deixar o peso 'bater' na pilha."
    ],
    musculos: ["Glúteo médio", "Glúteo mínimo"],
    erros: ["Usar impulso do tronco para 'jogar' as pernas", "Amplitude exagerada forçando o quadril", "Movimento rápido demais sem controle"]
  },
  "afundo-bulgaro": {
    nome: "Afundo Búlgaro (Bulgarian Split Squat)",
    grupo: "Glúteo / Quadríceps",
    video: { id: "8ni_78TuNqQ", titulo: "COMO FAZER: Bulgarian Split Squat | Agachamento Búlgaro", canal: "YouTube" },
    tecnica: [
      "Pé de trás apoiado em um banco, pé da frente à frente do corpo, tronco ereto.",
      "Desça flexionando o joelho da frente até ~90°, joelho de trás quase tocando o chão.",
      "Mantenha o peso concentrado no calcanhar/meio do pé da frente.",
      "Suba empurrando pelo pé da frente, contraindo glúteo e quadríceps."
    ],
    musculos: ["Glúteo", "Quadríceps", "Isquiotibiais (estabilização)"],
    erros: ["Joelho da frente ultrapassando muito a ponta do pé de forma instável", "Perder o equilíbrio por pé de trás mal posicionado", "Tronco caindo muito à frente"]
  },
  "panturrilha-em-pe": {
    nome: "Panturrilha em Pé",
    grupo: "Panturrilha",
    video: { id: "ybjCv9Zek6I", titulo: "Como fazer Panturrilha em Pé no Smith corretamente", canal: "Treino Mestre" },
    tecnica: [
      "Ponta dos pés na plataforma, calcanhares livres para descer.",
      "Desça os calcanhares o máximo possível, sentindo alongamento na panturrilha.",
      "Suba na ponta dos pés o máximo possível, contraindo forte no topo.",
      "Movimento controlado, sem 'quicar' na descida."
    ],
    musculos: ["Gastrocnêmio (panturrilha)"],
    erros: ["Amplitude curta demais", "Movimento rápido e sem controle", "Joelhos travados com força excessiva"]
  },
  "panturrilha-sentada": {
    nome: "Panturrilha Sentada",
    grupo: "Panturrilha",
    video: { id: "qpVKOlniMXo", titulo: "Panturrilha Sentada na Máquina — execução correta", canal: "Condicionamento Funcional" },
    tecnica: [
      "Sentado, joelhos sob o apoio, ponta dos pés na plataforma.",
      "Desça os calcanhares o máximo possível, alongando a panturrilha.",
      "Suba na ponta dos pés, contraindo forte no topo.",
      "Movimento controlado em toda a amplitude."
    ],
    musculos: ["Sóleo (panturrilha)"],
    erros: ["Amplitude curta", "Movimento com impulso", "Não pausar na contração máxima"]
  }
};

/* ============================================================
   ESTRUTURA DOS TREINOS — GABRIEL E BEATRIZ
   series: número de séries (varia por fase — ver FASES abaixo)
   ============================================================ */

const FASES = {
  adaptacao: { label: "Adaptação (semanas 1-2)", series: 2 },
  progressao: { label: "Progressão (semana 3 em diante)", series: 3 }
};

const TREINOS = {
  gabriel: {
    nome: "Gabriel",
    cor: "#2563eb",
    dias: {
      push: {
        titulo: "Push",
        subtitulo: "Peito + Ombro anterior + Tríceps",
        exercicios: [
          { slug: "supino-reto-barra", reps: "8-12", descanso: "90s" },
          { slug: "supino-inclinado-halteres", reps: "10-12", descanso: "90s" },
          { slug: "crucifixo-peckdeck", reps: "12-15", descanso: "60s" },
          { slug: "crossover-cabo", reps: "12-15", descanso: "60s" },
          { slug: "elevacao-frontal", reps: "12-15", descanso: "60s" },
          { slug: "triceps-corda", reps: "10-12", descanso: "60s" },
          { slug: "triceps-testa", reps: "10-12", descanso: "60s" },
          { slug: "triceps-mergulho", reps: "10-12", descanso: "60s" }
        ]
      },
      legs: {
        titulo: "Pernas",
        subtitulo: "Perna completa",
        exercicios: [
          { slug: "agachamento-livre", reps: "8-12", descanso: "120s" },
          { slug: "leg-press", reps: "10-12", descanso: "90s" },
          { slug: "cadeira-extensora", reps: "12-15", descanso: "60s" },
          { slug: "stiff-barra", reps: "8-12", descanso: "90s" },
          { slug: "cadeira-flexora", reps: "10-12", descanso: "60s" },
          { slug: "hip-thrust", reps: "10-12", descanso: "90s" },
          { slug: "panturrilha-em-pe", reps: "15-20", descanso: "45s" },
          { slug: "panturrilha-sentada", reps: "15-20", descanso: "45s" }
        ]
      },
      pull: {
        titulo: "Pull",
        subtitulo: "Costas + Lombar + Deltoide posterior/lateral + Bíceps",
        exercicios: [
          { slug: "puxada-frente", reps: "8-12", descanso: "90s" },
          { slug: "remada-curvada-barra", reps: "8-12", descanso: "90s" },
          { slug: "remada-unilateral-halter", reps: "10-12", descanso: "60s" },
          { slug: "remada-cavalinho", reps: "10-12", descanso: "90s" },
          { slug: "extensao-lombar", reps: "12-15", descanso: "60s" },
          { slug: "elevacao-lateral", reps: "12-15", descanso: "60s" },
          { slug: "face-pull", reps: "12-15", descanso: "60s" },
          { slug: "rosca-direta", reps: "10-12", descanso: "60s" }
        ]
      }
    }
  },
  beatriz: {
    nome: "Beatriz",
    cor: "#db2777",
    dias: {
      push: {
        titulo: "Push",
        subtitulo: "Peito + Ombro anterior + Tríceps",
        exercicios: [
          { slug: "supino-reto-barra", reps: "12-15", descanso: "60-90s", nota: "halteres em vez de barra" },
          { slug: "crucifixo-peckdeck", reps: "12-15", descanso: "60s" },
          { slug: "crossover-cabo", reps: "12-15", descanso: "60s" },
          { slug: "elevacao-frontal", reps: "12-15", descanso: "60s" },
          { slug: "triceps-corda", reps: "12-15", descanso: "60s" },
          { slug: "triceps-mergulho", reps: "12-15", descanso: "60s" }
        ],
        finalizador: "15 min de cardio leve a moderado (esteira, bike ou elíptico)"
      },
      legs: {
        titulo: "Pernas",
        subtitulo: "Perna completa — foco em glúteo",
        exercicios: [
          { slug: "agachamento-livre", reps: "10-12", descanso: "90-120s", nota: "pode usar hack squat como alternativa" },
          { slug: "cadeira-extensora", reps: "12-15", descanso: "60s" },
          { slug: "stiff-halteres", reps: "12-15", descanso: "90s" },
          { slug: "cadeira-flexora", reps: "12-15", descanso: "60s" },
          { slug: "hip-thrust", reps: "10-12", descanso: "90s", destaque: true },
          { slug: "cadeira-abdutora", reps: "15-20", descanso: "45s", destaque: true },
          { slug: "afundo-bulgaro", reps: "10-12 cada perna", descanso: "60-90s", destaque: true },
          { slug: "panturrilha-em-pe", reps: "15-20", descanso: "45s" },
          { slug: "panturrilha-sentada", reps: "15-20", descanso: "45s" }
        ],
        finalizador: "15-20 min de cardio/circuito metabólico"
      },
      pull: {
        titulo: "Pull",
        subtitulo: "Costas + Lombar + Deltoide posterior/lateral + Bíceps",
        exercicios: [
          { slug: "puxada-frente", reps: "12-15", descanso: "60-90s" },
          { slug: "remada-baixa-cabo", reps: "12-15", descanso: "60s" },
          { slug: "remada-unilateral-halter", reps: "12-15", descanso: "60s" },
          { slug: "extensao-lombar", reps: "12-15", descanso: "60s" },
          { slug: "elevacao-lateral", reps: "12-15", descanso: "60s" },
          { slug: "face-pull", reps: "12-15", descanso: "60s" },
          { slug: "rosca-martelo", reps: "12-15", descanso: "60s" }
        ],
        finalizador: "15-20 min de cardio leve a moderado"
      }
    }
  }
};

/* ============================================================
   CRONOGRAMA SEMANAL (alinhado com a aplicação de tirzepatida na quarta)
   ============================================================ */

const SEMANA = [
  { dia: "Segunda", treino: "legs" },
  { dia: "Terça", treino: "push" },
  { dia: "Quarta", treino: "pull", nota: "Dia da aplicação — treino mais tranquilo de propósito" },
  { dia: "Quinta", treino: "descanso", nota: "Descanso ativo: caminhada leve 30-40min + mobilidade" },
  { dia: "Sexta", treino: "push" },
  { dia: "Sábado", treino: "legs", nota: "Melhor dia de energia — treino-chave para o objetivo da Beatriz" },
  { dia: "Domingo", treino: "pull" }
];
