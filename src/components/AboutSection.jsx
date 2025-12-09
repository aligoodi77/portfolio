import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Front-End Developer in Progress & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m an aspiring front-end developer building responsive,
              accessible, and performant web apps using React, Next.js and
              modern tools. Currently focusing on real projects and continuous
              learning.
            </p>

            <p className="text-muted-foreground">
              I enjoy turning complex problems into clean user experiences and
              always experiment with new front-end patterns and performance
              techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* ====== Update this href to your real CV URL ======
                  Option A: If you host the PDF in the same site public folder:
                    href="/AliGoodi_CV.pdf"
                  Option B: If you host the PDF on your GitHub repo use raw URL:
                    href="https://raw.githubusercontent.com/aligoodi77/REPO_NAME/main/AliGoodi_CV.pdf"
                  Replace REPO_NAME and path with your repo/file path.
              */}
              <a
                href="https://raw.githubusercontent.com/aligoodi77/CV/main/Ali__Goudarzi.pdf"
                download="AliGoodi_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

              <a
                href="https://github.com/aligoodi77"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                My GitHub
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* cards */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive websites & apps with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Responsive UI</h4>
                  <p className="text-muted-foreground">
                    Focus on accessibility and smooth UX across devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Work</h4>
                  <p className="text-muted-foreground">
                    Hands-on projects, GitHub repos linkable below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
