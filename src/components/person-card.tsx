import type { PersonProps } from "@/lib/people";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

import { Mail, Globe, Linkedin } from "lucide-react";

const PersonCard = ({ person }: { person: PersonProps }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square relative bg-muted">
        <ExportedImage
          src={
            person.image ? `${person.image}` : `/imgs/people/placeholder.png`
          }
          alt={person.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading={
            person.name === "Dr. Farhana H. Zulkernine" ? "eager" : undefined
          }
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{person.name}</CardTitle>
        <CardDescription>
          {person.role}
          {person.date && ` • Since ${person.date}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        {person.topic && (
          <div className="flex-1">
            <h4 className="text-sm font-semibold mb-2">Topic of Study</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {person.topic}
            </p>
          </div>
        )}

        <div className="flex gap-2 mt-auto">
          <Button
            size="sm"
            variant={"outline"}
            className="bg-transparent"
            asChild
          >
            <Link href={`mailto:${person.email}`}>
              <Mail className="size-4 mr-2" />
              Email
            </Link>
          </Button>
          {person.website && (
            <Button
              asChild
              size="sm"
              variant={"outline"}
              className="bg-transparent"
            >
              <Link href={person.website}>
                <Globe className="size-4 mr-2" />
                Website
              </Link>
            </Button>
          )}
          {person.linkedin && (
            <Button
              asChild
              size="sm"
              variant={"outline"}
              className="bg-transparent"
            >
              <Link href={person.linkedin}>
                <Linkedin className="size-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
