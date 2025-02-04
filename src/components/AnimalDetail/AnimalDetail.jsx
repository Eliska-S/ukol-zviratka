import React from 'react';

// styles 
import './AnimalDetail.css'

const AnimalDetail = ({ image, name, latin, decsription, home, biotop, food, size, zoos, listOfZoos }) => {

    return (
        <>
            {listOfZoos && (
                <div className="detail">
                    <div className="detail__content">
                        <div className="detail__header">
                            <img className="detail__image" src={image} alt={name} />
                            <div className="detail__title">
                                <h2 className="detail__name"><span>{name}</span></h2>
                                <div className="detail__latin"><span>{latin}</span></div>
                            </div>
                        </div>
                        <div className="detail__info">
                            <p className="detail__desc">{decsription}</p>
                            <div className="detail__items">
                                <div className="detail__item">
                                    <h3>Domovina</h3>
                                    <p>{home}</p>
                                </div>
                                <div className="detail__item">
                                    <h3>Biotop</h3>
                                    <p>{biotop}</p>
                                </div>
                                <div className="detail__item">
                                    <h3>Potrava</h3>
                                    <p>{food}</p>
                                </div>
                                <div className="detail__item">
                                    <h3>Velikost</h3>
                                    <p>{size}</p>
                                </div>
                                <div className="detail__zoo">
                                    <h3>Najdete v těchto zoo</h3>
                                    <p>{zoos.map(
                                        (zoo) => {
                                            const zooName = listOfZoos.find(el => el.id === zoo)
                                            return (
                                                zoo === 7 ?
                                                <span key={zoo}>{zooName.jmeno.substring(4)}</span>
                                                :
                                                <span key={zoo}>{zooName.jmeno.substring(4)}, </span>
                                            )
                                        })
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnimalDetail