'use client'
import Link from 'next/link'

interface Step {
  title: string;
  description: string;
  command?: string;  // Make command optional
}

interface SectionType {  // Renamed from Section to SectionType
  title: string;
  content: string;
  items?: string[];
  steps?: Step[];
  extensions?: { name: string; description: string; }[];
  folders?: { name: string; description: string; }[];
  practices?: string[];
}

export default function GettingStartedAngular() {
  const sections: SectionType[] = [
    {
      title: "Prerequisites",
      content: "Before starting with Angular at VAB, ensure you have:",
      items: [
        "Node.js",
        "npm (comes with Node.js)",
        "SourceTree for Git management",
        "Visual Studio (Code)",
        "TypeScript knowledge"
      ]
    },
    {
      title: "Setting Up Your Development Environment",
      content: "Follow these steps to set up your Angular development environment:",
      steps: [
        {
          title: "Install SourceTree",
          command: "Download from sourcetreeapp.com",
          description: "VAB uses SourceTree for Git management. It provides a user-friendly interface for Git operations."
        },
        {
          title: "Configure SourceTree",
          command: "Add your Bitbucket/GitHub credentials",
          description: "Set up your Git credentials in SourceTree and add the repository URL provided by your team lead."
        },
        {
          title: "Clone the Project",
          command: "Use SourceTree's Clone option",
          description: "In SourceTree: File > Clone/New > Paste repository URL > Choose local path > Clone"
        },
        {
          title: "Install Angular CLI",
          command: "npm install -g @angular/cli",
          description: "This installs the Angular Command Line Interface globally on your machine."
        },
        {
          title: "Install Dependencies",
          command: "npm install",
          description: "Install all project dependencies listed in package.json."
        }
      ]
    },
    {
      title: "Essential VSCode Extensions",
      content: "Install these extensions for better development experience:",
      extensions: [
        {
          name: "Angular Language Service",
          description: "Provides intelligent code completion and error detection"
        },
        {
          name: "ESLint",
          description: "Ensures code quality and maintains consistent style"
        },
        {
          name: "Angular Console",
          description: "GUI for Angular CLI commands"
        }
      ]
    },
    {
      title: "Project Structure",
      content: "Understanding the VAB project structure:",
      folders: [
        {
          name: "src/app/features/",
          description: "Contains feature modules and components"
        },
        {
          name: "src/app/shared/",
          description: "Shared components, pipes, and directives"
        },
        {
          name: "src/app/core/",
          description: "Core services and guards"
        }
      ]
    },
    {
      title: "Development Workflow",
      content: "Follow these best practices when developing:",
      practices: [
        "Create feature branches for new work",
        "Follow Angular style guide",
        "Implement proper error handling"
      ]
    },
    {
      title: "Git Workflow with SourceTree",
      content: "Follow these steps for version control:",
      steps: [
        {
          title: "Create Feature Branch",
          description: "In SourceTree: Branch > New Branch > Name it following the convention: feature/your-feature-name",
        },
        {
          title: "Make Changes",
          description: "Work on your feature and stage changes using SourceTree's File Status view",
        },
        {
          title: "Commit Changes",
          description: "Write clear commit messages following the team's convention",
        },
        {
          title: "Push Changes",
          description: "Push your feature branch to remote using the Push button",
        },
        {
          title: "Create Pull Request",
          description: "Use Bitbucket/GitHub to create a pull request for code review",
        }
      ]
    }
  ]

  const relatedLinks = [
    {
      title: "TypeScript Best Practices",
      href: "/blog/typescript-best-practices",
      description: "Learn essential TypeScript patterns used in our Angular projects"
    },
    {
      title: "Week 1 Report",
      href: "/weeks/1",
      description: "See how I applied these concepts in my first week"
    },
    {
      title: "Intern Tips",
      href: "/blog/intern-tips",
      description: "General advice for new interns at VAB"
    }
  ]

  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 animate-slideDown">
            Getting Started with Angular at VAB
          </h1>
          <p className="text-gray-300 text-lg">
            A comprehensive guide for new interns on setting up and understanding the Angular development environment
          </p>
          <div className="mt-4 text-sm text-gray-400">
            Part of Week 1 Onboarding
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section 
              key={index}
              className="bg-[#1e2432] rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-300 mb-4">{section.content}</p>

              {section.items && (
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.steps && (
                <div className="relative space-y-4">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#2d3548]" />
                  {section.steps.map((step, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="absolute left-0 w-8 h-8 flex items-center justify-center transform -translate-x-1/2 bg-[#2d3548] rounded-full">
                        <span className="text-white text-sm">{i + 1}</span>
                      </div>
                      <div className="bg-[#2d3548] rounded-lg p-4">
                        <h3 className="text-white font-medium mb-2">{step.title}</h3>
                        {step.command && (
                          <code className="block bg-[#1a1f2b] p-2 rounded text-blue-400 mb-2">
                            {step.command}
                          </code>
                        )}
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.extensions && (
                <div className="space-y-3">
                  {section.extensions.map((ext, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <div>
                        <span className="text-white font-medium">{ext.name}</span>
                        <p className="text-gray-400">{ext.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.folders && (
                <div className="space-y-3">
                  {section.folders.map((folder, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-400">📁</span>
                      <div>
                        <span className="text-white font-medium">{folder.name}</span>
                        <p className="text-gray-400">{folder.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.practices && (
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {section.practices.map((practice, i) => (
                    <li key={i}>{practice}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Related Links */}
        <div className="mt-12 bg-[#1e2432] rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Related Content</h2>
          <div className="grid gap-4">
            {relatedLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="block p-4 bg-[#2d3548] rounded-lg hover:bg-[#353d54] transition-colors"
              >
                <h3 className="text-blue-400 font-medium mb-1">{link.title}</h3>
                <p className="text-gray-400 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 