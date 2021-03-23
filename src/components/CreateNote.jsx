import React, { Component } from 'react'
import { Button, Row, Col, FormControl } from 'react-bootstrap'
import { DateTime as DT } from 'luxon'


class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: "",
            category: "",
            hours: "",
            date: DT.now().toISODate()
        };
        this.onChangeProject = this.onChangeProject.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeHours = this.onChangeHours.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.project.length > 0 && this.state.category.length > 0 &&
            this.state.hours > 0;
    }

    onChangeProject(event) {
        console.log("Project selected!")
        this.setState({ project: event.target.value });
    }
    onChangeCategory(event) {
        console.log("Category selected!")
        this.setState({ category: event.target.value });
    }
    onChangeHours(event) {
        this.setState({ hours: event.target.value });
    }
    onChangeDate(event) {
        this.setState({ date: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log({
            project_id: this.state.project, category_id: this.state.category,
            hours: this.state.hours, date: this.state.date
        })
        this.props.handleSubmit({
            project_id: this.state.project, category_id: this.state.category,
            hours: this.state.hours, date: this.state.date
        })
    }

    render() {
        const projects = this.props.projects;
        const categories = this.props.categories;
        return (
            <form onSubmit={this.handleSubmit}>
                <Row>
                    <Col controlid="date" sm={2}>
                        <FormControl controlid="date" type="date" required
                            value={this.state.date} onChange={this.onChangeDate} />
                    </Col>
                    <Col controlid="project" sm={3}>
                        <FormControl value={this.state.project} as="select"
                            onChange={this.onChangeProject}>
                            <option value="">Project</option>
                            {projects.map((project) => <option key={project.id} value={project.id}>{project.project}</option>)}
                        </FormControl>
                    </Col>
                    <Col controlid="category" sm={3}>
                        <FormControl value={this.state.category} as="select"
                            onChange={this.onChangeCategory}>
                            <option value="">Category</option>
                            {categories.map((category) => (<option key={category.id} value={category.id}>{category.category}</option>))}
                        </FormControl>
                    </Col>
                    <Col controlid="hours" sm={2}>
                        <FormControl required placeholder="Hours"
                            value={this.state.hours}
                            onChange={this.onChangeHours} />
                    </Col>
                    <Col sm={2}>
                        <Button block disabled={!this.validateForm()} type="submit">
                            Save
                    </Button>
                    </Col>
                </Row>
            </form>
        );
    }
}

export default CreateNote