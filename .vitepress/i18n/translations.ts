export interface SiteTranslations {
  hero: {
    name: string
    simple: string
    fast: string
    safe: string
    compiled: string
    sub: string
    links: {
      stillFast: string
      faq: string
      docs: string
      changelog: string
      builtWith: string
      rfcs: string
    }
  }
  features: {
    eyebrow: string
    title: string
    sub: string
    items: Array<{ title: string; desc: string }>
  }
  install: {
    heading: string
    sub: string
    tabLinux: string
    tabWindows: string
    note: string
    gettingStarted: string
  }
  news: {
    title: string
  }
  testimonials: {
    title: string
  }
  sponsors: {
    title: string
    becomeLink: string
  }
  footer: {
    tagline: string
    resources: string
    community: string
    support: string
    links: {
      documentation: string
      stdlib: string
      examples: string
      tutorials: string
      playground: string
      forum: string
    }
  }
  docs: {
    sidebar: {
      gettingStarted: string
      basics: string
      controlFlow: string
      structsTypes: string
      advanced: string
      items: {
        introduction: string
        installation: string
        helloWorld: string
        variables: string
        functions: string
        primitiveTypes: string
        strings: string
        arrays: string
        maps: string
        ifElse: string
        match: string
        forLoops: string
        structs: string
        enums: string
        interfaces: string
        concurrency: string
        errorHandling: string
        json: string
        orm: string
        testing: string
      }
    }
  }
}

const en: SiteTranslations = {
  hero: {
    name: 'The V Programming Language',
    simple: 'Simple.',
    fast: 'Fast.',
    safe: 'Safe.',
    compiled: 'Compiled.',
    sub: 'For developing maintainable software.',
    links: {
      stillFast: 'Is V still fast?',
      faq: 'FAQ',
      docs: 'Docs',
      changelog: 'Changelog',
      builtWith: 'Built with V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Capabilities',
    title: 'Why V?',
    sub: 'A modern language with a tiny footprint and big ambitions.',
    items: [
      {
        title: 'Fast Compilation',
        desc: 'V compiles between ~110k and 1.2 million lines of code per second per CPU core. Compiles itself in 0.15–0.6 seconds.',
      },
      {
        title: 'Safety',
        desc: 'No null, no global variables, no undefined behaviour, immutability by default. V prevents entire classes of bugs at compile time.',
      },
      {
        title: 'Performance',
        desc: 'As fast as C. V compiles to human-readable C and can use any C compiler as a backend including GCC, Clang, and MSVC.',
      },
      {
        title: 'Simple Language',
        desc: 'Learn the entire language over a weekend. If you know Go, you already know ~80% of V. Simple, readable, maintainable code.',
      },
      {
        title: 'Zero Dependencies',
        desc: 'The V compiler is only 400 KB with zero dependencies. No LLVM, no libstdc++. Install in seconds from anywhere.',
      },
      {
        title: 'C/C++ Translation',
        desc: 'Translate entire C/C++ projects to V automatically. The C2V tool can even compile the DOOM source code to V.',
      },
      {
        title: 'Hot Code Reloading',
        desc: 'Change code while the program is running, without restarting it. No lost state. Perfect for long-running GUI apps.',
      },
      {
        title: 'Built-in ORM',
        desc: 'A built-in ORM with a clean SQL-like syntax. Works with SQLite, PostgreSQL, MySQL, and MSSQL out of the box.',
      },
      {
        title: 'Built-in Web Framework',
        desc: '`veb` is a fast, simple, and easy-to-use web framework included in the standard library. No external packages needed.',
      },
    ],
  },
  install: {
    heading: 'Install V from source',
    sub: 'This will take a couple of seconds.',
    tabLinux: 'Linux & Mac',
    tabWindows: 'Windows',
    note: 'Or download pre-built binaries for Windows, macOS, and Linux.',
    gettingStarted: 'Getting Started →',
  },
  news: {
    title: 'Latest News',
  },
  testimonials: {
    title: 'What developers say about V',
  },
  sponsors: {
    title: 'Partners & Sponsors',
    becomeLink: 'Become a sponsor via GitHub Sponsors',
  },
  footer: {
    tagline: 'Simple, fast, safe, compiled.',
    resources: 'Resources',
    community: 'Community',
    support: 'Support the Project',
    links: {
      documentation: 'Documentation',
      stdlib: 'Stdlib Docs',
      examples: 'Examples',
      tutorials: 'Tutorials',
      playground: 'Playground',
      forum: 'Forum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Introduction',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Variables',
        functions: 'Functions',
        primitiveTypes: 'Primitive Types',
        strings: 'Strings',
        arrays: 'Arrays',
        maps: 'Maps',
        ifElse: 'If / Else',
        match: 'Match',
        forLoops: 'For Loops',
        structs: 'Structs',
        enums: 'Enums',
        interfaces: 'Interfaces',
        concurrency: 'Concurrency',
        errorHandling: 'Error Handling',
        json: 'JSON',
        orm: 'ORM',
        testing: 'Testing',
      },
    },
  },
}

const ar: SiteTranslations = {
  hero: {
    name: 'لغة البرمجة فيي (V)',
    simple: 'سهلة.',
    fast: 'سريعة.',
    safe: 'آمنة.',
    compiled: 'مُجمَّعة.',
    sub: 'لتطوير برامج قابلة للصيانة.',
    links: {
      stillFast: 'هل V لا تزال سريعة؟',
      faq: 'أسئلة متداولة',
      docs: 'المرجع',
      changelog: 'سجل التغييرات',
      builtWith: 'مبني بـ V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'الإمكانيات',
    title: 'لماذا V؟',
    sub: 'لغة حديثة بحجم صغير وطموحات كبيرة.',
    items: [
      {
        title: 'تجميع سريع',
        desc: 'تُجمِّع V ما بين ~110 ألف و1.2 مليون سطر كود في الثانية لكل نواة معالج. تُجمِّع نفسها في 0.15–0.6 ثانية.',
      },
      {
        title: 'أمن',
        desc: 'لا قيم فارغة، لا متغيرات عامة، لا سلوك غير محدد، وعدم قابلية التغيير بشكل افتراضي. تمنع V فئات كاملة من الأخطاء في وقت التجميع.',
      },
      {
        title: 'أداء',
        desc: 'بسرعة لغة C. تُجمِّع V إلى كود C مقروء ويمكنها استخدام أي مُجمِّع C كخلفية بما في ذلك GCC وClang وMSVC.',
      },
      {
        title: 'لغة بسيطة',
        desc: 'يمكنك تعلم اللغة بأكملها في عطلة نهاية أسبوع. إذا كنت تعرف Go، فأنت تعرف بالفعل ~80٪ من V. كود بسيط وقابل للقراءة والصيانة.',
      },
      {
        title: 'مُجمِّع 400 كيلوبايت بدون تبعيات',
        desc: 'مُجمِّع V يبلغ حجمه 400 كيلوبايت فقط بدون أي تبعيات. لا LLVM، لا libstdc++. ثبِّته في ثوانٍ من أي مكان.',
      },
      {
        title: 'ترجمة C/C++',
        desc: 'ترجمة مشاريع C/C++ بأكملها إلى V تلقائيًا. يمكن لأداة C2V حتى تجميع كود مصدر DOOM إلى V.',
      },
      {
        title: 'إعادة تحميل الكود الحي',
        desc: 'تغيير الكود أثناء تشغيل البرنامج، دون إعادة تشغيله. لا فقدان للحالة. مثالي لتطبيقات GUI التي تعمل لفترات طويلة.',
      },
      {
        title: 'ORM مدمج',
        desc: 'ORM مدمج بصياغة نظيفة تشبه SQL. يعمل مع SQLite وPostgreSQL وMySQL وMSSQL بدون إعداد إضافي.',
      },
      {
        title: 'إطار ويب مدمج',
        desc: '`veb` هو إطار ويب سريع وبسيط وسهل الاستخدام مضمَّن في المكتبة القياسية. لا حاجة لحزم خارجية.',
      },
    ],
  },
  install: {
    heading: 'تثبيت V من المصدر',
    sub: 'هذا سيستغرق بضع ثوانٍ.',
    tabLinux: 'Linux و Mac',
    tabWindows: 'Windows',
    note: 'أو قم بتنزيل الملفات الثنائية المُجمَّعة مسبقًا لأنظمة Windows وmacOS وLinux.',
    gettingStarted: 'ابدأ الآن ←',
  },
  news: {
    title: 'آخر الأخبار',
  },
  testimonials: {
    title: 'ما يقوله المطورون عن V',
  },
  sponsors: {
    title: 'الشركاء والرعاة',
    becomeLink: 'كن راعيًا عبر GitHub Sponsors',
  },
  footer: {
    tagline: 'سهلة، سريعة، آمنة، مُجمَّعة.',
    resources: 'الموارد',
    community: 'المجتمع',
    support: 'ادعم المشروع',
    links: {
      documentation: 'المرجع',
      stdlib: 'مرجع المكتبات',
      examples: 'أمثلة',
      tutorials: 'دروس تعليمية',
      playground: 'Playground',
      forum: 'المنتدى',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'مقدمة',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'متغيرات',
        functions: 'وظائف',
        primitiveTypes: 'أنواع أساسية',
        strings: 'سلاسل نصية',
        arrays: 'مصفوفات',
        maps: 'خرائط',
        ifElse: 'if الشرطية',
        match: 'مفاتيح',
        forLoops: 'الحلقات الدورانية',
        structs: 'الهياكل',
        enums: 'التعدادات',
        interfaces: 'واجهات',
        concurrency: 'التزامن',
        errorHandling: 'أنواع الخيارات ومعالجة الأخطاء',
        json: 'فك تشفير (json)',
        orm: 'ORM',
        testing: 'تجريب',
      },
    },
  },
}

const ms: SiteTranslations = {
  hero: {
    name: 'Bahasa Pemrograman V',
    simple: 'Mudah.',
    fast: 'Pantas.',
    safe: 'Selamat.',
    compiled: 'Dikompilasi.',
    sub: 'Untuk membangunkan perisian yang mudah diselenggara.',
    links: {
      stillFast: 'Adakah V masih pantas?',
      faq: 'FAQ',
      docs: 'Dokumentasi',
      changelog: 'Changelog',
      builtWith: 'Dibina dengan V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Keupayaan',
    title: 'Mengapa V?',
    sub: 'Bahasa moden dengan jejak kecil dan cita-cita besar.',
    items: [
      {
        title: 'Kompilasi Pantas',
        desc: 'V mengkompilasi antara ~110k dan 1.2 juta baris kod sesaat per teras CPU. Mengkompilasi dirinya dalam 0.15–0.6 saat.',
      },
      {
        title: 'Keselamatan',
        desc: 'Tiada null, tiada pemboleh ubah global, tiada tingkah laku tidak ditentukan, ketaktubahan secara lalai. V mencegah seluruh kelas pepijat pada masa kompilasi.',
      },
      {
        title: 'Prestasi',
        desc: 'Selaras dengan C. V dikompilasi ke C yang boleh dibaca manusia dan boleh menggunakan mana-mana pengkompil C sebagai backend termasuk GCC, Clang, dan MSVC.',
      },
      {
        title: 'Bahasa Mudah',
        desc: 'Pelajari seluruh bahasa dalam hujung minggu. Jika anda tahu Go, anda sudah tahu ~80% V. Kod yang mudah, boleh dibaca, dan boleh diselenggara.',
      },
      {
        title: 'Tiada Kebergantungan',
        desc: 'Pengkompil V hanya 400 KB dengan tiada kebergantungan. Tiada LLVM, tiada libstdc++. Pasang dalam saat dari mana-mana sahaja.',
      },
      {
        title: 'Terjemahan C/C++',
        desc: 'Terjemahkan seluruh projek C/C++ ke V secara automatik. Alat C2V boleh mengkompilasi kod sumber DOOM ke V.',
      },
      {
        title: 'Muat Semula Kod Langsung',
        desc: 'Ubah kod semasa program berjalan, tanpa memulakan semula. Tiada kehilangan keadaan. Sesuai untuk aplikasi GUI yang berjalan lama.',
      },
      {
        title: 'ORM Terbina',
        desc: 'ORM terbina dengan sintaks seperti SQL yang bersih. Berfungsi dengan SQLite, PostgreSQL, MySQL, dan MSSQL dari kotak.',
      },
      {
        title: 'Rangka Kerja Web Terbina',
        desc: '`veb` ialah rangka kerja web yang pantas, mudah, dan senang digunakan yang disertakan dalam pustaka standard. Tiada pakej luaran diperlukan.',
      },
    ],
  },
  install: {
    heading: 'Pasang V daripada sumber',
    sub: 'Ini akan mengambil masa beberapa saat.',
    tabLinux: 'Linux & Mac',
    tabWindows: 'Windows',
    note: 'Atau muat turun binari pra-bina untuk Windows, macOS, dan Linux.',
    gettingStarted: 'Mula →',
  },
  news: {
    title: 'Berita Terkini',
  },
  testimonials: {
    title: 'Apa yang pembangun kata tentang V',
  },
  sponsors: {
    title: 'Rakan Kongsi & Penaja',
    becomeLink: 'Jadi penaja melalui GitHub Sponsors',
  },
  footer: {
    tagline: 'Mudah, pantas, selamat, dikompilasi.',
    resources: 'Sumber',
    community: 'Komuniti',
    support: 'Sokong Projek',
    links: {
      documentation: 'Dokumentasi',
      stdlib: 'Docs Stdlib',
      examples: 'Contoh',
      tutorials: 'Tutorial',
      playground: 'Playground',
      forum: 'Forum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Perkenalan',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Variabel',
        functions: 'Fungsi',
        primitiveTypes: 'Tipe Dasar',
        strings: 'Strings',
        arrays: 'Arrays',
        maps: 'Maps',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'For loop',
        structs: 'Structs',
        enums: 'Enums',
        interfaces: 'Interfaces',
        concurrency: 'Concurrency',
        errorHandling: 'Option types & error handling',
        json: 'Decoding JSON',
        orm: 'ORM',
        testing: 'Testing',
      },
    },
  },
}

const bs: SiteTranslations = {
  hero: {
    name: 'V programski jezik',
    simple: 'Jednostavan.',
    fast: 'Brz.',
    safe: 'Siguran.',
    compiled: 'Kompajliran.',
    sub: 'Za kreiranje održivog softvera.',
    links: {
      stillFast: 'Je li V još uvijek brz?',
      faq: 'FAQ',
      docs: 'Dokumentacija',
      changelog: 'Changelog',
      builtWith: 'Kreirano s V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Mogućnosti',
    title: 'Zašto V?',
    sub: 'Moderni jezik s malim otiskom i velikim ambicijama.',
    items: [
      {
        title: 'Brza kompilacija',
        desc: 'V kompajlira između ~110k i 1.2 miliona linija koda u sekundi po jezgri procesora. Kompajlira sebe za 0.15–0.6 sekundi.',
      },
      {
        title: 'Sigurnost',
        desc: 'Bez null, bez globalnih varijabli, bez nedefiniranog ponašanja, nepromjenjivost po defaultu. V sprječava cijele klase grešaka u toku kompilacije.',
      },
      {
        title: 'Performanse',
        desc: 'Brzinom kao C. V kompajlira u čitljivi C i može koristiti bilo koji C kompajler kao backend uključujući GCC, Clang i MSVC.',
      },
      {
        title: 'Jednostavan jezik',
        desc: 'Naučite cijeli jezik za vikend. Ako znate Go, već znate ~80% V-a. Jednostavan, čitljiv, održivi kod.',
      },
      {
        title: 'Kompajler 400 KB bez ovisnosti',
        desc: 'V kompajler je samo 400 KB sa nula ovisnosti. Nema LLVM, nema libstdc++. Instalirajte za sekunde s bilo gdje.',
      },
      {
        title: 'C/C++ prijevod',
        desc: 'Automatski prevedite cijele C/C++ projekte u V. C2V alat može čak kompajlirati DOOM izvorni kod u V.',
      },
      {
        title: 'Hot code reloading',
        desc: 'Mijenjajte kod dok program radi, bez ponovnog pokretanja. Bez gubitka stanja. Savršeno za dugotrajne GUI aplikacije.',
      },
      {
        title: 'Ugrađeni ORM',
        desc: 'Ugrađeni ORM s čistom SQL-sličnom sintaksom. Radi s SQLite, PostgreSQL, MySQL i MSSQL odmah iz kutije.',
      },
      {
        title: 'Ugrađeni web framework',
        desc: '`veb` je brz, jednostavan i lagan web framework uključen u standardnu biblioteku. Nema potrebe za vanjskim paketima.',
      },
    ],
  },
  install: {
    heading: 'Instaliraj V iz izvornog koda',
    sub: 'Ovo će trajati par sekundi.',
    tabLinux: 'Linux i Mac',
    tabWindows: 'Windows',
    note: 'Ili preuzmi pretkompajlirane binarne verzije za Windows, macOS i Linux.',
    gettingStarted: 'Početak →',
  },
  news: {
    title: 'Najnovije vijesti',
  },
  testimonials: {
    title: 'Što programeri kažu o V',
  },
  sponsors: {
    title: 'Partneri i sponzori',
    becomeLink: 'Postanite sponzor putem GitHub Sponsors',
  },
  footer: {
    tagline: 'Jednostavan, brz, siguran, kompajliran.',
    resources: 'Resursi',
    community: 'Zajednica',
    support: 'Podržite projekt',
    links: {
      documentation: 'Dokumentacija',
      stdlib: 'Stdlib Docs',
      examples: 'Primjeri',
      tutorials: 'Tutorijali',
      playground: 'Playground',
      forum: 'Forum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Uvod',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Varijable',
        functions: 'Funkcije',
        primitiveTypes: 'Jednostavni tipovi',
        strings: 'Stringovi',
        arrays: 'Nizovi',
        maps: 'Mape',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'For petlja',
        structs: 'Struktovi',
        enums: 'Enumi',
        interfaces: 'Interfejsi',
        concurrency: 'Konkurencija',
        errorHandling: 'Vrste opcija i rukovanje greškama',
        json: 'Dekodiranje JSON-a',
        orm: 'ORM',
        testing: 'Testiranje',
      },
    },
  },
}

const ca: SiteTranslations = {
  hero: {
    name: 'El llenguatge de programació V',
    simple: 'Senzill.',
    fast: 'Ràpid.',
    safe: 'Segur.',
    compiled: 'Compilat.',
    sub: 'Per desenvolupar programari mantenible.',
    links: {
      stillFast: 'V encara és ràpid?',
      faq: 'FAQ',
      docs: 'Documentació',
      changelog: 'Changelog',
      builtWith: 'Creat amb V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Capacitats',
    title: 'Per què V?',
    sub: 'Un llenguatge modern amb una petita empremta i grans ambicions.',
    items: [
      {
        title: 'Compilació ràpida',
        desc: 'V compila entre ~110k i 1.2 milions de línies de codi per segon per nucli de CPU. Es compila a si mateix en 0.15–0.6 segons.',
      },
      {
        title: 'Seguretat',
        desc: 'Sense null, sense variables globals, sense comportament indefinit, immutabilitat per defecte. V prevé classes senceres de bugs en temps de compilació.',
      },
      {
        title: 'Rendiment',
        desc: 'Tan ràpid com C. V compila a C llegible per humans i pot usar qualsevol compilador C com a backend, incloent GCC, Clang i MSVC.',
      },
      {
        title: 'Llenguatge senzill',
        desc: "Aprèn tot el llenguatge en un cap de setmana. Si coneixes Go, ja coneixes ~80% de V. Codi senzill, llegible i mantenible.",
      },
      {
        title: 'Compilador de 400 KB sense dependències',
        desc: 'El compilador de V té només 400 KB sense cap dependència. Sense LLVM, sense libstdc++. Instal·la en segons des de qualsevol lloc.',
      },
      {
        title: 'Traducció C/C++',
        desc: "Tradueix projectes sencers de C/C++ a V automàticament. L'eina C2V pot fins i tot compilar el codi font de DOOM a V.",
      },
      {
        title: 'Recàrrega de codi en calent',
        desc: 'Canvia el codi mentre el programa s\'executa, sense reiniciar-lo. Sense pèrdua d\'estat. Perfecte per a aplicacions GUI de llarga durada.',
      },
      {
        title: 'ORM integrat',
        desc: 'Un ORM integrat amb una sintaxi neta semblant a SQL. Funciona amb SQLite, PostgreSQL, MySQL i MSSQL de sèrie.',
      },
      {
        title: 'Framework web integrat',
        desc: '`veb` és un framework web ràpid, senzill i fàcil d\'usar inclòs a la biblioteca estàndard. No calen paquets externs.',
      },
    ],
  },
  install: {
    heading: 'Instal·la V des del codi font',
    sub: 'Això trigarà uns quants segons.',
    tabLinux: 'Linux i Mac',
    tabWindows: 'Windows',
    note: 'O descarrega binaris precompilats per a Windows, macOS i Linux.',
    gettingStarted: 'Primers passos →',
  },
  news: {
    title: 'Últimes notícies',
  },
  testimonials: {
    title: 'Què en diuen els desenvolupadors, de V',
  },
  sponsors: {
    title: 'Socis i patrocinadors',
    becomeLink: 'Converteix-te en patrocinador via GitHub Sponsors',
  },
  footer: {
    tagline: 'Senzill, ràpid, segur, compilat.',
    resources: 'Recursos',
    community: 'Comunitat',
    support: 'Dona suport al projecte',
    links: {
      documentation: 'Documentació',
      stdlib: 'Docs Stdlib',
      examples: 'Exemples',
      tutorials: 'Tutorials',
      playground: 'Playground',
      forum: 'Fòrum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Introducció',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Variables',
        functions: 'Funcions',
        primitiveTypes: 'Tipus bàsics',
        strings: 'Strings',
        arrays: 'Arrays',
        maps: 'Maps',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'Bucle for',
        structs: 'Structs',
        enums: 'Enums',
        interfaces: 'Interfícies',
        concurrency: 'Concurrència',
        errorHandling: "Tipus opcionals i control d'errors",
        json: 'Descodificació de JSON',
        orm: 'ORM',
        testing: 'Testing',
      },
    },
  },
}

const zh: SiteTranslations = {
  hero: {
    name: 'V 编程语言',
    simple: '简洁。',
    fast: '快速。',
    safe: '安全。',
    compiled: '编译型。',
    sub: '用于开发易于维护的软件。',
    links: {
      stillFast: 'V 还快吗？',
      faq: '常见问题',
      docs: '文档',
      changelog: '更新日志',
      builtWith: '用 V 构建',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: '特性',
    title: '为什么选择 V？',
    sub: '一门体积小、野心大的现代语言。',
    items: [
      {
        title: '快速编译',
        desc: 'V 每个 CPU 核心每秒可编译约 11 万至 120 万行代码，自身编译仅需 0.15–0.6 秒。',
      },
      {
        title: '安全',
        desc: '无 null、无全局变量、无未定义行为，默认不可变。V 在编译期即可防止整类 bug。',
      },
      {
        title: '性能',
        desc: '与 C 一样快速。V 编译为人类可读的 C 代码，并可使用任意 C 编译器作为后端，包括 GCC、Clang 和 MSVC。',
      },
      {
        title: '简洁语言',
        desc: '一个周末即可学完整门语言。懂 Go，就已掌握约 80% 的 V。代码简洁、可读、易维护。',
      },
      {
        title: '零依赖',
        desc: 'V 编译器仅 400 KB，无任何外部依赖。无需 LLVM，无需 libstdc++。随时随地秒速安装。',
      },
      {
        title: 'C/C++ 转写',
        desc: '自动将完整 C/C++ 项目转写为 V。C2V 工具甚至可以将 DOOM 源码编译为 V。',
      },
      {
        title: '热重载',
        desc: '在程序运行时修改代码，无需重启，不丢失状态。非常适合长时间运行的 GUI 应用。',
      },
      {
        title: '内置 ORM',
        desc: '内置 ORM，语法简洁，类似 SQL。开箱即用，支持 SQLite、PostgreSQL、MySQL 和 MSSQL。',
      },
      {
        title: '内置 Web 框架',
        desc: '`veb` 是标准库内置的快速、简单、易用的 Web 框架，无需任何外部包。',
      },
    ],
  },
  install: {
    heading: '从源码安装 V',
    sub: '这只需要几秒钟。',
    tabLinux: 'Linux 和 Mac',
    tabWindows: 'Windows',
    note: '或下载适用于 Windows、macOS 和 Linux 的预编译二进制文件。',
    gettingStarted: '快速入门 →',
  },
  news: {
    title: '最新动态',
  },
  testimonials: {
    title: '开发者对 V 的评价',
  },
  sponsors: {
    title: '合作伙伴与赞助商',
    becomeLink: '通过 GitHub Sponsors 成为赞助商',
  },
  footer: {
    tagline: '简洁、快速、安全、编译型。',
    resources: '资源',
    community: '社区',
    support: '支持本项目',
    links: {
      documentation: '文档',
      stdlib: '标准库文档',
      examples: '示例',
      tutorials: '教程',
      playground: 'Playground',
      forum: '论坛',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: '介绍',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: '变量',
        functions: '函数',
        primitiveTypes: '基本类型',
        strings: '字符串',
        arrays: '数组',
        maps: '集合',
        ifElse: 'If 语句',
        match: 'Switch 语句',
        forLoops: 'For 循环',
        structs: '结构体',
        enums: '枚举',
        interfaces: '接口',
        concurrency: '并发',
        errorHandling: 'Option 类型 & 错误处理',
        json: 'JSON 解析',
        orm: 'ORM',
        testing: '测试',
      },
    },
  },
}

const fr: SiteTranslations = {
  hero: {
    name: 'Le langage de programmation V',
    simple: 'Simple.',
    fast: 'Rapide.',
    safe: 'Sûr.',
    compiled: 'Compilé.',
    sub: 'Pour développer des logiciels maintenables.',
    links: {
      stillFast: 'V est-il encore rapide ?',
      faq: 'FAQ',
      docs: 'Documentation',
      changelog: 'Changelog',
      builtWith: 'Créé avec V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Capacités',
    title: 'Pourquoi V ?',
    sub: 'Un langage moderne avec une empreinte réduite et de grandes ambitions.',
    items: [
      {
        title: 'Compilation rapide',
        desc: 'V compile entre ~110k et 1,2 million de lignes de code par seconde par cœur de CPU. Il se compile lui-même en 0,15–0,6 secondes.',
      },
      {
        title: 'Sécurité',
        desc: "Pas de null, pas de variables globales, pas de comportement indéfini, immutabilité par défaut. V prévient des catégories entières de bugs à la compilation.",
      },
      {
        title: 'Performance',
        desc: 'Aussi rapide que C. V compile vers du C lisible par un humain et peut utiliser n\'importe quel compilateur C dont GCC, Clang et MSVC.',
      },
      {
        title: 'Langage simple',
        desc: 'Apprenez tout le langage en un week-end. Si vous connaissez Go, vous connaissez déjà ~80% de V. Code simple, lisible et maintenable.',
      },
      {
        title: 'Zéro dépendance',
        desc: 'Le compilateur V ne fait que 400 Ko sans aucune dépendance. Pas de LLVM, pas de libstdc++. Installation en quelques secondes depuis n\'importe où.',
      },
      {
        title: 'Traduction C/C++',
        desc: 'Traduisez des projets C/C++ entiers en V automatiquement. L\'outil C2V peut même compiler le code source de DOOM en V.',
      },
      {
        title: 'Rechargement de code à chaud',
        desc: 'Modifiez le code pendant que le programme tourne, sans le redémarrer. Aucun état perdu. Parfait pour les applications GUI longue durée.',
      },
      {
        title: 'ORM intégré',
        desc: 'Un ORM intégré avec une syntaxe claire de type SQL. Fonctionne avec SQLite, PostgreSQL, MySQL et MSSQL sans configuration.',
      },
      {
        title: 'Framework web intégré',
        desc: '`veb` est un framework web rapide, simple et facile à utiliser inclus dans la bibliothèque standard. Aucun paquet externe nécessaire.',
      },
    ],
  },
  install: {
    heading: 'Installer V depuis les sources',
    sub: 'Cela prendra quelques secondes.',
    tabLinux: 'Linux et Mac',
    tabWindows: 'Windows',
    note: 'Ou téléchargez les binaires pré-compilés pour Windows, macOS et Linux.',
    gettingStarted: 'Démarrer →',
  },
  news: {
    title: 'Dernières nouvelles',
  },
  testimonials: {
    title: 'Ce que les développeurs disent de V',
  },
  sponsors: {
    title: 'Partenaires & sponsors',
    becomeLink: 'Devenez sponsor via GitHub Sponsors',
  },
  footer: {
    tagline: 'Simple, rapide, sûr, compilé.',
    resources: 'Ressources',
    community: 'Communauté',
    support: 'Soutenir le projet',
    links: {
      documentation: 'Documentation',
      stdlib: 'Docs Stdlib',
      examples: 'Exemples',
      tutorials: 'Tutoriels',
      playground: 'Playground',
      forum: 'Forum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Introduction',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Variables',
        functions: 'Fonctions',
        primitiveTypes: 'Types de base',
        strings: 'Chaînes de caractères',
        arrays: 'Listes',
        maps: 'Maps',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'Boucle for',
        structs: 'Structures',
        enums: 'Énumérations',
        interfaces: 'Interfaces',
        concurrency: 'Parallélisme',
        errorHandling: "Types d'options et gestion des erreurs",
        json: 'Décodage de json',
        orm: 'ORM',
        testing: 'Tests',
      },
    },
  },
}

const de: SiteTranslations = {
  hero: {
    name: 'Die Programmiersprache V',
    simple: 'Einfach.',
    fast: 'Schnell.',
    safe: 'Sicher.',
    compiled: 'Kompiliert.',
    sub: 'Für die Entwicklung von wartungsfreundlicher Software.',
    links: {
      stillFast: 'Ist V noch schnell?',
      faq: 'FAQ',
      docs: 'Dokumentation',
      changelog: 'Changelog',
      builtWith: 'Mit V erstellt',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Fähigkeiten',
    title: 'Warum V?',
    sub: 'Eine moderne Sprache mit kleinem Speicherbedarf und großen Ambitionen.',
    items: [
      {
        title: 'Schnelle Kompilierung',
        desc: 'V kompiliert zwischen ~110k und 1,2 Millionen Codezeilen pro Sekunde und CPU-Kern. Kompiliert sich selbst in 0,15–0,6 Sekunden.',
      },
      {
        title: 'Sicherheit',
        desc: 'Kein null, keine globalen Variablen, kein undefiniertes Verhalten, standardmäßige Unveränderlichkeit. V verhindert ganze Klassen von Fehlern zur Kompilierzeit.',
      },
      {
        title: 'Leistung',
        desc: 'So schnell wie C. V kompiliert zu menschenlesbarem C und kann jeden C-Compiler als Backend verwenden, einschließlich GCC, Clang und MSVC.',
      },
      {
        title: 'Einfache Sprache',
        desc: 'Lerne die gesamte Sprache über ein Wochenende. Wenn du Go kennst, kennst du bereits ~80% von V. Einfacher, lesbarer, wartbarer Code.',
      },
      {
        title: '400 KB Compiler ohne Abhängigkeiten',
        desc: 'Der V Compiler ist nur 400 KB groß, ohne jegliche Abhängigkeiten. Kein LLVM, kein libstdc++. Innerhalb von Sekunden überall installierbar.',
      },
      {
        title: 'C/C++ Übersetzung',
        desc: 'Übersetze komplette C/C++-Projekte automatisch nach V. Das C2V-Werkzeug kann sogar den Quellcode von DOOM nach V kompilieren.',
      },
      {
        title: 'Hot Code Reloading',
        desc: 'Code während der Programmausführung ändern, ohne Neustart. Kein Zustandsverlust. Perfekt für langlaufende GUI-Anwendungen.',
      },
      {
        title: 'Eingebautes ORM',
        desc: 'Ein eingebautes ORM mit einer sauberen SQL-ähnlichen Syntax. Funktioniert out-of-the-box mit SQLite, PostgreSQL, MySQL und MSSQL.',
      },
      {
        title: 'Eingebautes Web-Framework',
        desc: '`veb` ist ein schnelles, einfaches und einfach zu nutzendes Web-Framework, das in der Standardbibliothek enthalten ist. Keine externen Pakete nötig.',
      },
    ],
  },
  install: {
    heading: 'V aus dem Quellkode installieren',
    sub: 'Das dauert nur ein paar Sekunden.',
    tabLinux: 'Linux und Mac',
    tabWindows: 'Windows',
    note: 'Oder lade vorkompilierte Binärdateien für Windows, macOS und Linux herunter.',
    gettingStarted: 'Erste Schritte →',
  },
  news: {
    title: 'Aktuelle Neuigkeiten',
  },
  testimonials: {
    title: 'Was Entwickler über V sagen',
  },
  sponsors: {
    title: 'Partner & Sponsoren',
    becomeLink: 'Werde Sponsor via GitHub Sponsors',
  },
  footer: {
    tagline: 'Einfach, schnell, sicher, kompiliert.',
    resources: 'Ressourcen',
    community: 'Community',
    support: 'Das Projekt unterstützen',
    links: {
      documentation: 'Dokumentation',
      stdlib: 'Stdlib Docs',
      examples: 'Beispiele',
      tutorials: 'Tutorials',
      playground: 'Playground',
      forum: 'Forum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Einführung',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Variablen',
        functions: 'Funktionen',
        primitiveTypes: 'Grundtypen',
        strings: 'Strings',
        arrays: 'Arrays',
        maps: 'Maps',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'For-Schleife',
        structs: 'Structs',
        enums: 'Enums',
        interfaces: 'Interfaces',
        concurrency: 'Parallelität',
        errorHandling: 'Optionstypen und Fehlerbehandlung',
        json: 'JSON dekodieren',
        orm: 'ORM',
        testing: 'Testen',
      },
    },
  },
}

const id: SiteTranslations = {
  hero: {
    name: 'Bahasa Pemrograman V',
    simple: 'Sederhana.',
    fast: 'Cepat.',
    safe: 'Aman.',
    compiled: 'Terkompilasi.',
    sub: 'Untuk mengembangkan perangkat lunak yang mudah dipelihara.',
    links: {
      stillFast: 'Apakah V masih cepat?',
      faq: 'FAQ',
      docs: 'Dokumentasi',
      changelog: 'Changelog',
      builtWith: 'Dibuat dengan V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Kemampuan',
    title: 'Mengapa V?',
    sub: 'Bahasa modern dengan jejak kecil dan ambisi besar.',
    items: [
      {
        title: 'Kompilasi yang Cepat',
        desc: 'V mengkompilasi antara ~110k dan 1,2 juta baris kode per detik per inti CPU. Mengkompilasi dirinya sendiri dalam 0,15–0,6 detik.',
      },
      {
        title: 'Keamanan',
        desc: 'Tidak ada null, tidak ada variabel global, tidak ada perilaku tak terdefinisi, immutabilitas secara default. V mencegah seluruh kelas bug pada waktu kompilasi.',
      },
      {
        title: 'Performa',
        desc: 'Secepat C. V dikompilasi ke C yang dapat dibaca manusia dan dapat menggunakan compiler C apapun sebagai backend termasuk GCC, Clang, dan MSVC.',
      },
      {
        title: 'Bahasa yang Sederhana',
        desc: 'Pelajari seluruh bahasa dalam satu akhir pekan. Jika Anda tahu Go, Anda sudah tahu ~80% dari V. Kode yang sederhana, mudah dibaca, dan mudah dipelihara.',
      },
      {
        title: 'Tanpa Dependensi',
        desc: 'Compiler V hanya 400 KB tanpa dependensi apapun. Tidak ada LLVM, tidak ada libstdc++. Pasang dalam hitungan detik dari mana saja.',
      },
      {
        title: 'Terjemahan C/C++',
        desc: 'Terjemahkan seluruh proyek C/C++ ke V secara otomatis. Alat C2V bahkan dapat mengkompilasi kode sumber DOOM ke V.',
      },
      {
        title: 'Hot Code Reloading',
        desc: 'Ubah kode saat program berjalan, tanpa me-restart. Tidak ada kehilangan state. Sempurna untuk aplikasi GUI yang berjalan lama.',
      },
      {
        title: 'ORM Bawaan',
        desc: 'ORM bawaan dengan sintaks mirip SQL yang bersih. Bekerja dengan SQLite, PostgreSQL, MySQL, dan MSSQL langsung dari kotak.',
      },
      {
        title: 'Framework Web Bawaan',
        desc: '`veb` adalah framework web yang cepat, sederhana, dan mudah digunakan yang disertakan dalam pustaka standar. Tidak perlu paket eksternal.',
      },
    ],
  },
  install: {
    heading: 'Pasang V dari sumber',
    sub: 'Ini akan membutuhkan beberapa detik.',
    tabLinux: 'Linux & Mac',
    tabWindows: 'Windows',
    note: 'Atau unduh binari yang telah dikompilasi untuk Windows, macOS, dan Linux.',
    gettingStarted: 'Mulai →',
  },
  news: {
    title: 'Berita Terbaru',
  },
  testimonials: {
    title: 'Apa yang dikatakan para pengembang tentang V',
  },
  sponsors: {
    title: 'Mitra & Sponsor',
    becomeLink: 'Jadilah sponsor melalui GitHub Sponsors',
  },
  footer: {
    tagline: 'Sederhana, cepat, aman, terkompilasi.',
    resources: 'Sumber Daya',
    community: 'Komunitas',
    support: 'Dukung Proyek',
    links: {
      documentation: 'Dokumentasi',
      stdlib: 'Docs Stdlib',
      examples: 'Contoh',
      tutorials: 'Tutorial',
      playground: 'Playground',
      forum: 'Forum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Pengantar',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Variabel',
        functions: 'Fungsi',
        primitiveTypes: 'Tipe-tipe Dasar',
        strings: 'Strings',
        arrays: 'Arrays',
        maps: 'Maps',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'Looping For',
        structs: 'Structs',
        enums: 'Enums',
        interfaces: 'Antarmuka',
        concurrency: 'Konkurensi',
        errorHandling: 'Jenis opsi & penanganan kesalahan',
        json: 'Decoding JSON',
        orm: 'ORM',
        testing: 'Pengujian',
      },
    },
  },
}

const ja: SiteTranslations = {
  hero: {
    name: 'プログラミング言語 V',
    simple: 'シンプル。',
    fast: '高速。',
    safe: '安全。',
    compiled: 'コンパイル型。',
    sub: '保守性の高いソフトウェアを開発するために。',
    links: {
      stillFast: 'V はまだ速いか？',
      faq: 'よくある質問',
      docs: 'ドキュメント',
      changelog: 'Changelog',
      builtWith: 'V で作られた作品',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: '機能',
    title: 'なぜ V？',
    sub: '小さなフットプリントと大きな可能性を持つモダンな言語。',
    items: [
      {
        title: '高速なコンパイル',
        desc: 'V は CPU コアあたり毎秒約 11 万〜 120 万行のコードをコンパイルします。自身のコンパイルは 0.15〜0.6 秒で完了します。',
      },
      {
        title: '安全性',
        desc: 'null なし、グローバル変数なし、未定義動作なし、デフォルトで不変。V はコンパイル時にバグのクラス全体を防ぎます。',
      },
      {
        title: 'パフォーマンス',
        desc: 'C と同等の速さ。V は人間が読める C にコンパイルし、GCC・Clang・MSVC などあらゆる C コンパイラをバックエンドとして使用できます。',
      },
      {
        title: 'シンプルな言語',
        desc: '週末一つで言語全体を習得できます。Go を知っていれば、V の約 80% はすでに知っています。シンプルで読みやすく、保守しやすいコードです。',
      },
      {
        title: '依存性ゼロの 400 KB コンパイラ',
        desc: 'V コンパイラはわずか 400 KB で、依存性がゼロです。LLVM も libstdc++ も不要。どこからでも数秒でインストールできます。',
      },
      {
        title: 'C/C++ 変換',
        desc: 'C/C++ プロジェクト全体を自動的に V へ変換します。C2V ツールは DOOM のソースコードでさえ V にコンパイルできます。',
      },
      {
        title: 'ホットコードリロード',
        desc: 'プログラムを再起動せずにコードを変更できます。状態も失われません。長時間起動する GUI アプリに最適です。',
      },
      {
        title: '組み込み ORM',
        desc: 'SQL ライクなクリーンな構文を持つ組み込み ORM。SQLite・PostgreSQL・MySQL・MSSQL がすぐに使えます。',
      },
      {
        title: '組み込み Web フレームワーク',
        desc: '`veb` は標準ライブラリに含まれる、高速でシンプルかつ使いやすい Web フレームワークです。外部パッケージは不要です。',
      },
    ],
  },
  install: {
    heading: 'ソースコードから V をインストール',
    sub: 'これには数秒しかかかりません。',
    tabLinux: 'Linux と Mac',
    tabWindows: 'Windows',
    note: 'または Windows・macOS・Linux 用のビルド済みバイナリをダウンロードしてください。',
    gettingStarted: 'はじめる →',
  },
  news: {
    title: '最新情報',
  },
  testimonials: {
    title: '開発者たちの声',
  },
  sponsors: {
    title: 'パートナー & スポンサー',
    becomeLink: 'GitHub Sponsors でスポンサーになる',
  },
  footer: {
    tagline: 'シンプル、高速、安全、コンパイル型。',
    resources: 'リソース',
    community: 'コミュニティ',
    support: 'プロジェクトを支援する',
    links: {
      documentation: 'ドキュメント',
      stdlib: 'Stdlib Docs',
      examples: '実装例',
      tutorials: 'チュートリアル',
      playground: 'Playground',
      forum: 'フォーラム',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'はじめに',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: '変数',
        functions: '関数',
        primitiveTypes: '基本型',
        strings: '文字列',
        arrays: '配列',
        maps: 'マップ',
        ifElse: 'If条件分岐',
        match: 'Switch',
        forLoops: 'Forループ',
        structs: '構造体',
        enums: '列挙型',
        interfaces: 'インターフェース',
        concurrency: '並列処理',
        errorHandling: 'Optional型とエラーハンドリング',
        json: 'JSONのデコード',
        orm: 'ORM',
        testing: 'テスト',
      },
    },
  },
}

const no: SiteTranslations = {
  hero: {
    name: 'Programmeringsspråket V',
    simple: 'Enkelt.',
    fast: 'Raskt.',
    safe: 'Sikkert.',
    compiled: 'Kompilert.',
    sub: 'For utvikling av vedlikeholdbar programvare.',
    links: {
      stillFast: 'Er V fortsatt raskt?',
      faq: 'Ofte stilte spørsmål',
      docs: 'Dokumentasjon',
      changelog: 'Changelog',
      builtWith: 'Skapt i V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Egenskaper',
    title: 'Hvorfor V?',
    sub: 'Et moderne språk med lite fotavtrykk og store ambisjoner.',
    items: [
      {
        title: 'Rask kompilering',
        desc: 'V kompilerer mellom ~110k og 1,2 millioner kodelinjer per sekund per prosessorkjerne. Kompilerer seg selv på 0,15–0,6 sekunder.',
      },
      {
        title: 'Sikkerhet',
        desc: 'Ingen null, ingen globale variabler, ingen udefinert atferd, uforanderlighet som standard. V hindrer hele klasser av feil på kompileringstidspunktet.',
      },
      {
        title: 'Ytelse',
        desc: 'Like rask som C. V kompilerer til menneskelig lesbar C og kan bruke enhver C-kompilator som bakside, inkludert GCC, Clang og MSVC.',
      },
      {
        title: 'Enkelt språk',
        desc: 'Lær hele språket i løpet av en helg. Hvis du kan Go, kan du allerede ~80% av V. Enkel, lesbar og vedlikeholdbar kode.',
      },
      {
        title: '400 KB kompilator uten avhengigheter',
        desc: 'V-kompilatoren er bare 400 KB uten noen avhengigheter. Ingen LLVM, ingen libstdc++. Installer på sekunder fra hvor som helst.',
      },
      {
        title: 'C/C++ oversettelse',
        desc: 'Oversett hele C/C++-prosjekter til V automatisk. C2V-verktøyet kan til og med kompilere DOOM-kildekoden til V.',
      },
      {
        title: 'Varm kode-opplasting',
        desc: 'Endre kode mens programmet kjører, uten å starte det på nytt. Ingen tapt tilstand. Perfekt for langvarige GUI-apper.',
      },
      {
        title: 'Innebygd ORM',
        desc: 'Et innebygd ORM med en ren SQL-lignende syntaks. Fungerer med SQLite, PostgreSQL, MySQL og MSSQL rett ut av esken.',
      },
      {
        title: 'Innebygd nettrammeverk',
        desc: '`veb` er et raskt, enkelt og brukervennlig nettrammeverk inkludert i standardbiblioteket. Ingen eksterne pakker nødvendig.',
      },
    ],
  },
  install: {
    heading: 'Installer V fra kildekode',
    sub: 'Dette vil ta noen få sekunder.',
    tabLinux: 'Linux og Mac',
    tabWindows: 'Windows',
    note: 'Eller last ned forhåndskompilerte binærfiler for Windows, macOS og Linux.',
    gettingStarted: 'Kom i gang →',
  },
  news: {
    title: 'Siste nytt',
  },
  testimonials: {
    title: 'Hva utviklere sier om V',
  },
  sponsors: {
    title: 'Partnere og sponsorer',
    becomeLink: 'Bli sponsor via GitHub Sponsors',
  },
  footer: {
    tagline: 'Enkelt, raskt, sikkert, kompilert.',
    resources: 'Ressurser',
    community: 'Samfunn',
    support: 'Støtt prosjektet',
    links: {
      documentation: 'Dokumentasjon',
      stdlib: 'Stdlib Docs',
      examples: 'Eksempler',
      tutorials: 'Veiledninger',
      playground: 'Playground',
      forum: 'Nettforum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Innledning',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Variabler',
        functions: 'Funksjoner',
        primitiveTypes: 'Enkle basistyper',
        strings: 'Teksttyper',
        arrays: 'Matriser',
        maps: 'Kart',
        ifElse: 'If',
        match: 'Brytere',
        forLoops: 'For løkker',
        structs: 'Strukter',
        enums: 'Enumer',
        interfaces: 'Interfacer',
        concurrency: 'Samtidighet',
        errorHandling: 'Valgtyper og behandling av programfeil',
        json: 'JSON dekoding',
        orm: 'ORM',
        testing: 'Feilsøking',
      },
    },
  },
}

const pt: SiteTranslations = {
  hero: {
    name: 'A Linguagem de Programação V',
    simple: 'Simples.',
    fast: 'Rápida.',
    safe: 'Segura.',
    compiled: 'Compilada.',
    sub: 'Para desenvolver software sustentável.',
    links: {
      stillFast: 'V ainda é rápido?',
      faq: 'FAQ',
      docs: 'Documentação',
      changelog: 'Changelog',
      builtWith: 'Feito em V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Capacidades',
    title: 'Por que V?',
    sub: 'Uma linguagem moderna com pequena pegada e grandes ambições.',
    items: [
      {
        title: 'Compilação rápida',
        desc: 'V compila entre ~110k e 1,2 milhão de linhas de código por segundo por núcleo de CPU. Compila a si mesmo em 0,15–0,6 segundos.',
      },
      {
        title: 'Segurança',
        desc: 'Sem null, sem variáveis globais, sem comportamento indefinido, imutabilidade por padrão. V previne classes inteiras de bugs em tempo de compilação.',
      },
      {
        title: 'Performance',
        desc: 'Tão rápido quanto C. V compila para C legível e pode usar qualquer compilador C como backend, incluindo GCC, Clang e MSVC.',
      },
      {
        title: 'Linguagem simples',
        desc: 'Aprenda toda a linguagem num fim de semana. Se você conhece Go, já conhece ~80% de V. Código simples, legível e manutenível.',
      },
      {
        title: 'Compilador de 400 KB sem dependências',
        desc: 'O compilador V tem apenas 400 KB sem dependências externas. Sem LLVM, sem libstdc++. Instale em segundos de qualquer lugar.',
      },
      {
        title: 'Tradução de C/C++',
        desc: 'Traduza projetos C/C++ inteiros para V automaticamente. A ferramenta C2V pode até compilar o código-fonte do DOOM para V.',
      },
      {
        title: 'Recarga a quente de código',
        desc: 'Mude o código enquanto o programa está em execução, sem reiniciá-lo. Sem perda de estado. Perfeito para aplicativos GUI de longa duração.',
      },
      {
        title: 'ORM integrado',
        desc: 'Um ORM integrado com sintaxe limpa semelhante a SQL. Funciona com SQLite, PostgreSQL, MySQL e MSSQL sem configuração.',
      },
      {
        title: 'Framework web integrado',
        desc: '`veb` é um framework web rápido, simples e fácil de usar incluído na biblioteca padrão. Nenhum pacote externo necessário.',
      },
    ],
  },
  install: {
    heading: 'Instale V pelo código fonte',
    sub: 'Isso pode demorar um pouco.',
    tabLinux: 'Linux e Mac',
    tabWindows: 'Windows',
    note: 'Ou faça o download dos binários pré-compilados para Windows, macOS e Linux.',
    gettingStarted: 'Primeiros passos →',
  },
  news: {
    title: 'Últimas notícias',
  },
  testimonials: {
    title: 'O que os desenvolvedores dizem sobre V',
  },
  sponsors: {
    title: 'Parceiros & Patrocinadores',
    becomeLink: 'Torne-se um patrocinador pelo GitHub Sponsors',
  },
  footer: {
    tagline: 'Simples, rápida, segura, compilada.',
    resources: 'Recursos',
    community: 'Comunidade',
    support: 'Apoiar o Projeto',
    links: {
      documentation: 'Documentação',
      stdlib: 'Docs Stdlib',
      examples: 'Exemplos',
      tutorials: 'Tutoriais',
      playground: 'Playground',
      forum: 'Fórum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Introdução',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Variáveis',
        functions: 'Funções',
        primitiveTypes: 'Tipos básicos',
        strings: 'Strings',
        arrays: 'Arrays',
        maps: 'Maps',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'Laço for',
        structs: 'Structs',
        enums: 'Enums',
        interfaces: 'Interfaces',
        concurrency: 'Concorrência',
        errorHandling: 'Tipos opcionais e tratamento de erros',
        json: 'Decodificação JSON',
        orm: 'ORM',
        testing: 'Teste',
      },
    },
  },
}

const ru: SiteTranslations = {
  hero: {
    name: 'Язык программирования V',
    simple: 'Простой.',
    fast: 'Быстрый.',
    safe: 'Безопасный.',
    compiled: 'Компилируемый.',
    sub: 'Для разработки легко поддерживаемых приложений.',
    links: {
      stillFast: 'V всё ещё быстрый?',
      faq: 'FAQ',
      docs: 'Документация',
      changelog: 'Changelog',
      builtWith: 'Написано на V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Возможности',
    title: 'Почему V?',
    sub: 'Современный язык с маленьким размером и большими амбициями.',
    items: [
      {
        title: 'Быстрая компиляция',
        desc: 'V компилирует от ~110k до 1,2 миллиона строк кода в секунду на одно ядро CPU. Компилирует себя за 0,15–0,6 секунды.',
      },
      {
        title: 'Безопасность',
        desc: 'Нет null, нет глобальных переменных, нет неопределённого поведения, неизменяемость по умолчанию. V предотвращает целые классы ошибок на этапе компиляции.',
      },
      {
        title: 'Производительность',
        desc: 'Такой же быстрый, как C. V компилируется в читаемый C и может использовать любой C-компилятор в качестве бэкенда, включая GCC, Clang и MSVC.',
      },
      {
        title: 'Простой язык',
        desc: 'Изучите весь язык за выходные. Если вы знаете Go, вы уже знаете ~80% V. Простой, читаемый, поддерживаемый код.',
      },
      {
        title: 'Компилятор 400 КБ без зависимостей',
        desc: 'Компилятор V занимает всего 400 КБ без каких-либо зависимостей. Нет LLVM, нет libstdc++. Установка за секунды из любого места.',
      },
      {
        title: 'Трансляция из C/C++',
        desc: 'Автоматически переводите целые проекты C/C++ в V. Инструмент C2V может даже скомпилировать исходный код DOOM в V.',
      },
      {
        title: 'Горячая перезагрузка кода',
        desc: 'Изменяйте код во время работы программы без перезапуска. Состояние не теряется. Идеально для долгоживущих GUI-приложений.',
      },
      {
        title: 'Встроенный ORM',
        desc: 'Встроенный ORM с чистым SQL-подобным синтаксисом. Работает с SQLite, PostgreSQL, MySQL и MSSQL без дополнительной настройки.',
      },
      {
        title: 'Встроенный веб-фреймворк',
        desc: '`veb` — быстрый, простой и удобный веб-фреймворк, включённый в стандартную библиотеку. Внешние пакеты не нужны.',
      },
    ],
  },
  install: {
    heading: 'Установить V из исходного кода',
    sub: 'Это займёт пару секунд.',
    tabLinux: 'Linux и Mac',
    tabWindows: 'Windows',
    note: 'Или скачайте готовые бинарные файлы для Windows, macOS и Linux.',
    gettingStarted: 'Начать →',
  },
  news: {
    title: 'Последние новости',
  },
  testimonials: {
    title: 'Что говорят разработчики о V',
  },
  sponsors: {
    title: 'Партнёры и спонсоры',
    becomeLink: 'Стать спонсором через GitHub Sponsors',
  },
  footer: {
    tagline: 'Простой, быстрый, безопасный, компилируемый.',
    resources: 'Ресурсы',
    community: 'Сообщество',
    support: 'Поддержать проект',
    links: {
      documentation: 'Документация',
      stdlib: 'Stdlib Docs',
      examples: 'Примеры',
      tutorials: 'Туториалы',
      playground: 'Playground',
      forum: 'Форум',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Введение',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Переменные',
        functions: 'Функции',
        primitiveTypes: 'Базовые типы',
        strings: 'Строки',
        arrays: 'Массивы',
        maps: 'Maps',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'Цикл for',
        structs: 'Структуры',
        enums: 'Enums',
        interfaces: 'Интерфейсы',
        concurrency: 'Concurrency',
        errorHandling: 'Опц. типы и обработка ошибок',
        json: 'Работа с JSON',
        orm: 'ORM',
        testing: 'Тестирование',
      },
    },
  },
}

const es: SiteTranslations = {
  hero: {
    name: 'El Lenguaje de Programación V',
    simple: 'Simple.',
    fast: 'Rápido.',
    safe: 'Seguro.',
    compiled: 'Compilado.',
    sub: 'Para el desarrollo de software mantenible.',
    links: {
      stillFast: '¿V sigue siendo rápido?',
      faq: 'FAQ',
      docs: 'Documentación',
      changelog: 'Changelog',
      builtWith: 'Creado con V',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Capacidades',
    title: '¿Por qué V?',
    sub: 'Un lenguaje moderno con una pequeña huella y grandes ambiciones.',
    items: [
      {
        title: 'Compilación rápida',
        desc: 'V compila entre ~110k y 1,2 millones de líneas de código por segundo por núcleo de CPU. Se compila a sí mismo en 0,15–0,6 segundos.',
      },
      {
        title: 'Seguridad',
        desc: 'Sin null, sin variables globales, sin comportamiento indefinido, inmutabilidad por defecto. V previene clases enteras de bugs en tiempo de compilación.',
      },
      {
        title: 'Rendimiento',
        desc: 'Tan rápido como C. V compila a C legible por humanos y puede usar cualquier compilador C como backend, incluyendo GCC, Clang y MSVC.',
      },
      {
        title: 'Lenguaje simple',
        desc: 'Aprende todo el lenguaje en un fin de semana. Si conoces Go, ya conoces ~80% de V. Código simple, legible y mantenible.',
      },
      {
        title: 'Compilador de 400 KB sin dependencias',
        desc: 'El compilador de V pesa solo 400 KB sin ninguna dependencia. Sin LLVM, sin libstdc++. Instálalo en segundos desde cualquier lugar.',
      },
      {
        title: 'Traducción desde C/C++',
        desc: 'Traduce proyectos C/C++ completos a V automáticamente. La herramienta C2V puede incluso compilar el código fuente de DOOM a V.',
      },
      {
        title: 'Recarga de código en caliente',
        desc: 'Cambia el código mientras el programa se ejecuta, sin reiniciarlo. Sin pérdida de estado. Perfecto para aplicaciones GUI de larga duración.',
      },
      {
        title: 'ORM integrado',
        desc: 'Un ORM integrado con una sintaxis limpia similar a SQL. Funciona con SQLite, PostgreSQL, MySQL y MSSQL sin configuración.',
      },
      {
        title: 'Framework web integrado',
        desc: '`veb` es un framework web rápido, simple y fácil de usar incluido en la biblioteca estándar. No se necesitan paquetes externos.',
      },
    ],
  },
  install: {
    heading: 'Instala V desde el código fuente',
    sub: 'Esto puede tardar un par de segundos.',
    tabLinux: 'Linux y Mac',
    tabWindows: 'Windows',
    note: 'O descarga los binarios precompilados para Windows, macOS y Linux.',
    gettingStarted: 'Primeros pasos →',
  },
  news: {
    title: 'Últimas noticias',
  },
  testimonials: {
    title: 'Lo que los desarrolladores dicen sobre V',
  },
  sponsors: {
    title: 'Socios y patrocinadores',
    becomeLink: 'Conviértete en patrocinador con GitHub Sponsors',
  },
  footer: {
    tagline: 'Simple, rápido, seguro, compilado.',
    resources: 'Recursos',
    community: 'Comunidad',
    support: 'Apoyar el proyecto',
    links: {
      documentation: 'Documentación',
      stdlib: 'Docs Stdlib',
      examples: 'Ejemplos',
      tutorials: 'Tutoriales',
      playground: 'Playground',
      forum: 'Foro',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Introducción',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Variables',
        functions: 'Funciones',
        primitiveTypes: 'Tipos básicos',
        strings: 'Strings',
        arrays: 'Arrays',
        maps: 'Maps',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'Bucle for',
        structs: 'Structs',
        enums: 'Enums',
        interfaces: 'Interfaces',
        concurrency: 'Concurrencia',
        errorHandling: 'Tipos opcionales y manejo de errores',
        json: 'Decodificación de JSON',
        orm: 'ORM',
        testing: 'Pruebas',
      },
    },
  },
}

const tr: SiteTranslations = {
  hero: {
    name: 'V Programlama Dili',
    simple: 'Basit.',
    fast: 'Hızlı.',
    safe: 'Güvenli.',
    compiled: 'Derlenmiş.',
    sub: 'Bakımı kolay yazılım geliştirmek için.',
    links: {
      stillFast: 'V hâlâ hızlı mı?',
      faq: 'SSS',
      docs: 'Dökümantasyon',
      changelog: 'Changelog',
      builtWith: 'V ile build edildi',
      rfcs: 'RFCs',
    },
  },
  features: {
    eyebrow: 'Yetenekler',
    title: 'Neden V?',
    sub: 'Küçük ayak izi ve büyük hırslarıyla modern bir dil.',
    items: [
      {
        title: 'Hızlı derleme',
        desc: 'V, CPU çekirdeği başına saniyede ~110k ile 1,2 milyon satır kod derler. Kendini 0,15–0,6 saniyede derler.',
      },
      {
        title: 'Güvenlik',
        desc: 'Null yok, global değişken yok, tanımsız davranış yok, varsayılan olarak değişmezlik. V, derleme zamanında hata sınıflarının tamamını önler.',
      },
      {
        title: 'Performans',
        desc: "C kadar hızlı. V, insan tarafından okunabilir C'ye derlenir ve GCC, Clang ve MSVC dahil her C derleyicisini arka uç olarak kullanabilir.",
      },
      {
        title: 'Basit dil',
        desc: "Tüm dili bir hafta sonunda öğrenin. Go biliyorsanız, V'nin ~%80'ini zaten biliyorsunuz. Basit, okunabilir, bakımı kolay kod.",
      },
      {
        title: 'Sıfır bağımlılığa sahip 400 KB derleyici',
        desc: 'V derleyicisi hiçbir bağımlılık olmaksızın yalnızca 400 KB boyutundadır. LLVM yok, libstdc++ yok. Her yerden saniyeler içinde yükleyin.',
      },
      {
        title: 'C/C++ çeviri',
        desc: "Tüm C/C++ projelerini otomatik olarak V'ye çevirin. C2V aracı DOOM kaynak kodunu bile V'ye derleyebilir.",
      },
      {
        title: 'Sıcak kod yeniden yükleme',
        desc: "Programı yeniden başlatmadan çalışırken kodu değiştirin. Durum kaybı yok. Uzun süre çalışan GUI uygulamaları için mükemmel.",
      },
      {
        title: 'Yerleşik ORM',
        desc: "Temiz SQL benzeri sözdizimine sahip yerleşik ORM. SQLite, PostgreSQL, MySQL ve MSSQL ile kutudan çıkar çıkmaz çalışır.",
      },
      {
        title: 'Yerleşik web çerçevesi',
        desc: '`veb`, standart kütüphanede yer alan hızlı, basit ve kullanımı kolay bir web çerçevesidir. Harici paket gerekmez.',
      },
    ],
  },
  install: {
    heading: 'V\'yi kaynak koddan yükleyin',
    sub: 'Birkaç saniye alacak.',
    tabLinux: 'Linux ve Mac',
    tabWindows: 'Windows',
    note: "Veya Windows, macOS ve Linux için önceden derlenmiş ikili dosyaları indirin.",
    gettingStarted: 'Başlarken →',
  },
  news: {
    title: 'Son Haberler',
  },
  testimonials: {
    title: "Geliştiriciler V hakkında ne diyor",
  },
  sponsors: {
    title: 'Ortaklar ve Sponsorlar',
    becomeLink: 'GitHub Sponsors aracılığıyla sponsor olun',
  },
  footer: {
    tagline: 'Basit, hızlı, güvenli, derlenmiş.',
    resources: 'Kaynaklar',
    community: 'Topluluk',
    support: 'Projeyi Destekle',
    links: {
      documentation: 'Dökümantasyon',
      stdlib: 'Stdlib Docs',
      examples: 'Örnekler',
      tutorials: 'Eğitimler',
      playground: 'Playground',
      forum: 'Forum',
    },
  },
  docs: {
    sidebar: {
      gettingStarted: 'Getting Started',
      basics: 'Basics',
      controlFlow: 'Control Flow',
      structsTypes: 'Structs & Types',
      advanced: 'Advanced',
      items: {
        introduction: 'Talimat',
        installation: 'Installation',
        helloWorld: 'Hello World',
        variables: 'Değişkenler',
        functions: 'Fonksiyonlar',
        primitiveTypes: 'Basit tipler',
        strings: 'Stringler',
        arrays: 'Diziler',
        maps: 'Mapler',
        ifElse: 'If',
        match: 'Switch',
        forLoops: 'For döngüsü',
        structs: 'Struct',
        enums: 'Enumlar',
        interfaces: 'Arayüzler',
        concurrency: 'Eşzamanlılık',
        errorHandling: 'Option tipleri & hata işleme',
        json: 'JSON çözme',
        orm: 'ORM',
        testing: 'Testing',
      },
    },
  },
}

export const translations: Record<string, SiteTranslations> = {
  root: en,
  'en-US': en,
  ar,
  ms,
  bs,
  ca,
  zh,
  'zh-CN': zh,
  fr,
  'fr-FR': fr,
  de,
  'de-DE': de,
  id,
  ja,
  no,
  pt,
  'pt-BR': pt,
  ru,
  es,
  'es-ES': es,
  tr,
}

export function getTranslations(lang: string): SiteTranslations {
  return translations[lang] ?? translations['root']
}
