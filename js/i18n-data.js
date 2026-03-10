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
                p2: "As a career changer, I successfully completed my 3-year vocational training as an 'Application Development Specialist' ahead of schedule in just 2.5 years, graduating with an overall grade of 'Good'."
            },
            skills: {
                title: "Technical Skills",
                subtitle: "// tech-stack",
                categories: {
                    backend: "Backend & Core",
                    frontend: "Frontend & UI",
                    tools: "Tools & DevOps"
                }
            },
            career: {
                title: "My Career Path",
                subtitle: "// experience",
                items: {
                    ihk: {
                        title: "IHK Certification",
                        desc: "Specialist for Application Development",
                        stats: {
                            overall: "• IHK Grade: Good (87 Pts.)",
                            project: "• Project Work: Excellent (99/100)"
                        }
                    },
                    km: {
                        role: "Software Developer (.NET/Blazor)",
                        period: "2022 - 2025",
                        sub: "World market leader in textile machinery",
                        desc: "Apprentice Developer. Focus on production-critical software for industrial machines."
                    },
                    tf: {
                        desc: "Production Worker → Shift Leader → Process Mechanic. Leading a team of up to 10 employees."
                    },
                    de: {
                        title: "Arrival in Germany",
                        desc: "Language acquisition, orientation, overcoming bureaucratic processes."
                    },
                    eg: {
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
                    desc: "Complete migration of the application logic from JavaScript/jQuery to C# and Blazor – while maintaining the existing high-end UI design.",
                    points: [
                        "Implementation of a Single-Page-App based on MVVM architecture",
                        "Implementation of NATS communication for real-time data traffic",
                        "Use of Dependency Injection and Interfaces for decoupling",
                        "Consistent application of object-oriented principles"
                    ],
                    result: "Result: A modern, structured, and future-proof application that now serves as a scalable platform for various machine types."
                },
                feature: {
                    badge: "Production Feature",
                    title: "Development of a Customer-Specific Feature",
                    desc: "Independent analysis of third-party code and complete feature implementation within two weeks – already successfully released and in live operation.",
                    points: [
                        "Analysis and precise adjustment of complex third-party logic",
                        "Development of a central control for machine parameters in the frontend",
                        "Performance optimization by reducing unnecessary backend requests"
                    ],
                    result: "Result: Successful production launch with high stakeholder satisfaction and direct time savings for end customers."
                },
                portal: {
                    badge: "Full-Stack Web App",
                    title: "Parameter Information Portal in the Intranet",
                    desc: "Proactive Initiative: Identification of a gap in the development process and independent conception and implementation of a central information solution.",
                    points: [
                        "Implementation of a high-performance search function for > 5,000 parameters",
                        "Visualization of meta-information (ID, min/max values, read/write rights)",
                        "Development of a collaboration layer through integrated comment functions"
                    ],
                    result: "Result: Massive acceleration of the workflow for developers and service employees by eliminating manual document searches."
                },
                database: {
                    badge: "Database Design",
                    title: "Parameter Database with SQLite and EF-Core",
                    desc: "Design and construction of a high-performance central data storage to replace paper-based or unstructured documentation lists.",
                    points: [
                        "Design of the relational schema via Entity Framework Core (Code First)",
                        "Efficient persistence of over 5,000 machine parameters",
                        "Ensuring data integrity for the connected information portal"
                    ],
                    result: "Result: A structured and extensible database that serves as the 'Single Source of Truth' for the entire system."
                },
                conversion: {
                    badge: "Automation Tool",
                    title: "Localization Data Conversion (JSON → RESX)",
                    desc: "Automation of Localization: Development of a tool for error-free transformation of legacy data into the modern .NET format.",
                    points: [
                        "Programmatic analysis of complex JSON structures (27 languages)",
                        "Automated generation of RESX resource files",
                        "Integrated consistency validation of the translated strings"
                    ],
                    result: "Result: 27 languages automatically migrated – manual effort reduced from several working days to a few minutes."
                },
                tonnenwecker: {
                    badge: "App Development",
                    sub: "Limeshain",
                    title: "TonnenWecker – Limeshain",
                    desc: "Conception and development of a mobile application to digitize municipal services for the municipality of Limeshain.",
                    points: [
                        "Cross-platform development with .NET MAUI (Android/iOS)",
                        "Implementation of reliable push notifications for collection dates",
                        "Maximum offline availability through intelligent local caching"
                    ],
                    result: "Result: A practical everyday companion that strengthens citizen engagement and reliably prevents missed collection dates."
                },
                barcode: {
                    badge: "Workflow Optimization",
                    title: "Automated Batch Number Recording",
                    desc: "Process Optimization in Mask Production: Complete automation of manual recording of faulty pallet rolls.",
                    points: [
                        "Development of a specialized web tool for barcode scanners",
                        "Implementation of an intelligent parser for complex barcode strings",
                        "Automated creation of print-optimized lists for system cleanup"
                    ],
                    result: "Result: The recording time per pallet was reduced from approx. 30 minutes to under 5 minutes (83% time saving)."
                },
                calculator: {
                    badge: "Productivity Tool",
                    title: "Practical Color-Calculator for Plastic Parts",
                    desc: "Digitization of Workshop Formulas: Development of a mobile tool for precise calculation of color proportions directly in production.",
                    points: [
                        "Mathematical modeling of production mixing formulas",
                        "Mobile-first implementation for flexible use at the machine",
                        "Design of a minimalist UI for error-free entries under time pressure"
                    ],
                    result: "Result: In daily production use – completely replaces error-prone manual calculation by calculator."
                },
                portfolio: {
                    badge: "Personal Brand",
                    title: "Portfolio Website with HTML, CSS & JavaScript",
                    desc: "Design and development of a modern digital business card for professional presentation of technical expertise and projects.",
                    points: [
                        "Focus on Tailwind CSS for highest performance and modular design",
                        "Implementation of dynamic animations and interactive UI elements",
                        "Automated CI/CD workflows via GitHub and Netlify"
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
                        "Overall Grade: Good (87 Points / Grade 1.9)",
                        "Final Project: Excellent (99/100)",
                        "Qualification Level: EQF/NQF Level 4"
                    ]
                },
                school: {
                    title: "Vocational School Diploma",
                    org: "August-Bebel-Schule Offenbach · Jan 2026",
                    badge: "Overall Grade: 1.0",
                    points: [
                        "Overall Grade: 1.0 (A+)",
                        "All Subjects: Excellent",
                        "Professional Education: Excellent"
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
                p2: "As a career changer, I successfully completed my 3-year vocational training as an 'Application Development Specialist' ahead of schedule in just 2.5 years, graduating with an overall grade of 'Good'."
            },
            skills: {
                title: "Technische Fähigkeiten",
                subtitle: "// tech-stack",
                categories: {
                    backend: "Backend & Core",
                    frontend: "Frontend & UI",
                    tools: "Tools & DevOps"
                }
            },
            career: {
                title: "Mein Werdegang",
                subtitle: "// experience",
                items: {
                    ihk: {
                        title: "IHK Zertifizierung",
                        desc: "Fachinformatiker für Anwendungsentwicklung",
                        stats: {
                            overall: "• IHK Abschluss: Gut (87 Pkt.)",
                            project: "• Projektarbeit: Sehr gut (99/100)"
                        }
                    },
                    km: {
                        role: "Softwareentwickler (.NET/Blazor)",
                        period: "2022 - 2025",
                        sub: "Weltmarktführer Textilmaschinenbau",
                        desc: "Auszubildender Fachinformatiker AE. Entwicklung von produktiver Software für Industriemaschinen."
                    },
                    tf: {
                        desc: "Produktionsmitarbeiter → Schichtleiter → Verfahrensmechaniker. Leitung eines Teams von bis zu 10 Mitarbeitern."
                    },
                    de: {
                        title: "Ankunft in Deutschland",
                        desc: "Spracherwerb, Orientierung, Bewältigung bürokratischer Prozesse."
                    },
                    eg: {
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
                    desc: "Vollständige Migration der Anwendungslogik von JavaScript/jQuery nach C# und Blazor – unter Beibehaltung des bestehenden High-End UI-Designs.",
                    points: [
                        "Realisierung einer Single-Page-App auf Basis der MVVM-Architektur",
                        "Implementierung der NATS-Kommunikation für Echtzeit-Datenverkehr",
                        "Einsatz von Dependency Injection und Interfaces zur Entkoppelung",
                        "Konsequente Anwendung objektorientierter Prinzipien"
                    ],
                    result: "Ergebnis: Eine moderne, strukturierte und zukunftssichere Anwendung, die nun als skalierbare Plattform für verschiedene Maschinentypen dient."
                },
                feature: {
                    badge: "Production Feature",
                    title: "Entwicklung eines kundenspezifischen Features",
                    desc: "Eigenständige Analyse von Fremdcode und vollständige Feature-Implementierung innerhalb von zwei Wochen – bereits erfolgreich freigegeben und im Live-Betrieb.",
                    points: [
                        "Analyse und präzise Anpassung komplexer Drittanbieter-Logik",
                        "Entwicklung einer zentralen Steuerung für Maschinen-Parameter im Frontend",
                        "Optimierung der Performance durch Reduktion unnötiger Backend-Requests"
                    ],
                    result: "Ergebnis: Erfolgreiche Produktivsetzung mit hoher Stakeholder-Zufriedenheit und direkter Zeitersparnis für Endkunden."
                },
                portal: {
                    badge: "Full-Stack Web App",
                    title: "Parameter-Informationsportal im Intranet",
                    desc: "Eigeninitiative: Identifikation einer Lücke im Entwicklungsprozess und selbstständige Konzeption sowie Umsetzung einer zentralen Informationslösung.",
                    points: [
                        "Implementierung einer Hochleistungs-Suchfunktion für > 5.000 Parameter",
                        "Visualisierung von Meta-Informationen (ID, Min/Max-Werte, Lese-/Schreibrechte)",
                        "Entwicklung einer Kollaborations-Ebene durch integrierte Kommentarfunktionen"
                    ],
                    result: "Ergebnis: Massive Beschleunigung des Workflows für Entwickler und Servicemitarbeiter durch den Wegfall manueller Dokumentensuche."
                },
                database: {
                    badge: "Database Design",
                    title: "Parameter-Datenbank mit SQLite und EF-Core",
                    desc: "Design und Aufbau einer performanten zentralen Datenhaltung zur Ablösung papierbasierter oder unstrukturierter Dokumentationslisten.",
                    points: [
                        "Entwurf des relationalen Schemas via Entity Framework Core (Code First)",
                        "Effiziente Persistierung von über 5.000 Maschinenparametern",
                        "Gewährleistung der Datenintegrität für das angeschlossene Informationsportal"
                    ],
                    result: "Ergebnis: Eine strukturierte und erweiterbare Datenbasis, die als „Single Source of Truth“ für das gesamte System dient."
                },
                conversion: {
                    badge: "Automation Tool",
                    title: "Lokalisierungsdaten-Konvertierung (JSON → RESX)",
                    desc: "Automatisierung der Lokalisierung: Entwicklung eines Tools zur fehlerfreien Transformation von Altdaten in das moderne .NET-Format.",
                    points: [
                        "Programmgesteuerte Analyse komplexer JSON-Strukturen (27 Sprachen)",
                        "Automatisierte Generierung von RESX-Ressourcendateien",
                        "Integrierte Konsistenz-Validierung der übersetzten Strings"
                    ],
                    result: "Ergebnis: 27 Sprachen automatisch migriert – manueller Aufwand von mehreren Arbeitstagen auf wenige Minuten reduziert."
                },
                tonnenwecker: {
                    badge: "App Development",
                    sub: "Limeshain",
                    title: "TonnenWecker – Limeshain",
                    desc: "Konzeption und Entwicklung einer mobilen Anwendung zur Digitalisierung kommunaler Services für die Gemeinde Limeshain.",
                    points: [
                        "Plattformübergreifende Entwicklung mit .NET MAUI (Android/iOS)",
                        "Implementierung zuverlässiger Push-Benachrichtigungen für Abfuhrtermine",
                        "Maximale Offline-Verfügbarkeit durch intelligentes lokales Caching"
                    ],
                    result: "Ergebnis: Ein praktischer Alltagsbegleiter, der die Bürgerbindung stärkt und verpasste Abfuhrtermine zuverlässig verhindert."
                },
                barcode: {
                    badge: "Workflow Optimization",
                    title: "Automatisierte Chargennummer-Erfassung",
                    desc: "Prozessoptimierung in der Maskenproduktion: Vollständige Automatisierung der manuellen Erfassung fehlerhafter Palettenrollen.",
                    points: [
                        "Entwicklung eines spezialisierten Web-Tools für Barcode-Scanner",
                        "Implementierung eines intelligenten Parsers für komplexe Barcode-Strings",
                        "Automatisierte Erstellung druckoptimierter Listen zur Systembereinigung"
                    ],
                    result: "Ergebnis: Die Erfassungszeit pro Palette wurde von ca. 30 Minuten auf unter 5 Minuten reduziert (83% Zeitersparnis)."
                },
                calculator: {
                    badge: "Productivity Tool",
                    title: "Praktischer Farb-Calculator für Kunststoffteile",
                    desc: "Digitalisierung von Werkstatt-Formeln: Entwicklung eines mobilen Tools zur präzisen Berechnung von Farbanteilen direkt in der Fertigung.",
                    points: [
                        "Mathematische Modellierung produktionstechnischer Mischformeln",
                        "Mobile-First Umsetzung für den flexiblen Einsatz an der Maschine",
                        "Entwurf einer minimalistischen UI für fehlerfreie Eingaben unter Zeitdruck"
                    ],
                    result: "Ergebnis: Täglich im Produktionseinsatz – ersetzt die fehleranfällige manuelle Berechnung per Taschenrechner vollständig."
                },
                portfolio: {
                    badge: "Personal Brand",
                    title: "Portfolio-Webseite mit HTML, CSS & JavaScript",
                    desc: "Design und Entwicklung einer modernen digitalen Visitenkarte zur professionellen Präsentation technischer Expertise und Projekte.",
                    points: [
                        "Fokus auf Tailwind CSS für höchste Performance und modulares Design",
                        "Implementierung dynamischer Animationen und interaktiver UI-Elemente",
                        "Automatisierte CI/CD-Workflows via GitHub und Netlify"
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
                        "Gesamtnote: Gut (87 Punkte / Note 1,9)",
                        "Betriebliche Projektarbeit: Sehr gut (99/100)",
                        "Qualifikationsniveau: EQR/NQR Level 4"
                    ]
                },
                school: {
                    title: "Abschlusszeugnis der Berufsschule",
                    org: "August-Bebel-Schule Offenbach · Jan 2026",
                    badge: "Gesamtnote: 1,0",
                    points: [
                        "Gesamtnote: 1,0 (Eins Komma Null)",
                        "Alle Fächer: Sehr gut",
                        "Berufsbezogener Unterricht: Sehr gut"
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
