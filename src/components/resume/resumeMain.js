import React, {PropTypes} from 'react';
import CategorySectionForm from './CategorySectionForm';
import '../../assets/css/resumeCustom.css';

const resumeMain = (props) => {
    let defaultClass = "label ";
    let defaultColor = 'meter ';

    return (
        <section className="clearfix">
            <div className="g2">
                {props.category.map((category, i)=>
                    <div key={category.id}>
                        <h3>
                            {category.title}
                            <button className="butttonAdd" onClick={props.showCategoryForm.bind(null,i)}>+</button>
                        </h3>
                        <CategorySectionForm {...props} i={i}/>
                        <ul className="no-list work">
                            {category.section.map((section)=>
                                <li key={section.id}>
                                    <h5>{section.title}</h5>
                                    <span
                                        className={section.dateClass ? defaultClass + section.dateClass : defaultClass + 'label-info'}>
                                        {section.date}
                                    </span>
                                    <p>{section.body}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            <div className="g1">
                <div className="sidebar">
                    <h3>
                        Skills
                    </h3>

                    {props.sidebar.map((category)=>
                        <div key={category.id}>
                            <h5>{category.title}</h5>
                            {category.section.map((section)=>
                                <div key={section.id} className={section.color ? defaultColor + section.color : defaultColor + 'emerald'}>
                                    <span>{section.title}</span>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

resumeMain.propTypes = {
    category: PropTypes.array.isRequired
};

export default resumeMain;