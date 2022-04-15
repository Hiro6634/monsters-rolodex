import React from 'react';

class CardList extends React.Component{
    render(){
        const {monsters} = this.props;
        return(
            <div>
                {monsters.map(monster=>(
                    <h1 key={monster.id}>{monster.name}</h1>
                    )
                )}
            </div>
        )
    }
};

export default CardList;