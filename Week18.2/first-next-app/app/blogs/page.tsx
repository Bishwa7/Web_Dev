import axios from "axios"



interface IPost {
    id: number
    title: string;
    body: string;
}


function Post({title, body} : Omit<IPost, "id">) {
    
    return <div>
        Title: {title} <br/>
        Body: {body}
    </div>
}



async function getPosts() {

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data;
}

export default async function blogs() {
    const posts = await getPosts()

    return (
        <div className="pb-10">
            {posts.map((post: IPost) => <Post key={post.id} title={post.title} body={post.body} /> )}
        </div>
    )
}