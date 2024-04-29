'use client'
import React from "react";
import ABLink from "./ABLink"; // Assuming ABLink is in a separate file

const topics = [
    { 
        text: "Amazon Rainforest", 
        href1: "/wiki/amazon/", 
        href2: "/enhanced-wiki/amazon/",
        description: "The Amazon Rainforest, the world's largest tropical rainforest, is rich in unique flora and fauna." 
    },
    { 
        text: "Marie Curie", 
        href1: "/wiki/curie/", 
        href2: "/enhanced-wiki/curie/",
        description: "Marie Curie, a pioneering physicist and chemist, won Nobel Prizes in two scientific fields." 
    },
    { 
        text: "Ancient Egypt", 
        href1: "/wiki/egypt/", 
        href2: "/enhanced-wiki/egypt/",
        description: "Ancient Egypt, known for monumental architecture like pyramids and the Sphinx, thrived along the Nile." 
    },
    { 
        text: "The Internet", 
        href1: "/wiki/internet/", 
        href2: "/enhanced-wiki/internet",
        description: "The Internet connects global networks, revolutionizing communication, work, and access to information." 
    },
    { 
        text: "Michael Jordan", 
        href1: "/wiki/jordan/", 
        href2: "/enhanced-wiki/jordan/",
        description: "Michael Jordan, celebrated for his prowess in basketball, led the Chicago Bulls to six NBA championships." 
    },
    { 
        text: "William Shakespeare", 
        href1: "/wiki/shakespeare/", 
        href2: "/enhanced-wiki/shakespeare/",
        description: "William Shakespeare, an English playwright and poet, is considered the greatest dramatist in English literature." 
    },
    { 
        text: "Socrates", 
        href1: "/wiki/socrates/", 
        href2: "/enhanced-wiki/socrates/",
        description: "Socrates, a foundational figure in Western philosophy, is renowned for his Socratic method of critical questioning." 
    },
    { 
        text: "Taylor Swift", 
        href1: "/wiki/swift/", 
        href2: "/enhanced-wiki/swift/",
        description: "Taylor Swift, an American singer-songwriter, is known for her narrative songwriting and successful genre transitions." 
    },
    { 
        text: "Harriet Tubman", 
        href1: "/wiki/tubman/", 
        href2: "/enhanced-wiki/tubman/",
        description: "Harriet Tubman was a key figure in the Underground Railroad, aiding the escape of enslaved people to freedom." 
    },
    { 
        text: "Tu Youyou", 
        href1: "/wiki/youyou/", 
        href2: "/enhanced-wiki/youyou/",
        description: "Tu Youyou, a Chinese chemist, won the Nobel Prize for discovering artemisinin, a drug combating malaria." 
    }
];


const TopicSelect = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {topics.map((topic, index) => (
                <div key={index} className="m-4 p-4 w-64">
                    <ABLink 
                        text={topic.text} 
                        href1={topic.href1} 
                        href2={topic.href2} 
                        className="topic-link text-xl topic-border p-1 rounded-xl"
                    />
                    <p className="text-sm p-1 m-1">{topic.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TopicSelect;

