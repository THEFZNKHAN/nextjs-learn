import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[500px] bg-[var(--bgSoft)] p-12 flex flex-col text-center gap-7 rounded-lg">
                <form action={handleGithubLogin}>
                    <button className="w-full p-5 bg-white text-black rounded text-xl font-semibold hover:bg-blue-500 hover:text-white transition">
                        Login with Github
                    </button>
                </form>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
