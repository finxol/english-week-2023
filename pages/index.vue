<script lang="ts" setup>
interface Speaker {
    name: string,
    title: string,
    description?: string,
    date: string,
    confirmed?: boolean,
    url?: string,
    linkedin?: string,
    img: string,
    expand: boolean
}

let speakers: Speaker[] = reactive([
    {
        name: "Ayça Atabey",
        title: "An interdisciplinary look at 'fairness': designing rights-respecting Emotion AI-driven technologies for vulnerable groups ",
        date: "2023-02-01T17:45:00.000+01:00",
        url: "https://www.turing.ac.uk/people/enrichment-students/ayca-atabey",
        linkedin: "https://www.linkedin.com/in/ayca-atabey/",
        img: "https://www.turing.ac.uk/sites/default/files/styles/people/public/2022-08/ayca_atabey.jpg",
        expand: false,
    },
    {
        name: "Nicholas Boucher",
        title: "Invisible Hacks Against Machine Learning & Source Code",
        description: "Adversarially encoding text can cause lots of problems. In this talk, we will explore recent research into attacking real-world systems ranging from machine learning models to compilers by leveraging obscure text encodings.",
        date: "2023-01-30T17:45:00.000+01:00",
        confirmed: true,
        url: "https://www.cl.cam.ac.uk/~ndb40/",
        linkedin: "https://www.linkedin.com/in/bouchernicholas/",
        img: "https://www.cl.cam.ac.uk/~ndb40/assets/img/boucher.webp?h=8fa366f4b743a2c305532241cd0d30ea",
        expand: false,
    },
    {
        name: "Colin Ozanne",
        title: "Designing Effective Web Interfaces: Tips and Techniques",
        description: `In this talk, we will explore the key principles of design and how they can be applied to create visually appealing and intuitive web interfaces. We will also delve into techniques for building responsive websites that work well on a variety of devices, and discuss the importance of accessibility and performance in web design. We will cover practical tips and techniques for optimizing the usability of your website, including how to create clear and concise content, design effective calls to action, and conduct user testing. By the end of the talk, you will have a solid understanding of how to design and build web interfaces that are both visually appealing and user-friendly.`,
        date: "2023-02-02T17:45:00.000+01:00",
        confirmed: true,
        url: "https://colinozanne.fr/",
        linkedin: "https://www.linkedin.com/in/colin-ozanne-99594822a/",
        img: "https://www.krhacken.fr/_next/image?url=%2Fassets%2Fcolin.png&w=256&q=75",
        expand: false,
    }
].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));


const parseDate = (date: string) => new Date(date).toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'Europe/Paris',
    });

let nextSpeaker = speakers.find(speaker => {
    let d = new Date(speaker.date);
    d.setHours(d.getHours() + 1);
    return d.getTime() > Date.now()
});

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
            <!--<p class="primary-text">
                Join us for <span class="gradient strong">conferences</span><br>
                and a <span class="gradient strong">quiz</span>!<br>
            </p>-->

            <div class="primary-text">
                <p class="left">
                    <span>English</span>
                    <span>Week</span>
                </p>
                <p class="right">
                    <span class="gradient">2023</span>
                </p>
            </div>

            <p class="secondary-text">
                <span class="description">When & Where ?</span><br>
                <span class="date">
                    January 30
                    <span class="gradient">•</span>
                    February 3 <br>
                    <span class="gradient">Online</span>
                </span>
            </p>

        </div>

        <!-- set to 1 week before first stream -->
        <div
            v-if="new Date() > delay({ days: 7, date: speakers[0].date })"
            class="stream"
        >
            <p class="next">
                Next talk will be from
                <span class="gradient strong">{{ nextSpeaker.name }}</span> on
                <span class="gradient strong">{{ parseDate(nextSpeaker.date) }}</span>
            </p>

            <iframe
                v-if="new Date() > delay({ hours: 0.5, date: nextSpeaker.date }) && new Date() < delay({ hours: -1, date: nextSpeaker.date })"
                allowfullscreen=""
                frameborder="0"
                height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://live.krhacken.fr/videos/embed/956548a7-dabf-45f4-acae-67d924549482?title=0&amp;warningTitle=0&amp;peertubeLink=0" title="English Week live Conference"
                width="560">
            </iframe>
        </div>


        <div id="about" class="scroll-anchor"></div>
        <div class="intro">
            <span class="about-title">
                What exactly is the <br>
                <span class="gradient strong">english week ?</span>
            </span>
            <ol class="about-content">
                <li>
                    The English Week is the perfect opportunity to improve your English skills and learn more about the
                    world of IT.<br>
                </li>
                <li>
                    Each year, the student committee of the computer science department organizes a week of conferences,
                    a quiz, and encourages every teacher to teach their regular class in English.
                </li>
                <li>
                    There is an incredible lineup of speakers who will be sharing their expertise on a variety of
                    subjects, such as cybersecurity, web design, data protection, and even AI! These talks are not only
                    a chance to deepen your understanding of these exciting topics, but also a fantastic opportunity to
                    hone your English skills. Don't miss out on this amazing learning experience!
                </li>
                <hr class="separator-small">
                <div class="small">
                    The speakers at the English Week events are invited by the student committee of the computer science
                    department and may not necessarily be affiliated with the school.
                </div>
            </ol>

        </div>

        <div
            id="speakers"
            class="speakers"
        >
            <h2>Talks</h2>
            <small>All times are shown in CET (Central European Time)</small>
<!--            <small>Unconfirmed dates & times are marked with ~</small>-->

            <section
                class="speaker-container"
            >
                <div
                    v-for="speaker in speakers"
                    :key="speaker.name"
                    class="speaker-card"
                >
                    <div
                        class="card-container"
                    >
                        <div
                            class="user-image"
                        >
                            <img
                                :alt="speaker.name"
                                :src="speaker.img"
                                class="speaker-img"/>
                        </div>
                        <h2
                            class="user-name"
                        >
                            <a
                                v-if="speaker.linkedin"
                                :href="speaker.linkedin"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <font-awesome-icon
                                    icon="fa-brands fa-linkedin"
                                />
                            </a>
                            <a
                                :href="speaker.url"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {{ speaker.name }}
                            </a>
                        </h2>
                        <p
                            class="gradient strong"
                            style="text-align: center"
                        >
<!--                            {{ speaker.confirmed ? "" : "~ " }} -->{{ parseDate(speaker.date) }}
                        </p>
                        <p
                            class="about-user strong"
                        >
                            {{ speaker.title }}
                        </p>
                        <span
                            v-if="speaker.description"
                            class="expand-control"
                            @click="speaker.expand = !speaker.expand"
                        >
                            {{ speaker.expand ? "Hide" : "Show" }} details
                        </span>

                        <p
                            v-if="speaker.expand"
                            class="speaker-description"
                        >
                            {{ speaker.description }}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/css/main.scss";

.scroll-anchor {
    visibility: hidden;
    position: relative;
    top: -150px;
}

.gradient {
    background: $gradient;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.strong {
    font-weight: 600;
}

div.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1920px;
    margin: 0 auto;

    div.head {
        width: 100%;
        display: flex;
        height: calc(100vh - 10rem - 10rem);
        flex-direction: row;
        justify-content: space-evenly;
        margin: 1rem 3rem 9rem;
        color: $white;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            margin-top: 3rem;
        }

        .primary-text {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            flex-direction: row;
            gap: 1rem;
            align-self: center;
            max-width: 60rem;
            text-align: center;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 7.5rem;
            letter-spacing: .1rem;

            @media (max-width: 768px) {
                margin: 5rem 0;
                flex-direction: column;
                font-size: 5rem;
            }

            .left {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                font-size: inherit;

                @media (max-width: 768px) {
                    margin: 0;
                    align-items: flex-start;
                }
            }

            .right {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-start;
                font-size: inherit;

                @media (max-width: 768px) {
                    margin: 0;
                    align-items: flex-end;
                }
            }
        }

        .secondary-text {
            align-self: center;
            padding: 1rem;
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            color: #ffffffb3;
            width: max-content;

            .description {
                display: inline-block;
                font-size: 1.5rem;
                font-weight: 600;
                margin-bottom: 0;
                text-align: left;

                @media (max-width: 768px) {
                    font-size: 1rem;
                }
            }

            .date {
                display: inline-block;
                font-size: 2rem;
                font-weight: 600;
                margin-bottom: 1rem;
                text-align: right;

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                }
            }
        }

        p {
            width: 40%;
            font-size: 2.7rem;

            @media screen and (max-width: 768px) {
                width: 100%;
                font-size: 2rem;
            }


            span.blue {
                color: $blue;
            }

            span.red {
                color: $red;
            }

            small {
                font-size: 2.5rem;
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
        background-color: $black;
        text-align: center;
        line-height: 1.6rem;

        @media screen and (max-width: 768px) {
            padding: 1rem;
        }

        p.next {
            font-size: 1.5rem;
            font-family: "Inter", sans-serif;
            color: $white;

            @media (max-width: 768px) {
                padding: 0 2rem;

                span.gradient {
                    display: block;
                    margin: 1rem 0;
                }
            }
        }

        iframe {
            @media (max-width: 768px) {
                margin-top: 2rem;
                width: 100%;
                height: auto;
                aspect-ratio: 16/9;
            }
        }
    }

    div.intro {
        width: 100%;
        height: 70vh;
        margin-top: 8rem;
        padding: 1rem 9rem;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 2rem;
        background-color: $black;
        color: $white;

        @media screen and (max-width: 768px) {
            padding: 1rem 2rem;
            flex-direction: column;
            gap: 0;
            height: auto;
        }

        .about-title {
            display: block;
            font-size: 2.7rem;
            font-family: 'Inter', sans-serif;
            color: $white;
            width: 100%;

            @media (max-width: 768px) {
                font-size: 2.5rem;

                br {
                    display: none;
                }

                .gradient {
                    display: inline;
                }
            }
        }

        .about-content {
            display: flex;
            flex-direction: column;
            list-style: none;
            counter-reset: li;

            @media (max-width: 768px) {
                padding: .5rem;
            }

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                margin-top: 1rem;
                margin-bottom: 1rem;
                counter-increment: li;
                font-size: 1.3rem;

                @media (max-width: 768px) {
                    font-size: 1.1rem;
                }

                &::marker {
                    visibility: hidden;
                }

                &::before {
                    display: inline-block;
                    content: counter(li);
                    width: 2.5rem;
                    background: linear-gradient(
                            120deg,
                            rgba(253, 29, 29, 1) 0%,
                            rgb(69, 69, 252) 100%
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 4rem;
                    font-weight: 600;
                    margin-right: 1.5rem;
                }

                &:first-child::before {
                    margin-right: 0;

                    @media (max-width: 768px) {
                        margin-right: 2rem;
                    }
                }
            }

            .small {
                font-size: 1rem;
                color: #ffffffb3;
            }

            .separator-small {
                width: 100%;
                height: 1px;
                background-color: #ffffffb3;
            }


        }

        p {
            width: 100%;
            font-size: 1.4rem;
            text-align: justify;
        }
    }

    div.speakers {
        width: 85%;
        margin: 2rem 0 0;
        text-align: left;

        h2 {
            font-size: 3.5rem;
            font-family: "Inter", sans-serif;
            color: $white;
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
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 4rem;
            margin: 6rem 6rem 0;

            @media (max-width: 768px) {
                margin: 4rem 0 0;
                gap: 2rem;
            }

            .card-container {
                background-color: rgb(31, 31, 32);
                color: white;
                padding: 2rem;
                width: 25rem;
                height: 30rem;
                margin: 0.5rem;
                border-radius: 0.4rem;
                overflow: auto;

                @media (max-width: 768px) {
                    width: calc(100% - 1rem);
                }

                .user-image {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    margin: 0 auto;
                }

                .user-image img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .user-name,
                .about-user {
                    text-align: center;
                    margin-top: 1.5rem;
                }

                .user-name {
                    font-size: 1.4rem;

                    svg.fa-linkedin {
                        margin-right: .5rem;
                    }
                }

                span.expand-control {
                    display: block;
                    margin-top: 1rem;
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-decoration: underline;
                    text-align: center;
                    cursor: pointer;
                }

                .speaker-description {
                    text-align: justify;
                }
            }
        }
    }
}
</style>
