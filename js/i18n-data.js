const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About Me",
            projects: "Projects",
            certificates: "Certificates",
            contact: "Contact"
        },
        index: {
            hero: {
                subtitle: "< .NET / Blazor / MAUI Developer />",
                name: "Mena Dawod",
                title: "Software Developer",
                badge: {
                    ihk: "IHK Grade: Good (87 Pts.)",
                    project: "Project Work: Excellent (99/100)",
                    school: "Vocational School: 1.0"
                },
                desc: "Certified .NET, Blazor & MAUI developer with production experience at Karl Mayer, a global leader in textile machinery. I develop modern, scalable applications with clean architecture and deliver real value for daily production operations.",
                btn: {
                    projects: "View Projects",
                    cv: "Download CV (PDF)"
                }
            },
            status: {
                location: "Limeshain, DE",
                availability: "Open to work"
            },
            tech: {
                title: "Technologies in Use"
            },
            projects: {
                title: "Featured Projects",
                subtitle: "Selected software projects: From industrial applications to modern full-stack solutions.",
                badge: "Featured",
                btn: "View Project",
                btnAll: "View All Projects",
                p1: {
                    title: "Legacy App Modernization",
                    desc: "Complete migration of the application logic from JavaScript/jQuery to C# and Blazor."
                },
                p2: {
                    title: "Custom Feature Implementation",
                    desc: "Independent analysis of third-party code and complete implementation within two weeks."
                },
                p3: {
                    title: "Parameter Information Portal",
                    desc: "Central information solution for searching and managing over 5,000 machine parameters."
                }
            },
            stats: {
                year: "Years",
                ihk: {
                    title: "IHK Project",
                    desc: "Grade 'Excellent' in final project."
                },
                school: {
                    title: "Vocational School",
                    desc: "Best possible final grade."
                },
                cert: {
                    title: "IHK Certificate",
                    desc: "Grade 1.9 (Good) overall result."
                },
                exp: {
                    title: "Production Software",
                    desc: "Development for Karl Mayer GmbH."
                }
            }
        },
        about: {
            title: "About Me",
            subtitle: "// story",
            desc: "From Cairo to Germany, my journey into software development.",
            intro: {
                title: "The Beginnings",
                p1: "My journey into software development began in 2022. I intentionally chose a path that combines theoretical depth with practical application.",
                p2: "As a career changer, I successfully completed my 3-year vocational training as an 'Application Development Specialist' ahead of schedule in just 2.5 years, graduating with an overall grade of 'Good'.",
                tf: {
                    title: "Technical Practice, TechniForm GmbH (2017–2023)",
                    p1: "In 2013, I came to Germany and started from scratch, with no work permit, and learned the language through self-study. At TechniForm, I found my first real technical entry in 2017 and developed from a production worker to a shift leader with responsibility for a team of 10 people in just 12 months.",
                    p2: "As a process mechanic, I specialized in the programming of robot systems, the optimization of manufacturing processes, and independent fault diagnosis and rectification on complex machines. This experience sharpened my systematic thinking – the same mindset I apply in code today.",
                    tag1: "Robot Programming",
                    tag2: "Process Optimization",
                    tag3: "Fault Diagnosis",
                    tag4: "Shift Leadership · 10 People"
                },
                km: {
                    title: "Career Change, Software Development at Karl Mayer (2023–2026)",
                    p: "In 2023, I found what I had always been looking for: a shortened apprenticeship as a Specialist for Application Development at Karl Mayer, a global market leader in textile machinery. I graduated in January 2026 with a vocational school grade of 1.0 and 99 out of 100 points in my IHK project (overall grade 1.9 / 87%).",
                    tag1: "C# · Blazor · .NET",
                    tag2: "MVVM",
                    tag3: "EF Core",
                    tag4: "IHK Grade 1.9"
                }
            },
            skills: {
                title: "Technical Skills",
                subtitle: "// tech-stack",
                categories: {
                    core: "Core Stack",
                    arch: "Architecture & Patterns",
                    db: "Database",
                    devops: "DevOps & Tooling"
                }
            },
            career: {
                title: "My Career Path",
                subtitle: "// experience",
                items: {
                    ihk: {
                        date: "January 2026",
                        title: "IHK Certification",
                        desc: "Specialist for Application Development",
                        stats: {
                            overall: "• IHK Grade: Good (87 Pts.)",
                            project: "• Project Work: Excellent (99/100)"
                        }
                    },
                    km: {
                        date: "2023 – 2026",
                        company: "Karl Mayer GmbH",
                        role: "Apprentice Developer (.NET / Blazor)",
                        sub: "World market leader in textile machinery",
                        desc: "Focus on production-critical software for industrial machines. Implementation of modern Blazor applications."
                    },
                    tf: {
                        date: "2017 – 2023",
                        company: "TechniForm GmbH",
                        desc: "Production Worker → Shift Leader → Process Mechanic. Leading a team of up to 10 employees."
                    },
                    de: {
                        date: "2013 – 2017",
                        title: "Arrival in Germany",
                        desc: "Language acquisition, orientation, overcoming bureaucratic processes."
                    },
                    eg: {
                        date: "2013",
                        title: "Departure from Egypt",
                        desc: "Cairo University, Law (Emigration in the last semester)."
                    }
                }
            },
            cta: {
                title: "Want to see the full picture?",
                desc: "Download my full CV for all the details on my experience and history.",
                btn: "Download Full CV (PDF)"
            }
        },
        projects: {
            title: "Selected Projects",
            subtitle: "An insight into my software projects: From industrial enterprise solutions to innovative in-house developments from various phases of my career.",
            items: {
                modernization: {
                    badge: "Main Project",
                    sub: "Vocational Training Karl Mayer",
                    title: "Modernizing a Legacy Application with C# Blazor",
                    desc: "Complete migration of the application logic from <strong>JavaScript/jQuery to C# and Blazor</strong> – while maintaining the existing high-end UI design.",
                    points: [
                        "Implementation of a <strong>Single-Page-App</strong> based on MVVM architecture",
                        "Implementation of <strong>NATS communication</strong> for real-time data traffic",
                        "Use of <strong>Dependency Injection</strong> and Interfaces for decoupling",
                        "Consistent application of <strong>object-oriented principles</strong>"
                    ],
                    result: "Result: A modern, structured, and future-proof application that now serves as a scalable platform for various machine types."
                },
                feature: {
                    badge: "Production Feature",
                    title: "Development of a Customer-Specific Feature",
                    desc: "Independent analysis of <strong>third-party code</strong> and complete feature implementation within two weeks – already successfully released and in live operation.",
                    points: [
                        "Analysis and precise adjustment of <strong>complex third-party logic</strong>",
                        "Development of a <strong>central control</strong> for machine parameters in the frontend",
                        "<strong>Performance optimization</strong> by reducing unnecessary backend requests"
                    ],
                    result: "Result: Successful production launch with high stakeholder satisfaction and direct time savings for end customers."
                },
                portal: {
                    badge: "Full-Stack Web App",
                    title: "Parameter Information Portal in the Intranet",
                    desc: "Proactive Initiative: Identification of a gap in the development process and independent <strong>conception and implementation</strong> of a central information solution.",
                    points: [
                        "Implementation of a <strong>high-performance search function</strong> for > 5,000 parameters",
                        "Visualization of <strong>meta-information</strong> (ID, min/max values, read/write rights)",
                        "Development of a <strong>collaboration layer</strong> through integrated comment functions"
                    ],
                    result: "Result: Massive acceleration of the workflow for developers and service employees by eliminating manual document searches."
                },
                database: {
                    badge: "Database Design",
                    title: "Parameter Database with SQLite and EF-Core",
                    desc: "Design and construction of a <strong>high-performance central data storage</strong> to replace paper-based or unstructured documentation lists.",
                    points: [
                        "Design of the <strong>relational schema</strong> via Entity Framework Core (Code First)",
                        "Efficient <strong>persistence</strong> of over 5,000 machine parameters",
                        "Ensuring <strong>data integrity</strong> for the connected information portal"
                    ],
                    result: "Result: A structured and extensible database that serves as the 'Single Source of Truth' for the entire system."
                },
                conversion: {
                    badge: "Automation Tool",
                    title: "Localization Data Conversion (JSON → RESX)",
                    desc: "Automation of Localization: Development of a tool for <strong>error-free transformation</strong> of legacy data into the modern .NET format.",
                    points: [
                        "Programmatic analysis of <strong>complex JSON structures</strong> (27 languages)",
                        "Automated generation of <strong>RESX resource files</strong>",
                        "Integrated <strong>consistency validation</strong> of the translated strings"
                    ],
                    result: "Result: 27 languages automatically migrated – manual effort reduced from several working days to a few minutes."
                },
                tonnenwecker: {
                    badge: "App Development",
                    sub: "Limeshain",
                    title: "TonnenWecker – Limeshain",
                    desc: "Conception and development of a <strong>mobile application</strong> to digitize municipal services for the municipality of Limeshain.",
                    points: [
                        "Cross-platform development with <strong>.NET MAUI (Android/iOS)</strong>",
                        "Implementation of <strong>reliable push notifications</strong> for collection dates",
                        "Maximum <strong>offline availability</strong> through intelligent local caching"
                    ],
                    result: "Result: A practical everyday companion that strengthens citizen engagement and reliably prevents missed collection dates."
                },
                barcode: {
                    badge: "Workflow Optimization",
                    title: "Automated Batch Number Recording",
                    desc: "Process Optimization in Mask Production: Complete <strong>automation of manual recording</strong> of faulty pallet rolls.",
                    points: [
                        "Development of a <strong>specialized web tool</strong> for barcode scanners",
                        "Implementation of an <strong>intelligent parser</strong> for complex barcode strings",
                        "Automated creation of <strong>print-optimized lists</strong> for system cleanup"
                    ],
                    result: "Result: The recording time per pallet was reduced from approx. 30 minutes to under 5 minutes (83% time saving)."
                },
                calculator: {
                    badge: "Productivity Tool",
                    title: "Practical Color-Calculator for Plastic Parts",
                    desc: "Digitization of Workshop Formulas: Development of a <strong>mobile tool</strong> for precise calculation of color proportions directly in production.",
                    points: [
                        "Mathematical <strong>modeling</strong> of production mixing formulas",
                        "<strong>Mobile-first implementation</strong> for flexible use at the machine",
                        "Design of a <strong>minimalist UI</strong> for error-free entries under time pressure"
                    ],
                    result: "Result: In daily production use – completely replaces error-prone manual calculation by calculator."
                },
                portfolio: {
                    badge: "Personal Brand",
                    title: "Portfolio Website with HTML, CSS & JavaScript",
                    desc: "Design and development of a <strong>modern digital business card</strong> for professional presentation of technical expertise and projects.",
                    points: [
                        "Focus on <strong>Tailwind CSS</strong> for highest performance and modular design",
                        "Implementation of <strong>dynamic animations</strong> and interactive UI elements",
                        "Automated <strong>CI/CD workflows</strong> via GitHub and Netlify"
                    ],
                    result: "Result: A high-performance online presence that serves as a central point for my professional identity."
                }
            }
        },
        certificates: {
            title: "Certificates & References",
            subtitle: "Verified evidence of my qualifications and past achievements. Click on a certificate to view the original document.",
            view_pdf: "View Certificate (PDF)",
            view_ref: "View Reference (PDF)",
            items: {
                ihk: {
                    title: "IHK Certificate",
                    org: "IHK Offenbach am Main · Jan 2026",
                    badge: "Good · 87 Points",
                    points: [
                        "Overall Grade: <strong class=\"text-text-DEFAULT\">Good (87 Points / Grade 1.9)</strong>",
                        "Final Project: <strong class=\"text-text-DEFAULT\">Excellent (99/100)</strong>",
                        "Qualification Level: EQF/NQF Level 4"
                    ]
                },
                school: {
                    title: "Vocational School Diploma",
                    org: "August-Bebel-Schule Offenbach · Jan 2026",
                    badge: "Overall Grade: 1.0",
                    points: [
                        "Overall Grade: <strong class=\"text-text-DEFAULT\">1.0 (A+)</strong>",
                        "All Subjects: <strong class=\"text-text-DEFAULT\">Excellent</strong>",
                        "Professional Education: <strong class=\"text-text-DEFAULT\">Excellent</strong>"
                    ]
                },
                karlmayer: {
                    title: "Intermediate Reference",
                    org: "KARL MAYER Textilmaschinenfabrik GmbH · Jul 2025",
                    badge: "Karl Mayer · Market Leader",
                    points: [
                        "\"Excellent and comprehensive specialist knowledge\"",
                        "\"Extremely reliable and enjoys our absolute trust\"",
                        "All tasks completed \"to our fullest satisfaction\""
                    ]
                },
                techniform: {
                    title: "Employment Reference",
                    org: "TechniForm GmbH · Apr 2023",
                    badge: "TechniForm · 2017–2023",
                    points: [
                        "\"Always a very active employee\"",
                        "\"Engaged far above average\"",
                        "Led a team as deputy shift leader (~10 employees)"
                    ]
                }
            }
        },
        contact: {
            title: "Contact",
            subtitle: "// reach-out",
            heading: "Let's talk.",
            desc: "I am always looking for interesting projects and technical challenges. Feel free to contact me via email or LinkedIn.",
            response_time: "I am open to new challenges. I usually respond within 24 hours.",
            social_title: "Connect on Social Networks",
            btn: "Say Hello"
        },
        footer: {
            role: ".NET / Blazor / MAUI Developer",
            impressum: "Legal Notice",
            privacy: "Privacy Policy"
        },
        pageTitles: {
            home: "Mena Dawod | .NET Developer",
            about: "About Me | Mena Dawod",
            projects: "Projects | Mena Dawod",
            certificates: "Certificates | Mena Dawod",
            contact: "Contact | Mena Dawod",
            impressum: "Legal Notice | Mena Dawod",
            privacy: "Privacy Policy | Mena Dawod"
        },
        common: {
            back: "Back to Home",
            legal: "// legal",
            privacy: "// privacy",
            openToWork: "Open to work, available now",
            email: "Email",
            phone: "Phone",
            location: "Location",
            youtube: "YouTube Channel",
            github: "GitHub Profile",
            linkedin: "LinkedIn Profile",
            xing: "Xing Profile"
        },
        intro: {
            boot: [
                "Starting Portfolio System v2.0.26...",
                "Loading C# .NET Blazor — Blazor.Hybrid.Runtime",
                "Mounting: /projects /skills /contact",
                "MVVM Pattern loaded — DI Container ready",
                "Git Branch: main — last commit: today",
                "TonnenWecker.Limeshain → APK ready",
                "All systems operational. Welcome."
            ],
            roles: [
                "Blazor Developer",
                "MAUI Hybrid Developer",
                "C# Enthusiast",
                "Application Specialist"
            ],
            loading: "INITIALIZING",
            enter: "[ CLICK HERE TO ENTER ]",
            skip: "[ Click anywhere to enter ]"
        }
    },
    de: {
        nav: {
            home: "Home",
            about: "Über Mich",
            projects: "Projekte",
            certificates: "Zertifikate",
            contact: "Kontakt"
        },
        index: {
            hero: {
                subtitle: "< .NET / Blazor / MAUI Developer />",
                name: "Mena Dawod",
                title: "Fachinformatiker für Anwendungsentwicklung",
                badge: {
                    ihk: "IHK Abschluss: Gut (87 Pkt.)",
                    project: "Projektarbeit: Sehr gut (99/100)",
                    school: "Berufsschule: 1,0"
                },
                desc: "Zertifizierter .NET, Blazor & MAUI Entwickler mit Produktionserfahrung bei Karl Mayer, einem Weltmarktführer im Textilmaschinenbau. Ich entwickle moderne, skalierbare Anwendungen mit sauberer Architektur und liefere echten Mehrwert für den Produktionsalltag.",
                btn: {
                    projects: "Projekte ansehen",
                    cv: "Lebenslauf PDF"
                }
            },
            status: {
                location: "Limeshain, DE",
                availability: "Open to work"
            },
            tech: {
                title: "Technologien im Einsatz"
            },
            projects: {
                title: "Ausgewählte Projekte",
                subtitle: "Ausgewählte Softwareprojekte: Von industriellen Anwendungen bis hin zu modernen Full-Stack-Lösungen.",
                badge: "Featured",
                btn: "Projekt ansehen",
                btnAll: "Alle Projekte ansehen",
                p1: {
                    title: "Legacy-App Modernisierung",
                    desc: "Vollständige Migration der Anwendungslogik von JavaScript/jQuery nach C# und Blazor."
                },
                p2: {
                    title: "Kundenspezifisches Feature",
                    desc: "Eigenständige Analyse von Fremdcode und vollständige Implementierung innerhalb von zwei Wochen."
                },
                p3: {
                    title: "Parameter-Informationsportal",
                    desc: "Zentrale Informationslösung zur Suche und Verwaltung von über 5.000 Maschinenparametern."
                }
            },
            stats: {
                year: "Jahre",
                ihk: {
                    title: "IHK Projektarbeit",
                    desc: "Note 'Sehr gut' im Abschlussprojekt."
                },
                school: {
                    title: "Berufsschule",
                    desc: "Bestmögliche Abschlussnote."
                },
                cert: {
                    title: "IHK Zeugnis",
                    desc: "Note 1,9 (Gut) im Gesamtergebnis."
                },
                exp: {
                    title: "Produktions-Software",
                    desc: "Entwicklung für Karl Mayer GmbH."
                }
            }
        },
        about: {
            title: "Über Mich",
            subtitle: "// story",
            desc: "Von Kairo nach Deutschland, mein Weg in die Softwareentwicklung.",
            intro: {
                title: "Die Anfänge",
                p1: "Mein Weg in die Softwareentwicklung begann 2022. Ich habe mich bewusst für einen Weg entschieden, der theoretische Tiefe mit praktischer Anwendung verbindet.",
                p2: "Als Quereinsteiger habe ich meine 3-jährige Ausbildung zum Fachinformatiker für Anwendungsentwicklung in nur 2,5 Jahren erfolgreich verkürzt und mit der Gesamtnote \"Gut\" abgeschlossen.",
                tf: {
                    title: "Technische Praxis, TechniForm GmbH (2017–2023)",
                    p1: "2013 kam ich nach Deutschland und fing bei Null an, keine Arbeitserlaubnis, die Sprache im Selbststudium gelernt. Bei TechniForm fand ich 2017 meinen ersten echten technischen Einstieg und entwickelte mich in nur 12 Monaten vom Produktionsmitarbeiter zum Schichtleiter mit Verantwortung für ein Team von 10 Personen.",
                    p2: "Als Verfahrensmechaniker übernahm ich die Programmierung von Roboteranlagen, die Optimierung von Fertigungsprozessen sowie die selbstständige Fehlerdiagnose und -behebung an komplexen Maschinen. Diese Erfahrung schärfte mein systematisches Denken, dieselbe Denkweise, die ich heute im Code anwende.",
                    tag1: "Roboterprogrammierung",
                    tag2: "Prozessoptimierung",
                    tag3: "Fehlerdiagnose",
                    tag4: "Schichtleitung · 10 Personen"
                },
                km: {
                    title: "Der Karrierewechsel, Softwareentwicklung bei Karl Mayer (2023–2026)",
                    p: "2023 fand ich das, wonach ich immer gesucht hatte: eine verkürzte Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei Karl Mayer, einem Weltmarktführer im Textilmaschinenbau. Im Januar 2026 schloss ich ab, mit einer Berufsschulnote von 1,0 und 99 von 100 Punkten in meinem IHK-Projekt (Gesamtnote 1,9 / 87 %).",
                    tag1: "C# · Blazor · .NET",
                    tag2: "MVVM",
                    tag3: "EF Core",
                    tag4: "IHK-Abschluss 1,9"
                }
            },
            skills: {
                title: "Technische Fähigkeiten",
                subtitle: "// tech-stack",
                categories: {
                    core: "Core Stack",
                    arch: "Architecture & Patterns",
                    db: "Database",
                    devops: "DevOps & Tooling"
                }
            },
            career: {
                title: "Mein Werdegang",
                subtitle: "// experience",
                items: {
                    ihk: {
                        date: "Januar 2026",
                        title: "IHK Zertifizierung",
                        desc: "Fachinformatiker für Anwendungsentwicklung",
                        stats: {
                            overall: "• IHK Abschluss: Gut (87 Pkt.)",
                            project: "• Projektarbeit: Sehr gut (99/100)"
                        }
                    },
                    km: {
                        date: "2023 – 2026",
                        company: "Karl Mayer GmbH",
                        role: "Auszubildender Entwickler (.NET / Blazor)",
                        sub: "Weltmarktführer Textilmaschinenbau",
                        desc: "Fokus auf produktionsnahe Software für Industriemaschinen. Umsetzung moderner Blazor-Applikationen."
                    },
                    tf: {
                        date: "2017 – 2023",
                        company: "TechniForm GmbH",
                        desc: "Produktionsmitarbeiter → Schichtleiter → Verfahrensmechaniker. Leitung eines Teams von bis zu 10 Mitarbeitern."
                    },
                    de: {
                        date: "2013 – 2017",
                        title: "Ankunft in Deutschland",
                        desc: "Spracherwerb, Orientierung, Bewältigung bürokratischer Prozesse."
                    },
                    eg: {
                        date: "2013",
                        title: "Aufbruch aus Ägypten",
                        desc: "Cairo University, Jura (Auswanderung im letzten Semester)."
                    }
                }
            },
            cta: {
                title: "Möchten Sie das Gesamtbild sehen?",
                desc: "Laden Sie meinen vollständigen Lebenslauf herunter, mit allen Details zu meiner Erfahrung und Historie.",
                btn: "Vollständigen CV herunterladen (PDF)"
            }
        },
        projects: {
            title: "Ausgewählte Projekte",
            subtitle: "Ein Einblick in meine Softwareprojekte: Von industriellen Enterprise-Lösungen bis hin zu innovativen Eigenentwicklungen aus verschiedenen Phasen meiner Laufbahn.",
            items: {
                modernization: {
                    badge: "Hauptprojekt",
                    sub: "Ausbildung Karl Mayer",
                    title: "Modernisierung einer Legacy-Anwendung mit C# Blazor",
                    desc: "Vollständige Migration der Anwendungslogik von <strong>JavaScript/jQuery nach C# und Blazor</strong> – unter Beibehaltung des bestehenden High-End UI-Designs.",
                    points: [
                        "Realisierung einer <strong>Single-Page-App</strong> auf Basis der MVVM-Architektur",
                        "Implementierung der <strong>NATS-Kommunikation</strong> für Echtzeit-Datenverkehr",
                        "Einsatz von <strong>Dependency Injection</strong> und Interfaces zur Entkoppelung",
                        "Konsequente Anwendung <strong>objektorientierter Prinzipien</strong>"
                    ],
                    result: "Ergebnis: Eine moderne, strukturierte und zukunftssichere Anwendung, die nun als skalierbare Plattform für verschiedene Maschinentypen dient."
                },
                feature: {
                    badge: "Production Feature",
                    title: "Entwicklung eines kundenspezifischen Features",
                    desc: "Eigenständige Analyse von <strong>Fremdcode</strong> und vollständige Feature-Implementierung innerhalb von zwei Wochen – bereits erfolgreich freigegeben und im Live-Betrieb.",
                    points: [
                        "Analyse und präzise Anpassung <strong>komplexer Drittanbieter-Logik</strong>",
                        "Entwicklung einer <strong>zentralen Steuerung</strong> für Maschinen-Parameter im Frontend",
                        "<strong>Optimierung der Performance</strong> durch Reduktion unnötiger Backend-Requests"
                    ],
                    result: "Ergebnis: Erfolgreiche Produktivsetzung mit hoher Stakeholder-Zufriedenheit und direkter Zeitersparnis für Endkunden."
                },
                portal: {
                    badge: "Full-Stack Web App",
                    title: "Parameter-Informationsportal im Intranet",
                    desc: "Eigeninitiative: Identifikation einer Lücke im Entwicklungsprozess and selbstständige <strong>Konzeption sowie Umsetzung</strong> einer zentralen Informationslösung.",
                    points: [
                        "Implementierung einer <strong>Hochleistungs-Suchfunktion</strong> für > 5.000 Parameter",
                        "Visualisierung von <strong>Meta-Informationen</strong> (ID, Min/Max-Werte, Lese-/Schreibrechte)",
                        "Entwicklung einer <strong>Kollaborations-Ebene</strong> durch integrierte Kommentarfunktionen"
                    ],
                    result: "Ergebnis: Massive Beschleunigung des Workflows für Entwickler und Servicemitarbeiter durch den Wegfall manueller Dokumentensuche."
                },
                database: {
                    badge: "Database Design",
                    title: "Parameter-Datenbank mit SQLite and EF-Core",
                    desc: "Design und Aufbau einer <strong>performanten zentralen Datenhaltung</strong> zur Ablösung papierbasierter oder unstrukturierter Dokumentationslisten.",
                    points: [
                        "Entwurf des <strong>relationalen Schemas</strong> via Entity Framework Core (Code First)",
                        "Effiziente <strong>Persistierung</strong> von über 5.000 Maschinenparametern",
                        "Gewährleistung der <strong>Datenintegrität</strong> für das angeschlossene Informationsportal"
                    ],
                    result: "Ergebnis: Eine strukturierte und erweiterbare Datenbasis, die als „Single Source of Truth“ für das gesamte System dient."
                },
                conversion: {
                    badge: "Automation Tool",
                    title: "Lokalisierungsdaten-Konvertierung (JSON → RESX)",
                    desc: "Automatisierung der Lokalisierung: Entwicklung eines Tools zur <strong>fehlerfreien Transformation</strong> von Altdaten in das moderne .NET-Format.",
                    points: [
                        "Programmgesteuerte Analyse <strong>komplexer JSON-Strukturen</strong> (27 Sprachen)",
                        "Automatisierte Generierung von <strong>RESX-Ressourcendateien</strong>",
                        "Integrierte <strong>Konsistenz-Validierung</strong> der übersetzten Strings"
                    ],
                    result: "Ergebnis: 27 Sprachen automatisch migriert – manueller Aufwand von mehreren Arbeitstagen auf wenige Minuten reduziert."
                },
                tonnenwecker: {
                    badge: "App Development",
                    sub: "Limeshain",
                    title: "TonnenWecker – Limeshain",
                    desc: "Konzeption und Entwicklung einer <strong>mobilen Anwendung</strong> zur Digitalisierung kommunaler Services für die Gemeinde Limeshain.",
                    points: [
                        "Plattformübergreifende Entwicklung mit <strong>.NET MAUI (Android/iOS)</strong>",
                        "Implementierung <strong>zuverlässiger Push-Benachrichtigungen</strong> für Abfuhrtermine",
                        "Maximale <strong>Offline-Verfügbarkeit</strong> durch intelligentes lokales Caching"
                    ],
                    result: "Ergebnis: Ein praktischer Alltagsbegleiter, der die Bürgerbindung stärkt und verpasste Abfuhrtermine zuverlässig verhindert."
                },
                barcode: {
                    badge: "Workflow Optimization",
                    title: "Automatisierte Chargennummer-Erfassung",
                    desc: "Prozessoptimierung in der Maskenproduktion: Vollständige <strong>Automatisierung der manuellen Erfassung</strong> fehlerhafter Palettenrollen.",
                    points: [
                        "Entwicklung eines <strong>spezialisierten Web-Tools</strong> für Barcode-Scanner",
                        "Implementierung eines <strong>intelligenten Parsers</strong> für komplexe Barcode-Strings",
                        "Automatisierte Erstellung <strong>druckoptimierter Listen</strong> zur Systembereinigung"
                    ],
                    result: "Ergebnis: Die Erfassungszeit pro Palette wurde von ca. 30 Minuten auf unter 5 Minuten reduziert (83% Zeitersparnis)."
                },
                calculator: {
                    badge: "Productivity Tool",
                    title: "Praktischer Farb-Calculator für Kunststoffteile",
                    desc: "Digitalisierung von Werkstatt-Formeln: Entwicklung eines <strong>mobilen Tools</strong> zur präzisen Berechnung von Farbanteilen direkt in der Fertigung.",
                    points: [
                        "Mathematische <strong>Modellierung</strong> produktionstechnischer Mischformeln",
                        "<strong>Mobile-First Umsetzung</strong> für den flexiblen Einsatz an der Maschine",
                        "Entwurf einer <strong>minimalistischen UI</strong> für fehlerfreie Eingaben unter Zeitdruck"
                    ],
                    result: "Ergebnis: Täglich im Produktionseinsatz – ersetzt die fehleranfällige manuelle Berechnung per Taschenrechner vollständig."
                },
                portfolio: {
                    badge: "Personal Brand",
                    title: "Portfolio-Webseite mit HTML, CSS & JavaScript",
                    desc: "Design und Entwicklung einer <strong>modernen digitalen Visitenkarte</strong> zur professionellen Präsentation technischer Expertise und Projekte.",
                    points: [
                        "Fokus auf <strong>Tailwind CSS</strong> für höchste Performance und modulares Design",
                        "Implementierung <strong>dynamischer Animationen</strong> und interaktiver UI-Elemente",
                        "Automatisierte <strong>CI/CD workflows</strong> via GitHub and Netlify"
                    ],
                    result: "Ergebnis: Eine performante Online-Präsenz, die als zentraler Anlaufpunkt für meine berufliche Identität dient."
                }
            }
        },
        certificates: {
            title: "Zertifikate & Referenzen",
            subtitle: "Verifizierte Nachweise meiner Qualifikationen und bisherigen Leistungen. Klicken Sie auf ein Zertifikat, um das Originaldokument einzusehen.",
            view_pdf: "Zertifikat ansehen (PDF)",
            view_ref: "Referenz ansehen (PDF)",
            items: {
                ihk: {
                    title: "IHK Prüfungszeugnis",
                    org: "IHK Offenbach am Main · Jan 2026",
                    badge: "Gut · 87 Punkte",
                    points: [
                        "Gesamtnote: <strong class=\"text-text-DEFAULT\">Gut (87 Punkte / Note 1,9)</strong>",
                        "Betriebliche Projektarbeit: <strong class=\"text-text-DEFAULT\">Sehr gut (99/100)</strong>",
                        "Qualifikationsniveau: EQR/NQR Level 4"
                    ]
                },
                school: {
                    title: "Abschlusszeugnis der Berufsschule",
                    org: "August-Bebel-Schule Offenbach · Jan 2026",
                    badge: "Gesamtnote: 1,0",
                    points: [
                        "Gesamtnote: <strong class=\"text-text-DEFAULT\">1,0 (Eins Komma Null)</strong>",
                        "Alle Fächer: <strong class=\"text-text-DEFAULT\">Sehr gut</strong>",
                        "Berufsbezogener Unterricht: <strong class=\"text-text-DEFAULT\">Sehr gut</strong>"
                    ]
                },
                karlmayer: {
                    title: "Zwischenzeugnis",
                    org: "KARL MAYER Textilmaschinenfabrik GmbH · Jul 2025",
                    badge: "Karl Mayer · Weltmarktführer",
                    points: [
                        "\"Hervorragendes und umfassendes Fachwissen\"",
                        "\"Äußerst zuverlässig und genießt unser absolutes Vertrauen\"",
                        "Alle Aufgaben \"zu vollster Zufriedenheit\" erledigt"
                    ]
                },
                techniform: {
                    title: "Arbeitszeugnis",
                    org: "TechniForm GmbH · Apr 2023",
                    badge: "TechniForm · 2017–2023",
                    points: [
                        "\"Stets ein sehr aktiver Mitarbeiter\"",
                        "\"Weit überdurchschnittlich engagiert\"",
                        "Führung eines Teams als Schichtleitervertreter (~10 Mitarbeiter)"
                    ]
                }
            }
        },
        contact: {
            title: "Kontakt",
            subtitle: "// reach-out",
            heading: "Lass uns sprechen.",
            desc: "Ich bin immer auf der Suche nach interessanten Projekten und technischen Herausforderungen. Kontaktiere mich gerne per E-Mail oder LinkedIn.",
            response_time: "Ich bin offen für neue Herausforderungen. Ich antworte in der Regel innerhalb von 24 Stunden.",
            social_title: "In sozialen Netzwerken vernetzen",
            btn: "Sag Hallo"
        },
        footer: {
            role: ".NET / Blazor / MAUI Developer",
            impressum: "Impressum",
            privacy: "Datenschutz"
        },
        pageTitles: {
            home: "Mena Dawod | .NET Developer",
            about: "Über Mich | Mena Dawod",
            projects: "Projekte | Mena Dawod",
            certificates: "Zertifikate | Mena Dawod",
            contact: "Kontakt | Mena Dawod",
            impressum: "Impressum | Mena Dawod",
            privacy: "Datenschutz | Mena Dawod"
        },
        common: {
            back: "Zurück zur Startseite",
            legal: "// legal",
            privacy: "// privacy",
            openToWork: "Open to work, ab sofort",
            email: "E-Mail",
            phone: "Telefon",
            location: "Standort",
            youtube: "YouTube Kanal",
            github: "GitHub Profil",
            linkedin: "LinkedIn Profil",
            xing: "Xing Profil"
        },
        intro: {
            boot: [
                "Starte Portfolio-System v2.0.26...",
                "Lade C# .NET Blazor — Blazor.Hybrid.Runtime",
                "Mounting: /projects /skills /contact",
                "MVVM-Pattern geladen — DI Container bereit",
                "Git-Branch: main — letzter Commit: heute",
                "TonnenWecker.Limeshain → APK bereit",
                "Alle Systeme betriebsbereit. Willkommen."
            ],
            roles: [
                "Blazor Entwickler",
                "MAUI Hybrid Entwickler",
                "C# Enthusiast",
                "Fachinformatiker AE"
            ],
            loading: "INITIALISIERUNG",
            enter: "[ KLICKEN ZUM BETRETEN ]",
            skip: "[ Irgendwo klicken zum Betreten ]"
        }
    }
};

window.translations = translations;
