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
                <h1>English Week <span class="gradient">2023</span></h1>
            </NuxtLink>

            <aside>
                <div class="menu">
                    <font-awesome-icon icon="fa-solid fa-bars-staggered" @click="toggleMenu"/>
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
            <section id="links">
                <a
                    href="https://www.iutvannes.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <picture>
                        <source
                            srcset="/logo_iut_vannes_white.webp"
                            type="image/webp"
                        />
                        <img src="/logo_iut_vannes_white.png" alt="IUT Vannes">
                    </picture>
                </a>

                <a
                    href="https://calendar.proton.me/api/calendar/v1/url/aKyIbmfWtecC6eiUjf1wxYgWGZHpgzY0mxlmCQwoMDOXbjPZT2SXJYxqKmX8XkX0qE_vJq3OPP_1o9uZfOHafw==/calendar.ics?CacheKey=lK9aL4GLBgmsmxtDFFGiaA%3D%3D&PassphraseKey=EddFrmYGO9Zgtr5Nq7mKYIrSOzhfNekKKXm_0J0CmQo%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-calendar-day"
                    />
                </a>
            </section>
            <p>
                &copy; <span class="gradient">2023</span> BDE KrHacken
                —
                <a href="https://github.com/finxol" target="_blank" rel="noopener noreferrer">
                    finxol</a>
                &amp;
                <a href="https://github.com/IceCreammms" target="_blank" rel="noopener noreferrer">
                    IceCreammms</a>
            </p>
        </footer>
    </div>
</template>

<style lang="scss">
// fonts
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Six+Caps&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

@import 'assets/fonts/new-telegraph/new-telegraph.css';
@import 'assets/css/main.scss';

::selection {
    background-color: rgba($blue, 0.5);
}

::-webkit-scrollbar {
    width: 20px;
    left: -100px;
}

::-webkit-scrollbar-track {
    background: $transparent;
}

::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px #b5b5b5;
    border: solid 6px transparent;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 10px 10px #999999;
    border: solid 6px transparent;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background-color: $black;
    background-size: cover;
    color: $white;
    overflow: auto;
    overflow-x: hidden;

    * {
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    header {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-rows: minmax(100%, auto);
        position: sticky;
        top: 0;
        z-index: 10;
        align-items: center;
        height: 5rem;
        width: 100vw;

        font-family: 'Poppins', sans-serif;
        background-color: $black;
        color: $white;

        @media (max-width: 768px) {
            padding-left: 1.5rem;
            height: 4rem;
        }

        a {
            grid-column: 2 / 2;
            align-self: center;
            justify-self: center;
            text-decoration: none;
            color: $white;

            @media (max-width: 768px) {
                grid-column: 1 / 1;
                font-size: 1rem;
            }

            .gradient {
                background: $gradient;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }


        aside {
            grid-column: 3 / 3;
            align-self: center;
            justify-self: center;
            display: flex;
            display: none;

            @media (max-width: 768px) {
                grid-column: 2 / 2;
            }

            nav {
                @media (max-width: 768px) {
                    display: none;
                }

                a {
                    margin: 0 1rem;
                    text-decoration: none;
                    color: $white;
                }
            }

            .menu {
                display: none;
                font-size: 2rem;
                cursor: pointer;

                @media (max-width: 768px) {
                    display: block;
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

        font-family: 'Inter', sans-serif;
        background-color: $black;
        color: $white;

        .gradient {
            background: $gradient;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }


        section {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            color: $white;

            a {
                text-decoration: none;
                color: $white;
                font-size: 1.8rem;

                transition: transform, background-color;
                transition-timing-function: ease;
                transition-duration: 400ms;

                &:hover {
                    transform: scale(1.06);
                }

                &:active {
                    transform: scale(0.91);
                }
            }

            picture,
            img,
            svg {
                height: 3rem;

                @media (max-width: 768px) {
                    height: 2rem;
                }
            }

            img {
                margin-bottom: -.5rem;
            }
        }

        p {
            text-align: center;

            a {
                color: $white;
            }
        }
    }
}
</style>
