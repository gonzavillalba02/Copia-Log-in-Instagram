import React from "react";
import Link from "./Link";
import "./Footer.css"

const Footer = () => {

    const links = [
        {
            link: "https://about.meta.com/",
            texto: "Meta"
        },
        {
            link: "https://about.instagram.com/",
            texto: "Información"
        },
        {
            link: "https://about.instagram.com/blog/",
            texto: "Blog"
        },
        {
            link: "https://www.instagram.com/about/jobs/",
            texto: "Empleo"
        },
        {
            link: "https://help.instagram.com/",
            texto: "Ayuda"
        },
        {
            link: "https://developers.facebook.com/docs/instagram",
            texto: "API"
        },
        {
            link: "https://www.instagram.com/legal/privacy/",
            texto: "Privacidad"
        },
        {
            link: "https://www.instagram.com/legal/terms/",
            texto: "Condiciones"
        },
        {
            link: "https://www.instagram.com/explore/locations/",
            texto: "Ubicaciones"
        },
        {
            link: "https://www.instagram.com/web/lite/",
            texto: "Instagram Lite"
        },
        {
            link: "https://www.threads.net/",
            texto: "Threads"
        },
        {
            link: "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT04XMZAIJtTCJlEAqcJvjUUlC-hpmZA2UPjmHRrGRouq2Y5YmOJSrF52NsWEAZJjzHCeIjpWY50B_r_ec_SA2aSWgRWZK5d6WcMUgBKVJlXiQ74DdLo-5LKHRVbG9h33n-ZJ4PxIvp8rx3Kg6UdMA",
            texto: "Subir contactos y personas no usuarias"
        },
        {
            link: "https://about.meta.com/technologies/meta-verified/",
            texto: "Meta Verified"
        },
    ]


    return(
    <div className="container-footer">
        <div className="footer-links">
        {links.map((links) => {
            return <Link link={links.link} texto={links.texto}/>
        })}
        </div>
        <p className="insta-meta" >© Desarrollado por Gonzalo Emiliano Villalba</p>
    </div>
    )
}

export default Footer;