"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projectConfig } from "@/components/project-data"
import { motion } from "framer-motion"

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectConfig.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              {project.links.map((link) => (
                <Button key={link.name} variant="outline" asChild size="sm">
                  <Link href={link.url} target={project.target} rel="noopener noreferrer">
                    <span className="mr-2">{link.icon}</span> {link.name}
                  </Link>
                </Button>
              ))}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
