import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInwithPassword } from "@/hooks/mutations/use-sign-in-with-password";
import { useState } from "react";
import { Link } from "react-router";
import githublogo from "@/assets/github-mark.svg";
import { useSignInwithOAuth } from "@/hooks/mutations/use-sign-in-with-Oauth";
import { toast } from "sonner";
import { generateErrorMessage } from "@/lib/error";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signwithPassword, isPending: isSignInwithpasswordPending } =
    useSignInwithPassword({
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });

        setPassword("");
      },
    });
  const { mutate: signInwithOauth, isPending: isSignInwithOAuthPending } =
    useSignInwithOAuth({
      onError: (error) => {
        const messsage = generateErrorMessage(error);
        toast.error(messsage, {
          position: "top-center",
        });
      },
    });

  const handleSignInWithPasswordClick = () => {
    if (email.trim() === "") return;
    if (password.trim() === "") return;

    signwithPassword({
      email,
      password,
    });
  };
  const handlesignInwithGitHubClick = () => {
    signInwithOauth("github");
  };
  const isPending = isSignInwithOAuthPending || isSignInwithpasswordPending;
  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">로그인</div>
      <div className="flex flex-col gap-2">
        <Input
          disabled={isPending}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          disabled={isPending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          disabled={isPending}
          onClick={handleSignInWithPasswordClick}
          className="w-full"
        >
          로그인
        </Button>
        <Button
          disabled={isPending}
          onClick={handlesignInwithGitHubClick}
          className="w-full"
          variant={"outline"}
        >
          <img src={githublogo} className="h-4 w-4" alt="github" />
          GitHub계정으로 로그인
        </Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>
          계정이 없으시다면? 회원가입
        </Link>
      </div>
    </div>
  );
}
