import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6 py-16">
        <h1 className="text-5xl font-bold text-primary">Welcome to Da Nu Breed</h1>
        <p className="text-xl text-orange-600 max-w-2xl mx-auto">
          We create amazing digital experiences that help businesses grow and succeed in the modern world.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link to="/services">Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Innovation",
            description: "Cutting-edge solutions for modern problems"
          },
          {
            title: "Quality",
            description: "Exceptional standards in everything we do"
          },
          {
            title: "Results",
            description: "Measurable impact for your business"
          }
        ].map((feature) => (
          <div key={feature.title} className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
