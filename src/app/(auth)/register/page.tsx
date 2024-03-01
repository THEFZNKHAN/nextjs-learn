import { register } from "@/lib/action";

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[500px] bg-[var(--bgSoft)] p-12 flex flex-col text-center gap-7 rounded-lg">
                <form
                    action={register}
                    className="flex flex-col text-center gap-7"
                >
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
                    />
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
                    />
                    <input
                        type="password"
                        placeholder="password again"
                        name="passwordRepeat"
                        className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
                    />
                    <button type="submit" className="p-5 cursor-pointer bg-[var(--btn)] text-[var(--textColor)] font-bold border-none rounded">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
