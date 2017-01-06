import React, {PropTypes} from 'react';

const CategorySectionForm = (props) => {
    return (
        <div className="padding-top-bottom">
            <h6 className="center">Add new section</h6>
            <form onSubmit={props.sendCategoryForm.bind(null, props.i)}>
                <input className="form-area" type="text" name="title" placeholder="title" value={props.categoryTitle}
                       onChange={props.onChangeCategoryTitle}/>
                <textarea className="form-area" type="text" name="body" placeholder="body" value={props.categoryBody}
                          onChange={props.onChangeCategoryBody}/>
                <input className="form-area" type="text" name="date" placeholder="date" value={props.categoryDate}
                       onChange={props.onChangeCategoryDate}/>
                <button className="form-area" type="submit">Save</button>
            </form>
        </div>
    );
};

CategorySectionForm.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryBody: PropTypes.string.isRequired,
    categoryDate: PropTypes.string.isRequired,
    onChangeCategoryDate: PropTypes.func.isRequired,
    onChangeCategoryBody: PropTypes.func.isRequired,
    onChangeCategoryTitle: PropTypes.func.isRequired,
    sendCategoryForm: PropTypes.func.isRequired
};

export default CategorySectionForm;