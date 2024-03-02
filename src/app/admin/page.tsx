import { Suspense } from "react";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
    const session = await auth();

    return (
        <div className="mt-12 flex flex-col gap-24">
            <div className="flex gap-24">
                <div className="flex-1">
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>

                <div className="flex-1">
                    <AdminPostForm userId={session?.user?.id} />
                </div>
            </div>

            <div className="flex gap-24">
                <div className="flex-1">
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUsers />
                    </Suspense>
                </div>

                <div className="flex-1">
                    <AdminUserForm />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
