<script setup lang="ts">
import { ref } from 'vue'

window.onload = () => {
    const object = document.getElementsByTagName('object')[0]
    const white = object.contentDocument?.getElementsByClassName('white')[0]
    white?.setAttribute('fill', 'white')
    white?.getAttribute('hover:width')
}

const products = {
    main: [
        '/assets/image-product-1.jpg',
        '/assets/image-product-2.jpg',
        '/assets/image-product-3.jpg',
        '/assets/image-product-4.jpg'
    ],
    thumbnail: [
        '/assets/image-product-1-thumbnail.jpg',
        '/assets/image-product-2-thumbnail.jpg',
        '/assets/image-product-3-thumbnail.jpg',
        '/assets/image-product-4-thumbnail.jpg'
    ]
}

const popUp = ref(false)

const openPopUp = () => {
    popUp.value = true
}

const closePopUp = () => {
    popUp.value = false
}
</script>

<template>
    <div class="m-5 mr-14">
        <img src="/assets/image-product-1.jpg" alt="" class="rounded-3xl mb-8 max-w-md">
        <div class="flex flex-row justify-between">
            <div v-for="thumbnail in products.thumbnail" class="rounded-2xl" :class="thumbnail === '/assets/image-product-1-thumbnail.jpg' ? 'border-[3px] border-orange' : ''">
                <img :src="thumbnail" alt="" class="rounded-xl max-w-[6.25rem] cursor-pointer" :class="thumbnail === '/assets/image-product-1-thumbnail.jpg' ? 'opacity-25' : ''" @click="openPopUp">
            </div>
        </div>
    </div>
    <div v-if="popUp" class="absolute z-50 bg-black bg-opacity-75 w-screen h-screen overflow-hidden">
        <div class="m-auto w-fit h-fit grid">
            <img src="/assets/icon-close.svg" alt="" class="w-6 justify-self-end m-5 mr-0" @click="closePopUp">
            <img src="/assets/icon-previous.svg" alt="" class="absolute top-[45%] -left-8 bg-white rounded-[50%] w-16 h-16 px-6 py-5 z-[51]">
            <img src="/assets/icon-next.svg" alt="" class="absolute top-[45%] -right-8 bg-white rounded-[50%] w-16 h-16 px-6 py-5 z-[51]">
            <img src="/assets/image-product-1.jpg" alt="" class="rounded-3xl mb-8 max-w-xl">
            <div class="flex flex-row mx-12 justify-between">
                <div v-for="thumbnail in products.thumbnail" class="rounded-2xl bg-white" :class="thumbnail === '/assets/image-product-1-thumbnail.jpg' ? 'border-[3px] border-orange' : ''">
                    <img :src="thumbnail" alt="" class="rounded-xl max-w-[6.25rem] cursor-pointer" :class="thumbnail === '/assets/image-product-1-thumbnail.jpg' ? 'opacity-25' : ''">
                </div>
            </div>
        </div>
    </div>
    <div class="m-auto ml-14">
        <h5 class="uppercase text-orange font-bold mb-5" style="letter-spacing: 2.75px;">Sneaker Company</h5>
        <h1 class="text-5xl font-bold mb-10">Fall Limited Edition Sneakers</h1>
        <p class="text-blue-grayish mb-10">These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <p class="text-4xl font-bold items-center flex mb-3">$125.00 <span class="text-orange text-lg p-1 px-2 ml-5 bg-orange-pale font-bold rounded-lg">50%</span></p> 
        <p class="text-blue-grayish line-through mb-5">$250.00</p>
        <div class="grid grid-cols-[2fr,.5fr,3fr] items-center">
            <div class="flex flex-row p-5 py-3 bg-blue-grayish-light w-full text-3xl font-bold items-center justify-between rounded-lg">
                <img src="/assets/icon-minus.svg" alt="">
                <p class="text-xl font-bold">0</p>
                <img src="/assets/icon-plus.svg" alt="">
            </div>
            <div></div>
            <div class="flex flex-row px-10 py-3 bg-orange text-white w-full text-3xl font-bold items-center justify-center rounded-lg shadow-lg shadow-orange">
                <!-- <img src="/assets/icon-cart.svg" alt="" class=""> -->
                <object data="/assets/icon-cart.svg" type="image/svg+xml" title="Icon Cart" class="pr-5"></object>
                <!-- <svg>
                    <use xlink-href="/assets/icon-cart.svg"></use>
                </svg> -->
                <p class="text-xl font-bold">Add to cart</p>
            </div>
        </div>
    </div>
</template>