import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

const API_KEY = process.env.REACT_APP_CAT_API_KEY; 


export const animalApi = createApi({
    reducerPath: "animalApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thecatapi.com/v1/",
        prepareHeaders: (headers) => {
            headers.set("x-api-key", API_KEY);
            console.log("API Key:", API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAnimals: builder.query({
            query: ({ type = "cat", page = 0, limit = 5 } = {}) =>
                `${type === "dog" ? "https://api.thedogapi.com/v1/images/search" : "images/search"}?limit=${limit}&page=${page}`,
        }),
        voteAnimal: builder.mutation({
            query: ({ image_id, value }) => ({
                url: "votes",
                method: "POST",
                body: { image_id, value },
            }),
        }),
    }),
});

export const {
    useGetAnimalsQuery, useVoteAnimalMutation
} = animalApi;