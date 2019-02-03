import React, { Component } from 'react'

// Functional components
export  function SeasonOption() {return (<option value={props.season}>{props.label}</option>)}
export  function MonthOption() {return (<option value={props.season}>{props.label}</option>)}
export  function DayOption() {return (<option value={props.season}>{props.label}</option>)}
    
export default class PubDate extends Component {
    
    state = {
        seasonList: ["Season", "Spring", "Fall", "Winter", "Summer"],
        monthList: ["Month", "January", "February", "March", "April", "May",
            "June", "July", "August", "September", "October", "November",
            "December"],
        dayList: ["Day", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30, 31],
        isYearValid: true,
        year: '',
        formErrors: { 'year': '' },
        formValid: true
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let isYearValid = this.state.isYearValid;
        let year = parseInt(value);

        switch (fieldName) {
            case 'year':
                if (value.length === 4) {
                    isYearValid = year >= 1900 && year < 3000;
                    fieldValidationErrors.year = isYearValid ? '' : 'Year must be between 1900 and 2999.';
                    break;
                }
                else if (value.length > 4) {
                    isYearValid = false;
                    fieldValidationErrors.year = isYearValid ? '' : 'Year cannot be more than 4 digits.';
                    break;
                }
            default:
                break;
        }

        this.setState({ formErrors: fieldValidationErrors, isYearValid: isYearValid });
    }


    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                season: event.target.season,
                month: event.target.month,
                day: event.target.day,
                year: event.target.year
            },
            () => { this.validateField(name, value) }
        );
    }

    handleSubmit(event) {
        alert('Season: ' + this.state.season);
        alert('Month: ' + this.state.month);
        alert('Day: ' + this.state.day);
        alert('Year: ' + this.state.year);
        event.preventDefault();
    }

    render() {
        var seasons_dropdown = this.state.seasonList.map(function (season, index) {
            return <SeasonOption key={index} value={season} label={season} />
        });

        var months_dropdown = this.state.monthList.map(function (month, index) {
            return <MonthOption key={index} value={month} label={month} />
        });

        var days_dropdown = this.state.dayList.map(function (day, index) {
            return <DayOption key={index} value={day} label={day} />
        });
        render() {


            return (
                <div className='form-group'>
                    <label className='col-sm-2 control-label'>Publication Date <span className='required'>*</span></label>
                    <div className='col-sm-10'>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <select className='form-control' name='season'
                                    value={this.state.season} onChange={this.handleChange}>
                                    {seasons_dropdown}
                                </select>
                            </div>
                            <div className='col-sm-3'>
                                <select className='form-control' name='month'
                                    value={this.state.month} onChange={this.handleChange}>
                                    {months_dropdown}
                                </select>
                            </div>
                            <div className='col-sm-3'>
                                <select className='form-control' name='day'
                                    value={this.state.day} onChange={this.handleChange}>
                                    {days_dropdown}
                                </select>
                            </div>
                            <div className={this.state.isYearValid ? 'col-sm-3' : 'col-sm-3 has-error'}>
                                <input name="year"
                                    type="text"
                                    placeholder='Year'
                                    required
                                    pattern="/^(?:19\d{2}|2\d{3})$/"
                                    className="form-control"
                                    value={this.state.year}
                                    onChange={this.handleChange} />
                                <div className={this.state.isYearValid ? 'hide' : 'show'}>{this.state.formErrors.year}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

