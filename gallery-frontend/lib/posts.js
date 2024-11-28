import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
    const fileName = fs.readdirSync(postsDirectory);

    const posts = fileName.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const filePath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        return{
            slug,
            content,
            data,
        }
    });
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0,3);
}