import React, {PropTypes, Component} from 'react';
import Resume from '../../components/resume/resumeMain';

class ResumePage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            'category': [
                {
                    'id': 1,
                    'title': 'Work Experience',
                    'section': [
                        {
                            'id': 4,
                            'title': 'Freelance Web Designer2009-2010',
                            'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante.',
                            'date': '2009-2010',
                            'dateClass': 'label-info'
                        },
                        {
                            'id': 5,
                            'title': 'Python Programmer',
                            'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante.',
                            'date': '2010-2011',
                            'dateClass': 'label-info'
                        },
                        {
                            'id': 6,
                            'title': 'Social Media Lunatic',
                            'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante.',
                            'date': '2011-2012',
                            'dateClass': 'label-info'
                        },
                        {
                            'id': 7,
                            'title': 'Being Awesome',
                            'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante.',
                            'date': '2012 - Till death',
                            'dateClass': 'label-danger'
                        },

                    ],
                    'formVisibility': false
                },
                {
                    'id': 2,
                    'title': 'Education',
                    'section': [
                        {
                            'id': 8,
                            'title': 'NoUse School',
                            'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante.',
                            'date': '2001-2002',
                            'dateClass': 'label-success'
                        },
                        {
                            'id': 9,
                            'title': 'Super Useless College',
                            'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante.',
                            'date': '2002-2008',
                            'dateClass': 'label-warning'
                        }

                    ],
                    'formVisibility': false
                },
            ],
            'sidebar': [
                {
                    'id': 1,
                    'title': 'Software',
                    'section': [
                        {
                            'id': 10,
                            'title': 'Photoshop',
                            'width': 33,
                            'color': 'emerald'
                        },
                        {
                            'id': 11,
                            'title': 'Illustrator',
                            'width': 90,
                            'color': 'carrot'
                        },
                        {
                            'id': 12,
                            'title': 'InDesign',
                            'width': 60,
                            'color': 'wisteria'
                        },
                        {
                            'id': 13,
                            'title': 'Firework',
                            'width': 40,
                            'color': 'sunflower'
                        },
                        {
                            'id': 14,
                            'title': 'Dreamweaver',
                            'width': 70,
                            'color': 'midnight'
                        }
                    ]
                },
                {
                    'id': 2,
                    'title': 'Design',
                    'section': [
                        {
                            'id': 15,
                            'title': 'User Interface',
                            'width': 60,
                            'color': 'emerald'
                        },
                        {
                            'id': 16,
                            'title': 'Typography',
                            'width': 90,
                            'color': 'carrot'
                        },
                        {
                            'id': 17,
                            'title': 'Web Applications',
                            'width': 60,
                            'color': 'wisteria'
                        }
                    ]
                },
                {
                    'id': 3,
                    'title': 'Programming Language',
                    'section': [
                        {
                            'id': 16,
                            'title': 'HTML/CSS',
                            'width': 60,
                            'color': 'emerald'
                        },
                        {
                            'id': 17,
                            'title': 'PHP/MySql',
                            'width': 90,
                            'color': 'carrot'
                        },
                        {
                            'id': 18,
                            'title': 'jQuery/JavaScript',
                            'width': 60,
                            'color': 'wisteria'
                        },
                        {
                            'id': 19,
                            'title': 'Ruby',
                            'width': 90,
                            'color': 'midnight'
                        },
                        {
                            'id': 20,
                            'title': 'Python',
                            'width': 60,
                            'color': 'sunflower'
                        }
                    ]
                },
            ],
            'categoryTitle': '',
            'categoryBody': '',
            'categoryDate': ''
        }
    }

    showCategoryForm = (i) => {
    }

    sendCategoryForm = (i, event) => {
        event.preventDefault();
        const newTitle = this.state.categoryTitle;
        const newBody = this.state.categoryBody;
        const newDate = this.state.categoryDate;
        let randNumber = Math.random();
        let section = this.state.category[i].section;

        section.push({
            'id': randNumber,
            'title': newTitle,
            'body': newBody,
            'date': newDate
        })

        const category = this.state.category;
        category[i].section = section;

        this.setState({
            'category': category,
            'categoryTitle': '',
            'categoryBody': '',
            'categoryDate': ''
        })
    }

    onChangeCategoryTitle = (e) => {
        this.setState({
            categoryTitle: e.target.value
        });
    }

    onChangeCategoryBody = (e) => {
        this.setState({
            categoryBody: e.target.value
        });
    }

    onChangeCategoryDate = (e) => {
        this.setState({
            categoryDate: e.target.value
        });
    }

    render() {
        return (
            <Resume {...this.state} showCategoryForm={this.showCategoryForm}
                    sendCategoryForm={this.sendCategoryForm}
                    onChangeCategoryTitle={this.onChangeCategoryTitle}
                    onChangeCategoryBody={this.onChangeCategoryBody}
                    onChangeCategoryDate={this.onChangeCategoryDate}
            />
        );
    }
}

ResumePage.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default ResumePage;