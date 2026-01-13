import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, Clock, ArrowLeft, Code, Layout, Palette, Terminal, ChevronRight, Package, Layers, Zap, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPost5 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-primary">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4">
                Tutorial
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slide-up">
                Building Your First Web Application with React
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span>Tech Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-accent" />
                  <span>November 20, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>12 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-12 flex items-center justify-center">
                <Code size={80} className="text-primary/50" />
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  React has become the most popular JavaScript library for building user interfaces. Created by Facebook, it powers millions of websites including Instagram, Netflix, and Airbnb. In this comprehensive tutorial, you'll learn the fundamentals of React and build your first application from scratch.
                </p>

                {/* Section 1 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Why React?</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-card border border-border rounded-xl p-5">
                      <Layout size={24} className="text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Component-Based</h4>
                      <p className="text-sm text-muted-foreground">
                        Build encapsulated components that manage their own state, then compose them to make complex UIs.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <Zap size={24} className="text-accent mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Virtual DOM</h4>
                      <p className="text-sm text-muted-foreground">
                        React's virtual DOM ensures efficient updates, making your applications fast and responsive.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <Package size={24} className="text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Rich Ecosystem</h4>
                      <p className="text-sm text-muted-foreground">
                        Vast library of tools, packages, and community resources to accelerate development.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <Code size={24} className="text-accent mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Learn Once, Write Anywhere</h4>
                      <p className="text-sm text-muted-foreground">
                        Use React for web, mobile (React Native), and even desktop applications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Terminal size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Prerequisites</h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Before diving into React, make sure you're comfortable with these fundamentals:
                  </p>
                  
                  <div className="bg-card border border-border rounded-xl p-6 my-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span><strong>HTML/CSS:</strong> Understanding of semantic HTML and CSS styling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span><strong>JavaScript ES6+:</strong> Arrow functions, destructuring, spread operator, modules</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span><strong>Node.js & npm:</strong> Basic understanding of package management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span><strong>Command Line:</strong> Navigating directories and running commands</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileCode size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Setting Up Your First React Project</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Step 1: Create a New React App</h4>
                      <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                        <code className="text-green-400">
                          # Using Vite (recommended)<br/>
                          npm create vite@latest my-react-app -- --template react<br/>
                          cd my-react-app<br/>
                          npm install<br/>
                          npm run dev
                        </code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Step 2: Understand the Project Structure</h4>
                      <div className="bg-card border border-border rounded-xl p-4 font-mono text-sm">
                        <pre className="text-muted-foreground whitespace-pre-wrap">
{`my-react-app/
├── node_modules/     # Dependencies
├── public/           # Static assets
├── src/
│   ├── App.jsx       # Main component
│   ├── App.css       # Component styles
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── package.json      # Project config
└── vite.config.js    # Vite config`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Layers size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Core React Concepts</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-3">1. Components</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Components are the building blocks of React applications. They're reusable pieces of UI that can accept inputs (props) and return React elements.
                      </p>
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                        <code className="text-green-400">
{`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="IEEE Member" />`}
                        </code>
                      </div>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-3">2. JSX</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        JSX is a syntax extension that lets you write HTML-like code in JavaScript. It makes component creation intuitive and readable.
                      </p>
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                        <code className="text-green-400">
{`const element = (
  <div className="card">
    <h2>Welcome to React</h2>
    <p>This is JSX in action!</p>
  </div>
);`}
                        </code>
                      </div>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-3">3. State with useState</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        State allows components to manage and update their data. When state changes, React re-renders the component.
                      </p>
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                        <code className="text-green-400">
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
                        </code>
                      </div>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-3">4. Effects with useEffect</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        useEffect lets you perform side effects in components, like fetching data or subscribing to events.
                      </p>
                      <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                        <code className="text-green-400">
{`import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []); // Empty array = run once
  
  return <div>{data}</div>;
}`}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Palette size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Building a Simple Todo App</h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Let's put it all together by building a simple Todo application. This project will cover components, state management, and event handling.
                  </p>
                  
                  <div className="bg-gray-900 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                    <code className="text-green-400">
{`import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div className="todo-app">
      <h1>My Todos</h1>
      <div className="input-section">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
                    </code>
                  </div>
                </div>

                {/* Resources */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Package size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Next Steps & Resources</h2>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Learn Next</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• React Router for navigation</li>
                          <li>• State management (Redux, Zustand)</li>
                          <li>• API integration with React Query</li>
                          <li>• Styling with Tailwind CSS</li>
                          <li>• Testing with Jest & React Testing Library</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Helpful Resources</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Official React Documentation (react.dev)</li>
                          <li>• Scrimba React Course (Free)</li>
                          <li>• React Patterns & Best Practices</li>
                          <li>• Full Stack Open (University of Helsinki)</li>
                          <li>• IEEE ABESIT React Workshops</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-card border border-primary/20 rounded-xl p-6 mb-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Keep Building!</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The best way to learn React is by building projects. Start small, experiment often, and don't be afraid to break things. Join our IEEE workshops where we conduct hands-on React sessions and help you build portfolio-worthy projects. Happy coding!
                  </p>
                </div>

                {/* Author Bio */}
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">T</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Tech Team</h4>
                    <p className="text-sm text-muted-foreground">
                      The Tech Team at IEEE ABESIT comprises passionate developers who love sharing knowledge about modern web technologies and helping students build their first applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-12 pt-8 border-t border-border">
                <Link to="/blog/4">
                  <Button variant="outline">
                    <ArrowLeft size={16} className="mr-2" />
                    Previous Article
                  </Button>
                </Link>
                <Link to="/blog/6">
                  <Button variant="default">
                    Next Article
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost5;
