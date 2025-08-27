import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import bcrypt from "bcryptjs";
import InputLabel from "../FormComponents/InputLabel";
import Button from "../UiComponents/Button";
import Loading from "../UiComponents/Loading";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Semua field harus diisi");
      return;
    }

    setLoading(true);
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);

      const { data: userData, error: userError } = await supabase
        .from("users")
        .insert([{ username, email, password: hashedPassword }])
        .select();
      if (userError) throw userError;

      const userId = userData[0].user_id;

      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ user_id: userId }]);
      if (profileError) throw profileError;

      alert("Sign Up berhasil! Silakan login.");
      navigate("/sign-in");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSignUp}>
      <div>
        <span className="text-sm font-medium">Username</span>
        <InputLabel
          type="text"
          placeholder="Enter your username"
          size="md"
          value={username}
          color="primary"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full"
        />
      </div>
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
            <span>Signing Up...</span>
          </div>
        ) : (
          "Sign Up"
        )}
      </Button>
    </form>
  );
}

export default SignUpForm;
