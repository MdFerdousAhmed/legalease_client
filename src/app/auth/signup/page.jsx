// "use client";

// import { useState } from "react";
// import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";
// import { Description, Radio, RadioGroup } from "@heroui/react";

// import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
// import { authClient, signUp } from "@/lib/auth-client";
// import { useRouter, useSearchParams } from "next/navigation";
// import { ToastContainer } from "react-toastify";
// import { FcGoogle } from "react-icons/fc";

// export default function SignupPage() {
//   // Form fields
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const redirectTo = searchParams.get("redirect") || "/";

//   // UI States
//   const [isVisible, setIsVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const toggleVisibility = () => setIsVisible(!isVisible);

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");
//     setIsLoading(true);

//     const plan = role === "user" ? "user_fee" : "lawyer_fee";

//     try {
//       const { data, error: authError } = await signUp.email({
//         email,
//         password,
//         name,
//         role,
//         plan,
//         callbackURL: "/",
//       });

//       if (authError) {
//         setError(authError.message || "Something went wrong during signup.");
//         setIsLoading(false);
//         return;
//       }

//       setSuccess("Account created successfully! Welcome.");

//       setName("");
//       setEmail("");
//       setPassword("");

//       router.push(redirectTo);
//     } catch (err) {
//       setError(err?.message || "An unexpected network error occurred.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await authClient.signIn.social({
//         provider: "google",
//         callbackURL: redirectTo,
//       });
//     } catch (err) {
//       setError("Google sign-in failed.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
//       <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

//         {/* Header Container */}
//         <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
//           <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
//             Create an account
//           </h1>
//           <p className="text-sm text-zinc-600 dark:text-zinc-400">
//             Fill in the fields below to get started
//           </p>
//         </div>

//         {/* Form Body */}
//         <form onSubmit={handleSignup} className="flex flex-col gap-5">

//           {/* Name Field */}
//           <TextField isRequired name="name" className="flex flex-col gap-1.5">
//             <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
//               Name
//             </Label>

//             <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
//               <Person className="text-zinc-400" size={16} />

//               <Input
//                 type="text"
//                 placeholder="Enter your full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//               />
//             </InputGroup>
//           </TextField>

//           {/* Email Field */}
//           <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
//             <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
//               Email Address
//             </Label>

//             <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
//               <At className="text-zinc-400" size={16} />

//               <Input
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//               />
//             </InputGroup>
//           </TextField>

//           {/* Password Field */}
//           <TextField isRequired name="password" className="flex flex-col gap-1.5">
//             <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
//               Password
//             </Label>

//             <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
//               <ShieldKeyhole className="text-zinc-400" size={16} />

//               <Input
//                 type={isVisible ? "text" : "password"}
//                 placeholder="Choose a password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//               />

//               <button
//                 type="button"
//                 onClick={toggleVisibility}
//                 className="text-zinc-400 hover:text-zinc-600"
//               >
//                 {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
//               </button>
//             </InputGroup>
//           </TextField>

//           {/* Role Selection (FIXED) */}
//           <div className="flex flex-col gap-4">
//             <Label>Selection role</Label>
//             <RadioGroup defaultValue="user" name="role" onChange={value => setRole(value)} orientation="horizontal">
//               <Radio value="user">
//                 <Radio.Content>
//                   <Radio.Control>
//                     <Radio.Indicator />
//                   </Radio.Control>
//                   User
//                 </Radio.Content>
//               </Radio>
//               <Radio value="lawyer">
//                 <Radio.Content>
//                   <Radio.Control>
//                     <Radio.Indicator />
//                   </Radio.Control>
//                   Lawyer
//                 </Radio.Content>
//               </Radio>
//             </RadioGroup>
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
//               <span className="font-semibold">Error:</span> {error}
//             </div>
//           )}

//           {/* Success */}
//           {success && (
//             <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
//               <span className="font-semibold">Success:</span> {success}
//             </div>
//           )}

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             color="primary"
//             className="w-full font-semibold rounded-xl text-sm h-12"
//             isLoading={isLoading}
//             isDisabled={isLoading}
//           >
//             Sign Up
//           </Button>

//           {/* Sign In Link */}
//           <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//             Already have an account?{" "}
//             <Link
//               href={`/auth/signin?redirect=${redirectTo}`}
//               className="font-medium text-sm text-blue-600 dark:text-blue-400"
//             >
//               Sign in instead
//             </Link>
//           </div>

//         </form>

//         <p className="text-center mt-4">or</p>

//         {/* Google Login */}
//         <Button onClick={handleGoogleSignIn} className="w-full">
//           <FcGoogle />
//           Sign in with Google
//         </Button>

//         <ToastContainer />
//       </Card>
//     </div>
//   );
// }

import { Suspense } from "react";
import SignupPageContent from "./SignupPageContent";

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupPageContent />
    </Suspense>
  );
}