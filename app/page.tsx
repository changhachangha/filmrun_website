"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Award, Users, Film, Star, ExternalLink, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FilmRunHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedTrailer, setSelectedTrailer] = useState<string | null>(null)

  const featuredFilms = [
    {
      id: 1,
      title: "Midnight Seoul",
      year: "2024",
      genre: "Thriller",
      poster: "/placeholder.svg?height=400&width=300",
      description:
        "A gripping thriller set in the neon-lit streets of Seoul, following a detective's pursuit of truth.",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      awards: ["Best Cinematography", "Audience Choice"],
    },
    {
      id: 2,
      title: "The Last Garden",
      year: "2023",
      genre: "Drama",
      poster: "/placeholder.svg?height=400&width=300",
      description: "An emotional journey about family, loss, and the healing power of nature.",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      awards: ["Best Director", "Critics' Choice"],
    },
    {
      id: 3,
      title: "Digital Dreams",
      year: "2024",
      genre: "Sci-Fi",
      poster: "/placeholder.svg?height=400&width=300",
      description: "A futuristic tale exploring the boundaries between reality and virtual worlds.",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      awards: ["Best Visual Effects"],
    },
  ]

  const teamMembers = [
    {
      name: "Sarah Kim",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary leader with 15+ years in film production and distribution.",
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Award-winning director known for innovative storytelling techniques.",
    },
    {
      name: "Emma Park",
      role: "Head of Distribution",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Strategic distribution expert with global market expertise.",
    },
    {
      name: "David Lee",
      role: "Producer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Experienced producer with a track record of successful films.",
    },
  ]

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Film Run was established with a vision to create compelling stories that resonate globally.",
    },
    {
      year: "2019",
      title: "First Production",
      description: "Released our debut film 'Urban Echoes' to critical acclaim.",
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "Expanded distribution network across Asia-Pacific markets.",
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Received multiple international film festival awards.",
    },
    {
      year: "2024",
      title: "Digital Innovation",
      description: "Launched cutting-edge digital production facilities.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                <span className="text-red-500">FILM</span> RUN
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#home" className="text-white hover:text-red-500 transition-colors">
                  Home
                </Link>
                <Link href="#films" className="text-gray-300 hover:text-red-500 transition-colors">
                  Films
                </Link>
                <Link href="#about" className="text-gray-300 hover:text-red-500 transition-colors">
                  About
                </Link>
                <Link href="#team" className="text-gray-300 hover:text-red-500 transition-colors">
                  Team
                </Link>
                <Link href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#home" className="block px-3 py-2 text-white hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link href="#films" className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors">
                Films
              </Link>
              <Link href="#about" className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors">
                About
              </Link>
              <Link href="#team" className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors">
                Team
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Film production background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Crafting Stories That
            <span className="text-red-500 block">Move the World</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Film Run creates and distributes compelling cinematic experiences that resonate across cultures and
            generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Reel
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
            >
              Explore Films
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Films Section */}
      <section id="films" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Films</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our latest productions that have captivated audiences worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFilms.map((film) => (
              <Card
                key={film.id}
                className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
              >
                <div className="relative">
                  <Image
                    src={film.poster || "/placeholder.svg"}
                    alt={film.title}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg" className="bg-red-600 hover:bg-red-700">
                          <Play className="mr-2 h-5 w-5" />
                          Watch Trailer
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-black border-gray-700">
                        <div className="aspect-video">
                          <iframe
                            src={film.trailer}
                            className="w-full h-full"
                            allowFullScreen
                            title={`${film.title} Trailer`}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{film.title}</h3>
                    <Badge variant="secondary" className="bg-red-600 text-white">
                      {film.year}
                    </Badge>
                  </div>
                  <p className="text-gray-400 mb-3">{film.genre}</p>
                  <p className="text-gray-300 mb-4 text-sm">{film.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {film.awards.map((award, index) => (
                      <Badge key={index} variant="outline" className="border-yellow-500 text-yellow-500">
                        <Award className="mr-1 h-3 w-3" />
                        {award}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From humble beginnings to international recognition, discover the milestones that shaped Film Run
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-5 w-5 text-red-500" />
                          <span className="text-red-500 font-bold text-lg">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">The creative minds behind Film Run's success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-red-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-gray-400">Films Produced</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                15
              </div>
              <div className="text-gray-400">Awards Won</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-400">Countries Reached</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                6
              </div>
              <div className="text-gray-400">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate on your next cinematic project. From concept to distribution, we're here to bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 px-8 py-3">
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-700 px-8 py-3"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                <span className="text-red-500">FILM</span> RUN
              </Link>
              <p className="text-gray-400 mb-4 max-w-md">
                Creating compelling stories that move audiences worldwide. Based in Seoul, reaching global markets.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Film className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Users className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Star className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#films" className="text-gray-400 hover:text-white transition-colors">
                    Films
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-400 hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Seoul, South Korea</li>
                <li>info@filmrun.co.kr</li>
                <li>+82-2-1234-5678</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Film Run. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
