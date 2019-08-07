import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import './UserCard.css';

export default function UserCard(props) {
    return (
        <div className="user-card">
            <Card>
                <Image src="https://avatars1.githubusercontent.com/u/16984085?v=4" alt="" />
                <Card.Content>
                    <Card.Header>{props.user.login}</Card.Header>
                    <Card.Description>
                        <Card.Header>Followers:</Card.Header>
                        {props.followers.map(follower => {
                            return <div key={follower.id}>{follower.login}</div>
                        })}
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}