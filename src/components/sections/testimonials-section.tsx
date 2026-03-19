import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Jonathan Yombo',
        role: 'Business Owner',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: 'This masterclass completely shifted how I view my goals. The 4-step framework cleared my energetic blocks almost instantly.',
    },
    {
        name: 'Yves Kalume',
        role: 'Tech Founder',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        quote: 'I used to rely on motivation and vision boards. Now I just stay aligned, and the results flow naturally. It’s been a total game-changer for my startup.',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'E-commerce Entrepreneur',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'Within weeks of applying the energy shift techniques, my store revenue doubled without me working longer hours. The alignment is real.',
    },
    {
        name: 'Anonymous author',
        role: 'Startup Founder',
        image: 'https://randomuser.me/api/portraits/men/8.jpg',
        quote: 'I was hesitant about manifestation, but the strategic approach taught here makes perfect logical sense. It bridged the gap between mindset and action.',
    },
    {
        name: 'Shekinah Tshiokufila',
        role: 'Creative Director',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        quote: "Identifying my 'Energetic Point A' was eye-opening. I finally realized what was silently sabotaging my agency's growth. Absolute lifesaver.",
    },
    {
        name: 'Oketa Fred',
        role: 'Real Estate Investor',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        quote: 'I absolutely love this framework! I am grounded in real confidence now, and negotiating high-ticket deals feels effortless.',
    },
    {
        name: 'Zeki',
        role: 'SaaS Founder',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        quote: 'Learning to regenerate my energy instead of operating from burnout has been my biggest takeaway. I have more power and clarity than ever.',
    },
    {
        name: 'Joseph Kitheka',
        role: 'Marketing Consultant',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        quote: 'The daily frequency shift is practical and powerful. It has completely transformed the way I show up for client calls and pitch meetings.',
    },
    {
        name: 'Khatab Wedaa',
        role: 'Solopreneur',
        image: 'https://randomuser.me/api/portraits/men/10.jpg',
        quote: "If you're a solopreneur trying to hustle your way to the top, stop right now and take this masterclass. The energetic alignment will save you years.",
    },
    {
        name: 'Rodrigo Aguilar',
        role: 'Content Creator',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        quote: 'I used to feel exhausted trying to keep up with the algorithm. Shifting my energy made me magnetic to opportunities I didn\'t even have to pitch for.',
    },
    {
        name: 'Eric Ampire',
        role: 'Fitness Coach',
        image: 'https://randomuser.me/api/portraits/men/12.jpg',
        quote: 'They provide the exact blueprint for aligning yourself with what you want. My coaching roster is now full, and the clients are a perfect energetic match.',
    },
    {
        name: 'Roland Tubonge',
        role: 'Financial Advisor',
        image: 'https://randomuser.me/api/portraits/men/13.jpg',
        quote: 'The level of clarity this framework provides is incredible. Defining my Energetic Point B helped me double my income this year. Highly recommend!',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="relative w-full py-24 md:py-32 bg-background overflow-hidden z-10">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
                <div className="mx-auto max-w-4xl text-center mb-16 md:mb-24 flex flex-col items-center">
                    
                    {/* Section Badge */}
                    <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-primary text-primary font-bold tracking-widest text-sm bg-background uppercase">
                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
                        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
                        Student Success Stories
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6 tracking-tight text-foreground leading-tight">
                        Loved by the Community
                    </h2>
                    <p className="text-xl md:text-2xl font-medium opacity-80 max-w-2xl mx-auto leading-relaxed">
                        Hear from people just like you who shifted their energy and finally started attracting the reality they wanted.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonialChunks.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="space-y-6">
                            {chunk.map(({ name, role, quote, image }, index) => (
                                <Card key={index} className="border-2 border-primary/10 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 rounded-3xl">
                                    <CardContent className="p-6 md:p-8 flex flex-col gap-6">
                                        <div className="flex text-secondary gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-current" />
                                            ))}
                                        </div>

                                        <blockquote className="mt-2 flex-1">
                                            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                                        </blockquote>

                                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-primary/10">
                                            <Avatar className="w-14 h-14 border-2 border-primary/20">
                                                <AvatarImage alt={name} src={image} loading="lazy" />
                                                <AvatarFallback className="bg-primary/10 text-primary font-bold">{name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <h3 className="font-bold text-foreground font-sans text-lg">{name}</h3>
                                                <span className="text-primary text-sm font-semibold tracking-wide">{role}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}