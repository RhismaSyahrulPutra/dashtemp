import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import bcrypt from "bcryptjs";
import InputLabel from "../FormComponents/InputLabel";
import Checkbox from "../FormComponents/Checkbox";
import Button from "../UiComponents/Button";
import Loading from "../UiComponents/Loading";
import { useAuth } from "../../hooks/useAuth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email dan Password harus diisi");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

      if (error || !data) throw new Error("Email tidak ditemukan");

      const validPassword = bcrypt.compareSync(password, data.password);
      if (!validPassword) throw new Error("Password salah");

      await supabase
        .from("users")
        .update({ last_login: new Date().toISOString() })
        .eq("user_id", data.user_id);

      if (rememberMe) {
        localStorage.setItem("userId", data.user_id);
      } else {
        sessionStorage.setItem("userId", data.user_id);
      }

      login(data, rememberMe);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSignIn}>
      {/* Email */}
      <div>
        <span className="text-sm font-medium">Email</span>
        <InputLabel
          type="email"
          placeholder="Enter your email"
          size="md"
          value={email}
          color="primary"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Password */}
      <div>
        <span className="text-sm font-medium">Password</span>
        <div className="relative">
          <InputLabel
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            size="md"
            value={password}
            color="primary"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            id="rememberMe"
            color="primary"
            size="xs"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label
            htmlFor="rememberMe"
            className="text-xs cursor-pointer select-none"
          >
            Remember me
          </label>
        </div>
      </div>

      {/* Button */}
      <Button
        type="submit"
        variant="primary"
        styleType="default"
        block
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <Loading type="spinner" size="sm" variant="primary" />
            <span>Signing In...</span>
          </div>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
}

export default SignInForm;
