import { UserDetail } from './user.detail';

export interface User{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserDetail[];
}