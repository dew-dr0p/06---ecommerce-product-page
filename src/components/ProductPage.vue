<template>
    <div class="m-5 mr-14">
        <img src="../../public/assets/image-product-1.jpg" alt="" class="rounded-3xl mb-8 max-w-md">
        <img src="../../public/assets/image-product-1-thumbnail.jpg" alt="" class="mr-4 rounded-2xl border-4 border-orange backdrop-opacity-25 max-w-[6.25rem]">
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
                <img src="../../public/assets/icon-minus.svg" alt="">
                <p class="text-xl font-bold">0</p>
                <img src="../../public/assets/icon-plus.svg" alt="">
            </div>
            <div></div>
            <div class="flex flex-row p-5 py-3 bg-orange text-white w-full text-3xl font-bold items-center justify-center rounded-lg shadow-lg shadow-orange">
                <img src="../../public/assets/icon-cart.svg" alt="" class="">
                <!-- <object data="../../public/assets/icon-cart.svg" type="image/svg+xml" title="Icon Cart" class="scope"></object>
                <svg>
                    <use xlink-href="../../public/assets/icon-cart.svg"></use>
                </svg> -->
                <p class="text-xl font-bold">Add to cart</p>
            </div>
        </div>
    </div>
</template>

<style>
.scope path {
    fill: white;
}
</style>