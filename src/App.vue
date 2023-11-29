<script setup lang="ts">
const menuItems = [
    {
        title: 'SHOP_HomePage',
        link: '/'
    },
    {
        title: 'initProgectPage',
        link: '/helloWorldPage'
    },
]
</script>

<template>
    <header>
        <v-btn icon="mdi-account">WTF
            <v-menu activator="parent">
                <v-list>
                    <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    :value="index">
                        <v-list-item-title
                            @click="$router.push(item.link)">
                                {{ item.title }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>    
    </header>

    <router-view></router-view>
</template>

<style>
    header {
        outline: 1px solid black;
        margin: 24px auto;
    }
</style>