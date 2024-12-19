import { request } from '../hoc/request';
import { config } from '../config/config';
import { CommunityListDTO } from '../types/dto/community.dto';

const BASE_URL = config.apiUrl;

export const communityService = {
    //커뮤니티 게시물 목록 불러오기
    getCommunityList:(location: string|null) => {
        return request<CommunityListDTO[]>({
            method: 'GET',
            url: `${BASE_URL}/post/postList`,
            params: location ? { location } : {}
        })
    }
}