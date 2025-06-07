"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          M.Tech student at IIT Kharagpur with expertise in Data Science, AI, and Web Development. Passionate about
          leveraging technology to solve real-world problems.
        </p>
      </motion.div>

      <Tabs defaultValue="education" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="education">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="space-y-4">
              <EducationCard year="2023-2025" degree="M.Tech" institute="IIT Kharagpur" score="8.45 / 10" />
              <EducationCard
                year="2019-2023"
                degree="B.Tech (Agricultural Engineering)"
                institute="JNKVV, Jabalpur"
                score="7.96 / 10"
              />
              <EducationCard year="2018" degree="Senior School Certificate Examination" institute="CBSE" score="72%" />
              <EducationCard
                year="2016"
                degree="High School Certification Examination"
                institute="MPBSE (Madhya Pradesh)"
                score="76.67%"
              />
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="experience">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Business Intelligence Intern</CardTitle>
                    <CardDescription>B.N. Agritech Ltd. (New Delhi)</CardDescription>
                  </div>
                  <Badge>May 2024 – July 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Project: End-to-End Quality Control Application for Edible Oil Production
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>
                        Architected Flask/MySQL/Dash application monitoring 10,000+ production units, elevating quality
                        metrics 30% via real-time analytics
                      </li>
                      <li>
                        Crafted custom Power BI dashboard delivering interactive actionable insights and performance
                        visualizations across multiple facilities
                      </li>
                      <li>
                        Orchestrated enterprise Azure cloud integration ensuring 99.9% uptime with regulatory
                        compliance, enhancing operational visibility
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Project: Crude Sunflower and Palm Oil Price Prediction Using LSTM and SARIMA
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>
                        Pioneered advanced LSTM and SARIMA predictive models achieving superior forecast accuracy in
                        volatile agricultural commodity markets
                      </li>
                      <li>
                        Evaluated comprehensive historical market data implementing LSTM R² 0.85 and SARIMA MAPE 0.09%
                        for precise trend identification
                      </li>
                      <li>
                        Generated highly accurate price forecasts slashing estimation errors by 50%, powering strategic
                        procurement and inventory optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="projects">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <ProjectCard
              title="Automated Degree of Milling Analysis Using Machine Vision (BIS Project)"
              organization="IIT Kharagpur"
              period="Nov 2024 – Apr 2025"
              description={[
                "Engineered rice milling analysis system for 60+ varieties across 15 states using computer vision and sensor data integration.",
                "Implemented multiple assessment methods achieving R² of 0.92 through formula-based, whiteness, and RGB/Lux sensing approaches.",
                "Achieved 79% accuracy with CNN model trained on 2000 images across 4 classes, improving upon traditional inspection methods.",
              ]}
            />

            <ProjectCard
              title="IoT-Based Robotic Pizza Automation System (M.Tech Project)"
              organization="Prof. Jayeeta Mitra, IIT Kharagpur"
              period="Aug 2024 – Apr 2025"
              description={[
                "Engineered a complete IoT ecosystem for automated pizza production combining robotic control, web interfaces, and processing nodes.",
                "Developed a Python-based interface integrating servo control, trajectory planning and real-time monitoring with web-based ordering system.",
                "Implemented anti-wobble algorithms and precise positioning control for the 4DOF robotic arm to achieve consistent food handling.",
                "Created a responsive web dashboard with real-time status updates allowing customers to customize orders and monitor system operations.",
              ]}
            />

            <ProjectCard
              title="Medical Interaction Checker: Advanced Drug Compatibility System"
              period="Nov 2024 – Jan 2025"
              description={[
                "Architected comprehensive medication analysis system using RAG and Ollama LLM models, identifying potential drug interactions.",
                "Engineered Streamlit/ChromaDB full-stack solution for real-time analysis of complex medication regimens and patient conditions.",
                "Implemented sophisticated information retrieval algorithms for analyzing interactions between multiple medications and health conditions.",
              ]}
            />

            <ProjectCard
              title="NutriScore Predictor: AI-Powered Nutritional Analysis Tool (Term Project)"
              organization="IIT Kharagpur"
              period="Jan 2024 – Feb 2024"
              description={[
                "Developed interactive AI web application predicting nutrient scores with 85% accuracy using Random Forest classifier models.",
                "Processed extensive dataset of 3.7M OpenFood Facts records using PySpark/Pandas for accurate nutrient-score prediction in Flask app.",
                "Deployed highly scalable solution with rigorous 5-fold cross-validation ensuring consistent accurate nutrient composition predictions.",
              ]}
            />
          </motion.div>
        </TabsContent>

        <TabsContent value="achievements">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle>Awards and Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Academic Achievements</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Secured All India Rank 32 in the Graduate Aptitude Test in Engineering (GATE) 2023.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Certifications</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Machine Learning in Production | DeepLearning.AI | Coursera</li>
                    <li>Supervised Machine Learning: Regression and Classification | DeepLearning.AI | Coursera</li>
                    <li>Machine Learning with Python | IBM | Coursera</li>
                    <li>Large Language Models (LLMs) Concepts | Datacamp</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Copyright & Patents</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>
                      Patent Application: "Automated Degree of Milling Analysis Using Machine Vision" - Filed with
                      Indian Patent Office (Application No. Pending)
                    </li>
                    <li>
                      Copyright Application: "Automated Degree of Milling Analysis Using Machine Vision" - Applied for
                      software copyright registration
                    </li>
                    <li>
                      Research Publication: "IoT-Based Robotic Pizza Automation System" - Under review for IEEE
                      Conference
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function EducationCard({ year, degree, institute, score }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{degree}</CardTitle>
          <Badge>{year}</Badge>
        </div>
        <CardDescription>{institute}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium">CGPA/Score: {score}</p>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ title, organization, period, description }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {organization && <CardDescription>{organization}</CardDescription>}
          </div>
          <Badge>{period}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
