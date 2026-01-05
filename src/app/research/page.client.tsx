"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
// import ExportedImage from "next-image-export-optimizer";

import researchAreas from "@/lib/research";
import { Separator } from "@/components/ui/separator";

const ClientPage = () => {
  return (
    <div className="container py-12 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Research Areas
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl font-serif">
          Our lab conducts cutting-edge research across multiple domains of
          artificial intelligence and machine learning.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16">
        {researchAreas.map((area) => {
          const Icon = area.icon;
          const { active, complete } = area.projects.reduce(
            (acc, item) => {
              if (item.status === "Active") acc.active.push(item);
              else if (item.status === "Complete") acc.complete.push(item);
              return acc;
            },
            {
              active: [] as typeof area.projects,
              complete: [] as typeof area.projects,
            }
          );

          return (
            <Card className="rounded-md" key={area.id}>
              <CardHeader>
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="size-6 text-primary" />
                </div>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col min-[360px]:flex-row gap-2">
                <Badge variant={"secondary"} className="rounded-md">
                  {active.length} Active Projects
                </Badge>
                <Badge variant={"secondary"} className="rounded-md">
                  {complete.length} Completed Projects
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <Tabs defaultValue="cog" className="space-y-8">
          <TabsList className="flex-wrap h-auto">
            {researchAreas.map((area) => (
              <TabsTrigger key={area.id} value={area.id}>
                {area.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {researchAreas.map((area) => {
            const { active, complete } = area.projects.reduce(
              (acc, item) => {
                if (item.status === "Active") acc.active.push(item);
                else if (item.status === "Complete") acc.complete.push(item);
                return acc;
              },
              {
                active: [] as typeof area.projects,
                complete: [] as typeof area.projects,
              }
            );
            return (
              <TabsContent key={area.id} value={area.id} className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {active.length === 0 ? (
                    <div className="col-span-full py-12 text-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
                      <p className="text-muted-foreground font-serif italic">
                        No active projects in this category at the moment.
                      </p>
                    </div>
                  ) : (
                    active.map((project, i) => (
                      <Card key={i} className="rounded-md">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Badge className="rounded-md">
                              {project.status}
                            </Badge>
                            {project.funding.length >= 1 && (
                              <div className="space-x-2">
                                {project.funding.map((fund, j) => (
                                  <Badge
                                    variant={"secondary"}
                                    key={j}
                                    className="rounded-md"
                                  >
                                    {fund}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <CardTitle className="text-lg">
                            {project.title}
                          </CardTitle>
                          {/* <CardDescription>{project.description}</CardDescription> */}
                        </CardHeader>
                      </Card>
                    ))
                  )}
                </div>
                <Separator className="my-4" />
                <div className="grid md:grid-cols-2 gap-6">
                  {complete.map((project, i) => (
                    <Card key={i} className="rounded-md">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant={"outline"} className="rounded-md">
                            {project.status}
                          </Badge>
                          {project.funding.length >= 1 && (
                            <div className="space-x-2">
                              {project.funding.map((fund, j) => (
                                <Badge
                                  variant={"secondary"}
                                  key={j}
                                  className="rounded-md"
                                >
                                  {fund}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
    </div>
  );
};

export default ClientPage;
