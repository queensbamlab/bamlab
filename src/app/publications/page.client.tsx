"use client";
import { useState, useMemo, Fragment } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Award,
  ExternalLink,
  FileText,
  Search,
  BookMarked,
} from "lucide-react";

import { notableVenues, PublicationProps } from "@/lib/publications";

import Fuse from "fuse.js";

export type EnrichedPublication = PublicationProps & {
  enrichedAuthors: {
    name: string;
    isLabMember: boolean;
  }[];
};

const ClientPage = ({
  publications,
}: {
  publications: EnrichedPublication[];
}) => {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const fuse = useMemo(() => {
    return new Fuse(publications, {
      keys: [
        {
          name: "title",
          weight: 0.7,
        },
        {
          name: "authors",
          weight: 0.2,
        },
        {
          name: "abstract",
          weight: 0.1,
        },
        {
          name: "year",
          weight: 0.1,
        },
      ],
      threshold: 0.3, // 0.0 = exact match, 1.0 = match anything (0.3 is good "fuzzy")
      includeScore: true,
    });
  }, [publications]);

  const filteredResults = useMemo(() => {
    let results = publications;

    if (query.length > 0) {
      results = fuse.search(query).map((result) => result.item);
    }

    if (selectedType === "Award") {
      results = results.filter((pub) => pub.award);
    } else if (selectedType !== "All") {
      results = results.filter((pub) => pub.type === selectedType);
    }

    if (selectedYear !== "All") {
      results = results.filter((pub) => pub.year.toString() === selectedYear);
    }

    return results.sort((a, b) => b.year - a.year);
  }, [query, selectedType, selectedYear, publications, fuse]);

  const years = Array.from(new Set(publications.map((p) => p.year))).sort(
    (a, b) => b - a
  );
  return (
    <div className="container py-12 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Publications
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl font-serif">
          Our research contributions to top-tier conferences and journals in
          artificial intelligence and machine learning
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-6 mb-12">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Citations</CardDescription>
            <CardTitle className="text-4xl text-primary">4000+</CardTitle>
          </CardHeader>
        </Card>
        <Card className=" rounded-md">
          <CardHeader>
            <CardDescription>Total Publications</CardDescription>
            <CardTitle className="text-4xl text-primary">
              {publications.length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className=" rounded-md">
          <CardHeader className="pb-3">
            <CardDescription>Conference Papers</CardDescription>
            <CardTitle className="text-4xl text-primary">
              {publications.filter((p) => p.type === "Conference").length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className=" rounded-md">
          <CardHeader className="pb-3">
            <CardDescription>Journal Articles</CardDescription>
            <CardTitle className="text-4xl text-primary">
              {publications.filter((p) => p.type === "Journal").length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Seach */}
      <div className="mb-8 md:flex w-full items-center gap-2 max-md:space-y-2">
        <div className="relative w-full ">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search title, author, or keyword..."
            className="pl-10 flex-1 rounded-md"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {/* Filters */}
        <div className="flex space-x-2">
          <Select
            value={selectedType}
            onValueChange={(value) => setSelectedType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                <SelectItem value="All">All Types</SelectItem>
                <SelectItem value="Journal">Journals</SelectItem>
                <SelectItem value="Conference">Conferences</SelectItem>
                <SelectItem value="Workshop">Workshops</SelectItem>
                <SelectItem value="Book">Books</SelectItem>
                <SelectItem value="Book Chapter">Book Chapters</SelectItem>
                <SelectItem value="Award">Award Winning</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={selectedYear}
            onValueChange={(value) => setSelectedYear(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Year</SelectLabel>
                <SelectItem value="All">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-8">
        {filteredResults.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No publications found.
          </p>
        ) : (
          <>
            {years.map((year) => {
              const items = filteredResults.filter((p) => p.year === year);
              if (items && items.length > 0) {
                return (
                  <section key={year}>
                    {items && items.length > 0 && (
                      <h2 className="text-2xl font-bold mb-4">{year}</h2>
                    )}

                    <div className="grid gap-6">
                      {items.map((pub, idx) => (
                        <div key={idx}>
                          <PublicationCard key={idx} pub={pub} />
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }
            })}
          </>
        )}
      </div>

      {/* Notable Venues */}
      <section className="mt-16 pt-12 border-t">
        <h2 className="text-3xl font-bold mb-8">Notable Publication Venues</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notableVenues.map((venue) => (
            <Card key={venue}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{venue}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

const PublicationCard = ({ pub }: { pub: EnrichedPublication }) => {
  const getBorderColor = (type: string) => {
    switch (type) {
      case "Journal":
        return "border-l-primary";
      case "Conference":
        return "border-l-primary/70";
      case "Workshop":
        return "border-l-primary/40";
      case "Book":
      case "Book Chapter":
        return "border-l-primary/30";
      default:
        return "border-l-primary/20";
    }
  };

  return (
    <Card className={`rounded-md border-l-4 ${getBorderColor(pub.type)}`}>
      <CardHeader>
        <div className="sm:flex items-center justify-between">
          <Badge variant={"secondary"} className=" rounded-md">
            {pub.year}
          </Badge>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex gap-2 max-sm:mt-2">
              <Badge variant={"outline"} className=" rounded-md">
                {pub.type}
              </Badge>
              {pub.specialIssue && (
                <Badge
                  variant="outline"
                  className="border-primary/50 text-primary rounded-md"
                >
                  <BookMarked className="h-3 w-3 mr-1" />
                  Special Issue
                </Badge>
              )}
            </div>
            {pub.award && (
              <Badge className="bg-chart-1 hover:cursor-default rounded-md">
                <Award className="size-3 mr-1" />
                {pub.award}
              </Badge>
            )}
          </div>
        </div>

        <CardTitle className="text-lg leading-tight max-sm:mt-4">{pub.title}</CardTitle>
        <CardDescription>
          {pub.enrichedAuthors.map((author, i) => (
            <Fragment key={i}>
              <span className={author.isLabMember ? "underline font-bold" : ""}>
                {author.name}
              </span>
              {i < pub.enrichedAuthors.length - 1 ? ", " : ""}
            </Fragment>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">
            {pub.type !== "Book" ? "Published in:" : "Published by:"}
          </span>{" "}
          {pub.venue}
          {pub.workshop && (
            <div className="border-l border-muted-foreground pl-2">
              {pub.workshop}
            </div>
          )}
          {pub.specialIssue && (
            <div className="text-primary/80 italic">
              {/* <span className="font-medium not-italic">Special Issue:</span>{" "} */}
              {pub.specialIssue}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={"outline"}
              data-umami-event={`Publication PDF Download`}
            >
              <FileText className="size-4 mr-2" />
              PDF
            </Button>
            {pub.link && (
              <Button
                size="sm"
                asChild
                variant={"outline"}
                data-umami-event={`Publication Link Click`}
              >
                <Link href={pub.link}>
                  <ExternalLink className="size-4 mr-2" />
                  Link
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientPage;
