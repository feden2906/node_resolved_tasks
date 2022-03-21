import { UpdateResult } from 'typeorm';

import { IPost } from '../entity/post.entity';
import { postRepository } from '../repositories/post/post.repository';

class PostService {
    public async createPost(post: IPost): Promise<IPost> {
        return postRepository.createPost(post);
    }

    public async getUserPosts(id : string): Promise<IPost[]> {
        return postRepository.getUserPosts(+id);
    }

    public async updatePost(id: string, title: string, text: string): Promise<UpdateResult> {
        return postRepository.updatePost(+id, title, text);
    }
}

export const postService = new PostService();
