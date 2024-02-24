interface usersType {
    id: number;
    name: string;
}

interface postsType {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// TEMPORARY DATA
const users: usersType[] = [
    { id: 1, name: "Jon" },
    { id: 2, name: "Jane" },
];

const posts: postsType[] = [
    { id: 1, title: "Post 1", body: "........", userId: 1 },
    { id: 2, title: "Post 2", body: "........", userId: 2 },
    { id: 3, title: "Post 3", body: "........", userId: 1 },
    { id: 4, title: "Post 4", body: "........", userId: 2 },
];

export const getPosts = async (id: number) => {
    return posts.find((post) => post.id === id);
};

export const getUsers = async (id: number) => {
    return users.find((user) => user.id === id);
};
