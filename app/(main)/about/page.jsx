export default function AboutPage() {
    return (
      <div className="min-h-screen bg-muted/50 text-muted-foreground">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-6 text-center text-foreground">About MediMeet</h1>
          <p className="text-lg mb-10 text-center max-w-2xl mx-auto">
            MediMeet is a modern platform that bridges the gap between patients and healthcare professionals. 
            Our mission is to make healthcare more accessible, efficient, and personalized through technology.
          </p>
  
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Vision</h2>
              <p>
                We envision a world where healthcare is seamless and universally accessible. 
                MediMeet empowers users to book appointments, consult doctors, and manage health records from anywhere.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Values</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Accessibility for all</li>
                <li>Security and privacy first</li>
                <li>Empowering healthcare professionals</li>
                <li>Continuous innovation</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 text-center text-sm">
            <p>
              Built with ❤️ using Next.js, shadcn/ui, Neon, Clerk & Vongue.
            </p>
          </div>
        </div>
      </div>
    );
  }
  