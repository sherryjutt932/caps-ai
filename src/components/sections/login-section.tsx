import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import Image from 'next/image'
import Icons from '../ui/icons'
import { ChevronLeft } from 'lucide-react'
import AnimationContainer from "../utils/animation-container"

const LoginSection = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full relative">
            <div className="bg-background grid grid-cols-1 h-screen overflow-y-hidden scrollbar-hide lg:grid-cols-2 w-full">

                <AnimationContainer reverse className="absolute top-8 left-8 z-50">
                    <div className="flex items-center">
                        <Button size="sm" variant="outline" asChild>
                            <Link href="/">
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Back
                            </Link>
                        </Button>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.1}>
                    <div className="bg-muted/30 relative h-full w-full hidden lg:block">
                        <div className="flex w-4/5 mx-auto lg:px-8 items-center justify-center h-full">
                            <Icons.auth className="h-full w-full" />
                        </div>
                        <div className="flex flex-col items-center absolute left-1/2 bottom-[15%] -translate-x-1/2 ranslate-y-1/2 justify-center max-w-sm">
                            <h1 className="text-xl md:text-2xl font-semibold text-center">
                                Connect with your audience
                            </h1>
                            <p className="text-muted-foreground mt-2 text-sm md:text-base text-center">
                                With Caps AI, you can connect with your audience and grow your brand effectively
                            </p>
                            <Button size="sm" variant="white" className="mt-4">
                                <Link href="/blog">
                                    Learn more
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <div className="flex mt-16 justify-center py-12 relative">
                        <div className="mx-auto grid max-w-sm w-full gap-6">
                            <div className="flex flex-col gap-4 text-start">
                                <h1 className="text-2xl font-semibold">
                                    Welcome back!
                                </h1>
                                <p className="text-muted-foreground">
                                    Nice to see you again! Please login to continue
                                </p>
                            </div>
                            <div className="grid mt-2 w-full gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        required
                                        id="email"
                                        type="email"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <Link
                                            href="/forgot-password"
                                            className="ml-auto inline-block text-sm underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <Input
                                        required
                                        id="password"
                                        type="password"
                                        placeholder="Your password"
                                    />                            </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                                <div className="flex items-center justify-center w-full my-2">
                                    <div className="h-px bg-border w-full"></div>
                                    <p className="text-muted-foreground mx-2">or</p>
                                    <div className="h-px bg-border w-full"></div>
                                </div>
                                <Button variant="subtle" className="w-full">
                                    <Icons.google className="w-4 h-4 mr-2" />
                                    Sign In with Google
                                </Button>
                                <Button variant="subtle" className="w-full mt-2">
                                    <Icons.github className="w-5 h-5 mr-2" />
                                    Sign In with Github
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/auth/register" className="text-primaryLight">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

            </div>
        </section>
    )
}

export default LoginSection