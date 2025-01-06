import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-12">
      <h1 className="page-title">About Us</h1>
      
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-600 mb-8">
          We are a passionate team dedicated to creating exceptional digital experiences. 
          With years of experience and a commitment to excellence, we help businesses 
          transform their digital presence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with innovative digital solutions that drive growth 
              and create lasting value for our clients.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="section-title">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading provider of digital transformation solutions, 
              recognized for our excellence and innovation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;