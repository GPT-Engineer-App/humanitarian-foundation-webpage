import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL || 'https://your-supabase-url.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY || 'your-supabase-api-key';
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) {
        console.error('Supabase Error:', error);
        throw new Error(error.message);
    }
    return data;
};

/* supabase integration types

### users

| name    | type   | format | required |
|---------|--------|--------|----------|
| id      | uuid   | string | true     |
| name    | text   | string | true     |
| email   | text   | string | true     |

### posts

| name    | type   | format | required |
|---------|--------|--------|----------|
| id      | uuid   | string | true     |
| user_id | uuid   | string | true     |  // foreign key to users
| title   | text   | string | true     |
| content | text   | string | true     |

### comments

| name    | type   | format | required |
|---------|--------|--------|----------|
| id      | uuid   | string | true     |
| post_id | uuid   | string | true     |  // foreign key to posts
| user_id | uuid   | string | true     |  // foreign key to users
| content | text   | string | true     |

*/

// Hooks for users
export const useUsers = () => useQuery({
    queryKey: ['users'],
    queryFn: () => fromSupabase(supabase.from('users').select('*')),
});

export const useUser = (id) => useQuery({
    queryKey: ['user', id],
    queryFn: () => fromSupabase(supabase.from('users').select('*').eq('id', id).single()),
});

export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser) => fromSupabase(supabase.from('users').insert([newUser])),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedUser) => fromSupabase(supabase.from('users').update(updatedUser).eq('id', updatedUser.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('users').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

// Hooks for volunteer opportunities
export const useVolunteerOpportunities = () => useQuery({
    queryKey: ['volunteerOpportunities'],
    queryFn: () => fromSupabase(supabase.from('volunteer_opportunities').select('*')),
});

export const useVolunteerOpportunity = (id) => useQuery({
    queryKey: ['volunteerOpportunity', id],
    queryFn: () => fromSupabase(supabase.from('volunteer_opportunities').select('*').eq('id', id).single()),
});

export const useAddVolunteerOpportunity = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newVolunteerOpportunity) => fromSupabase(supabase.from('volunteer_opportunities').insert([newVolunteerOpportunity])),
        onSuccess: () => {
            queryClient.invalidateQueries('volunteerOpportunities');
        },
    });
};

export const useUpdateVolunteerOpportunity = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedVolunteerOpportunity) => fromSupabase(supabase.from('volunteer_opportunities').update(updatedVolunteerOpportunity).eq('id', updatedVolunteerOpportunity.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('volunteerOpportunities');
        },
    });
};

export const useDeleteVolunteerOpportunity = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('volunteer_opportunities').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('volunteerOpportunities');
        },
    });
};

// Hooks for testimonials
export const useTestimonials = () => useQuery({
    queryKey: ['testimonials'],
    queryFn: () => fromSupabase(supabase.from('testimonials').select('*')),
});

export const useTestimonial = (id) => useQuery({
    queryKey: ['testimonial', id],
    queryFn: () => fromSupabase(supabase.from('testimonials').select('*').eq('id', id).single()),
});

export const useAddTestimonial = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newTestimonial) => fromSupabase(supabase.from('testimonials').insert([newTestimonial])),
        onSuccess: () => {
            queryClient.invalidateQueries('testimonials');
        },
    });
};

export const useUpdateTestimonial = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedTestimonial) => fromSupabase(supabase.from('testimonials').update(updatedTestimonial).eq('id', updatedTestimonial.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('testimonials');
        },
    });
};

export const useDeleteTestimonial = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('testimonials').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('testimonials');
        },
    });
};