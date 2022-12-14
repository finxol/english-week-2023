<script setup lang="ts">
interface Speaker {
    name: string,
    title: string,
    description?: string,
    date: string,
    url?: string,
    linkedin?: string,
    img: string,
}

let speakers: Speaker[] = [
    {
        name: "Ayça Atabey",
        title: "Data protection, AI, and human rights issues",
        description: `This presentation will be a talk about a very interesting subject.`,
        date: "2023-02-01T17:45:00.000+01:00",
        url: "https://www.turing.ac.uk/people/enrichment-students/ayca-atabey",
        linkedin: "https://www.linkedin.com/in/ayca-atabey/",
        img: "https://www.turing.ac.uk/sites/default/files/styles/people/public/2022-08/ayca_atabey.jpg?itok=kyLTNTBb",
    },
    {
        name: "Nicholas Boucher",
        title: "Invisible Hacks Against Machine Learning & Source Code",
        description: "Adversarially encoding text can cause lots of problems. In this talk, we will explore recent research into attacking real-world systems ranging from machine learning models to compilers by leveraging obscure text encodings.",
        date: "2023-01-30T17:45:00.000+01:00",
        linkedin: "https://www.linkedin.com/in/bouchernicholas/",
        img: "https://www.cl.cam.ac.uk/~ndb40/assets/img/boucher.webp?h=8fa366f4b743a2c305532241cd0d30ea",
    },
    {
        name: "Colin Ozanne",
        title: "Web design and front-end development",
        description: `Colin will present some general web front-end design principle, along with a concrete design example.`,
        date: "2023-02-05T05:00:00.000+01:00",
        url: "https://colinozanne.fr/",
        linkedin: "https://www.linkedin.com/in/colin-ozanne-99594822a/",
        img: "https://avatars.githubusercontent.com/u/71637999?v=4",
    }
].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());


const parseDate = (date: string) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'Europe/Paris',
    }
    return new Date(date).toLocaleDateString('en-GB', options);
}

let nextSpeaker = speakers.find(speaker => new Date(speaker.date).getTime() > Date.now());

const delay = ({hours = 0, days = 0, date = Date.now()} = {}) => {
    let d = new Date(date);
    d.setHours(d.getHours() - hours)
    d.setDate(d.getDate() - days)
    return d
}

const streamLink = "https://www.twitch.tv/krhacken";


onBeforeMount(() => {
    if (window.location.search.includes("test")) {
        let s = speakers.find(speaker => speaker.name === 'Colin Ozanne')
        if (s)
            s.name = 'Colin Ozanne-Audroing'
    }
})
</script>

<template>
    <div class="page">
        <div class="head">
            <p>
                Join us for <span class="blue">conferences</span><br>
                and a <span class="red">quiz</span>!<br>
                <small>From <b>30th January</b> to <b>3rd February</b></small>
            </p>
            <picture>
                <source
                    srcset="/english-week.webp"
                >
                <img
                    src="/english-week.png"
                    alt="English Week 2023"
                />
            </picture>
        </div>

        <!-- set to 1 week before first stream -->
        <div
            v-if="new Date() > delay({days: 7, date: nextSpeaker.date})"
            class="stream"
        >
            <p
                class="next"
            >
                Next talk will be from <b>{{ nextSpeaker.name }}</b> on <b>{{ parseDate(nextSpeaker.date) }}</b>
            </p>


        </div>

        <div
            class="intro"
            id="about"
        >
            <p>
                The English Week is the perfect opportunity to improve your English skills and learn more about the
                world of IT.
                Each year, the student committee of the computer science department organizes a week of conferences and
                a quiz, and encourages teachers to teach their regular classes in English.
            </p>
            <p>
                This year, KrHacken invited a great lineup of speakers to talk about various subjects, ranging from
                cybersecurity to web design to data protection and AI!
                With these talk, you get to learn more about these topics, and also improve your English skills!

            </p>
        </div>

        <div
            class="speakers"
            id="speakers"
        >
            <h2>Talks</h2>
            <small>All times are shown in CET (Central European Time)</small>
            <section>
                <div
                    class="speaker"
                    v-for="speaker in speakers"
                    :key="speaker.name"
                >
                    <img
                        :src="speaker.img.includes('https://') ? speaker.img : `/speakers/${speaker.img}`"
                        :alt="speaker.name"
                    >
                    <div class="info">
                        <h3>{{ speaker.title }}</h3>
                        <small>{{ parseDate(speaker.date) }}</small>
                        <h4>
                            <a
                                v-if="speaker.url"
                                :href="speaker.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                :aria-label="`${speaker.name} Website`"
                            >
                                {{ speaker.name }}
                            </a>
                            <span v-else>{{ speaker.name }}</span>
                            <a
                                v-if="speaker.linkedin"
                                :href="speaker.linkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="linkedin"
                                :aria-label="`${speaker.name} LinkedIn Profile`"
                            >
                                <font-awesome-icon
                                    icon="fa-brands fa-linkedin"
                                />
                            </a>
                        </h4>
                        <p v-if="speaker.description">{{ speaker.description }}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'assets/css/main.scss';

div.page {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.head {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        margin: 1rem 3rem;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            margin-top: 0;
        }

        p {
            width: 35%;
            font-size: 2.7rem;

            @media screen and (max-width: 768px) {
                width: 100%;
                font-size: 2rem;
            }

            span {
                font-family: 'NewTelegraphBold', sans-serif;
            }

            span.blue {
                color: $blue;
            }

            span.red {
                color: $red;
            }

            small {
                font-size: 1.3rem;
            }
        }

        img {
            width: 15rem;
        }
    }

    div.stream {
        width: 100%;
        padding: 1rem 9rem;
        margin: 2rem 0 0;
        background-color: rgba($red, .1);
        text-align: center;
        line-height: 1.6rem;

        @media screen and (max-width: 768px) {
            padding: 1rem 3rem;
        }

        p.next {
            font-size: 1.5rem;
            font-family: 'NewTelegraphBold', sans-serif;
            color: $blue;

            b {
                color: $red;
            }
        }
    }

    div.intro {
        width: 100%;
        padding: 1rem 9rem;
        margin: 4rem 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
        background-color: rgba($blue, .1);

        @media screen and (max-width: 768px) {
            padding: 1rem 2rem;
            flex-direction: column;
            gap: 0;
        }

        p {
            width: 100%;
            font-size: 1.1rem;
            text-wrap: normal;
            text-align: justify;
        }
    }

    div.speakers {
        width: 85%;
        margin: 2rem 0 0;
        text-align: left;

        h2 {
            font-size: 2.7rem;
            font-family: 'NewTelegraphBold', sans-serif;
            color: $blue;
            margin-bottom: 1rem;
        }

        small {
            display: block;
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        section {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: space-between;


            div.speaker {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                margin: 0;
                padding: 1rem 1rem;
                width: clamp(15rem, calc(50% - 1rem), 50rem);

                background-color: rgba($blue, .07);
                border-radius: .5rem;
                box-shadow: 0 0 1rem rgba(0, 0, 0, .08);
                transition: box-shadow .2s ease-in-out;
                opacity: 0;

                animation: appear .6s;
                animation-timing-function: ease-out;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;

                @for $i from 0 to 3 {
                    &:nth-child(#{$i + 1}) {
                        animation-delay: $i * .1s;
                    }
                }

                @keyframes appear {
                    0% {
                        opacity: 0;
                        transform: translateY(1rem);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                &:hover {
                    box-shadow: 0 0 1rem rgba(0, 0, 0, .1);
                }

                @media screen and (max-width: 768px) {
                    flex-direction: column;
                    width: 100%;
                    margin: .5rem 0;
                }

                &:nth-child(even) {
                    flex-direction: row-reverse;

                    @media screen and (max-width: 768px) {
                        flex-direction: column;
                    }
                }

                img {
                    width: 8rem;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    object-fit: cover;
                }

                div.info {
                    width: 70%;
                    margin-left: 2rem;

                    @media screen and (max-width: 768px) {
                        width: 100%;
                        margin: 1rem 0 0;
                    }

                    h3 {
                        margin: 0;
                        font-size: 1.8rem;
                        font-family: 'NewTelegraphBold', sans-serif;
                        color: $blue;
                    }

                    small {
                        display: inline-block;
                        margin: .8rem 0;
                        color: $blue;
                        font-size: 1.2rem;
                        font-family: 'NewTelegraph', sans-serif;
                    }

                    a {
                        text-decoration: none;
                        color: inherit;
                    }

                    h4 {
                        margin: 0 0 1rem;
                        font-size: 1.3rem;
                        font-family: 'NewTelegraph', sans-serif;
                        color: $blue;

                        a.linkedin {
                            display: inline-block;
                            margin-left: 1rem;

                            &:hover {
                                transform: none;
                            }
                        }
                    }

                    p {
                        font-size: 1.1rem;
                        margin: 0;

                        @media screen and (max-width: 768px) {
                            font-size: 1rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
