import React from 'react';
import './DevItem.css';
function DevItem({dev}) {
    const techs = dev.techs.join(', ');
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{techs}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a
                href={`https://github.com/${dev.github_username}`}
                target="_blank"
                rel="noopener noreferrer">
                Acessar perfil no Github
            </a>
        </li>
    );
}

export default DevItem;