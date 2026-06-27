"use client";

import { useState } from "react";
import {
  Card,
  Button,
  Link,
  TextField,
  Label,
  InputGroup,
  Input,
} from "@heroui/react";
import { Radio, RadioGroup } from "@heroui/react";
import {
  Eye,
  EyeSlash,
  Person,
  At,
  ShieldKeyhole,
} from "@gravity-ui/icons";
import { authClient, signUp } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

export default function SignupPageContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);

    const plan = role === "user" ? "user_fee" : "lawyer_fee";

    try {
      const { data, error: authError } = await signUp.email({
        email,
        password,
        name,
        role,
        plan,
        callbackURL: "/",
      });

      if (authError) {
        setError(authError.message || "Something went wrong during signup.");
        setIsLoading(false);
        return;
      }

      setSuccess("Account created successfully! Welcome.");

      setName("");
      setEmail("");
      setPassword("");

      router.push(redirectTo);
    } catch (err) {
      setError(err?.message || "An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirectTo,
      });
    } catch (err) {
      setError("Google sign-in failed.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
      <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Create an account
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Fill in the fields below to get started
          </p>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          {/* Name */}
          <TextField
            isRequired
            name="name"
            className="flex flex-col gap-1.5"
          >
            <Label>Name</Label>

            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
              <Person size={16} />

              <Input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none"
              />
            </InputGroup>
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
          >
            <Label>Email Address</Label>

            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
              <At size={16} />

              <Input
                placeholder="ferdous@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none"
              />
            </InputGroup>
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            className="flex flex-col gap-1.5"
          >
            <Label>Password</Label>

            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
              <ShieldKeyhole size={16} />

              <Input
                type={isVisible ? "text" : "password"}
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none"
              />

              <button type="button" onClick={toggleVisibility}>
                {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
              </button>
            </InputGroup>
          </TextField>

          {/* Role */}
          <div className="flex flex-col gap-4">
            <Label>Select Role</Label>

            <RadioGroup
              defaultValue="user"
              name="role"
              orientation="horizontal"
              onChange={(value) => setRole(value)}
            >
              <Radio value="user">
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  User
                </Radio.Content>
              </Radio>

              <Radio value="lawyer">
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Lawyer
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>

          {error && (
            <div className="p-3 rounded bg-red-100 text-red-700">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 rounded bg-green-100 text-green-700">
              {success}
            </div>
          )}

          <Button
            type="submit"
            color="primary"
            className="w-full"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Sign Up
          </Button>

          <div className="text-center">
            Already have an account?{" "}
            <Link href={`/auth/signin?redirect=${redirectTo}`}>
              Sign In
            </Link>
          </div>
        </form>

        <p className="text-center mt-4">or</p>

        <Button onClick={handleGoogleSignIn} className="w-full" variant="outline">
          <FcGoogle />
          Sign in with Google
        </Button>

        <ToastContainer />
      </Card>
    </div>
  );
}