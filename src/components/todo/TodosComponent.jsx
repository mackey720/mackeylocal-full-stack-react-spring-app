import { Field, Form, Formik } from 'formik'
import moment from 'moment'
import React, {Component} from 'react'

class TodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : 1,
            description : 'Learn Forms Now',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
    }

    render() {
        let description = this.state.description
        let targetDate = this.state.targetDate
        return <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik initialValues={{
                    description: description,
                    targetDate: targetDate
                }}>
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group"> 
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group"> 
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <button className="btn btn.success" type="submit">Save</button>
                            </Form>
                        )
                    }

                </Formik>
            </div>
            Todo Component for id - {this.props.match.params.name}
        </div>
    }

    
}

export default TodosComponent