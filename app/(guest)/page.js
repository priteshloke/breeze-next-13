'use client';

import { useAuth } from "@/hooks/auth";
import { useState } from 'react';
import ValidationError from '@/components/ValidationError';

export default function Page() {
    const { login } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/profile",
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({});

    function handleSubmit(event) {
        event.preventDefault()

        setErrors({});

        login({
            email,
            password,
            setErrors,
            setStatus
        });
    }

    return (
        <>

            <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col mx-auto md:w-96 w-full">

                    <h1 className="heading">Login</h1>

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
                        <ValidationError errors={errors} field="email" />
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
                        <ValidationError errors={errors} field="password" />
                    </div>

                   

                    <div className="border-t h-[1px] my-6"></div>

                    <div className="flex flex-col gap-2 mb-4">
                        <button type="submit" className="btn btn-primary button">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
