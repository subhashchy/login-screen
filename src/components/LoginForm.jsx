import React, { useState } from "react";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      if (form.email === "demo@secure.com" && form.password === "password123") {
        alert("Welcome back, Demo User!");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }, 1200);
  };

  return (
    <form
      className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto animate-in fade-in duration-700"
      onSubmit={handleSubmit}
      aria-label="Login form"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Sign in to Secure Portal</h2>
      <p className="text-gray-500 text-center mb-6">Enter your credentials to access your account</p>
      <div className="mb-4">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 relative">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Your password"
          required
          value={form.password}
          onChange={handleChange}
          className="pr-12"
        />
        <button
          type="button"
          tabIndex={0}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-3 top-9 text-gray-400 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary rounded p-1 transition-colors"
          onClick={() => setShowPassword((v) => !v)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && (
        <div className="mb-4 text-red-600 text-sm text-center animate-in fade-in duration-300">{error}</div>
      )}
      <Button
        type="submit"
        className="w-full mt-2"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? "Signing in..." : "Sign In"}
      </Button>
      <div className="flex justify-between items-center mt-4 text-sm">
        <a
          href="#"
          className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
        >
          Forgot password?
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
        >
          Create account
        </a>
      </div>
    </form>
  );
}
