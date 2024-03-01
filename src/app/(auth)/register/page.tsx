import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[500px] bg-[var(--bgSoft)] p-12 flex flex-col text-center gap-7 rounded-lg">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;
