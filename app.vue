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
                <a href="https://www.iutvannes.fr" target="_blank" rel="noopener noreferrer">
                    <picture>
                        <source
                            srcset="/logo_iut_vannes_white.webp"
                            type="image/webp"
                        />
                        <img src="/logo_iut_vannes_white.png" alt="IUT Vannes">
                    </picture>
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
@import "assets/css/main.scss";

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
        overflow: hidden;

        font-family: 'Poppins', sans-serif;
        background-color: $black;
        color: $white;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
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

            @media (max-width: 768px) {
                grid-column: 2 / 2;
            }

        }

        nav > a {
            margin: 0 1rem;
            text-decoration: none;
            color: $white;
        }

        nav {
            @media (max-width: 768px) {
                display: none;
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

            img {
                height: 3rem;
            }
        }

        p {
            a {
                color: $white;
            }
        }
    }
}
</style>
