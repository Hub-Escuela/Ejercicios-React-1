const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    return json;
}

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    return json;
}

export { getPosts, getUsers };