<script setup>
const toggleMenu = () => {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}
</script>

<template>
    <div>
        <header>
            <NuxtLink to="/">
                <h1>English Week 2023</h1>
            </NuxtLink>

            <aside>
                <div class="skewed"></div>
                <div class="menu">
                    <font-awesome-icon
                        icon="fa-solid fa-bars-staggered"
                        @click="toggleMenu"
                    />
                </div>
                <nav>
                    <NuxtLink to="#about">About</NuxtLink>
                    <NuxtLink to="#speakers">Speakers</NuxtLink>
                    <NuxtLink to="#links">Links</NuxtLink>
                </nav>
            </aside>
        </header>

        <main>
            <NuxtPage/>
        </main>

        <footer>
            <section
                id="links"
            >
                <a
                    href="https://www.iutvannes.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/logo_iut_vannes_white.png" alt="IUT Vannes">
                </a>
            </section>
            <p>
                &copy; 2023 BDE KrHacken
            </p>
        </footer>
    </div>
</template>

<style lang="scss">
@import 'assets/fonts/new-telegraph/new-telegraph.css';
@import "assets/css/main.scss";

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'NewTelegraph', sans-serif;
    background-color: $white;
    color: $black;
    overflow-x: hidden;

    * {
        box-sizing: border-box;
    }

    a {
        transition-duration: .2s;

        &:hover {
            transform: scale(1.04);
        }

        &:active {
            transform: scale(0.95);
        }
    }

    header {
        display: flex;
        position: sticky;
        top: 0;
        z-index: 10;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0 1rem 4rem;
        height: 5rem;
        width: 100vw;
        overflow: hidden;

        font-family: 'NewTelegraphBold', sans-serif;
        background-color: $blue;
        color: $white;

        @media (max-width: 768px) {
            padding-left: 1.5rem;
            height: 4rem;
        }

        a {
            color: $white;
            text-decoration: none;
        }

        h1 {
            font-size: 2rem;
            font-weight: 700;
            margin: 0;

            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }

        aside {
            display: flex;
            justify-content: right;
            align-items: center;

            div.skewed {
                position: relative;
                z-index: 1;
                height: 5rem;
                width: 5rem;
                background-color: $red;
                transform: skewX(45deg) translateX(2.5rem);

                @media screen and (max-width: 768px) {
                    width: 5rem;
                    transform: skewX(25deg) translateX(2.5rem);
                }
            }

            div.menu {
                /*position: relative;
                z-index: 1;*/
                display: none;

                @media screen and (max-width: 768px) {
                    display: block;
                }
            }

            nav {
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                height: 5rem;
                padding: 0 5rem 0 1rem;
                background-color: $red;

                @media screen and (max-width: 768px) {
                    display: none;
                }

                a {
                    padding: .5rem 1rem;
                    border-radius: .2rem .2rem 0 0;
                    border: 1px solid rgba($white, 0.5);
                    border-bottom: 5px solid rgba($white, 0.8);

                    &:hover {
                        border-bottom: 2px solid rgba($white, 1);
                        padding-bottom: calc(.5rem + 4px);
                    }
                }
            }
        }
    }

    main {
        min-height: calc(100vh - 6rem - 4rem);
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem 1rem 0;
        margin: 3rem 0 0;

        font-family: 'NewTelegraphBold', sans-serif;
        background-color: $blue;
        color: $white;

        section {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            img {
                height: 3rem;
            }
        }
    }
}
</style>
