import React from 'react';
import './DevItem.css';
function DevItem({dev}) {
    const {avatar_url, name, techs, bio, github_username} = dev;
    return (
        <li className="dev-item">
            <header>
                <img src={avatar_url} alt={name} />
                <div className="user-info">
                    <strong>{name}</strong>
                    <span>{techs.join(', ')}</span>
                </div>
            </header>
            <p>{bio}</p>
            <a
                href={`https://github.com/${github_username}`}
                target="_blank"
                rel="noopener noreferrer">
                Acessar perfil no Github
            </a>
        </li>
    );
}

export default DevItem;