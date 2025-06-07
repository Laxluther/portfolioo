"use client"

import { motion } from "framer-motion"
import { skillsConfig } from "@/components/skills-data"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  return (
    <div className="space-y-16">
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center">Main Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skillsConfig.mainSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[120px]">
                  <div className="text-primary mb-3 flex items-center justify-center">{skill.icon}</div>
                  <p className="text-sm font-medium text-center">{skill.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center">Other Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
          {skillsConfig.complementarySkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-4 h-full min-h-[100px]">
                  <div className="text-muted-foreground mb-2 flex items-center justify-center">{skill.icon}</div>
                  <p className="text-xs font-medium text-center">{skill.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
