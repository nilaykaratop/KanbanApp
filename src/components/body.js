import React from 'react';
import Column from './column';

export function Body(props) {
    console.log(props);
        const {
            columns,
            ifClickCard,
            ifClickColumn,
            cardTitle,
            eventGroup,
            cardDescription,
            handleChange,
            handleSubmit,
            columnNameInput,
            addColumn,
        } = props;
        return (
            <div className="body">
                <Column
                    columns={columns}
                />
                <div>
                    <form className={'body-form' + (ifClickColumn ? '-show' : ' ')}>
                        <label htmlFor="ColumnName" className="body-form-show-label">
                            Column Name
                     <input name="columnNameInput"
                                value={columnNameInput}
                                type="text"
                                onChange={handleChange}
                                className="body-form-show-input"
                            />
                        </label>
                        <input
                             onClick={addColumn}
                            type="Submit"
                            value={"Ekle"}
                            className="body-form-show-submit"
                        />
                    </form>
                    <form className={'body-form' + (ifClickCard ? '-show' : ' ')}>
                        <label htmlFor="topic" className="body-form-show-label">
                            Card Title
                            <input
                                name="cardTitle"
                                onChange={handleChange}
                                type="text"
                                className="main-form-show-input"
                                value={cardTitle}
                            />
                        </label>
                        <label htmlFor="description" className="body-form-show-label">
                            Card Description
                           <input
                                name="cardDescription"
                                onChange={handleChange}
                                type="text"
                                className="body-form-show-input"
                                value={cardDescription}
                            />
                        </label>

                        <label htmlFor="column" className="body-form-show-label">
                            Column
                             <select
                                onChange={handleChange}
                                name="cardColumnName"
                                className="body-form-show-select"
                            >
                                {columns.map((column) => {
                                    return <option key={column.columnId} value={column.title}>{column.title}</option>;
                                })}
                            </select>
                        </label>
                        <input onClick={handleSubmit} className="body-form-show-submit" type="submit" value="Ekle" />
                    </form>
                </div>
            </div>
        );
    }