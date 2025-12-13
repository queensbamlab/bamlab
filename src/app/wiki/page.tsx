import { Metadata } from "next";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  MessageSquare,
  BookOpen,
  Download,
  ExternalLink,
  Folder,
  Laptop,
} from "lucide-react";

import Link from "next/link";
import FileLink from "@/components/file-link";
import {
  computingResources,
  templates,
  communicationTools,
  quickLinks,
} from "@/lib/wiki";

export const metadata: Metadata = {
  title: "Lab Wiki & Resources",
  description: "Internal resources, templates, and links for BAM Lab members.",
};

const Page = () => {
  return (
    <div className="container py-12 max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3 text-primary">
          Lab Wiki & Resources
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl font-serif">
          Internal resources, templates, and links for BAM Lab members. Bookmark
          this page for quick access to everything you need.
        </p>
      </div>
      <Tabs defaultValue="templates" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-2 bg-transparent p-0">
          <TabsTrigger
            value="templates"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <FileText className="h-4 w-4 mr-2" />
            Templates
          </TabsTrigger>
          <TabsTrigger
            value="communication"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Communication
          </TabsTrigger>

          {/* <TabsTrigger
            value="handbooks"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Handbooks
          </TabsTrigger> */}
          <TabsTrigger
            value="computing"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Laptop className="h-4 w-4 mr-2" />
            Computing
          </TabsTrigger>
        </TabsList>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card
                key={template.title}
                className="group hover:shadow-md transition-shadow rounded-md justify-between"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <Folder className="h-8 w-8 text-primary mb-2" />
                    <Badge variant="secondary" className="rounded-md">
                      {template.format}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <CardDescription className="font-serif ">
                    {template.description}
                    {template.samples && (
                      <div className="md:flex gap-y-2 gap-x-4 mb-4">
                        {template.samples.map((sample, i) => (
                          <Button
                            key={i}
                            asChild
                            variant={"link"}
                            size="sm"
                            className="px-0"
                          >
                            <FileLink href={sample.file || ""}>
                              {sample.title}
                            </FileLink>
                          </Button>
                        ))}
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Updated {template.updated}
                    </span>

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="gap-2 bg-transparent"
                    >
                      <FileLink href={template.file || ""}>
                        <Download className="h-3 w-3" />
                        Download
                      </FileLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Communication Tab */}
        <TabsContent value="communication" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {communicationTools.map((tool) => (
              <Card
                key={tool.name}
                className="hover:shadow-md transition-shadow rounded-md"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                  </div>
                  <CardDescription className="font-serif">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Workspace</p>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      {tool.workspace}
                    </code>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Key Channels</p>
                    <div className="flex flex-wrap gap-1">
                      {tool.channels.map((channel) => (
                        <Badge
                          key={channel}
                          variant="outline"
                          className="text-xs"
                        >
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full gap-2">
                    <Link href={tool.link}>
                      <ExternalLink className="h-4 w-4" />
                      Open {tool.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Computing Tab */}
        <TabsContent value="computing" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {computingResources.map((resource) => (
              <Card
                key={resource.name}
                className="hover:shadow-md transition-shadow rounded-md"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <Badge
                      className="rounded-md"
                      variant={
                        resource.status === "Online" ? "default" : "secondary"
                      }
                    >
                      {resource.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Specifications
                    </p>
                    <p className="text-sm">{resource.specs}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Access
                    </p>
                    <p className="text-sm">{resource.access}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      {/* Quick Links Sidebar */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted transition-colors group"
            >
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <p className="font-medium text-sm">{link.name}</p>
                <p className="text-xs text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
