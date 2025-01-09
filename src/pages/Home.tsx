import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section with animated background */}
      <section className="text-center space-y-6 py-16 relative overflow-hidden">
        {/* Background animated layers */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-orange-100/30 rounded-full animate-[spin_30s_linear_infinite] blur-3xl" />
          <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full animate-[spin_25s_linear_infinite_reverse] blur-3xl" />
          <div className="absolute w-[400px] h-[400px] bg-secondary/20 rounded-full animate-[spin_20s_linear_infinite] blur-3xl" />
        </div>

        {/* Content with animations */}
        <div className="relative">
          <h1 className="text-5xl font-bold text-orange-500 animate-fade-in">
            Welcome to Da Nu Breed
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4 animate-[fade-in_0.5s_ease-out_0.3s_both]">
            We are global leaders in the modern world.
          </p>
          <div className="flex justify-center gap-4 mt-8 animate-[fade-in_0.5s_ease-out_0.6s_both]">
            <Button asChild>
              <Link to="/services">Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="grid md:grid-cols-3 gap-8 relative animate-[fade-in_0.5s_ease-out_0.9s_both]">
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
            description: "Measurable impact for your life"
          }
        ].map((feature, index) => (
          <div 
            key={feature.title} 
            className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:scale-105 transition-transform"
            style={{
              animationDelay: `${(index + 1) * 0.2}s`
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Zigzag Layout Section */}
      <section className="space-y-16 animate-[fade-in_0.5s_ease-out_1.2s_both]">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        {[
          {
            title: "Expert Team",
            description: "Our team of experts brings years of experience and knowledge to every project.",
            imagePosition: "right"
          },
          {
            title: "Innovative Solutions",
            description: "We leverage cutting-edge technology to deliver outstanding results.",
            imagePosition: "left"
          },
          {
            title: "Customer Success",
            description: "Your success is our priority. We're committed to exceeding expectations.",
            imagePosition: "right"
          }
        ].map((item, index) => (
          <div 
            key={item.title}
            className={`flex flex-col ${item.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 py-8`}
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-orange-100 to-primary/20 aspect-video rounded-lg"></div>
            </div>
          </div>
        ))}
      </section>

      {/* Cards Grid Layout */}
      <section className="animate-[fade-in_0.5s_ease-out_1.5s_both]">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Digital Transformation",
              description: "Transform your business with cutting-edge digital solutions"
            },
            {
              title: "Strategy Consulting",
              description: "Expert guidance for your business growth and success"
            },
            {
              title: "Technology Solutions",
              description: "Custom technology solutions for your unique needs"
            },
            {
              title: "Data Analytics",
              description: "Turn your data into actionable insights"
            },
            {
              title: "Cloud Services",
              description: "Secure and scalable cloud infrastructure solutions"
            },
            {
              title: "Cybersecurity",
              description: "Protect your business with advanced security measures"
            }
          ].map((service, index) => (
            <Card 
              key={service.title}
              className="hover:scale-105 transition-transform"
            >
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;