import { RiLinkedinLine, RiFacebookLine } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#portfolio', title: 'Portfolio'},
    {id: 3, link: '#skills', title: 'Skills'},
    {id: 4, link: '#about', title: 'About'}, 
    {id: 5, link: '#contact', title: 'Contact'}
]


export const socials = [
    {id: 0, link: 'https://www.linkedin.com/in/mariaclima/', icon: <RiLinkedinLine />},
    {id: 1, link: 'https://www.facebook.com/maria.lima.mcl', icon: <RiFacebookLine/>},
    {id: 2, link: 'https://github.com/mclima', icon: <LuGithub/>}
]