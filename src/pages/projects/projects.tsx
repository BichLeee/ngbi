import React from "react";

import jobstreet from "assets/images/jobstreet.jpeg";
import oakame from "assets/images/oakame.jpeg";

import oakame_1 from "assets/images/oakame/oakame-1.png";
import oakame_2 from "assets/images/oakame/oakame-2.png";
import oakame_3 from "assets/images/oakame/oakame-3.png";
import oakame_4 from "assets/images/oakame/oakame-4.png";
import { IconAdmin, IconEmployee, IconEmployer, IconHome } from "assets/svgs";

type SideItem = {
    icon: React.ReactNode;
    text: string;
};

export const PROJECTS = [
    {
        key: "oakame",
        image: oakame,
        title: "Oakame",
        category: "Furniture website",
        link: "https://oakame.vercel.app/",
        desc: (
            <>
                The website is a clone version of the original{" "}
                <a href="https://oakame.com/" target="_blank">
                    Oakame site
                </a>
                . Oakâme is a French furniture brand specializing in sustainable, handcrafted pieces made from reclaimed
                centuries-old oak. Blending timeless design with eco-responsible craftsmanship, each product tells a
                unique story through its material and origin.
                <br />
                <br />
                This project was built using Nextjs and Reactjs for the frontend without using any CSS frameworks, all
                the components and animations are made from scratch.
                <br />
                <br />
                <b>Tech stack</b>: Reactjs, Nextjs, Typescript, Module CSS
            </>
        ),
        images: [oakame_1, oakame_2, oakame_3, oakame_4],
        details: [
            ["Industry", "Furniture"],
            ["Created", "2025"],
            ["Pages", "1"],
        ],
        side_content: {
            title: "Pages",
            list: [{ icon: <IconHome />, text: "Home" }],
        },
    },
    {
        key: "jobstreet",
        image: jobstreet,
        title: "Jobstreet",
        category: "Job seeking website",
        desc: (
            <>
                JobStreet is an online job platform that connects job seekers with employers, allowing users to search
                and apply for jobs while helping companies post vacancies and find qualified talent.
                <br />
                <br />
                This project was built during the Software Engineering Course in HCMUS as a team of 10 members. The
                project has 3 repos represent for 3 roles employee, employer, and admin. My role is frontend developer,
                responsible for building the user interface and implementing designs for 2 sites which are employee and
                employer sites.
                <br />
                <br />
                <b>Tech stack</b>: Reactjs, Redux, Bootstrap, JavaScript, Node.js, Golang, Mongodb, Redis, Docker,...
            </>
        ),
        link: "https://github.com/SEC-Jobstreet",
        video: "https://www.youtube.com/watch?v=el4ZlCC7LnQ",
        details: [
            ["Industry", "Furniture"],
            ["Created", "2025"],
            ["Sites", "3"],
        ],
        side_content: {
            title: "Sites",
            list: [
                { icon: <IconEmployee width={20} height={20} />, text: "Employee" },
                { icon: <IconEmployer width={20} height={20} />, text: "Employer" },
                { icon: <IconAdmin width={20} height={20} />, text: "Admin" },
            ],
        },
    },
];
