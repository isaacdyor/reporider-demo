import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      {/* Hero Section */}
      <section className="container px-4 pt-24 pb-12 md:pt-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="animate-fade-up text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Build Something
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Amazing
            </span>
          </h1>
          <p className="mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Transform your ideas into reality with our modern and powerful
            platform. Start building today and join thousands of developers
            worldwide.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2">
            <CardHeader>
              <Globe className="h-12 w-12 text-blue-600" />
              <CardTitle className="mt-4">Global Scale</CardTitle>
              <CardDescription>
                Deploy worldwide with edge computing and global CDN
                infrastructure.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <Zap className="h-12 w-12 text-blue-600" />
              <CardTitle className="mt-4">Lightning Fast</CardTitle>
              <CardDescription>
                Optimized for speed with next-gen performance capabilities.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600" />
              <CardTitle className="mt-4">Enterprise Security</CardTitle>
              <CardDescription>
                Bank-grade security with advanced threat protection.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Join our community of developers and start building amazing
            applications today.
          </p>
          <Button size="lg" variant="secondary" className="mt-8">
            Start Building Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
