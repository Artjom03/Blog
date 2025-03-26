// import Link from 'next/link'

export default function TypeScriptBestPractices() {
  const practices = [
    {
      title: "Use Strict TypeScript Configuration",
      description: "Enable strict mode in tsconfig.json for better type safety",
      code: `{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}`,
      explanation: "This ensures better type checking and catches potential errors early in development."
    },
    {
      title: "Proper Interface and Type Usage",
      description: "Define clear interfaces for objects and use types for unions/intersections",
      code: `interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};`,
      explanation: "Interfaces provide clear contracts for objects, while types are great for complex type compositions."
    },
    {
      title: "Avoid Type 'any'",
      description: "Use specific types instead of 'any' to maintain type safety",
      code: `// Bad
function processData(data: any): any {
  return data.value;
}

// Good
interface DataType {
  value: string;
}
function processData(data: DataType): string {
  return data.value;
}`,
      explanation: "Using 'any' defeats the purpose of TypeScript's type checking system."
    },
    {
      title: "Utilize Generics",
      description: "Use generics for reusable, type-safe components and functions",
      code: `function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Usage
const numbers = getFirstElement([1, 2, 3]); // type: number
const strings = getFirstElement(['a', 'b']); // type: string`,
      explanation: "Generics provide type safety while maintaining code reusability."
    }
  ]

  const externalResources = [
    {
      title: "Official TypeScript Documentation",
      url: "https://www.typescriptlang.org/docs/",
      description: "Comprehensive guide and reference for TypeScript"
    },
    {
      title: "Angular Style Guide",
      url: "https://angular.io/guide/styleguide",
      description: "Official Angular style guide with TypeScript best practices"
    },
    {
      title: "TypeScript Deep Dive",
      url: "https://basarat.gitbook.io/typescript/",
      description: "In-depth TypeScript guide by Basarat Ali Syed"
    }
  ]

  const commonPitfalls = [
    {
      title: "Type Assertions Overuse",
      description: "Avoid excessive use of type assertions (as Type). Instead, use proper type declarations and let TypeScript infer types when possible.",
      example: "const userInput = event.target as HTMLInputElement; // Use sparingly"
    },
    {
      title: "Ignoring Null/Undefined",
      description: "Always handle potential null/undefined values explicitly",
      example: "function getName(user: User | null): string { return user?.name ?? 'Unknown'; }"
    }
  ]

  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
              Tutorial
            </span>
            <span className="text-gray-400">10 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 animate-slideDown">
            TypeScript Best Practices in Production
          </h1>
          <p className="text-gray-300 text-lg">
            Learn the best practices for writing clean and maintainable TypeScript code.
          </p>
          <div className="mt-4 text-sm text-gray-400">
            Week 2 - Best Practices
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {practices.map((practice, index) => (
            <section 
              key={index}
              className="bg-[#1e2432] rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {practice.title}
              </h2>
              <p className="text-gray-300 mb-4">
                {practice.description}
              </p>
              <pre className="bg-[#1a1f2b] p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-blue-400">
                  {practice.code}
                </code>
              </pre>
              <p className="text-gray-400 text-sm">
                {practice.explanation}
              </p>
            </section>
          ))}

          {/* Common Pitfalls */}
          <section className="bg-[#1e2432] rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Common Pitfalls to Avoid
            </h2>
            <div className="space-y-4">
              {commonPitfalls.map((pitfall, index) => (
                <div key={index} className="bg-[#2d3548] rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">
                    {pitfall.title}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {pitfall.description}
                  </p>
                  <code className="block bg-[#1a1f2b] p-2 rounded text-blue-400">
                    {pitfall.example}
                  </code>
                </div>
              ))}
            </div>
          </section>

          {/* External Resources */}
          <section className="bg-[#1e2432] rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Additional Resources
            </h2>
            <div className="grid gap-4">
              {externalResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-[#2d3548] rounded-lg hover:bg-[#353d54] transition-colors"
                >
                  <h3 className="text-blue-400 font-medium mb-1">
                    {resource.title} ↗
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 