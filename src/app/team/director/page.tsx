import { Metadata } from "next";

import ExportedImage from "next-image-export-optimizer";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  GraduationCap,
  Award,
  BookOpen,
  Phone,
  Printer,
  BriefcaseBusiness,
} from "lucide-react";
import CopyButton from "@/components/copy-button";

import {
  director,
  directorAwards,
  directorConferences,
  directorMembership,
  directorInterests,
  directorApplications,
} from "@/lib/director";

export const metadata: Metadata = {
  title: director.full_title,
  description: "Queen's University Big Data and Analytics Management Lab",
};

const StyledLink = ({ name, href }: { name: string; href: string }) => (
  <Link
    href={href}
    className="underline hover:text-primary duration-200 decoration-primary"
    target="_blank"
  >
    {name}
  </Link>
);

const DirectorPage = () => {
  return (
    <div className="container py-12 max-w-7xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Lab Director
        </h1>
        <p className="text-xl text-muted-foreground font-serif">
          Leading innovation in computer science and artificial intelligence
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <section className="md:col-span-1">
          <div className="sticky top-24">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-muted mb-6 w-full">
              <ExportedImage
                src={`/imgs/zulkernine.jpg`}
                alt={director.full_title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  {director.full_title}
                </h2>
                <p className="text-muted-foreground ">
                  Professor & Lab Director
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="size-4 text-muted-foreground" />
                  <CopyButton
                    text={director.email}
                    className="text-foreground hover:text-primary duration-200"
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 text-sm">
                  <div className="flex gap-2">
                    <Phone className="size-4 text-muted-foreground" />
                    <span>(613) 533-6426</span>
                  </div>
                  <div className="flex gap-2">
                    <Printer className="size-4 text-muted-foreground" />
                    <span>(613) 533-6513</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="size-4 text-muted-foreground" />
                  <p>
                    <span className="font-medium">PhD</span>, Computer Science;{" "}
                    <span className="font-medium">PEng</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-2 space-y-8">
          {/* Biography */}
          <Card className="rounded-md">
            <CardHeader>
              <CardTitle className="text-primary">Biography</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed font-serif">
              <p>
                Dr. Farhana Zulkernine is a Professor and the Coordinator of the
                Cognitive Science program at the School of Computing at
                Queen&apos;s University. She holds a Ph.D. degree from the
                School of Computing at Queen&apos;s University and is a member
                of Professional Engineers of Ontario.
              </p>
              <p>
                She has more than 15 years of international work experience in
                three continents in software design, analysis and research. As a
                researcher she has worked with{" "}
                <StyledLink
                  name="CA Technologies"
                  href={"https://www.broadcom.com/"}
                />
                ,{" "}
                <StyledLink
                  name="IBM Canada"
                  href={"https://www.ibm.com/ca-en"}
                />
                ,{" "}
                <StyledLink
                  name="SAP Germany"
                  href={"https://www.sap.com/index.html"}
                />
                , and{" "}
                <StyledLink
                  name="Fondazione Bruno Kessler"
                  href={"https://www.fbk.eu/en/"}
                />{" "}
                in Italy. Her research interests include service and cloud
                computing, big data analytics and management, and cognitive
                computing.
              </p>
              <p>
                She has ongoing research collaborations with{" "}
                <StyledLink
                  name="IBM Canada"
                  href={"https://www.ibm.com/ca-en"}
                />
                , <StyledLink name="Roche" href={"https://www.roche.com/"} />,{" "}
                <StyledLink name="Pfizer" href={"https://www.pfizer.ca/en"} />,{" "}
                <StyledLink name="Markitech" href={"https://markitech.ca/"} />,{" "}
                <StyledLink name="Gnowit" href={"https://www.gnowit.com/"} />,{" "}
                <StyledLink name="Calian" href={"https://www.calian.com/"} />,{" "}
                <StyledLink
                  name="the Center for Advanced Computing (CAC)"
                  href={"https://cac.queensu.ca/"}
                />
                ,{" "}
                <StyledLink
                  name="Digital Research Alliance of Canada (the Alliance)"
                  href={"https://www.alliancecan.ca/en"}
                />
                ,{" "}
                <StyledLink
                  name="Canadian Primary Care Sentinel Services Network (CPCSSN)"
                  href={"https://cpcssn.ca/"}
                />
                , and Queen&apos;s School of{" "}
                <StyledLink name="Medicine" href={"https://meds.queensu.ca/"} />
                , <StyledLink name="Law" href={"https://law.queensu.ca/"} />,
                and{" "}
                <StyledLink
                  name="Business"
                  href={"https://smith.queensu.ca/"}
                />
                .
              </p>
              <p>
                She has taught a wide number of courses in deep learning,
                cognitive science, and database management systems. Her research
                has been funded by IBM, CFI, MITACS, NSERC CRD, Discovery and
                CREATE, OCE VIP, CUTRIC, CIMVHR, SOSCIP and Queen&apos;s. She
                has published in many reputed journals and international
                conferences and served on a variety of conference program and
                grant committees as an expert in big data and machine learning.
              </p>
            </CardContent>
          </Card>

          {/* Research Interests */}
          <Card className="rounded-md">
            <CardHeader>
              <CardTitle className="text-primary">Research Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {directorInterests.map((interest, i) => (
                  <Badge key={i} variant="secondary" className="rounded-md">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardHeader className="mt-4">
              <CardTitle className="text-primary">
                Fields of Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {directorApplications.map((application, i) => (
                  <Badge variant={"secondary"} key={i} className="rounded-md">
                    {application}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="rounded-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="font-medium">PhD in Computer Science</div>
                <div className="text-sm text-muted-foreground font-serif">
                  Queen&apos;s University, 2009
                </div>
                <div className="text-sm text-muted-foreground font-serif">
                  Thesis: &quot;Thesis name&quot;
                </div>
              </div>
              <div>
                <div className="font-medium">MSc in Computer Science</div>
                <div className="text-sm text-muted-foreground font-serif">
                  Lorem Ipsum University, 2004
                </div>
              </div>
              <div>
                <div className="font-medium">BSc in Computer Science</div>
                <div className="text-sm text-muted-foreground font-serif">
                  Lorem Ipsum University, 2000
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Services */}
          <Card className="rounded-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BriefcaseBusiness className="h-5 w-5" />
                Professional Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Conference Leadership</h3>
                <ul className="space-y-4 text-sm text-muted-foreground font-serif">
                  {directorConferences.map((item, i) => (
                    <li className="space-y-1" key={i}>
                      <div>
                        <span className="font-semibold">{item.title}</span>
                        {item.workshop && (
                          <>
                            ,{" "}
                            <Link
                              href={item.workshop_url ? item.workshop_url : "#"}
                              className="underline"
                            >
                              {item.workshop}
                            </Link>
                          </>
                        )}
                      </div>
                      <div className="border-l border-l-primary pl-3">
                        <Link href={item.conference_url} className="underline">
                          {item.conference}
                        </Link>
                      </div>
                      <div className="text-xs">
                        {item.date} • {item.location}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Professional Memberships</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {directorMembership.map((item, i) => (
                    <Badge key={i} className="rounded-md">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Honors & Awards */}
          <Card className="rounded-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                Select Honors & Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {directorAwards.map((item, i) => (
                  <li className="flex gap-3" key={i}>
                    <span className="text-muted-foreground min-w-16">
                      {item.year}
                    </span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default DirectorPage;
