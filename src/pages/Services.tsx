import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies."
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence."
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that engage and convert."
    },
    {
      title: "Consulting",
      description: "Expert guidance to help you make informed digital decisions."
    }
  ];

  return (
    <div className="space-y-12">
      <h1 className="page-title">Our Services</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;