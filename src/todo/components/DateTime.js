/* eslint-disable no-loop-func */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const DateTimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: fit-content;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
    flex: 1;
    width: 100%;
`;

const ActionButtonContainer = styled.div`
    flex: 0.1;
    border-radius: 50%;

    &:hover {
        background: lightgrey;
    }
`;

const SelectButtonContainer = styled.div`
    display: flex;
    flex: 0.8;
    justify-content: center;
    & select {
        width: 100px;
        height: 25px;
        margin: 5px;
    }
`;

const DaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    fex-wrap: wrap;
    align-items: strech;
    flex: 1;
    width: 100%;
    
    > button {
        cursor: initial;
        &:hover {
            filter: none;
        }
    }
`;

const DaysCell = styled.div`
    flex: 0.15;
`;

const DaysCellButton = styled(DaysCell)`
    &:hover {
        background: #0069D9;
        color: white;
    };
    button:hover {
        color: white;
    }
    button:focus {
        background: #0069D9;
        color: white;
        filter: none;
    }
`;

const displayDaysInMonth = (year, month, onSelect) => {
    let days_in_month   = 32 - new Date(year, month, 32).getDate();
    let first_day       = new Date(year, month, 1).getDay();
    let days_array      = [];
    let remaining_days  = days_in_month - (7 - first_day);
    let current_day     = 7 - first_day;

    days_array.push(
        <DaysContainer key={"row"}>
            {(() => {
                let first_week = [];
                for (let i = 0; i < first_day; i++)
                    first_week.push(<DaysCell key={i + "blank"}></DaysCell>)

                for (let i = 1; i <= 7 - first_day; i++)
                    first_week.push(
                        <DaysCellButton key={i + "day"}>
                            <Button
                                key={i}
                                bg="transparent"
                                color="#4c4949"
                                width="100%"
                                align="center"
                                onClick={() => onSelect(new Date(year, month, i))}
                            >{i}</Button>
                        </DaysCellButton>
                    );

                return first_week;
            })()}
        </DaysContainer>
    );

    for (let row = 0; row < 5; row++) {
        if (remaining_days <= 0) break;
        days_array.push(<DaysContainer key={"row" + row}>
            {(() => {
                let row_data = [];
                for (let i = 1; i <= 7; i++) {
                    current_day = current_day + 1;
                    let present_day = current_day;
                    if (remaining_days <= 0) {
                        row_data.push(<DaysCell key={current_day}></DaysCell>);
                    } else {
                        row_data.push(
                            <DaysCellButton key={current_day + "day"}>
                                <Button
                                    key={current_day}
                                    bg="transparent"
                                    color="#4c4949"
                                    width="100%"
                                    align="center"
                                    onClick={() => onSelect(new Date(year, month, present_day))}
                                >{current_day}</Button>
                            </DaysCellButton>);
                    }
                    remaining_days = remaining_days - 1;
                }
                return row_data;
            })()}
        </DaysContainer>);
    }
    return days_array;
}

const DateTime = ({ onSelect }) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const days   = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    
    const [selectedYear, setSelectedYear]   = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

    const handleNext = () => {
        if (selectedMonth === 11) {
            setSelectedMonth(0);
            setSelectedYear(Number(selectedYear) + 1);
        } else {
            setSelectedMonth(Number(selectedMonth) + 1);
        }
        console.log(selectedYear, selectedMonth);
    }

    const handlePrev = () => {
        if (selectedMonth === 0) {
            setSelectedMonth(11);
            setSelectedYear(Number(selectedYear) - 1);
        } else {
            setSelectedMonth(Number(selectedMonth) - 1);
        }
        console.log(selectedYear, selectedMonth);
    }

    return (
        <DateTimeContainer>
            <ActionsContainer>
                <ActionButtonContainer>
                    <Button
                        bg="transparent"
                        color="#4c4949"
                        outline="thin solid transparent"
                        onClick={handlePrev}
                        padding="0.5em 1em"
                    >&#8249;</Button>
                </ActionButtonContainer>
                <SelectButtonContainer>
                    <select onChange={(event) => setSelectedYear(Number(event.target.value))} value={selectedYear}>
                        {(() => {
                            let years = [];
                            let currentYear = new Date().getFullYear();
                            for (let year = currentYear - 100; year <= currentYear + 100; year++)
                                years.push(<option key={year} value={year}>{year}</option>)
                            return years;
                        })()}
                    </select>
                    <select onChange={(event) => setSelectedMonth(Number(event.target.value))} value={selectedMonth}>
                        {months.map((month, index) => <option key={month} value={index}>{month}</option>)}
                    </select>
                </SelectButtonContainer>
                <ActionButtonContainer>
                    <Button
                        bg="transparent"
                        color="#4c4949"
                        outline="thin solid transparent"
                        onClick={handleNext}
                        padding="0.5em 1em"
                    >&#8250;</Button>
                </ActionButtonContainer>
            </ActionsContainer>
            <DaysContainer>
                {days.map((day) => <Button borderRadius="0" key={day} align="center">{day}</Button>)}
            </DaysContainer>
            {displayDaysInMonth(selectedYear, selectedMonth, onSelect)}
        </DateTimeContainer>
    );

}

export default DateTime;