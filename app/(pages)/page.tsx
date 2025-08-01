import AlertBanner from '@/components/layout/AlertBanner';
import Image from 'next/image';
import StatCounter from '@/components/client/StatCounter';
import NewsSection from '@/components/news/NewsSection';

const stats = [
    { value: '5000+', label: 'Students' },
    { value: '200+', label: 'Faculty Members' },
    { value: '50+', label: 'Programs' },
    { value: '95%', label: 'Placement Rate' }
];

export default function Home() {
    return (
        <main>
            <AlertBanner />
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[600px]">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="relative h-full">
                        {/* Replace with your actual image */}
                        <Image
                            src="/college-banner.jpg"
                            alt="College Campus"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-4">Welcome to Our College</h1>
                            <p className="text-xl mb-8">Shaping Futures Through Quality Education</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Image src="/window.svg" alt="Academic Excellence" width={32} height={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                                <p className="text-gray-600">Top-rated programs and faculty dedicated to student success.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Image src="/globe.svg" alt="Global Perspective" width={32} height={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
                                <p className="text-gray-600">International programs and diverse student community.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Image src="/file.svg" alt="Research Opportunities" width={32} height={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Research Opportunities</h3>
                                <p className="text-gray-600">State-of-the-art facilities and research programs.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* News & Events Section */}
                <NewsSection />

                {/* Quick Stats Section */}
                <section className="py-16 bg-blue-900 text-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <StatCounter
                                    key={index}
                                    value={stat.value}
                                    label={stat.label}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
