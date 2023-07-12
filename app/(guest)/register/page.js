'use client';

import { useState } from 'react';
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import ValidationError from '@/components/ValidationError'

export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({});

    const { register } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/profile",
    });

    function handleSubmit(event) {
        event.preventDefault()

        const data = { name, email, password, passwordConfirmation }
        setErrors({});

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors
        });
    }

    return (
        <>
            
            <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col mx-auto md:w-96 w-full">

                    <h1 className="heading">Register</h1>

                    <div className="form-group">
                        <label htmlFor="name" className="required">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            className="form-input"
                            autoComplete="name"
                        />
                        <ValidationError errors={ errors } field="name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="required">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            className="form-input"
                            autoComplete="email"
                        />
                        <ValidationError errors={ errors } field="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="required">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            className="form-input"
                            autoComplete="new-password"
                        />
                        <ValidationError errors={ errors } field="password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_confirmation" className="required">Confirm Password</label>
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            value={passwordConfirmation}
                            onChange={event => setPasswordConfirmation(event.target.value)}
                            className="form-input"
                            autoComplete="new-password"
                        />
                        <ValidationError errors={ errors } field="password_confirmation" />
                    </div>

                    <div className="border-t h-[1px] my-6"></div>

                    <div className="flex flex-col gap-2 mb-4">
                        <button type="submit" className="btn btn-primary button">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
