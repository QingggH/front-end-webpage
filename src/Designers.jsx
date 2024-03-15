import React from 'react';
import './Designers.css';
function Designers() {
    return (
        <div className="panel-container">
            <div className="panel">
                <img src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D" alt="Jane Smith" />
                <p>
                    Jane Smith is an accomplished interior designer with a keen eye for detail and a passion for creating spaces that seamlessly blend functionality with aesthetics. With a decade of experience in the industry, Jane has earned a reputation for her innovative approach to design, transforming ordinary spaces into extraordinary environments. Her design philosophy revolves around the idea that each space should tell a unique story, reflecting the personality and preferences of its inhabitants. Jane's portfolio showcases a diverse range of projects, from modern urban apartments to cozy suburban homes, demonstrating her versatility and ability to tailor her designs to meet the specific needs of her clients.
                </p>
            </div>
            <div className="panel">
                <img src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1hbiUyMGRlc2lnbmVyfGVufDB8fDB8fHww" alt="Michael Johnson" />
                <p>
                    Meet Michael Johnson, a rising star in the world of interior design known for his bold and contemporary style. With a background in architecture and a flair for integrating cutting-edge technology into his designs, Michael brings a fresh and modern perspective to every project. His designs often feature clean lines, innovative use of materials, and a focus on sustainable practices. Michael's work has been featured in several design publications, earning him recognition for his forward-thinking approach. Beyond his design skills, Michael is also known for his collaborative and client-centered approach, ensuring that each project is a true reflection of the client's vision while pushing the boundaries of conventional design.
                </p>
            </div>
        </div>
    );
}
export default Designers;