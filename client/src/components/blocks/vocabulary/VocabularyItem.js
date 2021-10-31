import React from 'react';
import Card from '../../elements/Card';
import { Link } from 'react-router-dom';

/* Props 
=================================================== */
// title: String
// slug: String


function VocabularyItem({ title, slug }) {

    return (
        <Link to={`/vocabulary/${slug}`} >
            <Card type="vocabulary">
                {/* <img className="vocabulary-list_item--art hide-mobile" src={chapterArt01} alt="" /> */}

                <div className="vocabulary-card--text">
                    <h3>{title}</h3>
                    <p>70 Words</p>
                </div>


                <div className="vocabulary-card--chevron">
                    <i className="fas fa-chevron-right"></i>
                </div>

            </Card>
        </Link>
    )
}

export default VocabularyItem;
