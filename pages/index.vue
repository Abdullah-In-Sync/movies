<template>
    <div class="flex flex-col items-center justify-center m-5">

        <form @submit.prevent="onSubmit" class="w-5/6">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" id="default-search" v-model="search"
                    class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                     focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..." required="">
                <button type="submit" @click.prevent="onSubmit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4
                     focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600
                      dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        <div class="shows">
            <div class="show" v-for="show in shows" :key="show.id">
                <nuxt-link :to="'/search/' + show.show.id">
                    {{ show.show.name }}
                    <img :src="show.show.image?.medium" alt="" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const shows = ref([]);
const search = ref("");
const URL = "https://api.tvmaze.com/search/shows?q=";


async function searchShows(search) {
    const grabData = await fetch(URL + search.value);
    const json = await grabData.json();
    shows.value = json;
}

async function onSubmit() {
    if (!search.value) return;
    searchShows(search);
}
</script>
<style>

.show {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.show:hover {
  transform: scale(1.1);
}

.shows {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  margin: 0 auto;
  width: 100%;
}

img {
  width: 45%;
}
</style>